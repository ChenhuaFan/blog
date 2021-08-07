---
title: 'LC53 Maximum Subarray'
date: 2021-02-04 09:39:20
categories: ['']
tags: ['Leetcode','Array','DP']
---

## LC 53 [最大的子数组和](https://leetcode.com/problems/maximum-subarray/)

### 题目描述

给定一个整数数组nums，查找具有最大和的连续子数组(至少包含一个数字)并返回其和。

#### 例子1

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]

输出: 6

解释: [4,-1,2,1] 有最大和为 6.

#### 例子2

输入: nums = [1]

输出: 1

### 题解

首先看这道题，题干说找到给定数组的最大子数组和。是否可以联想到先按最简单的数组来思考，再扩充到更长的数组？

例如，先考虑例子1中的 `[-2]`。可以发现，它本身即为最大的子数组，和为 -2。这是符合题目要求的测试用例，其结果也被接受。

如果更进一步呢？可以发现，`[-2,1]` 现在是由包含 `[-2]` 这个子数组构成的。这种情况下涉及到了 3 种可能性：`[-2] [1] [-2,1]`，因为题目是最大子数组，当加入 1 需要考虑的就变成了包含1或者不包含1（子数组从 1 重新计算）。所以，含有 -2 的数组我们可以借助前一个答案来继续计算，既加上1和不加上1的比较。