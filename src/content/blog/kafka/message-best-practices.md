---
title: Best practices for messages in event bus
pubDate: 2024-02-20
tags: ["Kafka", "event bus"]
description: Importance, Purpose, and Best Practices of Defining an Event Schema in Event-Driven Architecture
draft: true
featured: true
---

I really liked the article [Best Practices when Defining an Event Schema in Event-Driven Architecture (EDA)](https://pandaquests.medium.com/best-practices-when-defining-an-event-schema-in-event-driven-architecture-eda-5013cf1c0127). Basically I am appending my thoughts appending to what was already discussed there.

Start with the business domain/events: Events should be defined in terms of the business domain, and should represent meaningful changes or actions that occur within the domain. Start by understanding the business requirements and use cases, and then define the events that will be needed to support those requirements.

Use a standardized format: Events should be defined using a standardized format, such as JSON or Avro, to ensure that they can be easily exchanged between different systems and languages. Use a consistent naming convention and structure for your events to make them easy to understand and maintain.

Version your schema: Event schemas can change over time, so it’s important to version your schema to ensure that changes are backward compatible. Use a version number in the event schema, and ensure that you have a plan in place for managing schema changes across your system.

Keep it simple: Event schemas should be simple and easy to understand. Avoid overcomplicating your schema with unnecessary details or complex data structures.

Use strong typing: Ensure that your event schema uses strong typing to provide clarity and prevent errors. Use a type system such as Avro or Protobuf to define the types for your events.

Document your schema: Document your event schema to ensure that it can be easily understood and maintained by other developers. Include information about the purpose of the event, the data that it contains, and any relevant business rules or constraints.

Consider event granularity: Events can be defined at different levels of granularity, depending on your system’s requirements. Consider whether you need to define high-level events that represent business actions, or more granular events that represent individual changes or updates.

# Reference

- [Best Practices when Defining an Event Schema in Event-Driven Architecture (EDA)](https://pandaquests.medium.com/best-practices-when-defining-an-event-schema-in-event-driven-architecture-eda-5013cf1c0127)
