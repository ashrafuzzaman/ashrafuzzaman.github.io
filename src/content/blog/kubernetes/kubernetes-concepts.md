---
title: Introduction to concepts of Kubernetes
pubDate: 2023-06-14
tags: ["Docker", "Kubernetes"]
description: Basic terms and building blocks for Kubernetes
resources:
  - https://www.canva.com/design/DAFlxo2I434/NmMa84Q62zsrt6p9lxUL6w/edit?ui=eyJGIjp7fX0&analyticsCorrelationId=cd859320-1b86-43f8-94f7-6e291414e329
---

This is a reference post for documenting all the concepts for Kubernetes.

# Cluster Architecture

Kubernetes cluster is made of at least one **master node** and **worker nodes**.

## 📘 Definitions

**Node :** Virtual or physical machines.\
**Master node:** A master node is a node which controls and manages a set of worker nodes\
**Worker node:** Mostly referred as Node where the containers are launched\
**Kubelet:** Kubelet is the primary "node agent" that runs on each worker node, so that they can communicate with each other. They also execute some tasks on the node

![Kubernetes cluster](@assets/blog/kubernetes/kubernetes-cluster.png)
_Kubernetes cluster_

## Master node

## 📘 Definitions

**API server:** An entry point to the K8s cluster\
**Controller manager:** Keeps track of what is happening in the cluster\
**Scheduler:** Keeps track of what is happening in the cluster\

# Reference

- [Kubernetes Crash Course for Absolute Beginners](https://www.youtube.com/watch?v=s_o8dwzRlu4)
