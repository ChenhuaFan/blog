---
title: "Javascript 102：手写 bind"
date: 2020-08-01 16:54:33
categories: ["计算机"]
tags: ["Javascript","101"]
---

> 冻住，不许动！

<!--more-->

# JS 102：手写 bind

`bind` , `call` 和 `apply`  也是一个很重要的知识点，与 JavaScript 中函数调用息息相关。此篇为 JavaScript 101 系列的番外篇，讨论一下 `bind` 的原理。

## 0x0 `bind` 

`bind` 用于绑定函数的执行上下文，也就是 `this` 的指向。*何为 this ？*[JavaScript 101：This is this](/post/2020/06/05/javascript-101-this-is-this/)。

```javascript
function foo (n) {
  if (n<0) return;
  console.log(this);
  foo(n-1);
}

foo(3); 
// Object [global] * 3
foo.call({ test: "test"}, 3); 
// { test: 'test' } * 1; Object [global] * 3
const foo2 = foo.bind({ test: "test"});
foo2(3);
// { test: "test"} * 4
```

尤其是在递归函数中，如果不使用 `bind()` 可能会被轻易改变 this 的指向。在 [MDN bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 中也有一个很棒的例子说明 `bind` 的作用。 



## 0x1 原理

`bind()` 接受一个参数用于指明需要绑定的 this。然后返回一个被绑定 this 的函数，用来代替原始的函数。

```javascript
function myBind (newThis) {
  // foo.myBind() 调用时，this 指向 foo 函数
  var fn = this;
  return function () {
    return fn.apply(newThis, arguments);
  }
}
```

注意到 bind 函数的语法，还需要加上有关于参数处理。

```javascript {4,7}
function myBind (newThis) {
  // 对 arguments 进行处理，除去第一个参数，后续的都是附加参数。
  var splice = Array.prototype.splice;
  var args1 = splice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error("不可以绑定非函数类型");
  }
  return function () {
    var args2 = splice.call(arguments, 0);
    // 形成了一个闭包，仍可以访问外部作用域。
    return fn.apply(newThis, args2.concat(args1));
  }
}
```

