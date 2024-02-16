---
title: AWS documentDB architecture
pubDate: 2024-02-16
draft: false
---

# AWS DocumentDB

<center>

![icon](https://icons.terrastruct.com/aws%2FDatabase%2FAmazon-DocumentDB-MongoDB.svg) <!-- .element height="150px" width="150px" -->

</center>

---

### Main components of Amazon DocumentDB

![test](https://docs.aws.amazon.com/images/whitepapers/latest/get-started-documentdb/images/documentdb-architecture.png)

---

# Amazon DocumentDB architecture

- **Cluster:** Consists of one or more instances that provide the compute, and a cluster volume that manages the data for the instances.
- **Primary instance:** An instance that supports read/write workloads and performs all the data modifications to the cluster volume. Each Amazon DocumentDB cluster has one primary instance.
- **Cluster volume:** The cluster volume provides SSD-backed **distributed storage** for your database. The primary instance and any Amazon DocumentDB replicas share the same cluster volume.
- **Replicas:** An Amazon DocumentDB replica supports only read operations. In case the primary instance fails, one of the Amazon DocumentDB replicas is promoted as the primary.

---

Reference:

- [Amazon Documentdb Architecture](https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/amazon-documentdb-architecture.html)
