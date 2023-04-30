---
title: "CAP theorem: consistency vs availability"
pubDate: 2023-04-25
tags: ["CAP", "database"]
featured: true
description: "CAP: consistency vs availability"
---

## Consistency

Consistency refers to the property that all nodes in a distributed system see the same data at the same time. But in a distributed system this is hard to achieve in a single point in time. Rather the following might be easier to understand.

> All the subsequent read yields new data after the write is complete.
> And two different reads at the same time should not get a different view of the same data.

Different database take different approach to meet this criteria. Some database like Cassandra let you tweak the availability VS consistency to fit the need of the business.

![Quorum read/write](@assets/blog/CAP-theorem/Quorum-read-write.png)
_Quorum read/write_

## Quorum read/write

For quorum read/write the system can survive with n/2-1 node crush, which gives high availability and handshaking with latency you can get high consistency. Because when the write is complete then at least n/2+1 node has reference to the latest data. So fo any n/2+1 node there would be at least one node containing the latest version of the data. Which is why after the write is complete the next read will yield new data. But when the write is in progress there might be cases were some reader can get out of date view of the system.

## Sharding

Sharding is an interesting technique to break apart document data across different nodes. The reason most document store has sharding is because documents are naturally disjoint unlike relational data or graph data. Through this you can achieve a multi master system but for each shard there is only one owner, this is why it is easier to achieve consistency. So mongoDb is a **CP** system.

![Mongodb Shards](@assets/blog/CAP-theorem/mongodb-shards.png)
_Mongodb Shards_

To access a data in a shard mongo goes to the primary node for the shard to write or read data from. Which is why mongo can ensure consistency giving up the availability.\
\
So what happens when the master is down for mongo? The writes are halt and a leader election is triggered to select the new master.
