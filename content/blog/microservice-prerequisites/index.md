---
title: Microservice Prerequisites
comments: true
date: "2017-03-27"
keywords: Microservices, Prerequisites
categories: Microservices
tags: Microservices
---

Inspire by the [post](https://martinfowler.com/bliki/MicroservicePrerequisites.html) by Martin Fowler, wanted to share my thoughts as well.

You need to verify the maturity of you team and infrastructure before jumping into microservices.

## System monitoring
Do your have a monitoring system to identify service failures? Which system is broken?

## Service provisioning
In case of failures you might need to provision new machine or containers. So you need to have infrastructure that enables you to launch new service in a couple of hours.

## CI/CD
You need to have [CI/CD](https://martinfowler.com/bliki/DeploymentPipeline.html) up and running as you need to be able to deploy each services as fast as possible. Which is you would need to do anyway for service provisioning.

## Identify bugs and failures
You need to have log explorer, and request-id propagation to identify bugs of your application. Otherwise it would be a nightmare to trace bugs across systems.

## Tests
You surely need tests to guard against your system boundaries, so that any change there should not break the system.

## Cost effective infrastructure
When you start breaking into microservices, all of a sudden you will find a lot of services which are so small that it is not cost effective to put them in different machines. Eventually you would move into a solution like docker to able to reduce the cost for you jenkins and all your production instances. And also solve the issue of running a bunch of services to develop a feature. On-boarding new developers become an issue as well.

These are some of the issues that you need to consider before jumping into microservices.