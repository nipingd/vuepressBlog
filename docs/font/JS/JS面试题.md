## 1.浏览器控制台上会打印什么？

```js
var a = 10;
function foo() {
    console.log(a); // ??
    var a = 20;
}
foo();
```

#### 问题1： `undefined`

#### 解析：

使用`var`关键字声明的变量在JavaScript中会被提升，并在内存中分配值`undefined`。 但初始化恰发生在你给变量赋值的地方。 另外，`var`声明的变量是[函数作用域的](https://link.juejin.im?target=https%3A%2F%2F2ality.com%2F2011%2F02%2Fjavascript-variable-scoping-and-its.html)，而`let`和`const`是块作用域的。 所以，这就是这个过程的样子：

```js
var a = 10; // 全局使用域
function foo() {
// var a 的声明将被提升到到函数的顶部。
// 比如:var a

console.log(a); // 打印 undefined

// 实际初始化值20只发生在这里
   var a = 20; // local scope
}
```

## 2.如果我们使用 let 或 const 代替 var，输出是否相同

```js
var a = 10;
function foo() {
    console.log(a); // ??
    let a = 20;
}
foo();    
```

#### 问题 2：`ReferenceError：a undefined`。

#### 解析：

`let`和`const`声明可以让变量在其作用域上受限于它所使用的块、语句或表达式。与`var`不同的是，这些变量没有被提升，并且有一个所谓的**暂时死区(TDZ)**。试图访问**TDZ**中的这些变量将引发`ReferenceError`，因为只有在执行到达声明时才能访问它们。

```js
var a = 10; // 全局使用域
function foo() { // TDZ 开始

// 创建了未初始化的'a'
    console.log(a); // ReferenceError

// TDZ结束，'a'仅在此处初始化，值为20
    let a = 20;
}
```

下表概述了与JavaScript中使用的不同关键字声明的变量对应的提升行为和使用域：


![1565361263389](../../.vuepress/public/1565361263389.png)

## 3.“newArray”中有哪些元素？

```js
var array = [];
for(var i = 0; i <3; i++) {
 array.push(() => i);
}
var newArray = array.map(el => el());
console.log(newArray); // ??   
```

#### 问题 3: `[3, 3, 3]`

#### 解析：

在`for`循环的头部声明带有`var`关键字的变量会为该变量创建单个绑定（存储空间）。 阅读更多关于[闭包](https://link.juejin.im?target=http%3A%2F%2Fdmitrysoshnikov.com%2Fecmascript%2Fchapter-6-closures%2F)的信息。 让我们再看一次for循环。

```js
// 误解作用域:认为存在块级作用域
var array = [];
for (var i = 0; i < 3; i++) {
  // 三个箭头函数体中的每个`'i'`都指向相同的绑定，
  // 这就是为什么它们在循环结束时返回相同的值'3'。
  array.push(() => i);
}
var newArray = array.map(el => el());
console.log(newArray); // [3, 3, 3]
```

如果使用 `let` 声明一个具有块级作用域的变量，则为每个循环迭代创建一个新的绑定。

```js
// 使用ES6块级作用域
var array = [];
for (let i = 0; i < 3; i++) {
  // 这一次，每个'i'指的是一个新的的绑定，并保留当前的值。
 // 因此，每个箭头函数返回一个不同的值。
  array.push(() => i);
}
var newArray = array.map(el => el());
console.log(newArray); // [0, 1, 2]
```

解决这个问题的另一种方法是使用[闭包](https://link.juejin.im?target=http%3A%2F%2Fdmitrysoshnikov.com%2Fecmascript%2Fchapter-6-closures%2F)。

```js
let array = [];
for (var i = 0; i < 3; i++) {

  array[i] = (function(x) {
    return function() {
      return x;
    };
  })(i);
}
const newArray = array.map(el => el());
console.log(newArray); // [0, 1, 2]  
```

## 4.如果我们在浏览器控制台中运行'foo'函数，是否会导致堆栈溢出错误？

```js
function foo() {
  setTimeout(foo, 0); // 是否存在堆栈溢出错误?
};    
```

#### 问题4 : 不会溢出

#### 解析：

JavaScript并发模型基于“事件循环”。 当我们说“浏览器是 JS 的家”时我真正的意思是浏览器提供运行时环境来执行我们的JS代码。

浏览器的主要组件包括**调用堆栈**，**事件循环****，任务队列**和**Web API**。 像`setTimeout`，`setInterval`和`Promise`这样的全局函数不是JavaScript的一部分，而是 Web API 的一部分。 JavaScript 环境的可视化形式如下所示：

![1565361602465](../../.vuepress/public/1565361602465.png)

JS调用栈是后进先出(LIFO)的。引擎每次从堆栈中取出一个函数，然后从上到下依次运行代码。每当它遇到一些异步代码，如`setTimeout`，它就把它交给`Web API`(箭头1)。因此，每当事件被触发时，`callback` 都会被发送到任务队列（箭头2）。

**事件循环(Event loop)不断地监视任务队列(Task Queue)，并按它们排队的顺序一次处理一个回调。每当调用堆栈(call stack)为空时，Event loop获取回调并将其放入堆栈(stack )**(箭头3)中进行处理。请记住，如果调用堆栈不是空的，**则事件循环不会将任何回调推入堆栈**。

现在，有了这些知识，让我们来回答前面提到的问题：

### 步骤

1. 调用 `foo()`会将`foo`函数放入**调用堆栈(call stack)**。
2. 在处理内部代码时，JS引擎遇到`setTimeout`。
3. 然后将`foo`回调函数传递给**WebAPIs**(箭头1)并从函数返回，调用堆栈再次为空
4. 计时器被设置为0，因此`foo`将被发送到**任务队列**(箭头2)。
5. 由于调用堆栈是空的，事件循环将选择`foo`回调并将其推入调用堆栈进行处理。
6. 进程再次重复，堆栈不会溢出。

运行示意图如下所示：

![1565361796134](../../.vuepress/public/1565361796134.png)

## 5.如果在控制台中运行以下函数，页面(选项卡)的 UI 是否仍然响应

```js
function foo() {
  return Promise.resolve().then(foo);
};
```

#### 问题5 : 不会响应

#### 解析：

大多数时候，开发人员假设在**事件循环图中只有一个任务队列。但事实并非如此，我们可以有多个任务队列。由浏览器选择其中的一个队列并在该队列中处理回调**。

在底层来看，JavaScript中有宏任务和微任务。`setTimeout`回调是**宏任务**，而`Promise`回调是**微任务**。

主要的区别在于他们的执行方式。宏任务在单个循环周期中一次一个地推入堆栈，但是微任务队列总是在执行后返回到事件循环之前清空。因此，如果你以处理条目的速度向这个队列添加条目，那么你就永远在处理微任务。只有当微任务队列为空时，事件循环才会重新渲染页面、

现在，当你在控制台中运行以下代码段

```js
function foo() {
  return Promise.resolve().then(foo);
};
```

每次调用'`foo`'都会继续在微任务队列上添加另一个'`foo`'回调，因此事件循环无法继续处理其他事件（滚动，单击等），直到该队列完全清空为止。 因此，它会阻止渲染。

## 6.我们能否以某种方式为下面的语句使用展开运算而不导致类型错误

```js
var obj = { x: 1, y: 2, z: 3 };
[...obj]; // TypeError 
```

#### 问题6 : 会导致TypeError错误

#### 解析：

[展开语法](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FSpread_syntax) 和 [for-of](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...of) 语句遍历`iterable`对象定义要遍历的数据。`Array` 或`Map` 是具有默认迭代行为的内置迭代器。对象不是可迭代的，但是可以通过使用[iterable](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FIteration_protocols%23The_iterable_protocol)和[iterator](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FIteration_protocols%23The_iterator_protocol)协议使它们可迭代。

在**Mozilla**文档中，如果一个对象实现了`@@iterator`方法，那么它就是可迭代的，这意味着这个对象(或者它原型链上的一个对象)必须有一个带有`@@iterator`键的属性，这个键可以通过常量`Symbol.iterator`获得。

上述语句可能看起来有点冗长，但是下面的示例将更有意义：

```js
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function() {
  
  // iterator 是一个具有 next 方法的对象，
  // 它的返回至少有一个对象
  // 两个属性：value＆done。

  // 返回一个 iterator 对象
  return {
    next: function() {
      if (this._countDown === 3) {
        const lastValue = this._countDown;
        return { value: this._countDown, done: true };
      }
      this._countDown = this._countDown + 1;
      return { value: this._countDown, done: false };
    },
    _countDown: 0
  };
};
[...obj]; // 打印 [1, 2, 3]
```

还可以使用 [generator](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffunction*) 函数来定制对象的迭代行为：

```js
var obj = {x:1, y:2, z: 3}
obj[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
}
[...obj]; // 打印 [1, 2, 3]
```

## 7.运行以下代码片段时，控制台上会打印什么？

```js
var obj = { a: 1, b: 2 };
Object.setPrototypeOf(obj, {c: 3});
Object.defineProperty(obj, 'd', { value: 4, enumerable: false });

// what properties will be printed when we run the for-in loop?
for(let prop in obj) {
    console.log(prop);
}  
```

#### 问题7 : a, b, c

#### 解析：

`for-in`循环遍历对象本身的[可枚举属性](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FEnumerability_and_ownership_of_properties)以及对象从其原型继承的属性。 可枚举属性是可以在`for-in`循环期间包含和访问的属性。

```js
var obj = { a: 1, b: 2 };
var descriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor.enumerable); // true
console.log(descriptor);
// { value: 1, writable: true, enumerable: true, configurable: true }
```

现在你已经掌握了这些知识，应该很容易理解为什么我们的代码要打印这些特定的属性

```js
var obj = { a: 1, b: 2 }; //a，b 都是 enumerables 属性

// 将{c：3}设置为'obj'的原型，并且我们知道
// for-in 循环也迭代 obj 继承的属性
// 从它的原型，'c'也可以被访问。
Object.setPrototypeOf(obj, { c: 3 });

// 我们在'obj'中定义了另外一个属性'd'，但是 
// 将'enumerable'设置为false。 这意味着'd'将被忽略。
Object.defineProperty(obj, "d", { value: 4, enumerable: false });

for (let prop in obj) {
  console.log(prop);
}
// 打印
// a
// b
// c
```



## 8.xGetter() 会打印什么值？

```js
var x = 10;
var foo = {
  x: 90,
  getX: function() {
    return this.x;
  }
};
foo.getX(); // prints 90
var xGetter = foo.getX;
xGetter(); // prints ??
```

#### 问题8 : 10

#### 解析：

在全局范围内初始化`x`时，它成为window对象的属性(不是严格的模式)。看看下面的代码:

```js
var x = 10; // global scope
var foo = {
  x: 90,
  getX: function() {
    return this.x;
  }
};
foo.getX(); // prints 90
let xGetter = foo.getX;
xGetter(); // prints 10
```

咱们可以断言：

```js
window.x === 10; // true
```

`this` 始终指向调用方法的对象。因此，在`foo.getx()`的例子中，它指向`foo`对象，返回`90`的值。而在`xGetter()`的情况下，`this`指向 window对象, 返回 **window** 中的`x`的值，即`10`。

要获取 `foo.x`的值，可以通过使用`Function.prototype.bind`将`this`的值绑定到`foo`对象来创建新函数。

```js
let getFooX = foo.getX.bind(foo);
getFooX(); // 90
```

作者：前端小智

链接：https://juejin.im/post/5d2d146bf265da1b9163c5c9

来源：掘金著作权归作者所有。

下面的转载自：http://www.codeceo.com/article/25-essential-javascript-interview-questions.html

## 9.下面的代码将输出什么到控制台，为什么？

```js
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

由于 `a` 和 `b` 都定义在函数的封闭范围内，并且都始于 `var`关键字，大多数JavaScript开发人员期望 `typeof a` 和 `typeof b` 在上面的例子中都是undefined。

然而，事实并非如此。这里的问题是，大多数开发人员将语句 `var a = b = 3;` 错误地理解为是以下声明的简写：

```js
var b = 3;
var a = b;
```

但事实上，`var a = b = 3;` 实际是以下声明的简写：

```js
b = 3;
var a = b;
```

因此（如果你不使用严格模式的话），该代码段的输出是：

```js
a defined? false
b defined? true
```

但是， `b` 如何才能被定义在封闭函数的范围之外呢？是的，既然语句 `var a = b = 3;` 是语句 `b = 3;` 和 `var a = b;`的简写， `b` 最终成为了一个全局变量（因为它没有前缀 `var` 关键字），因此仍然在范围内甚至封闭函数之外。

需要注意的是，在严格模式下（即使用 [`use strict`](http://www.w3schools.com/js/js_strict.asp)），语句`var a = b = 3;` 将生成`ReferenceError: b is not defined`的运行时错误，从而避免任何否则可能会导致的headfakes /bug。 （还是你为什么应该理所当然地在代码中使用 `use strict` 的最好例子！）

## 10.下面的代码将输出什么到控制台，为什么？

```js
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

上面的代码将输出以下内容到控制台：

```js
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```

在外部函数中， `this` 和`self` 两者都指向了 `myObject`，因此两者都可以正确地引用和访问 `foo`。

在内部函数中， `this` 不再指向 `myObject`。其结果是，`this.foo` 没有在内部函数中被定义，相反，指向到本地的变量`self` 保持在范围内，并且可以访问。 （在ECMA 5之前，在内部函数中的`this` 将指向全局的 `window` 对象；反之，因为作为ECMA 5，内部函数中的功能`this` 是未定义的。）

## 11.封装JavaScript源文件的全部内容到一个函数块有什么意义及理由？

这是一个越来越普遍的做法，被许多流行的JavaScript库（jQuery，Node.js等）采用。这种技术创建了一个围绕文件全部内容的[闭包](http://www.codeceo.com/article/javascript-bibao.html)，也许是最重要的是，创建了一个私有的命名空间，从而有助于避免不同JavaScript模块和库之间潜在的名称冲突。

这种技术的另一个特点是，允许一个易于引用的（假设更短的）别名用于全局变量。

## 12.在JavaScript源文件的开头包含 `use strict` 有什么意义和好处？

对于这个问题，既简要又最重要的答案是，`use strict` 是一种在**JavaScript代码运行时自动实行更严格解析和错误处理**的方法。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常。通常而言，这是一个很好的做法。

::: tip 严格模式的一些主要优点包括：

- **使调试更加容易**。那些被忽略或默默失败了的代码错误，会产生错误或抛出异常，因此尽早提醒你代码中的问题，你才能更快地指引到它们的源代码。
- **防止意外的全局变量**。如果没有严格模式，将值分配给一个未声明的变量会自动创建该名称的全局变量。这是JavaScript中最常见的错误之一。在严格模式下，这样做的话会抛出错误。
- **消除 `this` 强制**。如果没有严格模式，引用null或未定义的值到 `this` 值会自动强制到全局变量。这可能会导致许多令人头痛的问题和让人恨不得拔自己头发的bug。在严格模式下，引用 null或未定义的 `this` 值会抛出错误。
- **不允许重复的属性名称或参数值**。当检测到对象（例如，`var object = {foo: "bar", foo: "baz"};`）中重复命名的属性，或检测到函数中（例如，`function foo(val1, val2, val1){}`）重复命名的参数时，严格模式会抛出错误，因此捕捉几乎可以肯定是代码中的bug可以避免浪费大量的跟踪时间。
- **使`eval()` 更安全**。在严格模式和非严格模式下，`eval()` 的行为方式有所不同。最显而易见的是，在严格模式下，变量和声明在 `eval()` 语句内部的函数不会在包含范围内创建（它们会在非严格模式下的包含范围中被创建，这也是一个常见的问题源）。
- **在 `delete`使用无效时抛出错误**。`delete`操作符（用于从对象中删除属性）不能用在对象不可配置的属性上。当试图删除一个不可配置的属性时，非严格代码将默默地失败，而严格模式将在这样的情况下抛出异常。

:::

## 13.考虑以下两个函数。它们会返回相同的东西吗？ 为什么相同或为什么不相同？

```js
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

出人意料的是，这两个函数返回的内容并不相同。更确切地说是：

```js
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
```

将产生：

```js
foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined
```

这不仅是令人惊讶，而且特别让人困惑的是， `foo2()`返回undefined却没有任何错误抛出。

原因与这样一个事实有关，即分号在JavaScript中是一个可选项（尽管省略它们通常是非常糟糕的形式）。其结果就是，**当碰到 `foo2()`中包含 `return`语句的代码行（代码行上没有其他任何代码），分号会立即自动插入到返回语句之后**。

也不会抛出错误，因为代码的其余部分是完全有效的，即使它没有得到调用或做任何事情（相当于它就是是一个未使用的代码块，定义了等同于字符串 `"hello"`的属性 `bar`）。

这种行为也支持放置左括号于JavaScript代码行的末尾，而不是新代码行开头的约定。正如这里所示，这不仅仅只是JavaScript中的一个风格偏好。

## 14.`NaN` 是什么？它的类型是什么？你如何可靠地测试一个值是否等于 `NaN` ？

`NaN` 属性代表一个“不是数字”的值。这个特殊的值是因为运算不能执行而导致的，不能执行的原因要么是因为其中的运算对象之一非数字（例如， `"abc" / 4`），要么是因为运算的结果非数字（例如，除数为零）。

虽然这看上去很简单，但 `NaN` 有一些令人惊讶的特点，如果你不知道它们的话，可能会导致令人头痛的bug。

首先，虽然 `NaN` 意味着“不是数字”，但是它的类型，不管你信不信，是 `Number`：

```js
console.log(typeof NaN === "number");  // logs "true"
```

此外， `NaN` 和任何东西比较——甚至是它自己本身！——结果是false：

```js
console.log(NaN === NaN);  // logs "false"
```

一种半可靠的方法来测试一个数字是否等于 NaN，是使用内置函数 `isNaN()`，但即使使用 `isNaN()` 依然并非是一个完美的解决方案。

一个更好的解决办法是使用 `value !== value`，如果值等于NaN，只会产生true。另外，ES6提供了一个新的 [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 函数，这是一个不同的函数，并且比老的全局 `isNaN()` 函数更可靠。

## 15.讨论写函数 `isInteger(x)` 的可能方法，用于确定x是否是整数。

这可能听起来是小菜一碟，但事实上，这很琐碎，因为ECMAScript 6引入了一个新的正以此为目的 `Number.isInteger()` 函数。然而，之前的ECMAScript 6，会更复杂一点，因为没有提供类似的 `Number.isInteger()` 方法。

问题是，在ECMAScript规格说明中，整数只概念上存在：即，数字值总是存储为浮点值。

考虑到这一点，最简单又最干净的ECMAScript6之前的解决方法（同时也非常稳健地返回 `false` ，即使一个非数字的值，如字符串或 `null` ，被传递给函数）如下：

```js
function isInteger(x) { return (x^0) === x; }
```

下面的解决方法也是可行的，虽然不如上面那个方法优雅：

```js
function isInteger(x) { return Math.round(x) === x; }
```

请注意 `Math.ceil()` 和 `Math.floor()` 在上面的实现中等同于 `Math.round()`。

或：

```js
function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0);
```

相当普遍的一个不正确的解决方案是：

```js
function isInteger(x) { return parseInt(x, 10) === x; }
```

虽然这个以 `parseInt`函数为基础的方法在 `x` 取许多值时都能工作良好，但一旦 `x` 取值相当大的时候，就会无法正常工作。问题在于 `parseInt()` 在解析数字之前强制其第一个参数到字符串。因此，一旦数目变得足够大，它的字符串就会表达为指数形式（例如， `1e+21`）。因此，`parseInt()` 函数就会去解析 `1e+21`，但当到达 `e`字符串的时候，就会停止解析，因此只会返回值 `1`。注意：

```js
> String(1000000000000000000000)
'1e+21'

> parseInt(1000000000000000000000, 10)
1

> parseInt(1000000000000000000000, 10) === 1000000000000000000000
false
```

## 16.写一个简单的函数（少于80个字符），要求返回一个布尔值指明字符串是否为回文结构。

下面这个函数在 `str` 是回文结构的时候返回true，否则，返回false。

```js
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
```

例如：

```js
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

## 17.写一个 `sum`方法，在使用下面任一语法调用时，都可以正常工作。

```js
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

（至少）有两种方法可以做到：

**方法1**

```js
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
```

在JavaScript中，函数可以提供到 `arguments` 对象的访问，`arguments` 对象提供传递到函数的实际参数的访问。这使我们能够使用 `length` 属性来确定在运行时传递给函数的参数数量。

如果传递两个参数，那么只需加在一起，并返回。

否则，我们假设它被以 `sum(2)(3)`这样的形式调用，所以我们返回一个匿名函数，这个匿名函数合并了传递到 `sum()`的参数和传递给匿名函数的参数。

**方法2**

```js
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
```

:smile:**当调用一个函数的时候，JavaScript不要求参数的数目匹配函数定义中的参数数量。如果传递的参数数量大于函数定义中参数数量，那么多余参数将简单地被忽略。另一方面，如果传递的参数数量小于函数定义中的参数数量，那么缺少的参数在函数中被引用时将会给一个 `undefined`值。**所以，在上面的例子中，简单地检查第2个参数是否未定义，就可以相应地确定函数被调用以及进行的方式。

## 18.请看下面的代码片段：

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

（a）当用户点击“Button 4”的时候会输出什么到控制台，为什么？（b）提供一个或多个备用的可按预期工作的实现方案。

（a）无论用户点击什么按钮，数字5将总会输出到控制台。这是因为，当 `onclick` 方法被调用（对于任何按钮）的时候， `for` 循环已经结束，变量 `i` 已经获得了5的值。（面试者如果能够谈一谈有关如何执行上下文，可变对象，激活对象和内部“范围”属性贡有助于闭包行为，则可以加分）。

（b）要让代码工作的关键是，通过传递到一个新创建的函数对象，在每次传递通过 `for` 循环时，捕捉到 `i` 值。下面是三种可能实现的方法：

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}
```

或者，你可以封装全部调用到在新匿名函数中的 `btn.addEventListener` ：

```js
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}
```

也可以调用数组对象的本地 `forEach` 方法来替代 `for` 循环：

```js
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() { console.log(i); });
  document.body.appendChild(btn);
});
```

## 19.下面的代码将输出什么到控制台，为什么？

```js
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```

输出结果是：

```js
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
```

`arr1` 和 `arr2` 在上述代码执行之后，两者相同了，原因是：

- **调用数组对象的 `reverse()` 方法并不只返回反顺序的阵列，它也反转了数组本身的顺序**（即，在这种情况下，指的是 `arr1`）。
-  **`reverse()` 方法返回一个到数组本身的引用（在这种情况下即，`arr1`）。其结果为，`arr2` 仅仅是一个到 `arr1`的:smile:引用（而不是副本）**。因此，当对 `arr2`做了任何事情（即当我们调用 `arr2.push(arr3);`）时，`arr1` 也会受到影响，因为 `arr1` 和 `arr2` 引用的是同一个对象。

这里有几个侧面点有时候会让你在回答这个问题时，阴沟里翻船：

传递数组到另一个数组的 `push()` 方法会让整个数组作为单个元素映射到数组的末端。其结果是，语句 `arr2.push(arr3);` **在其整体中添加 `arr3` 作为一个单一的元素到 `arr2` 的末端**（也就是说，它并没有连接两个数组，连接数组是 `concat()` 方法的目的）。

和Python一样，JavaScript标榜数组方法调用中的负数下标，例如 `slice()` 可作为引用数组末尾元素的方法：例如，**-1下标表示数组中的最后一个元素，等等。**

## 20.下面的代码将输出什么到控制台，为什么？

```js
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```

上面的代码将输出以下内容到控制台：

```js
"122"
"32"
"02"
"112"
"NaN2"
NaN
```

原因是…

这里的根本问题是，JavaScript（ECMAScript）是一种弱类型语言，它可对值进行自动类型转换，以适应正在执行的操作。让我们通过上面的例子来说明这是如何做到的。

例1：`1 + "2" + "2"` 输出：`"122"` 说明： `1 + "2"` 是执行的第一个操作。由于其中一个运算对象（`"2"`）是字符串，JavaScript会假设它需要执行字符串连接，因此，会将 `1` 的类型转换为 `"1"`， `1 + "2"`结果就是 `"12"`。然后， `"12" + "2"` 就是 `"122"`。

例2： `1 + +"2" + "2"` 输出： `"32"` 说明：根据运算的顺序，要执行的第一个运算是 `+"2"`（第一个 `"2"` 前面的额外 `+` 被视为一元运算符）。因此，JavaScript将 `"2"` 的类型转换为数字，然后应用一元 `+` 号（即，将其视为一个正数）。其结果是，接下来的运算就是 `1 + 2` ，这当然是 `3`。然后我们需要在一个数字和一个字符串之间进行运算（即， `3` 和 `"2"`），同样的，JavaScript会将数值类型转换为字符串，并执行字符串的连接，产生 `"32"`。

例3： `1 + -"1" + "2"` 输出： `"02"`  说明：这里的解释和前一个例子相同，除了此处的一元运算符是 `-` 而不是 `+`。先是 `"1"` 变为 `1`，然后当应用 `-` 时又变为了 `-1` ，然后将其与 `1`相加，结果为 `0`，再将其转换为字符串，连接最后的 `"2"` 运算对象，得到 `"02"`。

例4： `+"1" + "1" + "2"` 输出： `"112"` 说明：虽然第一个运算对象 `"1"`因为前缀的一元 `+` 运算符类型转换为数值，但又立即转换回字符串，当连接到第二个运算对象 `"1"` 的时候，然后又和最后的运算对象`"2"` 连接，产生了字符串 `"112"`。

例5： `"A" - "B" + "2"` 输出： `"NaN2"` 说明：由于运算符 `-`  不能被应用于字符串，并且 `"A"` 和 `"B"` 都不能转换成数值，因此，`"A" - "B"`的结果是 `NaN`，然后再和字符串 `"2"` 连接，得到 `"NaN2"` 。

例6： `"A" - "B" + 2` 输出： `NaN` 说明：参见前一个例子， `"A" - "B"` 结果为 `NaN`。但是，应用任何运算符到NaN与其他任何的数字运算对象，结果仍然是 `NaN`。

## 21.下面的递归代码在数组列表偏大的情况下会导致堆栈溢出。在保留递归模式的基础上，你怎么解决这个问题？

```js
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

潜在的堆栈溢出可以通过修改`nextListItem` 函数避免：

```js
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
```

堆栈溢出之所以会被消除，是因为事件循环操纵了递归，而不是调用堆栈。当 `nextListItem` 运行时，如果 `item`不为空，timeout函数（`nextListItem`）就会被推到事件队列，该函数退出，因此就清空调用堆栈。当事件队列运行其timeout事件，且进行到下一个 `item` 时，定时器被设置为再次调用 `nextListItem`。因此，该方法从头到尾都没有直接的递归调用，所以无论迭代次数的多少，调用堆栈保持清空的状态。

## 22.JavaScript中的“闭包”是什么？请举一个例子。

闭包是一个可以访问外部（封闭）函数作用域链中的变量的内部函数。闭包可以访问三种范围中的变量：这三个范围具体为：（1）自己范围内的变量，（2）封闭函数范围内的变量，以及（3）全局变量。

下面是一个简单的例子：

```js
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);

  })(456);
})(123);
```

在上面的例子中，来自于 `innerFunc`， `outerFunc`和全局命名空间的变量都在 `innerFunc`的范围内。因此，上面的代码将输出如下：

```js
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
```

## 23.下面的代码将输出什么：

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

解释你的答案。闭包在这里能起什么作用？

上面的代码不会按预期显示值0，1，2，3，和4，而是会显示5，5，5，5，和5。

原因是，在循环中执行的每个函数将整个循环完成之后被执行，因此，将会引用存储在 `i`中的最后一个值，那就是5。

闭包可以通过为每次迭代创建一个唯一的范围，存储范围内变量的每个唯一的值，来防止这个问题，如下：

```js
for (var i = 0; i < 5; i++) {
	(function(x) {
    	setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
```

这就会按预期输出0，1，2，3，和4到控制台。

## 24.以下代码行将输出什么到控制台？

```js
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```

并解释。

该代码将输出：

```js
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```

在JavaScript中， `||` 和 `&&`都是逻辑运算符，用于在从左至右计算时，返回第一个可完全确定的“逻辑值”。

或（ `||` ）运算符。在形如 `X||Y`的表达式中，首先计算`X` 并将其解释执行为一个布尔值。如果这个布尔值`true`，那么返回`true`（1），不再计算 `Y`，因为“或”的条件已经满足。如果这个布尔值为`false`，那么我们仍然不能知道 `X||Y`是真是假，直到我们计算 `Y`，并且也把它解释执行为一个布尔值。

因此， `0 || 1` 的计算结果为true（1），同理计算`1 || 2`。

与（ `&&`）运算符。在形如 `X&&Y`的表达式中，首先计算 `X`并将其解释执行为一个布尔值。如果这个布尔值为 `false`，那么返回 `false`（0），不再计算 `Y`，因为“与”的条件已经失败。如果这个布尔值为`true`，但是，我们仍然不知道 `X&&Y` 是真是假，直到我们去计算 `Y`，并且也把它解释执行为一个布尔值。

不过，**关于 `&&`运算符有趣的地方在于，当一个表达式计算为“true”的时候，那么就返回表达式本身。**这很好，虽然它在逻辑表达式方面计算为“真”，但如果你希望的话也可用于返回该值。这就解释了为什么，有些令人奇怪的是， `1 && 2`返回 `2`（而不是你以为的可能返回 `true` 或 `1`）。

## 25.以下代码将输出什么？并解释你的答案。

```js
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

这段代码将输出 `456`（而不是 `123`）。

原因为：当设置对象属性时，JavaScript会暗中字符串化参数值。在这种情况下，由于 `b` 和 `c`都是对象，因此它们都将被转换为`"[object Object]"`。结果就是， `a[b]`和`a[c]`均相当于`a["[object Object]"]` ，并可以互换使用。因此，设置或引用 `a[c]`和设置或引用 `a[b]`完全相同。

## 26.下面的代码将输出什么到控制台，为什么：

```js
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

代码有什么问题，以及应该如何修复。

代码将输出：

```js
undefined
John Doe
```

第一个 `console.log`之所以输出 `undefined`，是因为我们正在从 `hero`对象提取方法，所以调用了全局上下文中（即窗口对象）的 `stoleSecretIdentity()`，而在此全局上下文中， `_name`属性不存在。

其中一种修复`stoleSecretIdentity()` 函数的方法如下：

```js
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
```

## 27.创建一个给定页面上的一个DOM元素，就会去访问元素本身及其所有子元素（不只是它的直接子元素）的函数。对于每个被访问的元素，函数应该传递元素到提供的回调函数。

此函数的参数为：

- DOM元素
- 回调函数（将DOM元素作为其参数）

访问树（DOM）的所有元素是经典的深度优先搜索算法应用。下面是一个示范的解决方案：

```js
function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],p_callback);  // recursive call
   }
}
```

下面转载自：
作者：刘小夕

链接：https://juejin.im/post/5d124a12f265da1b9163a28d

来源：掘金著作权归作者所有。

## 28. new的实现原理是什么？

::: tip `new` 的实现原理:

1. 创建一个空对象，构造函数中的this指向这个空对象
2. 这个新对象被执行 [[原型]] 连接
3. 执行构造函数方法，属性和方法被添加到this引用的对象中
4. 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。

:::

```js
function _new() {
    let target = {}; //创建的新对象
    //第一个参数是构造函数
    let [constructor, ...args] = [...arguments];
    //执行[[原型]]连接;target 是 constructor 的实例
    target.__proto__ = constructor.prototype;
    //执行构造函数，将属性或方法添加到创建的空对象上
    let result = constructor.apply(target, args);
    if (result && (typeof (result) == "object" || typeof (result) == "function")) {
        //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
        return result;
    }
    //如果构造函数返回的不是一个对象，返回创建的新对象
    return target;
}
```

## 29. 如何正确判断this的指向？

如果用一句话说明 this 的指向，那么即是: 谁调用它，this 就指向谁。

但是仅通过这句话，我们很多时候并不能准确判断 this 的指向。因此我们需要借助一些规则去帮助自己：

this 的指向可以按照以下顺序判断:

#### 全局环境中的 this

浏览器环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象 `window`;

node 环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this 都是空对象 `{}`;

#### 是否是 `new` 绑定

如果是 `new` 绑定，并且构造函数中没有返回 function 或者是 object，那么 this 指向这个新对象。如下:

> 构造函数返回值不是 function 或 object。`new Super()` 返回的是 this 对象。

```js
function Super(age) {
    this.age = age;
}

