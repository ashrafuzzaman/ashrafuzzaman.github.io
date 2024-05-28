---
title: Event sourcing
pubDate: 2024-05-07
draft: true
---

# Event sourcing

---

## Intent/Command

### VS

## Event

---

## Intent/Command

- **Tense:** Actions are not yet taken (event names are in present form).
- **Consumer:** Meant for a **specific** consumer
- **Purpose:** Invoke behavior
- **Immutability:** Intent can change
- **Dependency:** Producer is aware of the consumer and the message definition is controlled by consumer

<!-- .element: class="fragmented-list" -->

---

![Intent/command](/assets/event-sourcing/command.svg)

### Command intended for a specific consumer

---

## Event

- **Tense:** Actions has already taken (event names are in past form).
- **Consumer:** Meant for any consumer
- **Purpose:** Notify update
- **Immutability:** Event cannot change
- Producer is unaware of the consumers

<!-- .element: class="fragmented-list" -->

---

![Event](/assets/event-sourcing/event.svg)

### Event intended for any consumer

---

### In the world of DDD

---

![Intent/command partner](/assets/event-sourcing/command-partner.svg)

#### The schema for the message is equally dominated by the consumer and the producer

---

![Event Conformist](/assets/event-sourcing/event-conformist.svg)

#### The consumers need to conform to the schema provided by the producer

---

## Event sourcing

- Events are immutable and can be stored using an append-only operation
- Events are simple objects that describe an action including associated data
- Ability to go back in time
- Re-build the world
- Multiple consumer consume at their own speed

<!-- .element: class="fragmented-list" -->

---

![](https://microservices.io/i/storingevents.png)

---

## Reference

- [Event-Driven Message Types and Messaging Patterns](https://alirezafarokhi.medium.com/event-driven-message-types-and-messaging-patterns-d72de0182741)
- [Domain Driven Design](https://www.oreilly.com/library/view/what-is-domain-driven/9781492057802/ch04.html)
