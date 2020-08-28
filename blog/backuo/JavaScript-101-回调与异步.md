---
title: 'JavaScript 101: 回调与异步'
date: 2020-06-05 22:50:44
categories: ["计算机"]
tags: ["Javascript","101","回调函数","异步"]
---

> 回调函数在 JavaScript 中十分常见，而且回调函数又通常用于JavaScript 中的异步操作。所以在这里总结和讨论一下有关于回调函数和异步的问题。

## 1. 回调函数

回调函数与一般的函数最大的区别可以理解为：回调函数是由系统调用的函数。下面就是一个简单的回调函数的例子：

```javascript
a = [1,2,3,4].sort((a,b)=>b-a);
console.log(a); // [4,3,2,1]
```

`sort()`方法中传入的参数即为一个简单的回调函数，它将在 sort 方法执行中被调用。而我们只需要事先在回调函数中写好排序的标准即可。

值得注意的是，这里的回调函数是**同步**的：也就是说后续的代码会等待sort 执行完毕才会继续执行。虽然回调函数大量用于 JavaScript 异步操作中，但是这并**不代表**所有的回调函数都与异步操作有关。我们可以再举一个同步的回调函数的例子。

```javascript
function a(b, foo) {
  let a = 10;
  return a + foo(b);
}

console.log(a(10, (b)=>b*b)); // 110一下是一个异步的例子：
```

```javascript
setTimeout(
  ()=>{ console.log("1s later") }, 
  1000
)
// 在一秒之后输出 1s later
```

在这里可以看出，<u>是否是异步和回调函数没有必然的联系。</u>



### 1.1 回调函数的 this

`this` 一直是 JavaScript 中比较麻烦的一个地方，可以通过[这篇博客](/2020/06/05/JavaScript-101-this-is-this/)来复习一下 JavaScript 中的`this`。值得注意的是，因为 ES6 引入了箭头函数，所以回调函数的 this 需要额外注意：其指向了外层函数作用域的this。

```javascript
let a = {
  foo: function () {
    // 由对象方法创建的独立作用域，在定义时便已确定了箭头函数的外部 this。
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}
a.foo(); // 1 秒后打印 a.
let foo = a.foo;
foo(); // 1 喵后打印 window.
```



### 1.2 回调地狱

很多时候，我们都写过如下的回调函数：

```javascript
$.ajax({
  url: "/user/get",
  data: {},
  success: function (res) {
    $.ajax({
      url: "/post/get",
      data: {},
      success: function (res) {
        $.ajax({
          url: "/comment/get",
          data: {},
          success: function (res) {
            // do something.
          }
        })
      }
    })
  }
})
```

回调函数最初在学习的时候，首先要适应回调函数的思路。之后遇到的问题就是回调地狱，一层套一层。直到结束。JavaScript 所有和网络打交道的 api 都是异步操作，而一般业务逻辑都需要若干个请求过程。所以涉及到与后端交互时，代码可读性非常的差。而且不能以同步的方式来写代码总觉的不舒服。



## 2. Promise

Promise，可以解决回调地狱的问题。但是总觉得把一层套一层写成链式调用的形式，还是不太对。

```javascript
// 使用 promise 的例子，每次有 30% 的几率产生 oops！ 错误
for (let i = 0; i < 5; i++) {
  // 为了证明是异步操作，在主线程中打印 i
  console.log(i);
  let promise = new Promise((resolve, reject) => {
    let val = "yes, this is the promise"
    let err = null;
    if (Math.random() > 0.7) err = new Error("oops!");
    if (!err) {
      resolve(val);
    } else {
      reject(err);
    }
  });
  promise
    .then(res => {
    console.log(res);
  })
    .catch(err => {
    console.error(err);
  })
}
/*
0
1
2
3
4
(4) yes, this is the promise
(1) Error: oops!
*/
```

**【解释和说明】**

1. **结果分析：**

   程序先输出了 0，1，2，3，4，证明 promise 确实是异步操作。因为 JS 的异步任务会被放入**任务队列**中等待主线程**执行完毕后**再被**依次**添加进主线程中**执行**。

   之后，程序输出了 4 次 `yes, this is the promise` 和 1 次 `Error: oops!` 。这说明 promise 任务继续执行了。

