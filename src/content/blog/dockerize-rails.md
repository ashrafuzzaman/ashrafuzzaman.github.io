---
title: Dockerize rails
pubDate: 2017-03-31
tags: ["Docker", "Rails"]
description:
  Dockerize rails app
---

It is simple to dockerize your rails app. Rails maintain an official release of [rails base image](https://hub.docker.com/r/library/rails/), where you have all your basic prerequisites installed.

So you can create your docker file.

```docker
FROM rails:5
ENV WORKDIR /code
WORKDIR ${WORKDIR}

ADD Gemfile ${WORKDIR}
ADD Gemfile.lock ${WORKDIR}

RUN bundle install

ADD . ${WORKDIR}
```

And the docker-compose.yml,

```docker
version: '2'
services:
  web:
    build: .
    command: bin/rails server -p 3000 -b '0.0.0.0'
    ports:
    - 3000:3000
    volumes:
    - .:/code
    links:
    - mysql
  mysql:
    image: mysql:5.6
```

You would have to whitelist `0.0.0.0` for rails to log web console. In your `config\environment\development.rb` add,

```ruby
  config.web_console.whitelisted_ips = '0.0.0.0'
```

Here is a [sample project](https://github.com/ashrafuzzaman/resumebuilder) you can play with.

Go on and enjoy, `docker-compose up web`.