(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{649:function(s,t,a){"use strict";a.r(t);var n=a(71),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"层叠式样式表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠式样式表"}},[s._v("#")]),s._v(" 层叠式样式表")]),s._v(" "),a("p",[s._v("层叠式样式表中的层叠就是一种规则，用来帮助浏览器在样式冲突的情况下判定使用哪一个样式。它由一个流程和一系列规则所共同确定。")]),s._v(" "),a("h2",{attrs:{id:"优先级-4个数字的集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级-4个数字的集合"}},[s._v("#")]),s._v(" 优先级：4个数字的集合")]),s._v(" "),a("p",[s._v("这 4 个数字分别对应着 4个 挡位的优先级、每一位都可以是任意自然数（取决于"),a("strong",[s._v("同挡位")]),s._v("下有多少个样式在描述）：从左往右；例如：(1,0,0,0) 优先级一定比 (0,1,0,0) 大。实际上只要有挡位上的区别，无论后面的数字多大，都是挡位大的优先级最高：(1,0,0,0) > (0,2,0,0)。")]),s._v(" "),a("p",[s._v("具体关于每个挡位如何计算，如下所示：")]),s._v(" "),a("ol",[a("li",[s._v("内联样式 -> X,0,0,0")]),s._v(" "),a("li",[s._v("ID属性值 -> 0,X,0,0")]),s._v(" "),a("li",[s._v("类属性值、属性选择或伪类 -> 0,0,X,0")]),s._v(" "),a("li",[s._v("元素或伪元素 -> 0,0,0,X")]),s._v(" "),a("li",[s._v("结合符和通配选择器 -> 0,0,0,0")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* id 选择器 (1,0,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 类选择器 (0,1,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 属性选择器 (0,1,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('*[type="password"]')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 110px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 伪类 (0,1,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("*:hover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 120px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 类、属性 (0,2,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('.class[type="password"]')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 150px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 类、属性、伪类 (0,3,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('.class[type="password"]:hover')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 140px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 巨无霸汉堡 (0,6,0) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('.class[type="password"]:hover + .class2[type="password"]:active')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 150px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 元素选择器 (0,0,1) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 伪元素 (0,0,1) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("*::after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 元素、伪元素 (0,0,2) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1::after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 类、属性、伪元素 (0,2,1) */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('.class[type="password"]::after')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("p",[s._v("实际上可以看出，不同类型的选择器组合在一起从而影响最终该样式的优先级的算法就是"),a("strong",[s._v("按位加")]),s._v("。之后优先级高的获胜。")]),s._v(" "),a("p",[s._v("至于为何 "),a("code",[s._v("+")]),s._v(" "),a("code",[s._v(">")]),s._v(" "),a("code",[s._v("*")]),s._v(" 之类的结合符和通配选择器不影响优先级是因为他们的优先级是 "),a("code",[s._v("(0,0,0,0)")]),s._v("。参与运算不会造成任何影响。")]),s._v(" "),a("p",[s._v("总结："),a("code",[s._v("(内联, id, 类相关, 元素相关)")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"重要性-important"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要性-important"}},[s._v("#")]),s._v(" 重要性：!important")]),s._v(" "),a("p",[s._v("脱离于上述规则之外，优先级永远最高。")]),s._v(" "),a("h2",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[s._v("#")]),s._v(" 来源")]),s._v(" "),a("p",[s._v("CSS 有三种不同的来源：作者（author），用户（user），用户代理（user-agent）。")]),s._v(" "),a("ul",[a("li",[s._v("作者（author）：就是由前端开发者编写的样式。")]),s._v(" "),a("li",[s._v("用户（user）：就是由浏览器用户自定义的一些属性。")]),s._v(" "),a("li",[s._v("用户代理（user-agent）：就是浏览器默认的样式。")])]),s._v(" "),a("h2",{attrs:{id:"层叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠"}},[s._v("#")]),s._v(" 层叠")]),s._v(" "),a("p",[s._v("当浏览器遇到对于同一元素的多种样式声明时，会依据"),a("strong",[s._v("优先级")]),s._v("、"),a("strong",[s._v("重要性")]),s._v("和"),a("strong",[s._v("来源")]),s._v("来判定哪一个声明会最终生效。这一规则的排序关系被称为层叠。")]),s._v(" "),a("ol",[a("li",[s._v("看来源："),a("code",[s._v("user(用户)!important > author(作者)!important > author > user > user agent")]),s._v("。")]),s._v(" "),a("li",[s._v("来源不能区分的话，看优先级：也就是比较 (x,x,x,x)。")]),s._v(" "),a("li",[s._v("优先级相同时看出现的位置：越是最后定义的样式权重越高。"),a("code",[s._v("@import")]),s._v(" 导入的被认为是靠前。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);