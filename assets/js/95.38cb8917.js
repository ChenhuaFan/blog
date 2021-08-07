(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{706:function(t,a,s){"use strict";s.r(a);var r=s(71),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),s("p",[s("code",[t._v("rem")]),t._v(" 单位相对于 "),s("code",[t._v("em")]),t._v("，最大的区别在于 "),s("code",[t._v("rem")]),t._v(" 是"),s("strong",[t._v("仅相对")]),t._v("于 "),s("code",[t._v(":root")]),t._v(" ("),s("code",[t._v("html")]),t._v(") 元素的 "),s("code",[t._v("font-size")]),t._v(" 属性的值来确定的。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 12px */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 24px */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"pps-physical-pixels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pps-physical-pixels"}},[t._v("#")]),t._v(" PPS (Physical Pixels)")]),t._v(" "),s("p",[t._v("物理像素值，是指显示设备实际上有多少个物理上的显示发光单元（像素）。如 MacBook Pro 的分辨率是 2560 * 1600，即表示横向有 2560 个物理像素、纵向有 1600 个物理像素。它与我们在 css 中书写的 1px 没有直接关系。")]),t._v(" "),s("h2",{attrs:{id:"dips-device-independent-pixels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dips-device-independent-pixels"}},[t._v("#")]),t._v(" DIPS (Device Independent Pixels)")]),t._v(" "),s("p",[t._v("DIPS 设备无关像素，是一种抽象的像素值，其与真正物理意义上的像素值没有关系。"),s("strong",[t._v("浏览器是依据 DIPS 设备无关像素值来工作")]),t._v("的。")]),t._v(" "),s("p",[t._v("DIPS 的 1px 代表着 css 中的 1px 值的长度，而实际的设备可能不会仅仅使用 1 个物理像素来表示这个 1 个 DIPS 像素。除非这个显示设备的像素密度很低，即物理像素就是 1920*1080 大小对应 1920px 与 1080px DIPS。")]),t._v(" "),s("h2",{attrs:{id:"dpr-device-pixel-ratio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dpr-device-pixel-ratio"}},[t._v("#")]),t._v(" DPR (Device Pixel Ratio)")]),t._v(" "),s("p",[t._v("DPR 设备像素比例。DPR 的计算方法是 "),s("code",[t._v("PPS / DIPS")]),t._v("。还是以 MacBook Pro 的分辨率为例（2560 * 1600），如果浏览器实际只显示 1280px 的宽度，则 DPR 是 2。通过DPR 可以得知，MacBook Pro 实际上使用了 2 个物理像素来表示 1 个设备无关像素。当然以一个平面来说，则是 4 个 PPS 来表示 1 个 DIPS。")]),t._v(" "),s("h2",{attrs:{id:"viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" Viewport")]),t._v(" "),s("blockquote",[s("p",[t._v('手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。\n——'),s("a",{attrs:{href:"https://www.runoob.com/css/css-rwd-viewport.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式 Web 设计 - Viewport"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上述是一个常用的用来设置响应式页面的 "),s("code",[t._v("meta")]),t._v(" 标签。")]),t._v(" "),s("ul",[s("li",[t._v("width: 表示 viewport 可视窗口的宽度")]),t._v(" "),s("li",[t._v("initial-scale：表示网页的初始化缩放比例")])]),t._v(" "),s("h2",{attrs:{id:"响应式尺寸的计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式尺寸的计算"}},[t._v("#")]),t._v(" 响应式尺寸的计算")]),t._v(" "),s("p",[s("strong",[t._v("px -> rem")]),t._v(" "),s("code",[t._v("100 * px / 750")])]),t._v(" "),s("p",[t._v("具体的计算首先需要人为规定一个等式，比方说："),s("code",[t._v("100px == 1rem")]),t._v("。这表明设计稿上的 "),s("strong",[t._v("100px")]),t._v(" 值对应着 设计稿上的 "),s("strong",[t._v("1rem")]),t._v("。这样定义的好处在于便于计算，只需要将设计稿上的尺寸一律除以 100 换算为 rem，就可以直接写在代码中。")]),t._v(" "),s("p",[t._v("UI 出的设计稿通常宽度为 "),s("strong",[t._v("750px")]),t._v("，因此我们可以计算出如果将这个比例带入实际的设备中，我们的 1rem 是多少（根元素的 "),s("code",[t._v("font-size")]),t._v("）。")]),t._v(" "),s("p"),s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[s("svg",{staticStyle:{"vertical-align":"-1.602ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.795ex",height:"4.661ex",viewBox:"0 -1352 5213.6 2060"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mfrac"}},[s("g",{attrs:{"data-mml-node":"mn",transform:"translate(220, 676)"}},[s("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),s("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500, 0)"}}),s("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(1000, 0)"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(684, -686)"}},[s("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),s("rect",{attrs:{width:"1700",height:"60",x:"120",y:"220"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(2217.8, 0)"}},[s("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),s("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3273.6, 0)"}},[s("g",{attrs:{"data-mml-node":"mn",transform:"translate(220, 676)"}},[s("path",{attrs:{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"}}),s("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(500, 0)"}}),s("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(1000, 0)"}})]),s("g",{attrs:{"data-mml-node":"mn",transform:"translate(220, -686)"}},[s("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}}),s("path",{attrs:{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",transform:"translate(500, 0)"}}),s("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(1000, 0)"}})]),s("rect",{attrs:{width:"1700",height:"60",x:"120",y:"220"}})])])])])])],1),s("p"),t._v(" "),s("p",[t._v("一道经典的小学应用题。")]),t._v(" "),s("p",[t._v("现在，如果设计稿中一个标签的长度测量是 "),s("strong",[t._v("96px")]),t._v("，那么它就是 "),s("strong",[t._v("0.96rem")]),t._v("。而我们的实际设备的根元素 "),s("code",[t._v("font-size")]),t._v(" 则被计算出来为 "),s("strong",[t._v("50px")]),t._v("。所以实际显示的长度正好是 "),s("strong",[t._v("48px")]),t._v("，非常精确。")]),t._v(" "),s("p",[t._v("而对于其他分辨率的设备，也可以通过这种方法确定 1rem 的实际像素为多少，从而保证设计稿在任何设备的显示效果保持一致。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/sunny_810/article/details/98949817",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计稿是750px时的,rem设置"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26131956",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式网页开发基础：DPR 与 viewport"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);