let instance = new Super('26');
console.log(instance.age); //26
```

> 构造函数返回值是 function 或 object，`new Super()`是返回的是Super种返回的对象。

```js
function Super(age) {
    this.age = age;
    let obj = {a: '2'};
    return obj;
}

let instance = new Super('hello'); 
console.log(instance);//{ a: '2' }
console.log(instance.age); //undefined
```

#### 函数是否通过 call,apply 调用，或者使用了 bind 绑定，如果是，那么this绑定的就是指定的对象【归结为显式绑定】。

```js
function info(){
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
var info = person.info;
info.call(person);   //20
info.apply(person);  //20
info.bind(person)(); //20
```

这里同样需要注意一种**特殊**情况，如果 call,apply 或者 bind 传入的第一个参数值是 `undefined` 或者 `null`，严格模式下 this 的值为传入的值 null /undefined。非严格模式下，实际应用的默认绑定规则，this 指向全局对象(node环境为global，浏览器环境为window)

```js
function info(){
    //node环境中:非严格模式 global，严格模式为null
    //浏览器环境中:非严格模式 window，严格模式为null
    console.log(this);
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
var info = person.info;
//严格模式抛出错误；
//非严格模式，node下输出undefined（因为全局的age不会挂在 global 上）
//非严格模式。浏览器环境下输出 28（因为全局的age会挂在 window 上）
info.call(null);
```

#### 隐式绑定，函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的隐式调用为: `xxx.fn()`

```js
function info(){
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
person.info(); //20;执行的是隐式绑定
```

#### 默认绑定，在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用。

非严格模式： node环境，执行全局对象 global，浏览器环境，执行全局对象 window。

严格模式：执行 undefined

```js
function info(){
    console.log(this.age);
}
var age = 28;
//严格模式；抛错
//非严格模式，node下输出 undefined（因为全局的age不会挂在 global 上）
//非严格模式。浏览器环境下输出 28（因为全局的age会挂在 window 上）
//严格模式抛出，因为 this 此时是 undefined
info(); 
```

#### 箭头函数的情况：

箭头函数没有自己的this，继承外层上下文绑定的this。

```js
let obj = {
    age: 20,
    info: function() {
        return () => {
            console.log(this.age); //this继承的是外层上下文绑定的this
        }
    }
}

let person = {age: 28};
let info = obj.info();
info(); //20

let info2 = obj.info.call(person);
info2(); //28
```

## 30.实现一个深拷贝

#### 深拷贝实现

> 1.深拷贝最简单的实现是: `JSON.parse(JSON.stringify(obj))`

`JSON.parse(JSON.stringify(obj))` 是最简单的实现方式，但是有一些缺陷：

1. 对象的属性值是函数时，无法拷贝。
2. 原型链上的属性无法拷贝
3. 不能正确的处理 Date 类型的数据
4. 不能处理 RegExp
5. 会忽略 symbol
6. 会忽略 undefined

> 2.实现一个 deepClone 函数

1. 如果是基本数据类型，直接返回
2. 如果是 `RegExp` 或者 `Date` 类型，返回对应类型
3. 如果是复杂数据类型，递归。
4. 考虑循环引用的问题

```js
function deepClone(obj, hash = new WeakMap()) { //递归拷贝
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (obj === null || typeof obj !== 'object') {
        //如果不是复杂数据类型，直接返回
        return obj;
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    /**
     * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
     * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
     */
    let t = new obj.constructor();
    hash.set(obj, t);
    for (let key in obj) {
        //递归
        if (obj.hasOwnProperty(key)) {//是否是自身的属性
            t[key] = deepClone(obj[key], hash);
        }
    }
    return t;
}
```

