---
title: CAP theorem
---

## CAP theorem

---

### Why distribute?

- Scale storage / performance → Sharding
- Node / Network failure / Fault → Tolerance / Availability
- Tolerance → Replication (Storage)
- Replication → Inconsistency
- Consistency → Low performance

---

- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->

---

```html
<div class="anything">
  <!-- { "initialize": "function(container,options) {globe(container);}" } -->
</div>
```

```python [1|3-6]
n = 0
while n < 10:
  if n % 2 == 0:
    print(f"{n} is even")
  else:
    print(f"{n} is odd")
  n += 1
```

---

### Example: Flip of a coin

The following configuration

```js
Reveal.initialize({
  // ...
  anything: [
    {
      className: "flipofacoin",
      initialize: function (container, options) {
        container.innerHTML = Math.random() < 0.5 ? "heads" : "tails";
      },
    },
    // ...
  ],
  plugins: [
    RevealAnything,
    // ...
  ],
});
```

---

```html
Today's flip of a coin is: <span class="flipofacoin"></span>.
```

producing this output:

> Today's flip of a coin is: <span class="flipofacoin"></span>.

---

### Example: Roll of a die

Assuming `rollofadie` is an appropriate function, the following configuration

```js
Reveal.initialize({
  // ...
  anything: [
    { className: "rollofadie", initialize: rollofadie },
    // ...
  ],
  plugins: [
    RevealAnything,
    // ...
  ],
});
```

can be used to insert a random result into

```html
Today's roll of a die is: <span class="rollofadie"></span>.
```

producing this output:

> Today's roll of a die is: <span class="rollofadie"></span>.

---

### Options and defaults

Options can be provided as a JSON string within a comment inside the HTML object.

The following configuration

```js
Reveal.initialize({
  // ...
  anything: [
    {
      className: "randomnumber",
      defaults: { min: 0, max: 9 },
      initialize: function (container, options) {
        container.innerHTML = Math.trunc(
          options.min + Math.random() * (options.max - options.min + 1)
        );
      },
    },
  ],
  plugins: [
    RevealAnything,
    // ...
  ],
});
```

defines default values to be used in the function.

---

If optional values are provided, e.g., by

```html
Today's roll of a icosahedron is:
<span class="randomnumber"> <!-- { "min": 1, "max": 20 } --> </span>.
```

these values will be used when creating the output:

> Today's roll of a icosahedron is:
> <span class="randomnumber">
>
> <!-- { "min": 1, "max": 20 } -->
>
> </span>.

---

If no options are given, e.g.,

```html
Today's random digit is: <span class="randomnumber"></span>.
```

default values will be used by the function, producing this output:

> Today's random digit is: <span class="randomnumber"></span>.

---

### Generic configuration

The following configuration

```js
Reveal.initialize({
  // ...
  anything: [
    {
      className: "anything",
      initialize: function (container, options) {
        if (options && typeof options.initialize === "function") {
          options.initialize(container);
        }
      },
    },
    // ...
  ],
  plugins: [
    RevealAnything,
    // ...
  ],
});
```

provides a generic class that can be used be providing an arbitrary initialization function.
