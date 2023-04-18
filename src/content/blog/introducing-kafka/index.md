---
title: Introducing Kafka
pubDatetime: 2016-06-09T16:39:18Z
tags: ["kafka", "broker"]
description:
  A brief introduction to Kafka
---
## What is Kafka
Kafka is a **distributed**, **partitioned**, **replicated commit log** service.
It provides the functionality of a messaging system.

A lot of **keywords**. But we will get into that later.

## Basic terminology
Before we get in details with Kafka lets get to know the common terminologies.

* Kafka maintains feeds of messages in categories called **topics**.
* We'll call processes that publish messages to a Kafka topic **producers**.
* We'll call processes that subscribe to topics and process the feed of published messages **consumers**.
* Kafka runs as a cluster comprised of one or more servers each of which is called a **broker**.

![Figure 1: Basic terminologies](../../../assets/blog/introducing-kafka/terminologies.png)

## Kafka Topic
The way Kafka scales the topic is by splitting into multiple partitions.
In a partition each message has a incremental sequence number called **offset**.
Each messages in a partition are ordered in the way they were pushed to Kafka.

![Figure 2: Topics are distributed in partitions](../../../assets/blog/introducing-kafka/partitions.png)

Each partitions then can be replicated in different nodes for HA and fault tolerance.
For each partition different nodes are **leader**. Only a leader can write to the partition.
Leader writes to a commit log before it is replicated in other nodes, which is why in Kafka the messages are persistent. 
As there are multiple leaders in the cluster for different partitions 
there are different commit log which is being written at the same time. That is why it is called
distributed commit log.

![Figure 3: Partitions are replicated in the cluster](../../../assets/blog/introducing-kafka/write_to_partition.png)

## Consumers and Consumer group

One partition is consumed by one consumer in a **consumer group**.
But in different consumer group same partition is consumed. 

![Figure 4: Consumer groups](../../../assets/blog/introducing-kafka/consumer_groups.png)


## Handling failure
![Figure 5: Handling failure](../../../assets/blog/introducing-kafka/handling_failure.png)


## Reference
* [Presentation](https://docs.google.com/presentation/d/1tZQZQv7iRrYSEJr-qFBON7B9bV8kAmox56wV3Qq_S0E/pub?start=false&loop=false&delayms=3000)