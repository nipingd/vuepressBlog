(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{702:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("转载自阮老师的博客"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2016/04/cors.html"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("只要同时满足以下两大条件，就属于简单请求。")]),t._v(" "),s("p",[t._v("（1）请求方法是以下三种方法之一。")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("（2）HTTP 的头信息不超出以下几种字段。")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("凡是不同时满足上面两个条件，就属于非简单请求。一句话，简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。")]),t._v(" "),s("p",[t._v("这样划分的原因是，表单在历史上一直可以跨域发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),s("p",[t._v("否则，即使服务器同意发送 Cookie，浏览器也不会发送。或者，服务器要求设置 Cookie，浏览器也不会处理。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("下面是一段浏览器的 JavaScript 脚本。")]),t._v(" "),t._m(35),t._m(36),t._v(" "),s("p",[t._v("浏览器发现，这是一个非简单请求，就自动发出一个“预检”请求，要求服务器确认可以这样请求。下面是这个“预检”请求的 HTTP 头信息。")]),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),s("p",[t._v("如果服务器否定了“预检”请求，会返回一个正常的 HTTP 回应，但是没有任何 CORS 相关的头信息字段，或者明确表示请求不符合条件。")]),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),s("p",[t._v("服务器回应的其他 CORS 相关字段如下。")]),t._v(" "),t._m(53),t._m(54),t._v(" "),s("p",[t._v("该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),s("p",[t._v("该字段与简单请求时的含义相同。")]),t._v(" "),t._m(58),t._v(" "),s("p",[t._v("该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。")]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),s("p",[t._v("下面是“预检”请求之后，浏览器的正常 CORS 请求。")]),t._v(" "),t._m(61),t._m(62),t._v(" "),s("p",[t._v("下面是服务器正常的回应。")]),t._v(" "),t._m(63),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CORS 是一个 W3C 标准，全称是“"),e("strong",[this._v("跨域资源共享”")]),this._v("（Cross-origin resource sharing）。它允许浏览器向跨域的服务器，发出"),e("code",[this._v("XMLHttpRequest")]),this._v("请求，从而克服了AJAX只能同源使用的限制。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，"),e("strong",[this._v("实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-两种请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-两种请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.两种请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CORS 请求分成两类："),e("strong",[this._v("简单请求")]),this._v("（simple request）和"),e("strong",[this._v("非简单请求")]),this._v("（not-so-simple request）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("HEAD")]),this._v(" "),e("li",[this._v("GET")]),this._v(" "),e("li",[this._v("POST")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("ul",[s("li",[t._v("Accept")]),t._v(" "),s("li",[t._v("Accept-Language")]),t._v(" "),s("li",[t._v("Content-Language")]),t._v(" "),s("li",[t._v("Last-Event-ID")]),t._v(" "),s("li",[t._v("Content-Type：只限于三个值"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),s("code",[t._v("multipart/form-data")]),t._v("、"),s("code",[t._v("text/plain")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-简单请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-简单请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.简单请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"基本流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个"),e("code",[this._v("Origin")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面是一个例子，浏览器发现这次跨域 AJAX 请求是简单请求，就自动在头信息之中，添加一个"),e("code",[this._v("Origin")]),this._v("字段。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("GET")]),t._v(" /cors HTTP/1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Origin:")]),t._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Language:")]),t._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的头信息中，"),e("code",[this._v("Origin")]),this._v("字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果"),s("code",[t._v("Origin")]),t._v("指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含"),s("code",[t._v("Access-Control-Allow-Origin")]),t._v("字段（详见下文），就知道出错了，从而抛出一个错误，被"),s("code",[t._v("XMLHttpRequest")]),t._v("的"),s("code",[t._v("onerror")]),t._v("回调函数捕获。注意，这种错误无法通过状态码识别，因为 HTTP 回应的状态码有可能是200。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果"),e("code",[this._v("Origin")]),this._v("指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Origin:")]),t._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Credentials:")]),t._v(" true\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Expose-Headers:")]),t._v(" FooBar\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html; charset=utf-8\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的头信息之中，有三个与 CORS 请求相关的字段，都以"),e("code",[this._v("Access-Control-")]),this._v("开头。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（1）Access-Control-Allow-Origin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是必须的。它的值要么是请求时"),e("code",[this._v("Origin")]),this._v("字段的值，要么是一个"),e("code",[this._v("*")]),this._v("，表示接受任意域名的请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（2）Access-Control-Allow-Credentials")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。设为"),e("code",[this._v("true")]),this._v("，即表示服务器明确许可，浏览器可以把 Cookie 包含在请求中，一起发给服务器。这个值也只能设为"),e("code",[this._v("true")]),this._v("，如果服务器不要浏览器发送 Cookie，不发送该字段即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（3）Access-Control-Expose-Headers")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("该字段可选。CORS 请求时，"),s("code",[t._v("XMLHttpRequest")]),t._v("对象的"),s("code",[t._v("getResponseHeader()")]),t._v("方法只能拿到6个服务器返回的基本字段："),s("code",[t._v("Cache-Control")]),t._v("、"),s("code",[t._v("Content-Language")]),t._v("、"),s("code",[t._v("Content-Type")]),t._v("、"),s("code",[t._v("Expires")]),t._v("、"),s("code",[t._v("Last-Modified")]),t._v("、"),s("code",[t._v("Pragma")]),t._v("。如果想拿到其他字段，就必须在"),s("code",[t._v("Access-Control-Expose-Headers")]),t._v("里面指定。上面的例子指定，"),s("code",[t._v("getResponseHeader('FooBar')")]),t._v("可以返回"),s("code",[t._v("FooBar")]),t._v("字段的值。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"withcredentials-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#withcredentials-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" withCredentials 属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面说到，CORS 请求默认不包含 Cookie 信息（以及 HTTP 认证信息等）。如果需要包含 Cookie 信息，一方面要服务器同意，指定"),e("code",[this._v("Access-Control-Allow-Credentials")]),this._v("字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("Access-Control-Allow-Credentials:")]),this._v(" true\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("另一方面，开发者必须在 AJAX 请求中打开"),e("code",[this._v("withCredentials")]),this._v("属性。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是，如果省略"),e("code",[this._v("withCredentials")]),this._v("设置，有的浏览器还是会一起发送 Cookie。这时，可以显式关闭"),e("code",[this._v("withCredentials")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[this._v("xhr.withCredentials = false;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要注意的是，如果要发送 Cookie，"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie 依然遵循同源政策，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 并不会上传，且（跨域）原网页代码中的"),e("code",[this._v("document.cookie")]),this._v("也无法读取服务器域名下的 Cookie。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-非简单请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-非简单请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.非简单请求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"预检请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预检请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 预检请求")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("非简单请求是那种对服务器提出特殊要求的请求，比如请求方法是"),s("code",[t._v("PUT")]),t._v("或"),s("code",[t._v("DELETE")]),t._v("，或者"),s("code",[t._v("Content-Type")]),t._v("字段的类型是"),s("code",[t._v("application/json")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为“预检”请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的"),e("code",[this._v("XMLHttpRequest")]),this._v("请求，否则就报错。这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会，这样可以防止服务器大量收到"),e("code",[this._v("DELETE")]),this._v("和"),e("code",[this._v("PUT")]),this._v("请求，这些传统的表单不可能跨域发出的请求。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.alice.com/cors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Custom-Header'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面代码中，HTTP 请求的方法是"),e("code",[this._v("PUT")]),this._v("，并且发送一个自定义头信息"),e("code",[this._v("X-Custom-Header")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("OPTIONS")]),t._v(" /cors HTTP/1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Origin:")]),t._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Request-Method:")]),t._v(" PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Request-Headers:")]),t._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Language:")]),t._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("“预检”请求用的请求方法是"),e("code",[this._v("OPTIONS")]),this._v("，表示这个请求是用来询问的。头信息里面，关键字段是"),e("code",[this._v("Origin")]),this._v("，表示请求来自哪个源。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除了"),e("code",[this._v("Origin")]),this._v("字段，“预检”请求的头信息包括两个特殊字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（1）Access-Control-Request-Method")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是"),e("code",[this._v("PUT")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（2）Access-Control-Request-Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是"),e("code",[this._v("X-Custom-Header")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"预检请求的回应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预检请求的回应","aria-hidden":"true"}},[this._v("#")]),this._v(" 预检请求的回应")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("服务器收到“预检”请求以后，检查了"),e("code",[this._v("Origin")]),this._v("、"),e("code",[this._v("Access-Control-Request-Method")]),this._v("和"),e("code",[this._v("Access-Control-Request-Headers")]),this._v("字段以后，确认允许跨源请求，就可以做出回应。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Date:")]),t._v(" Mon, 01 Dec 2008 01:15:39 GMT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Server:")]),t._v(" Apache/2.0.61 (Unix)\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Origin:")]),t._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Methods:")]),t._v(" GET, POST, PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Headers:")]),t._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html; charset=utf-8\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Encoding:")]),t._v(" gzip\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Length:")]),t._v(" 0\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Keep-Alive:")]),t._v(" timeout=2, max=100\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" Keep-Alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/plain\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的 HTTP 回应中，关键的是"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段，表示"),e("code",[this._v("http://api.bob.com")]),this._v("可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("Access-Control-Allow-Origin:")]),this._v(" *\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("OPTIONS")]),t._v(" http://api.bob.com HTTP/1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Status:")]),t._v(" 200\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Origin:")]),t._v(" https://notyourdomain.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Method:")]),t._v(" POST\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面的服务器回应，"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段明确不包括发出请求的"),e("code",[this._v("http://api.bob.com")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被"),e("code",[this._v("XMLHttpRequest")]),this._v("对象的"),e("code",[this._v("onerror")]),this._v("回调函数捕获。控制台会打印出如下的报错信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("XMLHttpRequest cannot load http://api.alice.com.\nOrigin http://api.bob.com is not allowed by Access-Control-Allow-Origin.\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Methods:")]),t._v(" GET, POST, PUT\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Headers:")]),t._v(" X-Custom-Header\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Allow-Credentials:")]),t._v(" true\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Access-Control-Max-Age:")]),t._v(" 1728000\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（1）Access-Control-Allow-Methods")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（2）Access-Control-Allow-Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果浏览器请求包括"),e("code",[this._v("Access-Control-Request-Headers")]),this._v("字段，则"),e("code",[this._v("Access-Control-Allow-Headers")]),this._v("字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在“预检”中请求的字段。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（3）Access-Control-Allow-Credentials")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("（4）Access-Control-Max-Age")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"浏览器的正常请求和回应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的正常请求和回应","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器的正常请求和回应")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样，会有一个"),e("code",[this._v("Origin")]),this._v("头信息字段。服务器的回应，也都会有一个"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("头信息字段。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("PUT")]),t._v(" /cors HTTP/1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Origin:")]),t._v(" http://api.bob.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" api.alice.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-Custom-Header:")]),t._v(" value\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Language:")]),t._v(" en-US\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面头信息的"),e("code",[this._v("Origin")]),this._v("字段是浏览器自动添加的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("Access-Control-Allow-Origin:")]),this._v(" http://api.bob.com\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("Content-Type:")]),this._v(" text/html; charset=utf-8\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上面头信息中，"),e("code",[this._v("Access-Control-Allow-Origin")]),this._v("字段是每次回应都必定包含的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-与-jsonp-的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-与-jsonp-的比较","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.与 JSONP 的比较")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。JSONP 只支持"),e("code",[this._v("GET")]),this._v("请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。")])}],!1,null,null,null);e.default=a.exports}}]);