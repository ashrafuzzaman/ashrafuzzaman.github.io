---
title: Writing a readable method
pubDate: 2023-07-18
tags: ["method", "function", "best practices"]
description: Writing a good function is the building block of a maintainable code base.
---

The value of a well-written "function" is not often understood by engineers, especially at the beginning of their careers. Early on, "function" seems like a necessary means of accomplishing goals. However, as engineers gain more expertise, they come to understand that "function" constitutes the fundamental block to create your masterpiece.

There is a lot of important fundamentals on writing a function that can be re-used in OOP, and even writing microservices. I will try to sum up some concepts with examples. The language would be Typescript for those examples.

The following code is anonymized but taken from a project. I believe the concept is easier to understand when shown with real life examples.

```typescript
async function cancelOrderActivities(req) {
  const user = req.user;
  const order = await getOrderById(req.orderId);

  await Promise.all([
    _cancelItemsShipment(order.items),
    ...order.items.map(item => item.markAsAvailable()),
  ]);
  await Promise.all(order.payments.map(payment => payment.reimburse()));

  order.cancel();
  await save(order);

  return orderEventsTracker.trackOrderCanceled(
    getOrderWithTriggeringUser(order, user)
  );
}
```

## Naming the function

This is a litmus test. If you can not name a function then you don't know what it does, or it does so many things that you can not come up with one name.
It is a hint that the function does not do one thing, does not follow SRP(Single Responsibility Principle).

For the example I think it is pretty close. The function name should be saying what it does and need to start with a verb. For this example `cancelOrder` would be a good name.

## Cohesive parameters

How related is `cancelOrder` function to request? What if the method was called from another function? This method looks like a method that belongs to business layer, not in a controller layer. Parameters are really important for a function. The arguments should make sense for the task the function is meant to do. How about we re-write the function signature as follows,

```typescript
async function cancelOrder(orderId, canceledBy: User);
```

The arguments now make more sense, and you would know what those would be used for without looking into the function definition. The `orderId` is self-explanatory as well as the `canceledBy`. I love to be explicit by the having the argument as `canceledBy` rather than `user` because now we know how the user data will be used with in the function. One of the rule of thumb is send as little information possible to the function so that it does not grow dependency on related data. Instead of `canceledBy` if only `id` would suffice then pass the `canceledByUserId`.

## Method should look like a pseudocode

This is my personal philosophy. When a method does more than one thing which eventually is one business capability, I split them in to their own method so that the business capability can be easily understood. So I will re-write the method in the following way,

```typescript
@trackOrderCanceled()
async function cancelOrder(orderId, canceledBy: User) {
  const order = await getOrderById(orderId);

  await Promise.all(
    order.items.map(async (item) => {
      await cancelItemShipment(item);
      await returnItemToInventory(item);
    })
  ]);

  reimbursePayment(order);
  order.markAsCanceled();
  return await save(order);
}
```

Now I know there is a lot of issues with the function. There is no transaction, in microservices it there should be a saga implementation. It is just to make a point that even without knowing the methods which were used in this function. A reader can understand the intent of this function. I would prefer tracking of the event as the decorator function. As tracking this event is not part of the actual activity, rather a meta activity. Moving that part as a decorator make the function cleaner.
