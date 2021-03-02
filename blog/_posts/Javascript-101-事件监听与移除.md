---
title: 'Javascript-101-事件监听与移除'
date: 2021-03-02 14:56:29
categories: ['']
tags: ['Javascript']
---

## 添加
html DOM 元素有很多on开头的监听事件，如onload、onclick等。但是同一种事件，后面注册的会覆盖前面的：
```javascript
window.onresize = function(){
    alert(1);
}
window.onresize = function(){
    alert(2);
}
// 改变窗口大小时，只会弹出2
```

### addEventListener
利用addEventListener添加监听事件，可以重复添加，并不会互相覆盖： 
```javascript
window.addEventListener("resize",function(){
    alert(1)
})
window.addEventListener("resize",function(){
    alert(2)
})
// 改变窗口大小时，先后弹出1和2
```

## 移除 removeEventListener
removeEventListener跟addEventListener相对应，用于移除事件监听。如果要移除事件句柄，addEventListener() 的执行函数必须使用外部具名函数，匿名函数事件是无法移除的。
```javascript
// 匿名函数事件无法移除
window.addEventListener("resize",function(){
    alert(1)
})
 
// 监听具名函数事件
function myResize(){
    alert(2)
}
window.addEventListener("resize",myResize)
// 移除事件监听
window.removeEventListener("resize",myResize)
```
