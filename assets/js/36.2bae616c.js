(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{647:function(t,s,e){"use strict";e.r(s);var a=e(71),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"选择器-selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器-selectors"}},[t._v("#")]),t._v(" 选择器 Selectors")]),t._v(" "),e("h2",{attrs:{id:"模式匹配-pattern-matching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式匹配-pattern-matching"}},[t._v("#")]),t._v(" 模式匹配 Pattern matching")]),t._v(" "),e("p",[t._v("用于确定将某种样式应用的某个文档树的元素上的"),e("strong",[t._v("匹配规则(Patterns)")]),t._v("，称为"),e("strong",[t._v("选择器(Selectors)")]),t._v("。")]),t._v(" "),e("p",[t._v("大小写敏感：取决的文档是否是大小写敏感的，HTML 大小写不敏感，而 XML 则大小写敏感。")]),t._v(" "),e("h3",{attrs:{id:"css22-选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css22-选择器"}},[t._v("#")]),t._v(" CSS22 选择器")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("模式 ("),e("code",[t._v("Basic")]),t._v(")"),e("code",[t._v("Selector")])]),t._v(" "),e("th",[t._v("匹配的元素")]),t._v(" "),e("th",[t._v("详细说明锚点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("Basic")]),t._v(" "),e("code",[t._v("*")])]),t._v(" "),e("td",[t._v("任意元素")]),t._v(" "),e("td",[e("a",{attrs:{href:"#%E9%80%9A%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8-universal-selector"}},[t._v("通用选择器(Universal Selector)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Basic")]),t._v(" "),e("code",[t._v("E")])]),t._v(" "),e("td",[t._v("任意 E 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:"#%E7%B1%BB%E5%9E%8B%E9%80%89%E6%8B%A9%E5%99%A8-type-selectors"}},[t._v("类型选择器(Type Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E F")])]),t._v(" "),e("td",[t._v("任意是 E 元素后代的 F 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:"#%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8-descendant-selectors"}},[t._v("后代选择器(Descendant Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E > F")])]),t._v(" "),e("td",[t._v("任意是 E 元素的孩子节点的 F 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:"#%E5%AD%A9%E5%AD%90%E9%80%89%E6%8B%A9%E5%99%A8-child-selectors"}},[t._v("孩子选择器(Child Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E:first-child")])]),t._v(" "),e("td",[t._v("元素 E，当且仅当 E 是其父元素的第一个孩子节点")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v(":first-child 伪类")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E:link E:visited")])]),t._v(" "),e("td",[t._v("资源锚点或超连接符合相应状态的 E 元素：还没被访问（:link）或已经被访问（:visited）")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("link 伪类")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E:active E:hover E:focus")])]),t._v(" "),e("td",[t._v("响应相关用户动作的 E 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("动态的伪类(Dynamic 伪类)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E:lang(c)")])]),t._v(" "),e("td",[t._v("是否符合相关语言 c 的 E 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("语言伪类(:lang() 伪类)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E + F")])]),t._v(" "),e("td",[t._v("兄弟元素是 F 元素的 E 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("相邻兄弟选择器(Adjacent Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E[foo]")])]),t._v(" "),e("td",[t._v("任何带有 foo 数据key的 E 元素")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("属性选择器(Attribute Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('E[foo="warning"]')])]),t._v(" "),e("td",[t._v('任何带有 foo 数据key，且其值为 "warning" 的 E 元素')]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("属性选择器(Attribute Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('E[foo~="warning"]')])]),t._v(" "),e("td",[t._v('任何带有 foo数据key，其对应值由若干值和空白分隔符组成，且某一个值为 "warning"')]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("属性选择器(Attribute Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('E[lang|="en"]')])]),t._v(" "),e("td",[t._v("匹配任何E元素，其“lang”属性具有以“en”开头的值列表(从左边开始)，以连字符分隔")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("属性选择器(Attribute Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("DIV.warning")])]),t._v(" "),e("td",[t._v('在 HTML 中，与 DIV[class~="warning"] 效果相同')]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("类选择器(Class Selectors)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("E#myid")])]),t._v(" "),e("td",[t._v('任何 id 为 "myid" 的 E 元素')]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("ID选择器(ID Selectors)")])])])])]),t._v(" "),e("h3",{attrs:{id:"选择器语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器语法"}},[t._v("#")]),t._v(" 选择器语法")]),t._v(" "),e("p",[t._v("一个"),e("strong",[t._v("简单选择器(Simple Selector)"),e("strong",[t._v("是一个后面紧跟 0 或者多个")]),t._v("属性选择器")]),t._v("、"),e("strong",[t._v("ID选择器")]),t._v("或"),e("strong",[t._v("伪类")]),t._v("的"),e("strong",[t._v("类型选择器(Type Selector)"),e("strong",[t._v("或")]),t._v("通用选择器(Universal Selector)")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 简单选择器 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div.warning.error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div#id")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*.warning")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".warning")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("一个选择器(Selector)是一串一个或多个简单选择器由"),e("strong",[t._v("连接符")]),t._v("(Combinators)构成的。连接符包括："),e("code"),t._v("、"),e("code",[t._v(">")]),t._v(" 和 "),e("code",[t._v("+")]),t._v("，其中空格可能出现在连接符和简单选择器之间。")]),t._v(" "),e("p",[t._v("文档树中与选择器匹配的元素称为选择器的表现对象(Subjects)。由单个简单选择器组成的选择器匹配任何满足其要求的元素。将一个简单的选择器和连接符(Combinators)前置到一个链上会增加额外的匹配约束，因此选择器的对象(Subjects)总是匹配最后一个简单选择器的元素的子集。")]),t._v(" "),e("p",[e("strong",[t._v("(?)")]),t._v(" One pseudo-element may be appended to the last simple selector in a chain, in which case the style information applies to a subpart of each subject.")]),t._v(" "),e("h4",{attrs:{id:"合并声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并声明"}},[t._v("#")]),t._v(" 合并声明")]),t._v(" "),e("p",[t._v("当多个选择器公用一些生命，它们可以合并起来")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 可以合并 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1, h2, h3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"通用选择器-universal-selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用选择器-universal-selector"}},[t._v("#")]),t._v(" 通用选择器 (Universal Selector)")]),t._v(" "),e("p",[t._v("通用选择器可以匹配任何文档树中的元素。如果通用选择器不是简单选择器的唯一元素，则可以省略它")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* * 可以省略，因为简单选择器还包含属性选择器 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*[lang=fr]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[lang=fr]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*.className")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".className")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* * 不可以省略，因为简单选择器仅有一个通用选择器 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[e("a",{attrs:{href:"#css22-%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("回到列表")])]),t._v(" "),e("h3",{attrs:{id:"类型选择器-type-selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型选择器-type-selectors"}},[t._v("#")]),t._v(" 类型选择器 (Type Selectors)")]),t._v(" "),e("p",[t._v("类型选择器匹配了文档树中相应的元素。")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sans-serif"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("a",{attrs:{href:"#css22-%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("回到列表")])]),t._v(" "),e("h3",{attrs:{id:"后代选择器-descendant-selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后代选择器-descendant-selectors"}},[t._v("#")]),t._v(" 后代选择器 (Descendant Selectors)")]),t._v(" "),e("p",[t._v("有时，开发者可能想要选择到文档树中某个元素的后代元素。后代选择器描述了这种模式。一个后代选择器包含 2 个或更多的选择器（由空格分割）。形式如 "),e("code",[t._v("A B")]),t._v(" 的后代选择器表明 "),e("code",[t._v("B")]),t._v(" 元素是 "),e("code",[t._v("A")]),t._v(" 元素的后代。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如下的选择器:")]),t._v(" "),e("p",[e("code",[t._v("div * p")]),t._v("\n匹配一个是某个 "),e("code",[t._v("div")]),t._v(" 元素的孙子或者之后后代的 "),e("code",[t._v("P")]),t._v(" 元素。注意 "),e("code",[t._v("*")]),t._v(" 两边的空格不是通用选择器；空格只是一个连接符用于表明 "),e("code",[t._v("div")]),t._v(" 必须是某个元素的祖先并且是 "),e("code",[t._v("p")]),t._v(" 元素的祖先。")])]),t._v(" "),e("h3",{attrs:{id:"孩子选择器-child-selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#孩子选择器-child-selectors"}},[t._v("#")]),t._v(" 孩子选择器 (Child Selectors)")]),t._v(" "),e("p",[t._v("孩子选择器按照规则选择某元素的孩子元素。一个孩子选择器由两个或更多的被 "),e("code",[t._v(">")]),t._v(" 分割的选择器组成。")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择所有为 body 的孩子元素的 p 标签 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body > p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如下是一个例子：后代选择器和孩子选择器。从后往前：匹配一个p标签，且是li标签的后代并且li是ol的孩子并且ol是div的后代 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div ol>li p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"兄弟选择器-adjacent-sibling-selectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兄弟选择器-adjacent-sibling-selectors"}},[t._v("#")]),t._v(" 兄弟选择器 (Adjacent sibling selectors)")]),t._v(" "),e("p",[t._v("兄弟选择器遵循如下规则：E1 + E2，并且 E2 是选择器的一个部分（subject）。这个选择器仅当 E1 和 E2 在文档树中共享一个父节点且 E1 紧挨着 E2 时触发。同时，忽略非元素节点（文字节点或注释）")]),t._v(" "),e("p",[t._v("Thus, the following rule states that when a P element immediately follows a MATH element, it should not be indented:")]),t._v(" "),e("p",[t._v("math + p { text-indent: 0 }")]),t._v(" "),e("p",[t._v("The next example reduces the vertical space separating an H1 and an H2 that immediately follows it:")]),t._v(" "),e("p",[t._v("h1 + h2 { margin-top: -5mm }")]),t._v(" "),e("p",[t._v('The following rule is similar to the one in the previous example, except that it adds a class selector. Thus, special formatting only occurs when H1 has class="opener":')]),t._v(" "),e("p",[t._v("h1.opener + h2 { margin-top: -5mm }")]),t._v(" "),e("h3",{attrs:{id:"属性选择器-attribute-selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性选择器-attribute-selector"}},[t._v("#")]),t._v(" 属性选择器 (Attribute Selector)")]),t._v(" "),e("p",[t._v("Attribute selectors may match in four ways:")]),t._v(" "),e("p",[t._v('[att]\nMatch when the element sets the "att" attribute, whatever the value of the attribute.')]),t._v(" "),e("p",[t._v('[att=val]\nMatch when the element\'s "att" attribute value is exactly "val".')]),t._v(" "),e("p",[t._v('[att~=val]\nRepresents an element with the att attribute whose value is a white space-separated list of words, one of which is exactly "val". If "val" contains white space, it will never represent anything (since the words are separated by spaces). If "val" is the empty string, it will never represent anything either.')]),t._v(" "),e("p",[t._v('[att|=val]\nRepresents an element with the att attribute, its value either being exactly "val" or beginning with "val" immediately followed by "-" (U+002D). This is primarily intended to allow language subcode matches (e.g., the hreflang attribute on the a element in HTML) as described in BCP 47 ([BCP47]) or its successor. For lang (or xml:lang) language subcode matching, please see the :lang pseudo-class.')]),t._v(" "),e("p",[t._v("Attribute values must be identifiers or strings. The case-sensitivity of attribute names and values in selectors depends on the document language.")]),t._v(" "),e("h3",{attrs:{id:"伪类-伪元素-pseudo-elements-pseudo-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪类-伪元素-pseudo-elements-pseudo-classes"}},[t._v("#")]),t._v(" 伪类 & 伪元素 (Pseudo-elements & Pseudo-classes)")]),t._v(" "),e("p",[t._v("CSS introduces the concepts of pseudo-elements and pseudo-classes to permit formatting based on information that lies outside the document tree.")]),t._v(" "),e("ul",[e("li",[t._v("Pseudo-elements create abstractions about the document tree beyond those specified by the document language. For instance, document languages do not offer mechanisms to access the first letter or first line of an element's content. CSS pseudo-elements allow style sheet designers to refer to this otherwise inaccessible information. Pseudo-elements may also provide style sheet designers a way to assign style to content that does not exist in the source document (e.g., the :before and :after pseudo-elements give access to generated content).")]),t._v(" "),e("li",[t._v("Pseudo-classes classify elements on characteristics other than their name, attributes or content; in principle characteristics that cannot be deduced from the document tree. Pseudo-classes may be dynamic, in the sense that an element may acquire or lose a pseudo-class while a user interacts with the document. The exceptions are ':first-child', which can be deduced from the document tree, and ':lang()', which can be deduced from the document tree in some cases.")])]),t._v(" "),e("p",[t._v("Neither pseudo-elements nor pseudo-classes appear in the document source or document tree.")])])}),[],!1,null,null,null);s.default=n.exports}}]);