---
title: "Thinking in design principle"
pubDate: 2023-07-25
featured: true
tags: ["encapsulation", "design principle", "design pattern"]
description: The process of thinking in design pattern and principles
ogImage: /assets/blog/design-patterns/afterburner.gif
---

When I first learned about design patterns, I was looking to forcefully implement patterns everywhere rather than the patterns to naturally
come as a solution. In this post, I am planning to go through the thought process of thinking which is guided by design principles.

In my university there was a J2ME course where we needed to build a game. Back in 90s, I love to play a game named Afterburner. I thought, why not
make this for the mobile. Here is a snapshot of what the game looked like,

![Figure 1: The game](/assets/blog/design-patterns/afterburner.gif)

Now brace your self, there would be a lot of code.

## Milestone #1

### Milestone #1 Requirements

- A pilot can fly an airplane
- A pilot can fire gun or missiles

Let's make a `Plane` class that can move.

```ts
class Plane {
  constructor({ velocity }) {
    this.x = 0;
    this.y = 0;
    this.velocity = velocity;
  }

  moveUp() {
    this.y += this.velocity;
  }
  moveDown() { ... }
  moveLeft() { ... }
  moveRight() { ... }
}
```

Looks good, we can try moving it,

```ts
const plane = new Plane({ velocity: 10 });
plane.moveUp();
console.info("Current position", { x: plane.x, y: plane.y });
```

### Milestone #1 Requirements

- ✅ A pilot can fly an airplane
- A pilot can fire gun or missiles

Now let's add two kind of weapons in the plane.

```ts
class Plane {
  constructor({ velocity, gun, missile }) {
    ...
    this.gun = gun;
    this.missileLauncher = missileLauncher;
  }
}

class Gun {
  fire() { console.info('Firing gun'); }
}

class MissileLauncher {
  fire() { console.info('Firing missile'); }
}
```

How do you fire a gun or a missile?

```ts
class Plane {
  ...
  fireGun()
  fireMissile()
}
```

🤔 Something doesn't feel right.\
🤔 What happens when we have a new weapon?\
We would have to change the `Plane` class every time. The plan just need to fire what it has,
but the behavior of the weapon can change over time. This look like a good time to use the following principle,

> Encapsulate what varies from what stays the same.

One of the way to achieve that is composition. Now there is another principle,

> Favor composition over inheritance.

We can use those two principle to make our weapon system more robust.

```ts
class Weapon {
  fire() {}
}

class Gun extends Weapon {
  fire() {
    console.info("Firing gun");
  }
}

class MissileLauncher extends Weapon {
  fire() {
    console.info("Firing missile");
  }
}
```

```ts
class Plane {
  constructor({ velocity, weapons }) {
    ...
    this.weapons = weapons;
    this.currentWeaponIndex = 0;
  }

  fireWeapon() {
    this.weapons[this.currentWeaponIndex].fire();
  }

  chooseNextWeapon() {
    this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
  }
}
```

Now the `Plane` **has** weapons. They are loosely coupled, which make the weapon system robust. You can add new weapon behaviors in the future.
Now why `Plane` and `Weapon` are loosely coupled? Because we actually implemented another design principle.

> Program to interface Not to an implementation

### Milestone #1 Requirements

- ✅ A pilot can fly an airplane
- ✅ A pilot can fire gun or missiles

## Milestone #2

We need to work more on the weapon system how can we track ammo and the position of each bullet and missiles?

### Milestone #2 Requirements

- Weapon can have limitation on ammo
- Each ammo can have their own position to track on the screen

```ts
class Ammo {
  constructor({ velocity }) {
    this.x = 0;
    this.y = 0;
    this.velocity = velocity;
  }
}

class Bullet extends Ammo {}

class Missile extends Ammo {}
```

🤔 Something seems repetitive

```ts
class Coordinate {
  constructor({ x, y }) {
    this.x = x || 0;
    this.y = y || 0;
  }

  clone() {
    return new Coordinate(this);
  }
}
```

```ts
class Ammo {
 constructor({ velocity, coordinate: currentCoordinate, targetCoordinate }) {
   this.currentCoordinate = currentCoordinate.clone();
   this.targetCoordinate = targetCoordinate.clone();
   this.velocity = velocity;
 }
}

class Plane {
 constructor({ ..., coordinate }) {
   ...
   this.coordinate = coordinate.clone();
 }
}
```

> Keep your code DRY

And do not be afraid to create `Class`. Because, `Class` represent concepts, it helps to define `domain` so that it is easy to communicate the ideas.
Now you can say, an `Ammo` has a `Coordinate` and a `Plan` also has a `Coordinate`. Those nouns are concepts which are represented in the code.
That is the core of Domain Driven Design.

Now we need to construct bullet every time we fire a gun, and we need a missile every time we fire one. To solve this we need a `Factory`
that can create an `Ammo` instance.

```ts
class Bullet extends Ammo {
  fire() {
    console.info("Firing a bullet");
    return this;
  }
}

class Gun extends Weapon {
  constructor({ bulletVelocity }) {
    this.bulletVelocity = bulletVelocity;
  }

  fire(currentCoordinate, targetCoordinate) {
    return new Bullet({
      bulletVelocity: this.bulletVelocity,
      currentCoordinate,
      targetCoordinate,
    }).fire();
  }
}
```

Now that is first pattern we have used. But our code is robust because we have been guided by the design principles.
And if you now see the requirements the code would look really familiar.

Let's re-write the requirements.

- A `Plane` has a `Coordinate`
- Someone can move the `Plane`
- `Gun` **IS A** `Weapon` and `MissileLauncher` **IS ALSO A** `Weapon`
- `Weapon` can fire `Ammo`
- `Plane` and `Ammo` have `Coordinate`s

The entities are classes, `has a` and `is a` represents relation, `composition` and `inheritance`.
![Figure 2: Class diagram](/assets/blog/design-patterns/afterburner-class-diagram.webp)

In the actual school project, of cource there were more requirements and I would continue that in a different post. This is already too long 😂.
