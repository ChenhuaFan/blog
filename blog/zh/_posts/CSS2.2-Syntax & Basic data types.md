---
title: 'CSS2.2-Syntax & Basic data types'
date: 2021-01-25 08:46:27
categories: ['']
tags: ['css']
---

## 传送门
[总览](/post/2021/01/24/cascading-style-sheets-level-2-revision-2-css-2-2-specification/)

### Statement(@rules, rules)
```css
/* @rules -> Statement */
@import "theme.css"

/* rule sets(rules) -> Statement */ 
/*
    h1 -> selector
    { ... } -> declaration block
    ... -> 0 or more declarations & @rules(?).
    color: red; -> declarations
*/
h1 { 
    color: red;
    font-size: 10pt /* semicolon can be omitted when it's the last line. */
}

/* rule */
h2 {
    color: green;
}
```

::: tip
Comment (?)
> CSS level 2 has no at-rules that may appear inside rule sets, but such at-rules may be defined in future levels.
:::

### Statement(rules, selector, declaration-block)
```css
/* selector is everything up to the first '{' */ 
h1, h2, h3 {
    color: red;
}

/* a invalid selector will cause the parser ignores the whole statement */
/* & is not a valid token in CSS2.2 */
h1, h2 & h3 {
    color: green;
}
```

### Declaration(property)
```css
/* A declaration is either empty or consists of a property name, followed by a colon (:), followed by a property value. Around each of these there may be white space. */
h1 {
    color: red; /* color -> property, red -> property value */
}
```

### Relative units (em, ex)
Child elements do not inherit the relative values specified for their parent; they inherit the computed values(values after browser computed).
```css
/* In the following rules, the computed 'text-indent' value of "h1" elements will be 36px, not 45px, if "h1" is a child of the "body" element. */

body {
  font-size: 12px;
  text-indent: 3em;  /* i.e., 36px */
}
h1 { font-size: 15px }
```

### Data type