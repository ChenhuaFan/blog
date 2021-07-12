---
title: 'Javascript-101 变量、作用域和内存'
date: 2021-03-04 22:44:34
categories: ['']
tags: ["Javascript","101"]
---

这是《JavaScript高级程序设计》第四章小结部分

# JavaScript 变量、作用域和内存

## 变量
JavaScript 变量可以保存两种类型的值：基本类型 & 引用类型。
基本类型有如下5种：
* Undefined
* Null
* Boolean
* Number
* String

基本类型 和 引用类型 具有如下特点：
1. **基本类型**在内存中占据**固定大小**的空间，因此被保存在**栈内存**中。
2. 从一个变量向另一个变量赋值基本类型的值，会创建一个副本。
3. 引用类型的值是对象，保存在堆内存中。
4. 包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的**指针**。
5. 从一个变量向另一个变量赋值引用类型的值，会创建一个指针的副本，且均指向同一个对象。
6. 确定一个值是哪种基本类型可以使用 `typeof` 操作符，而确定一个值是哪种引用类型可以使用 `instanceof` 操作符。

## 作用域
所有变量（包含基本类型和引用类型）都存在于一个执行环境（作用域）当中，这个执行环境决定了变量的生命周期，以及哪一部分代码可以访问其中的变量。
1. 执行环境有**全局执行环境**（全局环境）和**函数执行环境**之分。
2. 每次进入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链。
3. 函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问从全局到父作用域的变量。
4. 变量的执行环境有助于确定应该何时释放内存。

## 垃圾回收
JavaScript 具有自动垃圾回收机制(标记回收):
1. 离开作用域的值会被自动标记为可回收，因此将在垃圾回收期间被删除。
2. 对于全局作用域中的变量，可以尝试手动解除引用来回收 `someVar = null;`。
