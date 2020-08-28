---
title: Javascript 101
date: 2020-04-20 16:54:33
categories: ["计算机"]
tags: ["Javascript","101"]
---

何为 JavaScript？ 何为 ECMAScript？
<!--more-->

# Javascript 101

## 1. 写在前面

2016年前，**Javascirpt** 是脚本语言，使用于浏览器环境。开发的软件还分为B/S结构和C/S架构。最著名的JS库是JQuery。在学校能学习到的前端开发有关于Javascirpt的内容，都是基于 **ECMAScript 5th** 标准（于2011年推出 5.1 版）。但仿佛在一夜之间，一切都变了。


## 2.  ECMAScript （ES）？

在刚接触 Javascript 的时候，从来没有听别人说起过 ES 。但随着更多新的前端框架和工具在2016、2017年涌现之后，ES 突然出现在了，至少是我的视野里。

在说明什么是ES之前，先来梳理一下什么是JS。

**Javascript 实现** javascript组成

> {% asset_img javascript组成.png [javascript组成] %}
>
> Javascirpt 由3个核心构成：ES + DOM + BOM
>
> ——《Javascript高级程序设计 第三版》

DOM很熟悉，文档对象模型。BOM是浏览器对象模型。这两个部分与ES一起，共同组成了 Javascript。<u>Javasciprt 是对于 **ECMA 国际**这一组织发布的 **ECMA-262** 所定义的脚本语言的规范的一种实现</u>。现在我们经常使用的浏览器，实际上只是实现 ECMAScript 标准的环境之一。也就是说浏览器要实现 ECMA 所定义的各项语言语法，从而实现 ECMA 兼容；同时也要同时提供语言拓展，让语言和环境可以实现交互（DOM）。因此，我们可以见得，Node 也是一种环境以实现 ECMAScript 标准。

| 版本  | 说明                                 | 发表时间       |
| ----- | ------------------------------------ | -------------- |
| 5/5.1 | 我们在学校所学到的                   | 2009.12/2011.6 |
| 6     | 我们所称的 ES2015，ECMAScript 6，ES6 | 2015.6         |
| 7     | ES2016, ES7                          | 2016.6         |
| 8     | ES2017, ES8                          | 2017.6         |
| 9     | ES2018, ES9                          | 2018.6         |
| 10    | ES2019, ES10                         | 2019.6         |

*学不动了，学不动了*

## 3. DOM

文件对象模型（DOM，Document Object Model）。DOM 将整个页面映射为一个节点树，我们也称其为 DOM 树。浏览器实现了一些操作 DOM 节点的 API，我们从而可以使用这些 API 来添加删除修改任何页面节点。JQuery 这个 JS 库将 DOM 操作又进行了一层封装，出神入化。以至于很多初学者相比于原生浏览器的DOM操作更熟悉 JQuery 的操作：

```javascript
// JQuery 获取一个节点
$("#box");
// 原生 DOM API 获得一个节点
Document.getElementById("box");
```

## 4. BOM

浏览器对象模型（BOM，Browser Object Model）。也是一个老面孔了，当我们想要获取或者操作浏览器时，这是最经常使用的一系列 API。

以下是一些 BOM 的一些功能

* 弹窗
* 移动，缩放，关闭窗口
* Navigator 对象
* Location 对象
* 屏幕分辨率尺寸
* Cookies
* XMLHttpRequest 对象
* ...











