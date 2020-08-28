---
title: 'JavaScript 101: this is this'
date: 2020-06-05 22:42:59
categories: ["计算机"]
tags: ["Javascript","101","this"]
---

## 1. 全局坏境

```javascript
// 当在任何函数执行外，指向 windows
console.log(this === window); // true
a = 10;
console.log(a); // 10
console.log(this.a) // 10
this.b = 5; // 等价于 b = 5;
```

**暂时偏个题**，聊聊全局变量

值得注意的是，`var` 声明变量的时候会将变量添加到 window 中：

```javascript
var a = 10;
console.log(window.a) //10;
```

**而从 ES6 开始**，加入了 `let` 和 `const`， 在全局环境下声明变量将不会再加入 window 中。

```javascript
let a = 10;
console.log(window.a) // undefined
```

> - let 定义的全局变量并不存在于 顶级对象中，而是存在于和顶级对象平行的一个全局作用域中
> - 亦或者可以说 let 和 const 定义的变量是存在于作用链的顶端的，根据作用域链的访问规则，可以访问到全局变量

**偏题结束**

## 2. 函数执行环境

1. 简单调用 *非严格模式*

   ```javascript
   // 全局环境下
   function foo() {
     return this;
   }
   foo(); // window. 直接调用，this 默认指向 window
   ```

2. 简单调用 **严格模式**

   ```javascript
   function foo() {
     "use strict";
   	return this;
   }
   foo(); // undefined;
   ```

   ```javascript
   "use strict";
   var foo = function () {
     return this;
   }
   foo(); // undefined, 严格模式。非严格模式默认指向 window
   window.foo(); // window. this 指向执行环境，也就是调用了它的对象。
   let foo1 = function () {
     return this;
   }
   foo1(); // undefined, 严格模式。非严格模式默认指向 window
   ```

3. 使用 `call` 或者 `apply` 传递 `this`

   ```javascript
   function foo(a, b) {
     return this + a + b;
   }
   foo.call(1, 2, 3); // 6. 因为此时 this 为 Number 对象 this.valueOf() 为 1；
   foo.apply(1, [2,3]); // 6. 同理. apply 要求第二个参数是数组。
   ```

   **注意！**

   > 如果通过 call 或者 apply 传递的第一个参数是原始值，则会隐式地使用其构造函数将其转化为对象。

   使用`bind` **绑定** this。

   ```javascript
   function foo(len) {
     if (len===0) return;
     console.log(this);
     foo(len-1);
   }
   foo = foo.bind({"this": "bind this"});
   foo(4); // {this: "bind this"} * 4
   
   // call, 不会绑定 this
   foo.call({"this": "bind this"}, 4);
   // {this: "bind this"}, window * 3. 直接调用，this 默认指向 window，且没有始终绑定。
   ```

