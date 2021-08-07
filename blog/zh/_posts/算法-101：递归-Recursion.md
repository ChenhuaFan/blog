---
title: 算法 101：递归 Recursion
date: 2020-05-05 22:08:58
categories: ["计算机"]
tags: ["算法","101", "递归"]
---



<img src="https://gillsonions.com/sites/default/files/s3-images/homepage_onionslice_transparent.png" width="50%">



<!--more-->



# 递归 Recursion I 

近期在学习 Leetcode 上有关递归的知识点，发现有很多高级算法策略都使用到了递归的思想。递归在一开始学习的时候也是非常容易把自己绕晕。因此在这里做一个系列总结。

* 递归，从洋葱说起
* [递归 plus：加上存储，动态规划]()
* [分治]()
* [回溯]()
* [DFS 与 BFS]()



## 从洋葱说起

大家都知道洋葱是一层一层的，剥完一层还有一层直到你遇到洋葱芯为止。经过一段时间的思考发现递归这个思想非常自然，就如同我们日常生活中的洋葱。

首先说一下洋葱和递归的关系：

1. **某一层**洋葱的**皮** = **将要执行的**递归函数
3. **洋葱芯** = 递归函数的**终止**情况
3. **某一层**洋葱的**肉** = 递归函数的**执行内容**，函数体

再给大家看看洋葱长啥样：

<img src="https://gillsonions.com/sites/default/files/s3-images/homepage_onionslice_transparent.png" width="50%">

再加上一个程序执行箭头

![](onion.JPG)



## 一道例题

再以一道简单的例题为例，了解一下如何按照洋葱来理解递归思想。

**[Leetcode 344 反向输出字符串](https://leetcode.com/problems/reverse-string/)** 有改动，与原题相比去除了必须是 in-place 操作的限制。

> 编写一个可以反转字符串的函数. 给定的输入是一个字符数组`char[]`.

**样例 1:**

```
输入: ["h","e","l","l","o"]
输出: ["o","l","l","e","h"]
```

**样例 2:**

```
输入: ["H","a","n","n","a","h"]
输出: ["h","a","n","n","a","H"]
```
**代码**

```javascript
function reverse(s) {
  
  let res = [], len=s.length;
  
  // 递归函数
  function r (i) {
    // 终止条件
    if (i==len)
      return;
    // 调用自身：前往下一层
    r (i+1);
    // 结束调用后的数据操作。
    res.push(s[i]);
    return;
  }
  
  r(0);
  return res;
}
```

```javascript
reverse(["h","e","l","l","o"])
// 输出：[ 'o', 'l', 'l', 'e', 'h' ]
reverse(["H","a","n","n","a","h"])
// 输出：[ 'h', 'a', 'n', 'n', 'a', 'H' ]
```



## 说明

1. **某一层**洋葱的**皮** = **将要执行的**递归函数

   `function r (i) { ... }` 这是每层洋葱，也就是将要被执行的递归函数的边界线。外层洋葱通过`r(i+1)`将控制权转移给了即将要执行的函数，内层洋葱。
   
   如果我们说 17行的 `r(0)` 是最外面的一层洋葱，那么在最外面一层洋葱内调用的 `r(1)` 就是第二层洋葱了。
   
2. **洋葱芯** = 递归函数的**终止**情况

   子子孙孙无穷尽也，一层洋葱包着一层洋葱。何时是个头？所以我们需要在每次进入新一层洋葱的时候判断当前是不是到头了，是不是遇到洋葱芯。以图里那个洋葱为例，我们可以说 `if (layer == 9) return;`。因为从最外面数 9 层洋葱就遇到了洋葱芯，需要回头了。

3. **某一层**洋葱的**肉** = 递归函数的**执行内容**，函数体

   对于程序执行的过程来说：一条**入箭头**表示进入下一层洋葱；一条**出箭头**表示离开本层洋葱。而进入新洋葱靠的是函数体中对自身的调用，也就是`r(i+1)`。所以，在这条语句**之前的代码**是**在进入下一层洋葱之前**做的，而这条语句**之后的代码**时即将**离开本层洋葱之前**做的。

   ![](onion.JPG)

   这道题，需要我们反向输出字符。因此我们把 `res.push(s[i])` 写在调用之后。所以，顺着出箭头的方向，我们就可以反着输出所有字符了。如果我们把 `res.push(s[i])` 写在调用之前，我们就可以正向输出所有字符，因为这是我们是按着入箭头的方向输出的字符。



## 回到 Leetcode 344

Write a function that reverses a string. The input string is given as an array of characters `char[]`.

Do not allocate extra space for another array, you must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with O(1) extra memory.

You may assume all the characters consist of [printable ascii characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Example 1:**

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

**解法：**

```javascript
var reverseString = function(s) {
    // 值得注意的是，因为 344 这题要求在原数组上做修改，为了保证在内层洋葱执行之后改变了原有的数组从而导致外层洋葱执行的时候使用了非原始数据，我们需要在进入下一层洋葱之前，保存一下当前的状态。
    function helper(i) {
        if (i==s.length) {
            return;
        }
        // 在进入下一层洋葱之前，保存当前的字符是什么。
        let t = s[i];
        helper(i+1);
        // 将之前保存的字符放到应该放的位置上。
        s[s.length-i-1] = t;
        return;
    }
    
    helper(0);
};
```

