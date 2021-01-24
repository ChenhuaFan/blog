---
title: 'Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification'
date: 2021-01-24 01:35:06
categories: ['计算机']
tags: ['css']
---

# CSS LEVEL 2 REVISION 2
[规范传送门](https://www.w3.org/TR/CSS22/)

## Notes
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
