---
title: JavaScript 101：尺寸和大小和移动
date: 2021-01-20 16:11:55
categories: ["计算机"]
tags: ["Javascript","101",'ViewUI']
---

## Let's Scrolling
学习了一下 ViewUI 中的 Affix 组件，加上近期的工作都和滚动有关。因此在这里整理一下有关于滚动的知识和浏览器中各个尺寸的概念。

### 各种尺寸
根据 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 的属性列表依次列出：
`clientHeight`, `clientLeft`, `clientTop`, `clientWidth`, `scrollHeight`, `scrollLeft`, `scrollLeftMax`, `scrollTop`, `scrollTopMax`, `scrollWidth `

根据 [HTMMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) 的属性列表依次列出：
`offsetHeight`，`offsetLeft`, `offsetTop`, `offsetWidth`

根据 [Window]() 的属性列表依次列出：
`outerHeight`, `outerWidth `, `pageXOffset`, `pageYOffset`, `screenX`, `screenY`

### I. client* 元素系
| 属性名（*Name） | 只读   | 返回值类型 | 描述                                                              |
| --------------- | ------ | ---------- | ----------------------------------------------------------------- |
| *Height         | `true` | `Int`      | 元素内部高度 + 内边距，**不**包括水平滚动条，边框与外边距。       |
| *Width          | `true` | `Int`      | 元素内部宽度       + 内边距，**不**包括垂直滚动条、外边距和边框。 |
| *Top *Left      | `true` | ``         | 一个元素上面，左边边框（border）的宽度                            |

*为啥没有 clientRight 和 clientBottom 呢*

<JS101PlayGround type="Client" name="Client系是什么（box-sizing 为 border-box）"/>

### II. scroll* 
| 属性名（*Name） | 只读   | 返回值类型 | 描述                                                              |
| --------------- | ------ | ---------- | ----------------------------------------------------------------- |
| *Height         | `true` | `Int`      | **不**存在滚动条的情况下，适应容器内部的所有内容的最小高度        |
| *Width          | `true` | `Int`      | 元素内部宽度       + 内边距，**不**包括垂直滚动条、外边距和边框。 |
| *Top *Left      | `true` | ``         | 一个元素上面，左边边框（border）的宽度                            |

<JS101PlayGround type="Scroll" name="Scroll系是什么"/>