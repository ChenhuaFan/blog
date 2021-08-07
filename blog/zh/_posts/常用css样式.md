---
title: '常用css样式'
date: 2020-11-19 14:13:44
categories: ['']
tags: ['css']
---

**这是长期更新的工作总结**

[[TOC]]

## 字体
### 12px 及以下大小字体

```css
.fs-9 {
    font-size: 0.24rem;
    transform: scale(0.75);
}

.fs-10 {
    font-size: 0.24rem;
    transform: scale(0.83);
}

.fs-11 {
    font-size: 0.24rem;
    transform: scale(0.916);
}
```

同时需要注意的是缩放的中心点。因此需要搭配如下类使用，以满足**左中右不同居中格式**下的要求。

```css
.transform-left {
    transform-origin: left;
}

.transform-right {
    transform-origin: right;
}

.transform-center {
    transform-origin: center;
}
```

```html
<p class="fs-10 transform-left">这是10px像素大小的字</p>
```

### 只展示特定行数，超出部分使用省略号
```less
.show-1-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.show-lines-generator (@n: 2) when (@n =< 5) {

    .show-@{n}-lines {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: @n;
        overflow: hidden;
    }

    .show-lines-generator ((@n + 1));
}

.show-lines-generator();
```
