---
title: 'JavaScript 101: Dimensioning and Sizing and Moving'
date: 2021-08-07 16:11:55
categories: ["Computer"]
tags: ["Javascript", "101",'ViewUI']
---

## Let's Scrolling

I've been learning about the Affix component of ViewUI, and I've been working on something related to scrolling lately. So here's a little bit of knowledge about scrolling and the concept of various sizes in the browser.

### Various sizes

List of attributes according to [HTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) in order.
`clientHeight`, `clientLeft`, `clientTop`, `clientWidth`, `scrollHeight`, `scrollLeft`, `scrollLeftMax`, `scrollTop`, `scrollTopMax`, `scrollWidth`

List of properties according to [HTMMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) in order.
`offsetHeight`, `offsetLeft`, `offsetTop`, `offsetWidth`

The list of properties according to [Window]() is listed in the following order.
`outerHeight`, `outerWidth`, `pageXOffset`, `pageYOffset`, `screenX`, `screenY`

### I. client* element family

| Property Name (*Name) | Read-only | Return Value Type | Description |
| --------------- | ------ | ---------- | ----------------------------------------------------------------- |
| *Height | `true` | `Int` | The inner height of the element + the inner margin, **not** including horizontal scrollbars, borders and outer margins.       | *Width
| *Width | `true` | `Int` | The internal width of the element + the inner margin, **not** including vertical scrollbars, outer margins and borders. |
| *Top*Left | `true` | `` | The width of the left margin (border) above an element.

*Why is there no clientRight and clientBottom?

<JS101PlayGround type="Client" name="What is the Client family (box-sizing is content-box)"/>

### II. scroll*

| property name (*Name) | read-only | return value type | description |
| --------------- | ------ | ---------- | ----------------------------------------------------------------- |
| *Height | `true` | `Int` | **Minimum height to fit all content inside the container without **the presence of scrollbars |
| *Width | `true` | `Int` | The inner width of the element + the inner margin, **excluding vertical scrollbars, outer margins and borders. |
| *Top*Left | `true` | `` | The width of the left margin (border) above an element |

<JS101PlayGround type="Scroll" name="What is the Scroll system"/>

Translated with www.DeepL.com/Translator (free version)