2. **Promise 部分说明**

   首先需要实例化一个 `promise` 对象，`Promise` 构造函数**接受一个函数**作为**参数**。此函数接受 2 个参数：`resolve` 和 `reject` 。换句话说就是：Promise 构造函数接受一个具有两个形参的函数作为参数。这个函数我们可以理解为是执行异步操作的主体。

   如上面的例子中，我们构建了一个有 30%几率产生错误的函数。

   当异步操作执行成功后，通常是读取文件或者是网络 api 调用，将获得结果传递给 `resolve`。

   而如果执行过程中出现了错误，则将错误对象传递给 `reject`。

   `resolve` 和 `reject` 由 JavaScript 引擎提供，不需要我们来定义。

   1. `resolve` 函数

      该函数的作用是将 Promise 对象的状态从“pending”更改为"resolved"。并且在异步操作**成功**时被调用。

   2. `reject` 函数

      该函数的作用是将 Promise 对象的状态从 "pendding" 更改为 "rejected"。并且在异步操作**失败**时被调用。

3. **`then()` 和 `catch()`**

   `promise` 对象方法 `then` 接受两个函数作为参数分别对应状态为“resolved”时或“rejected”时需要执行的工作，第二个参数可以省略。此外 `then` 会继续返回 promise 对象，因此可以一直链式调用 `then` 方法。

   `catch` 可以捕获过程中产生的错误。

```javascript
// 一般的封装 promise 的异步操作函数通常是：
asyncFunction (args) {
  return new Promise((resolve, reject) => {
    // 执行异步操作
  })
}
// 使用时
asyncFunction (args1)
	.then((res) => {
  	// do something
	})
	.then((res) => {
  	// 进行另一个异步过程，返回新的 promise 对象
  	return asyncFuntion(args2)
	})
	.then((res) => {
  	// do something
	})
	.catch((err) => {
  	// handle error
	})
```

从我个人观点来看，这种链式调用看上去虽然比回调地狱更好，但是似乎还没有好到心目中的理想状态。



## 3. Async-await 函数

> 同步化吧！

### 3.1 Generator 

#### 3.1.1 基础概念

Async-await 是 generator 的语法糖，因此了解什么是 Generator 是有必要的。

使用 `*` 来声明一个函数并返回一个生成器对象 `generator` :

```javascript
function* async() {}
let res = async(); // res 被赋值为一个迭代器引用。
```

在控制台输出 Generator 可以发现生成器类包含以下方法：

```javascript
next: ƒ next()
return: ƒ return()
throw: ƒ throw()
```

1. `next()` : 返回一个由 yield 表达式生成的值。 [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)

   实际上在上面的例子中，`let res = async()`。**并不会**执行函数，而是会返回一个**指向**函数**内部状态**的**指针**，通常指针指向第一个 yield 之前的状态，通过 `next()` 我们可以将指针移动到下一状态。
   
   ```javascript
   function* idMaker(){
     let index = 0;
     while(true)
       yield index++;
   }
   
   let gen = idMaker(); // "Generator { }"
   console.log(gen.next().value); 
   // 0
   console.log(gen.next().value); 
   // 1
   console.log(gen.next().value); 
   // 2
   ```
   同时需要注意的是，`next()` 可以给迭代器传值：
   
   ```javascript
   function* foo() {
     let arg = yield 10086;
     console.log(arg);
   }
   let a = foo();
   a.next(); // {value: 10086, done: false} value 指 yield 表达式的值, done 指是指针是否到达函数状态尾端
   a.next(); // undefined. 注意，此时没有传值，所以 arg 只能得到 undefined。同时 {value: undefined, done: true} 表明到达状态尾端。
   let b = foo();
   b.next();
   b.next(123) // 123. 说明 arg 获得了返回值 123.
   ```
   
2. `return()` : 返回给定的值并结束生成器。

   ```javascript
   function* foo() {
     let arg = yield 10086;
     console.log(arg);
   }
   let a = foo();
   a.return(123) // {value: 123, done: true}. 设定当前参数为 yield 表达式的值同时将指针移动到状态尾端。
   ```

3. `throw()` ：向生成器抛出一个错误。

   ```javascript
   function* foo() {
     let arg = yield 10086;
     console.log(arg);
   }
   let a = foo();
   a.throw(new Error("oops!")); // Uncaught Error: oops!
   ```

#### 3.1.2 工作机制

这个部分需要另外开一篇博客来讨论和说明，在这里先行略过。

### 3.2 Async-await

通过 `async` 可以声明一个异步函数，内部可以包含 `await` 。当程序运行到 `await` 时，会等待异步过程执行完毕，再进而继续执行后续步骤。

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('kjjjj');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result); // 'resolved'
}

asyncCall();
// 'calling'
// 'resolved'
```

异步函数总是会返回一个 `promise` 对象。但是如果返回值不是 `promise` 对象，则会隐式地转换为 `promise` 对象。

```javascript
async function abc() {
  return 1
}
console.log(abc()); // Promise {<resolved>: 1}
```

#### 3.2.1 工作机制

这个部分需要另外开一篇博客来讨论和说明，在这里先行略过。

