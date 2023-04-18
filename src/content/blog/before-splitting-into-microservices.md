---
title: Before splitting into microservices
postSlug: before splitting into microservices
pubDate: 2017-03-24
featured: true
tags: ["Microservices", "Monolith"]
description:
  Some things to consider before splitting monolith to microservices
---

# When ???
You started off with a single project and now you have a large team contributing to the same code base. People used to move fast and deliver a lot of features and do a lot of experiments. But now it is really hard to make the application stable and move with a fast enough pace. Breaking people into multiple teams with defined goals and responsibilities seems a logical choice. But is it really allow us to scale the teams. People still breaks others features or have high communication overhead.

And now you are thinking that we should break our app into small microservices that will define a network boundary and team can move fast with their own responsibilities and own services that falls into those responsibilities.

# Wait stop !!!
Before you start breaking your "monolith" into "microservices", consider the following,

* Splitting code beyond network boundaries increases complexity
* Are we doing premature breakdown before knowing clear responsibility boundaries?
* Building and deployment overhead for each projects
* Development will become complicated as developers will have to run bunch of services to test locally
* Increase in number of projects will increase infrastructure cost. Or you would have to invest effort on launching multiple services in single machine

This is not a blog post to scare people away from building microservices. I just wanted to point out some tradeoffs. Splitting into microservices is an investment. As we do in any smart investment ask the following questions,

* What am I getting?
* What is the cost in terms of time and effort?
* Is cost worth the investment?
* Is it the right investment right now?

# Splitting into microservices
So how do I scale our teams so that we allow them to move fast enough and keep things stable?
Sometimes when people talk about microservices, they present in a way that things are clack or white. Either you have microservices or you have a large monolith. And monolith is bad.

Often when people start breaking into microservices, we do a premature service breakdown. This slows down your team significantly. Change in one behavior leads to change in multiple systems.

One of the first step to break monolith is to define a module boundary, which can be a potential microservice. Defining the module boundary and refactoring code to interact through that module boundary can help to identify the interface between the module and the rest of the system. Now my argument is that a module boundary might be able to give the team the ownership that they need. Which you would need to define anyway before splitting into microservices. A team may try owning module boundary and see if that solves the problem before splitting them into a different service. Now if that module interface is stable then we can revisit if we need to separate service for that module.
