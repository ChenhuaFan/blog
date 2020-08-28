---
title: LeetCode 347. Top K Frequent Elements
date: 2020-05-13 16:05:39
tags:
---



## Description

Given a non-empty array of integers, return the ***k*** most frequent elements.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Note:** 

- You may assume *k* is always valid, 1 ≤ *k* ≤ number of unique elements.
- Your algorithm's time complexity **must be** better than O(*n* log *n*), where *n* is the array's size.
- It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
- You can return the answer in any order.



## Solution 

```javascript
let res = [], map = new Map();
    
nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

for(let i = 0; i < k; i++) {
  res.push(sortedArray[i][0]);
}

return res;
```



## Reflection

**||**

```javascript
let a = b || 1
// better than conditional (ternary) operator
let c = !b?0:1
```



**ES6 syntax**

* `forEach()` iterate elements of an array.

* `entries()` return a new **iterator** object that contain the `[key, value]` pairs.

  Example:

  ```javascript
  const map1 = new Map();
  
  map1.set('0', 'foo');
  map1.set(1, 'bar');
  
  // return a new iterator
  const iterator1 = map1.entries();
  
  console.log(iterator1.next().value);
  // expected output: ["0", "foo"]
  
  console.log(iterator1.next().value);
  // expected output: [1, "bar"]
  ```

* `...` spread syntax.

  [more details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)



**Time complexity:**

$N$ for build the Hashmap.

$NlogN$ for the fastest way to sort a array.

$N$ for the last step to build res array.

$O(NlogN)$ for this algorithm.

