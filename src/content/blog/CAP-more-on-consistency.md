---
title: "CAP theorem: more on consistency"
pubDate: 2023-04-25
tags: ["CAP", "database"]
featured: true
draft: true
description: More on consistency
---

## Consistency

Consistency refers to the property that all nodes in a distributed system see the same data at the same time. But in a distributed system this is hard to achieve in a single point in time. Rather this is more accurate, "All the subsequent read yields new data after the write is complete. And two different reads at the same time should not get a different view of the same data".
