(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{713:function(s,t,a){"use strict";a.r(t);var n=a(71),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("img",{attrs:{src:"https://gillsonions.com/sites/default/files/s3-images/homepage_onionslice_transparent.png",width:"50%"}}),s._v(" "),a("h1",{attrs:{id:"递归-recursion-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归-recursion-i"}},[s._v("#")]),s._v(" 递归 Recursion I")]),s._v(" "),a("p",[s._v("近期在学习 Leetcode 上有关递归的知识点，发现有很多高级算法策略都使用到了递归的思想。递归在一开始学习的时候也是非常容易把自己绕晕。因此在这里做一个系列总结。")]),s._v(" "),a("ul",[a("li",[s._v("递归，从洋葱说起")]),s._v(" "),a("li",[a("a",{attrs:{href:""}},[s._v("递归 plus：加上存储，动态规划")])]),s._v(" "),a("li",[a("a",{attrs:{href:""}},[s._v("分治")])]),s._v(" "),a("li",[a("a",{attrs:{href:""}},[s._v("回溯")])]),s._v(" "),a("li",[a("a",{attrs:{href:""}},[s._v("DFS 与 BFS")])])]),s._v(" "),a("h2",{attrs:{id:"从洋葱说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从洋葱说起"}},[s._v("#")]),s._v(" 从洋葱说起")]),s._v(" "),a("p",[s._v("大家都知道洋葱是一层一层的，剥完一层还有一层直到你遇到洋葱芯为止。经过一段时间的思考发现递归这个思想非常自然，就如同我们日常生活中的洋葱。")]),s._v(" "),a("p",[s._v("首先说一下洋葱和递归的关系：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("某一层")]),s._v("洋葱的"),a("strong",[s._v("皮")]),s._v(" = "),a("strong",[s._v("将要执行的")]),s._v("递归函数")]),s._v(" "),a("li",[a("strong",[s._v("洋葱芯")]),s._v(" = 递归函数的"),a("strong",[s._v("终止")]),s._v("情况")]),s._v(" "),a("li",[a("strong",[s._v("某一层")]),s._v("洋葱的"),a("strong",[s._v("肉")]),s._v(" = 递归函数的"),a("strong",[s._v("执行内容")]),s._v("，函数体")])]),s._v(" "),a("p",[s._v("再给大家看看洋葱长啥样：")]),s._v(" "),a("img",{attrs:{src:"https://gillsonions.com/sites/default/files/s3-images/homepage_onionslice_transparent.png",width:"50%"}}),s._v(" "),a("p",[s._v("再加上一个程序执行箭头")]),s._v(" "),a("p",[a("img",{attrs:{src:"onion.JPG",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一道例题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一道例题"}},[s._v("#")]),s._v(" 一道例题")]),s._v(" "),a("p",[s._v("再以一道简单的例题为例，了解一下如何按照洋葱来理解递归思想。")]),s._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://leetcode.com/problems/reverse-string/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Leetcode 344 反向输出字符串"),a("OutboundLink")],1)]),s._v(" 有改动，与原题相比去除了必须是 in-place 操作的限制。")]),s._v(" "),a("blockquote",[a("p",[s._v("编写一个可以反转字符串的函数. 给定的输入是一个字符数组"),a("code",[s._v("char[]")]),s._v(".")])]),s._v(" "),a("p",[a("strong",[s._v("样例 1:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入: ["h","e","l","l","o"]\n输出: ["o","l","l","e","h"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("样例 2:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入: ["H","a","n","n","a","h"]\n输出: ["h","a","n","n","a","H"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("代码")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 递归函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 终止条件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用自身：前往下一层")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结束调用后的数据操作。")]),s._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"o"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出：[ 'o', 'l', 'l', 'e', 'h' ]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"H"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出：[ 'h', 'a', 'n', 'n', 'a', 'H' ]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("某一层")]),s._v("洋葱的"),a("strong",[s._v("皮")]),s._v(" = "),a("strong",[s._v("将要执行的")]),s._v("递归函数")]),s._v(" "),a("p",[a("code",[s._v("function r (i) { ... }")]),s._v(" 这是每层洋葱，也就是将要被执行的递归函数的边界线。外层洋葱通过"),a("code",[s._v("r(i+1)")]),s._v("将控制权转移给了即将要执行的函数，内层洋葱。")]),s._v(" "),a("p",[s._v("如果我们说 17行的 "),a("code",[s._v("r(0)")]),s._v(" 是最外面的一层洋葱，那么在最外面一层洋葱内调用的 "),a("code",[s._v("r(1)")]),s._v(" 就是第二层洋葱了。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("洋葱芯")]),s._v(" = 递归函数的"),a("strong",[s._v("终止")]),s._v("情况")]),s._v(" "),a("p",[s._v("子子孙孙无穷尽也，一层洋葱包着一层洋葱。何时是个头？所以我们需要在每次进入新一层洋葱的时候判断当前是不是到头了，是不是遇到洋葱芯。以图里那个洋葱为例，我们可以说 "),a("code",[s._v("if (layer == 9) return;")]),s._v("。因为从最外面数 9 层洋葱就遇到了洋葱芯，需要回头了。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("某一层")]),s._v("洋葱的"),a("strong",[s._v("肉")]),s._v(" = 递归函数的"),a("strong",[s._v("执行内容")]),s._v("，函数体")]),s._v(" "),a("p",[s._v("对于程序执行的过程来说：一条"),a("strong",[s._v("入箭头")]),s._v("表示进入下一层洋葱；一条"),a("strong",[s._v("出箭头")]),s._v("表示离开本层洋葱。而进入新洋葱靠的是函数体中对自身的调用，也就是"),a("code",[s._v("r(i+1)")]),s._v("。所以，在这条语句"),a("strong",[s._v("之前的代码")]),s._v("是"),a("strong",[s._v("在进入下一层洋葱之前")]),s._v("做的，而这条语句"),a("strong",[s._v("之后的代码")]),s._v("时即将"),a("strong",[s._v("离开本层洋葱之前")]),s._v("做的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"onion.JPG",alt:""}})]),s._v(" "),a("p",[s._v("这道题，需要我们反向输出字符。因此我们把 "),a("code",[s._v("res.push(s[i])")]),s._v(" 写在调用之后。所以，顺着出箭头的方向，我们就可以反着输出所有字符了。如果我们把 "),a("code",[s._v("res.push(s[i])")]),s._v(" 写在调用之前，我们就可以正向输出所有字符，因为这是我们是按着入箭头的方向输出的字符。")])])]),s._v(" "),a("h2",{attrs:{id:"回到-leetcode-344"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回到-leetcode-344"}},[s._v("#")]),s._v(" 回到 Leetcode 344")]),s._v(" "),a("p",[s._v("Write a function that reverses a string. The input string is given as an array of characters "),a("code",[s._v("char[]")]),s._v(".")]),s._v(" "),a("p",[s._v("Do not allocate extra space for another array, you must do this by "),a("strong",[s._v("modifying the input array "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("in-place"),a("OutboundLink")],1)]),s._v(" with O(1) extra memory.")]),s._v(" "),a("p",[s._v("You may assume all the characters consist of "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ASCII#Printable_characters",target:"_blank",rel:"noopener noreferrer"}},[s._v("printable ascii characters"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Example 1:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("Example 2:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Input: ["H","a","n","n","a","h"]\nOutput: ["h","a","n","n","a","H"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("解法：")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("reverseString")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 值得注意的是，因为 344 这题要求在原数组上做修改，为了保证在内层洋葱执行之后改变了原有的数组从而导致外层洋葱执行的时候使用了非原始数据，我们需要在进入下一层洋葱之前，保存一下当前的状态。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在进入下一层洋葱之前，保存当前的字符是什么。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将之前保存的字符放到应该放的位置上。")]),s._v("\n        s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);