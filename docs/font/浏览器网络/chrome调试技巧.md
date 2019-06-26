## 前言

相信大部分前端同学都是用Chrome浏览器进行开发，这篇博客要分享的基本上是除了我们常用`console.log`之外的，Chrome开发者工具控制面板提供的调试方法~

首先在地址栏敲入：`about:blank` 创建一个空白页，再打开控制台~

开始操作演示~（多图预警！~~

## 关于console

关于console对象，其实提供了很丰富的API，可自查文档~

![1561557893816](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557893816.png)

## 关于Console控制面板

以下示例方法只存在于Chrome控制台Console面板~在JavaScripts中写是没有的哦!

### $家族

#### $_

返回上一个被执行过的值~

![1561557909481](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557909481.png)

虽说很类似于命令行里的`!!`，但是$_并不会再执行一次表达式，如下图可证：

![1561557924772](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557924772.png)

如果之前的值没有保存在变量里，可以通过这个方法临时访问~（为什么说临时，因为当你执行完下一个表达式后，$_已经更新了哈）

![1561557944435](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557944435.png)

#### $0 - $4

$0、$1、$2、$3、$4五个指令相当于在Elements面板最近选择过的五个引用。 比如我在Elements面板上随意点击了掘金网站上的五个DOM节点。从时间线上，$4是我第一个点击的。而$0是我第五个，也即是最后一个点击的。利用此方法可以快速在Console面板调试你选中的节点！ 

![1561557960487](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557960487.png)

补充一下，还有点类似正则匹配~如下所示

```js
function replacer(match, $1, $2, $3, $4, $5) {
  return [$1, $2, $3, $4, $5].join(' - ');
}
const str = 'abc12345#$*%[hello]{world}'
    .replace(/([^\d]*)(\d*)([^\w]*)(\[.*\])(\{.*\})/, replacer);

console.log(str); // abc - 12345 - #$*% - [hello] - {world}
```

#### $

`document.querySelector()`方法的别名(不对的)。不过比较少为人知的应该是它的第二个参数。指定从哪个节点开始选择。有时候想减少范围时，尤其管用！

![1561557987986](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561557987986.png)

P.S. 函数签名`$(selector, [startNode])`。

#### $

`document.querySelectorAll()`方法的别名(不对的)，可参考同上。

P.S. 函数签名`$$(selector, [startNode])`

#### $x

根据XPath表达式去查找节点。如下图示例：

![1561558009674](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558009674.png)

查找掘金站内所有含有href属性的a节点，然后遍历过滤含有http或https的节点~ 当然好像目前来说，大部分情况直接用`$`、`$$`可以覆盖，说不定特殊情况下`$x`会很有用。有需要的同学可以了解学习一下~ XPath表达式规则可参考：[www.w3schools.com/xml/xpath_s…](https://link.juejin.im?target=https%3A%2F%2Fwww.w3schools.com%2Fxml%2Fxpath_syntax.asp)

P.S. 函数签名`$x(selector, [startNode])`

### API工具方法

以下方法同样只存在于Chrome控制台Console面板里，同学们请注意哦~

#### keys/values

见名知意。功能类似于`Object.keys`，`Object.values`

![1561558027033](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558027033.png)

#### monitor/unmonitor

用来观察函数调用的工具方法。在函数调用的时候，可以同步输出函数名以及参数。

![1561558053916](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558053916.png)

当不再需要观察该函数时，调用unmonitor取消即可。

但是匿名函数不会生效，因为获取不到名字.

![1561558069617](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558069617.png)

#### monitorEvents/unmonitorEvents

可以观察对象的事件~

![1561558090263](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558090263.png)

也可以同时观察对象的多个事件~

![1561558101457](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558101457.png)

同样，使用unmonitorEvents取消观察。结合以上的$家族一起使用更便利哦

![1561558112668](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558112668.png)

P.S. 函数签名：`monitorEvents(object[, events])`

#### copy

快速拷贝一个对象为字符串表示方式到剪切板~

![1561558123985](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558123985.png)

#### getEventListeners

获取注册到一个对象上的所有事件监听器~

![1561558138601](../../../../../Desktop/vuepressBlogDemo/docs/.vuepress/public/1561558138601.png)

其实还有内置的inspect、debug/undebug等方法，大家可以自行搜索，都很有用~这里就不一一介绍了~



作者：苏里链接：https://juejin.im/post/5d09c39ee51d4576bc1a0e07来源：掘金著作权归作者所有。

https://juejin.im/post/59ffad656fb9a0450b65c4c0