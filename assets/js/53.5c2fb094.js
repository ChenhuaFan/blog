(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{665:function(e,t,r){"use strict";r.r(t);var o=r(71),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"let-s-scrolling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#let-s-scrolling"}},[e._v("#")]),e._v(" Let's Scrolling")]),e._v(" "),r("p",[e._v("I've been learning about the Affix component of ViewUI, and I've been working on something related to scrolling lately. So here's a little bit of knowledge about scrolling and the concept of various sizes in the browser.")]),e._v(" "),r("h3",{attrs:{id:"various-sizes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#various-sizes"}},[e._v("#")]),e._v(" Various sizes")]),e._v(" "),r("p",[e._v("List of attributes according to "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML"),r("OutboundLink")],1),e._v(" in order.\n"),r("code",[e._v("clientHeight")]),e._v(", "),r("code",[e._v("clientLeft")]),e._v(", "),r("code",[e._v("clientTop")]),e._v(", "),r("code",[e._v("clientWidth")]),e._v(", "),r("code",[e._v("scrollHeight")]),e._v(", "),r("code",[e._v("scrollLeft")]),e._v(", "),r("code",[e._v("scrollLeftMax")]),e._v(", "),r("code",[e._v("scrollTop")]),e._v(", "),r("code",[e._v("scrollTopMax")]),e._v(", "),r("code",[e._v("scrollWidth")])]),e._v(" "),r("p",[e._v("List of properties according to "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTMMLElement"),r("OutboundLink")],1),e._v(" in order.\n"),r("code",[e._v("offsetHeight")]),e._v(", "),r("code",[e._v("offsetLeft")]),e._v(", "),r("code",[e._v("offsetTop")]),e._v(", "),r("code",[e._v("offsetWidth")])]),e._v(" "),r("p",[e._v("The list of properties according to "),r("a",{attrs:{href:""}},[e._v("Window")]),e._v(" is listed in the following order.\n"),r("code",[e._v("outerHeight")]),e._v(", "),r("code",[e._v("outerWidth")]),e._v(", "),r("code",[e._v("pageXOffset")]),e._v(", "),r("code",[e._v("pageYOffset")]),e._v(", "),r("code",[e._v("screenX")]),e._v(", "),r("code",[e._v("screenY")])]),e._v(" "),r("h3",{attrs:{id:"i-client-element-family"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i-client-element-family"}},[e._v("#")]),e._v(" I. client* element family")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property Name (*Name)")]),e._v(" "),r("th",[e._v("Read-only")]),e._v(" "),r("th",[e._v("Return Value Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("*Height")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[r("code",[e._v("Int")])]),e._v(" "),r("td",[e._v("The inner height of the element + the inner margin, "),r("strong",[e._v("not")]),e._v(" including horizontal scrollbars, borders and outer margins.")])]),e._v(" "),r("tr",[r("td",[e._v("*Width")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[r("code",[e._v("Int")])]),e._v(" "),r("td",[e._v("The internal width of the element + the inner margin, "),r("strong",[e._v("not")]),e._v(" including vertical scrollbars, outer margins and borders.")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("Top")]),e._v("Left")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[e._v("``")]),e._v(" "),r("td",[e._v("The width of the left margin (border) above an element.")])])])]),e._v(" "),r("p",[e._v("*Why is there no clientRight and clientBottom?")]),e._v(" "),r("JS101PlayGround",{attrs:{type:"Client",name:"What is the Client family (box-sizing is content-box)"}}),e._v(" "),r("h3",{attrs:{id:"ii-scroll"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ii-scroll"}},[e._v("#")]),e._v(" II. scroll*")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("property name (*Name)")]),e._v(" "),r("th",[e._v("read-only")]),e._v(" "),r("th",[e._v("return value type")]),e._v(" "),r("th",[e._v("description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("*Height")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[r("code",[e._v("Int")])]),e._v(" "),r("td",[e._v("**Minimum height to fit all content inside the container without **the presence of scrollbars")])]),e._v(" "),r("tr",[r("td",[e._v("*Width")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[r("code",[e._v("Int")])]),e._v(" "),r("td",[e._v("The inner width of the element + the inner margin, **excluding vertical scrollbars, outer margins and borders.")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("Top")]),e._v("Left")]),e._v(" "),r("td",[r("code",[e._v("true")])]),e._v(" "),r("td",[e._v("``")]),e._v(" "),r("td",[e._v("The width of the left margin (border) above an element")])])])]),e._v(" "),r("JS101PlayGround",{attrs:{type:"Scroll",name:"What is the Scroll system"}}),e._v(" "),r("p",[e._v("Translated with www.DeepL.com/Translator (free version)")])],1)}),[],!1,null,null,null);t.default=v.exports}}]);