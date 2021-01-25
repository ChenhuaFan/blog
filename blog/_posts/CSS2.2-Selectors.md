---
title: 'CSS2.2-Selectors'
date: 2021-01-25 08:51:47
categories: ['']
tags: [css]
---

# 选择器 Selectors
## 模式匹配 Pattern matching

用于确定将某种样式应用的某个文档树的元素上的**匹配规则(Patterns)**，称为**选择器(Selectors)**。

大小写敏感：取决的文档是否是大小写敏感的，HTML 大小写不敏感，而 XML 则大小写敏感。

### CSS22 选择器
| 模式 (`Basic`)`Selector`   | 匹配的元素                                                                         | 详细说明锚点                                                         |
| -------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `Basic` `*`                | 任意元素                                                                           | [通用选择器(Universal Selector)](#通用选择器-universal-selector)     |
| `Basic` `E`                | 任意 E 元素                                                                        | [类型选择器(Type Selectors)](#类型选择器-type-selectors)             |
| `E F`                      | 任意是 E 元素后代的 F 元素                                                         | [后代选择器(Descendant Selectors)](#后代选择器-descendant-selectors) |
| `E > F`                    | 任意是 E 元素的孩子节点的 F 元素                                                   | [孩子选择器(Child Selectors)]()                                      |
| `E:first-child`            | 元素 E，当且仅当 E 是其父元素的第一个孩子节点                                      | [:first-child 伪类]()                                                |
| `E:link E:visited`         | 资源锚点或超连接符合相应状态的 E 元素：还没被访问（:link）或已经被访问（:visited） | [link 伪类]()                                                        |
| `E:active E:hover E:focus` | 响应相关用户动作的 E 元素                                                          | [动态的伪类(Dynamic 伪类)]()                                         |
| `E:lang(c)`                | 是否符合相关语言 c 的 E 元素                                                       | [语言伪类(:lang() 伪类)]()                                           |
| `E + F`                    | 兄弟元素是 F 元素的 E 元素                                                         | [相邻兄弟选择器(Adjacent Selectors)]()                               |
| `E[foo]`                   | 任何带有 foo 数据key的 E 元素                                                      | [属性选择器(Attribute Selectors)]()                                  |
| `E[foo="warning"]`         | 任何带有 foo 数据key，且其值为 "warning" 的 E 元素                                 | [属性选择器(Attribute Selectors)]()                                  |
| `E[foo~="warning"]`        | 任何带有 foo数据key，其对应值由若干值和空白分隔符组成，且某一个值为 "warning"      | [属性选择器(Attribute Selectors)]()                                  |
| `E[lang|="en"]`            | 匹配任何E元素，其“lang”属性具有以“en”开头的值列表(从左边开始)，以连字符分隔        | [属性选择器(Attribute Selectors)]()                                  |
| `DIV.warning`              | 在 HTML 中，与 DIV[class~="warning"] 效果相同                                      | [类选择器(Class Selectors)]()                                        |
| `E#myid`                   | 任何 id 为 "myid" 的 E 元素                                                        | [ID选择器(ID Selectors)]()                                           |

### 选择器语法
一个**简单选择器(Simple Selector)**是一个后面紧跟 0 或者多个**属性选择器**、**ID选择器**或**伪类**的**类型选择器(Type Selector)**或**通用选择器(Universal Selector)**。

```css
/* 简单选择器 */
div { color: black; }
div.warning.error { color: red; }
div#id { color: orange; }
*.warning { color: red; }
.warning { color: white; }
```

一个选择器(Selector)是一串一个或多个简单选择器由**连接符**(Combinators)构成的。连接符包括：` `、`>` 和 `+`，其中空格可能出现在连接符和简单选择器之间。

文档树中与选择器匹配的元素称为选择器的表现对象(Subjects)。由单个简单选择器组成的选择器匹配任何满足其要求的元素。将一个简单的选择器和连接符(Combinators)前置到一个链上会增加额外的匹配约束，因此选择器的对象(Subjects)总是匹配最后一个简单选择器的元素的子集。

<!-- 一个伪类会出现在链中的最后一个简单选择器上，伪类适用于被筛选的对象(Subjects)。 -->

**(?)** One pseudo-element may be appended to the last simple selector in a chain, in which case the style information applies to a subpart of each subject. 

#### 合并声明
当多个选择器公用一些生命，它们可以合并起来
```css
h1 { color: red; }
h2 { color: red; }
h3 { color: red; }

/* 可以合并 */
h1, h2, h3 { color: red; } 
```

### 通用选择器 (Universal Selector)
通用选择器可以匹配任何文档树中的元素。如果通用选择器不是简单选择器的唯一元素，则可以省略它
```css
/* * 可以省略，因为简单选择器还包含属性选择器 */
*[lang=fr] { color: blue; }
[lang=fr] { color: blue; }

*.className { color: red; }
.className { color: red; }

/* * 不可以省略，因为简单选择器仅有一个通用选择器 */
* { color: black; }
```
[回到列表](#css22-选择器)

### 类型选择器 (Type Selectors)
类型选择器匹配了文档树中相应的元素。
```css
h1 { font-family: sans-serif; }
```
[回到列表](#css22-选择器)

### 后代选择器 (Descendant Selectors)
有时，开发者可能想要选择到文档树中某个元素的后代元素。后代选择器描述了这种模式。一个后代选择器包含 2 个或更多的选择器（由空格分割）。形式如 `A B` 的后代选择器表明 `B` 元素是 `A` 元素的后代。

::: tip
The following selector:

`div * p`
matches a P element that is a grandchild or later descendant of a DIV element. Note the white space on either side of the "*" is not part of the universal selector; the white space is a combinator indicating that the DIV must be the ancestor of some element, and that that element must be an ancestor of the P. 
:::