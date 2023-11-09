---
title: 101 of Distributed system
pubDate: 2023-11-07
---

# Distributed system

## The basics <!-- .element: class="fragment" -->

---

### Topic

- Total order
<!-- .element: class="fragment" -->
- Failure detection
<!-- .element: class="fragment" -->

---

### Order between events

```mermaid
sequenceDiagram
  actor Observer

  Note over Server 1 : Event 1.1
  Note over Server 2 : Event 2.1

  Note over Observer : Event 1.1
  Note over Observer : Event 2.1
```

---

### NTP Sync

```mermaid
sequenceDiagram
  Server-->>NTP: Get time
  NTP-->> Server: Time

  Note over Server, NTP : Server time =<br/>NTP time + round trip time/2

```

---

### Logical time

```mermaid
sequenceDiagram
  actor Observer
  participant Server 1
  participant Server 2

  Note over Server 2 : Event 2.1
  Note over Server 1 : Event 1.1
  Server 1 -->> Server 2 : T=1
  Note over Server 2 : Event 2.2

  Note over Observer : Event 2.1, Event 1.1
  Note over Observer : Event 2.2

```

---

### Key takeaways

- Network is unreliable
- NTP sync cannot be trusted

---

### M87 blackhole

![M87 blackhole](https://www.science.org/do/10.5555/article.2476085/full/sf-M87blackhole-1644894886423.jpg)

---

![Event Horizon Telescope](https://public.nrao.edu/wp-content/uploads/2020/04/EHT_Telescopes_Graphic_2017Telescopes_2020QuasarUpdate-2048x1583.jpg)

---

## Failure detection

---

## Detecting node failure

```mermaid
sequenceDiagram
  participant Replica 1
  participant Replica 2
  participant Master

  Replica 1-->>Master: Ping
  Master-->>Replica 1: Pong

  Replica 2-->>Master: Ping

  opt Network timeout
    Master-->>Replica 2: ❌
  end

```

---

# Node failure types

- Crash Stop
- Omissions
- Crash Recovery
- Byzantine / Arbitrary

---

### Crash Stop

- Node stop doing anything(sending/receiving/processing)
- Once fail never recover

---

### Crash Stop: Challenges

- Can lead to leader election
- Initiate rebalancing/replication
- Identification of latest checkpoint

---

### Omissions

- **Sending omission:** not sending data where node is supposed to send according to algorithm
- **Receiving omission:** not receiving data when other node has sent message

---

Omission is actually a **temporary** state which eventually turns to a **crash** or a **crash recovery** state.

---

### Crash Recovery

- A node might crash
- It recovers after crashing and initiates a recovery process

---

### Crash Recovery: Challenges

- Recovery process
- Compensation

---

### Byzantine / Arbitrary

A node may behave arbitrary(sending/receiving messages that are not specified by algorithm).

This can be a malicious attack to the system.

---

### Network partition

```mermaid
sequenceDiagram
  actor Client 1
  participant Replica 1
  participant Replica 2
  participant Master
  actor Client 2

  Replica 1-->>Master: Ping
  Master-->>Replica 1: Pong

  Client 1->>Master: Write

  Replica 2-->>Master: Ping

  opt Network parition: Master | Others
    Master-->>Replica 2: ❌
    Client 2->>Master: Read
  end

```

---

## References

- [Node Failure](https://distash.blogspot.com/search/label/Crash)
- [Total order issue](https://ashrafuzzaman.github.io/posts/understanding-the-challenges-of-distributed-system/)
