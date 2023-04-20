---
title: Ruby DSL 101
pubDate: 2017-03-31
tags: ["Ruby", "DSL"]
description:
  Ruby DSL let's you write clean code in a declarative approach
---

One of the most powerful concept of Ruby is metaprogramming. This make the language uniq, powerful and expressive allowing you to create DSL which is tailored to your need. I would try to guide you guys to create a basic DSL using ruby metaprogramming.

## Step 1: Ruby blocks
Ruby are simple. You can write a method that can `yield`. Something like,

```ruby
def report
  puts "Header"
  yield
  puts "Footer"
end

report do
  puts "From block"
end
```

#### Output
```bash
Header
From block
Footer
```


## Step 2: Ruby blocks sending object
We can send objects from block method back to block caller.

```ruby
def report
  puts "Header"
  yield 'From block'
  puts "Footer"
end

report do |var_from_block|
  puts var_from_block
end
```

Here is what is happening, 
* When report block is called from line #7, the flow control goes to line #2
* In line #3 the control yields back to line #8
* After the yield block is over, the control goes back to line #4, and continues execution

#### Output
```bash
Header
From block
Footer
```

## Step 3: instance_eval
```ruby
class Report
  def initialize(&block)
    puts "Header"
    instance_eval &block if block_given?
    puts "Footer"
  end
end

Report.new do
  puts "From block"
end
```

Here the `puts` in line #10 is run on the context of report object. The following example will make things clearer.
```ruby
class Report
  def initialize(&block)
    puts "Header"
    instance_eval &block if block_given?
    puts "Footer"
  end

  def my_print(str)
    puts str
  end
end

Report.new do
  my_print "From block"
end
```

Here you see there is no `my_print` method defined globally but at line #14 the block has access to `my_print` method. It is because the block is evaluated with the context of a report object.

## Step 4: First draft of DSL 
```ruby
class Report
  def initialize(data, &block)
    @data = data
    @columns = []
    instance_eval &block if block_given?
  end

  def column(column_name)
    @columns << column_name
  end

  def print
    @data.each do |row|
      @columns.each do |column|
        puts row[column]
      end
    end
  end
end

data = [
  {name: 'Jitu', status: 'Married'},
  {name: 'Razeen', status: 'Single'}
]
```

```ruby
report = Report.new(data) do
  column :name
end

report.print()
```
#### Output
```bash
Jitu
Razeen
```

## Step 5: Second draft of DSL 
Lets add some more features to make more out of the DSL.

```ruby
class Column
  attr_accessor :key, :title, :footer
  def initialize(key, options={})
    @key = key
    @title = options[:title] || key.capitalize
    @footer = options[:footer]
  end
end

class Report
  def initialize(data, &block)
    @data = data
    @columns = []
    instance_eval &block if block_given?
  end

  def column(key, options={})
    @columns << Column.new(key, options)
  end

  def print
    puts @columns.map { |column| column.title }.join(', ')
    puts '=' * 10
    @data.each do |row|
      puts @columns.map { |column| row[column.key] }.join(', ')
    end
    print_footer
  end

  def print_footer
    if @columns.any? { |column| column.footer }
      puts '=' * 10
      footers = @columns.map do |column|
        if column.footer
          values = @data.map do |row|
            row[column.key]
          end
          values.inject{ |sum, el| sum + el }.to_f / values.size
        else
          ' ' * 5
        end
      end
      puts footers.join(' ')
    end
  end
end
```

```ruby
data = [
  {name: 'Jitu', status: 'Married', age: 33},
  {name: 'Razeen', status: 'Single', age: 2}
]
report = Report.new(data) do
  column :name, title: 'Nick name'
  column :age, footer: :avg
end

report.print()
```

#### Output
```bash
Nick name, Age
==============
Jitu,   33
Razeen,  2
==============
      17.5
```

Now you can go ahead and implement new features on this abstraction. For the source code used here you can have look [here](https://github.com/ashrafuzzaman/ruby-dsl).
I once build a gem using the same concept [query_report](https://github.com/ashrafuzzaman/query_report). Here is a [demo](http://query-report-demo.herokuapp.com).