4. ES6 箭头函数 `()=>{}` 

   > 在[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`this`与封闭词法环境的`this`保持一致。在全局代码中，它将被设置为全局对象：

   ```javascript
   let foo = (()=>this);
   foo(); // window
   ```

   > 注意：如果将`this`传递给`call`、`bind`、或者`apply`来调用箭头函数，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（`thisArg`）应该设置为`null`。

   ```javascript
   let a = {foo: (()=>this)};
   a.foo(); // window
   
   a.foo.call(a); // window; 箭头函数忽略 call
   a.foo.apply(a); // window; 同理
   a.foo.bind(a); // window; 同理
   ```

   **箭头函数会默认帮我们绑定外层this的值，所以在箭头函数中this的值和外层的this是一样的。**

   ```javascript
   var obj = {
     birth: 1990,
     getAge: function () {
       // this -> obj
       var b = this.birth; // 1990
       var fn = function () {
         return new Date().getFullYear() - this.birth; // this指向window或undefined
       };
       return fn(); // 这里实际上是 简单调用。this 被指向了 window
     }
   };
   console.log(obj.getAge()); // NaN，因为内部 fn() 被调用时，this 绑定错误
   
   var obj2 = {
     birth: 1990,
     getAge: function () {
       // this -> obj
       var b = this.birth; // 1990
       var fn = () => {
         // this -> obj.
         return new Date().getFullYear() - this.birth;
       };
       return fn(); // 此时箭头函数被调用时会将 this 指向 obj。使其与外层函数作用域保持一致.
     }
   };
   console.log(obj2.getAge()); // 30
   ```

   可以发现，箭头函数的 this 确实被自动绑定为何外层 this 相同的值。

   ```javascript
   var obj = {
     bar: function () {
       console.log(this);
       var x = (() => this);
       return x;
     }
   };
   // 此时 bar 为对象方法，因此内部 this 为对象。此时箭头函数 this 将于外层函数作用域保持一致，同为该对象。
   var fn = obj.bar();
   console.log(fn() === obj); // true 同时 函数体输出 obj
   // 此时更改了 bar ，从对象方法转变成简单调用。此时 this 会与最外层作用域也就是全局作用域保持一致
   var fn2 = obj.bar;
console.log(fn2()() == window); // true 同时 函数体输出 obj
   ```

   这是另一个很好的例子，说明箭头函数绑定外层 this。
   
   > 作者：limingru 链接：https://juejin.im/post/5aa1eb056fb9a028b77a66fd 来源：掘金
   > ```javascript
   	const obj = {
      a: function() {
            console.log(this)
            window.setTimeout(() => { 
              console.log(this) 
            }, 1000)
      	}
   }
   obj.a.call(obj)  //第一个this是obj对象，第二个this还是obj对象
   	```

   

   **【重要】**有关于箭头函数的 this，其总会与外层保持一致。而这个层，应该指的是**函数作用域**。

   ```javascript
   let a = {
           b: {
             foo: () => this
           }
   }
   let b = {
     foo: function () {
       // 创建了一个函数作用域，箭头函数将保持与作用域内相同的 this 指向。
       return () => this;
     }
   }
   // 此调用外层作用域为全局作用域，因此 this 指向 window
   console.log(a.b.foo() === window) // true
   // 次调用外层作用域为 b.foo() 内部。this 此时为 b
   console.log(b.foo()() === b); // true
   // 将 b.foo() 作用域内的 this 改为 {1:1}, 箭头函数也更改了
   console.log(b.foo.apply({1:1})()); // {1:1}
   // 若为两个嵌套的箭头函数，可以见得，this 为 window。因为与最外层函数定义域保持一致。
   b.foo2 = () => () => this;
   console.log(b.foo2()()); // window
   ```

   【重要】因为 js 使用静态作用域，因此函数作用域在定义时就被确定。因此对于箭头函数而言，**外层作用域在定义时就已确定**：
   
   ```javascript
   // 在外部申明的箭头函数
   let callback = () => this;
   let a = {
     	// 使用对象方法包裹箭头函数就可以创造一个独立的作用域。
       foo: function () {
           return callback;
       },
       foo2: function () {
           return () => this;
       }
   }
   console.log(a.foo()()); // window，因为 callback 在定义时其外部就是 window。
   console.log(a.foo2()()); // a, 因为 外部 this 为 a。
   ```
   
   

## 3. 对象方法

当调用对象的方法时，this 指向该对象：

```javascript
let a = {foo: function() {return this}}
a.foo() === a; // true
```

调用对象方法时，多层嵌套遵循就近原则。

```javascript
let a = {
  b: {
    foo: function() {return this}
  }
}
a.b.foo() === a.b // true
```

在原型链中的情况，仍与最近的对象有关，就近原则。this 不会顺着原型链向上寻找。

```javascript
var o = {
  f: function () {
    return this.a + this.b;
  },
  a: 3,
  b: 7
};
var p = Object.create(o);
p.a = 1;
p.b = 4;
console.log(p.f()); // 5, 1+4
console.log(o.f()); // 10, 3+7
```

Getter & Setter 中，this 为当前对象

> 例子来自 MDN
>
> ```javascript
> function sum() {
>   return this.a + this.b + this.c;
> }
> 
> var o = {
>   a: 1,
>   b: 2,
>   c: 3,
>   get average() {
>     return (this.a + this.b + this.c) / 3;
>   }
> };
> 
> Object.defineProperty(o, 'sum', {
>     get: sum, enumerable: true, configurable: true});
> 
> console.log(o.average, o.sum); // logs 2, 6
> ```
>
> [Object.defineProperty 用于设置对象属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)



## 4. 构造函数

this 指向正在被实例化的对象。

## 5. DOM 

在事件处理函数中，this 指向监听器所在的 DOM 元素。



## Reference

1. [词法作用域](https://github.com/mqyqingfeng/blog/issues/3)
2. [MDN this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
3. [回调函数中的 this](https://juejin.im/post/5cdbdd655188252c7e4b2f02)
4. [廖雪峰JavaScript 教程 this](https://www.liaoxuefeng.com/wiki/1022910821149312/1031549578462080)

