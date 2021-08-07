---
title: JavaScript 101：内存与作用域
date: 2020-04-26 16:11:55
categories: ["计算机"]
tags: ["Javascript","101"]
---

也许我们该更深入一些

<!--more-->

## 内存与作用域

## 1. 引言

> JavaScript中的变量是没有类型的，只有值才有。
> --《你不知道的JavaScript（中卷）》

### 1.1 JavaScript 中的数据及其类型

在探讨 JavaScript 中有关于内存的问题之前，我们要明确 JavaScript 中的两种不同的数据类型值。

* **基本类型值**：Undefined, Null, Boolean, Number, String
* **引用类型值**：Object, Array, Date, ...


### 1.2 语言类型

我们首先要知道 JavaScript 是什么类型的语言。MDN 上明确指出：JavaScript 是**动态类型**的语言，因为 JavaScript 运行时判断数据类型。

```javascript
// 在 JavaScript 中，不需要在声明时加上数据类型。解释器会自动判断 a 变量为整数型
let a = 1;
```

此外，还有**强弱类型语言**的区别，主要依据是是否存在隐式类型转换：

```javascript
let a = 1;
a = "hello world!" // a 转换为字符串
let b = 1;
b = b + ""	// b 从整数转换为字符串。
```

PS: 虽然 C 是静态类型语言，但同时也是弱类型语言。因为存在隐式类型转换。但是，Python 虽然是**动态类型**语言，它也是**强类型语言**。想必初学 Python 时经常会遇到这种错误：

```python
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

### 1.3 typeof 操作符

正因为 JavaScript 既是动态类型又是弱类型语言，所以变量的类型通常是一个让人头疼的点。typeof 帮助我们了解变量的类型。

```javascript
let a;
console.log(typeof a); // undefined
a = 1;
console.log(typeof a); // number
a = true
console.log(typeof a); // boolean
a = "hello world!"
console.log(typeof a); // string
a = {}
console.log(typeof a); // object
a = null
console.log(typeof a); // object
```

**注意！**可能这里会有两个疑问：

1. 既然 string 是基本类型值，那为什么我们还可以使用 string 的方法？如果可以，不应该是一个对象吗？那应该是引用类型！

   ```javascript
   let what = "what??";
   console.log(what.length); //6
   ```

   这是因为除了Object、Array 等引用类型，JavaScript 还为我们提供了**三种特殊的引用类型**： String、Number 和 Boolean，**基本包装类型**。

   在程序运行时，如果遇到调用字符串方法的语句，则会有如下 3 个步骤。

   * 创建一个 String 类型的一个实例
   * 在实例上调用指定的方法
   * 销毁这个实例

   啥意思呢？举个例子：

   ```javascript
   let c = what.split(""); //[ 'w', 'h', 'a', 't', '?', '?' ]
   //其中发生了
   let _what = new String("what??");
   c = _what.split("");
   _what = null;
   ```

2. 那 null 呢？为什么 null 的类型是 object？它没有方法可以调用。

   历史遗留问题 😸。详情参见：[the history of "typeof null"](https://2ality.com/2013/10/typeof-null.html)，也可以理解为期待一个对象，但是现在还没有：空对象指针。



## 2. 存储

### 2.1 JavaScript 如何运行

我们以 V8 来简单说明：`源代码`->`抽象语法树`->`字节码`->`JIT`->`	机器码`。所以忽略次要矛盾，抓住主要矛盾：`源代码`->`机器码`。因此，我们可以进一步探究JavaScript 变量时如何保存在内存中的。

*TODO：JAVA 字节码的原理是什么呢？它如何运行？*

### 2.2 内存空间

#### 2.2.1 内存模型

> <img src="/Users/fanchenhua/Library/Application Support/typora-user-images/image-20200426212926486.png" alt="image-20200426212926486" style="zoom:50%;" />
>
> 图片来自《Computer Systems, A Proframmer's Perspective》

我们可以对此简化一下：

![image-20200426213345197](/Users/fanchenhua/Library/Mobile Documents/com~apple~CloudDocs/myBlog/source/_posts/JavaScript-101：内存与地址/memery_model.png)

#### 2.2.2 栈空间

栈空间，就是调用栈。用于保存程序执行上下文。但是它的名字里也有栈，那和数据结构里对的栈是一回事儿吗？

当程序执行时，随着函数被加载调用，总有函数被先后加载调用。而这一块的内存使用是被分配在这一块内存空间中的。换句话说，函数执行前会被压入栈，结束调用会被弹出。这就和数据结构中对于栈的描述：先进后出，很相似了。

在 JavaScript 中，**基本类型值**会随着函数的加载而被存储在栈内存空间中。

#### 2.2.3 堆空间

而对于堆空间，用于存储引用类型值，比如 Object。

对于堆栈内存空间，可以举个例子说明：

```javascript
function first() {
}

function second() {
  first();
}

second();
```

![image-20200427005326239](/Users/fanchenhua/Library/Mobile Documents/com~apple~CloudDocs/myBlog/source/_posts/JavaScript-101：内存与地址/memery_model_2.png)

我们调试工具中，也可以观察到。

