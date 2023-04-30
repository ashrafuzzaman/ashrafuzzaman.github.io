---
title: CAP theorem
pubDate: 2023-04-25
tags: ["CAP", "database"]
featured: true
description: Intro to CAP theorem
---

The CAP theorem is a fundamental concept in distributed computing that states that it is impossible for a distributed system to simultaneously provide all three of the following guarantees: **C**onsistency, **A**vailability, and **P**artition tolerance.

## Consistency

Consistency refers to the property that all nodes in a distributed system see the same data at the same time.

## Availability

Availability refers to the property that every request receives a response, without guarantee that it contains the most recent version of the data.

## Partition tolerance

Partition tolerance refers to the ability of the system to continue operating even when communication between nodes is lost or delayed.

In practice, most distributed systems prioritize either availability or consistency, with partition tolerance being a non-negotiable requirement. For example, a system designed for high availability might sacrifice consistency by allowing nodes to return stale data, while a system designed for strong consistency might sacrifice availability by blocking requests until all nodes have been updated with the latest data.

![CAP theorem](@assets/blog/CAP-theorem/CAP-theorem.png)
_CAP theorem_

The CAP theorem has significant implications for the design and operation of large-scale distributed systems, including databases, messaging systems, and content delivery networks. It underscores the importance of understanding the trade-offs involved in building distributed systems and the need to carefully balance the requirements of different stakeholders.

## Why pick two

There is a famous quote on CAP theorem, "Choose any two". In a distributed system we can not realistically avoid network partitioning. We need to build our system around it. It is important to note that, CAP talks about network partitions not node failures. Because network partition is the worst kind of node failures([Omissions](http://distash.blogspot.com/2010/02/node-failure.html)). It is much better for a node to just crash rather come up live agin with a deviation of the data. If that node comes back then the existing nodes would need to reconcile.

Now back to the question why CP or AP. Why can we not have Consistency with Availability?
The definition of availability says that the node needs to respond with reads and writes. When a master is partitioned from the other nodes it can not accept write and be consistent. Because after a certain amount of time the Master can be marked as a crashed node and replicas might start an leader election process. So even the master on a network partition can not take the writes in and be consistent with the rest of the nodes.

## Reference

- https://www.ibm.com/topics/cap-theorem
- [Different type of node failure](http://distash.blogspot.com/2010/02/node-failure.html)
- [You Can’t Sacrifice Partition Tolerance](https://codahale.com/you-cant-sacrifice-partition-tolerance/)
