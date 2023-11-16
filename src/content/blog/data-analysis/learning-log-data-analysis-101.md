---
title: "The log of a trail of a data analysis"
pubDate: 2023-11-16
draft: true
tags: ["data analysis"]
description: This is a log for me in the future
---

> This is a just a log of my approach to a problem. My understanding on the problem will likely to change in future.

Unfortunately I will not be able to expose data or the nature of data that is taken into account. But the main thing is that, I am analyzing accident data. Which means I have a few variable that may or may not contribute the accident that actually happened.

The first thing that I found which can be related to these phenomena is `Poisson Distributions`.

## Poisson Distributions

A Poisson distribution is a discrete probability distribution. It gives the probability of an event happening a certain number of times (k) within a given interval of time or space. [Taken from scribbr](https://www.scribbr.com/statistics/poisson-distribution/).

There is also a distribution that closely relates is, Negative Binomial Distribution.

## Negative Binomial Distribution

In probability theory and statistics, the negative binomial distribution is a discrete probability distribution that models the number of failures in a sequence of independent and identically distributed Bernoulli trials before a specified (non-random) number of successes (denoted **r**) occurs. For example, we can define rolling a 6 on a die as a success, and rolling any other number as a failure, and ask how many failure rolls will occur before we see the third success(r=3). In such a case, the probability distribution of the number of failures that appear will be a negative binomial distribution.

![Probability mass function](https://upload.wikimedia.org/wikipedia/commons/8/83/Negbinomial.gif)
_Probability mass function_
