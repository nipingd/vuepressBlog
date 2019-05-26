## 1. ...过滤唯一值

`Set`对象类型是在ES6中引入的，配合展开操作 `...`一起，我们可以使用它来创建一个新数组，该数组只有唯一的值。

```js
const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Result: [1, 2, 3, 5]
```

在ES6之前，隔离惟一值将涉及比这多得多的代码。

此技巧适用于包含基本类型的数组： `undefined`， `null`， `boolean`， `string`和 `number`。 （如果你有一个包含对象，函数或其他数组的数组，你需要一个不同的方法！）

## 2. 与或运算

三元运算符是编写简单（有时不那么简单）条件语句的快速方法，如下所示：

```js
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';
```

但有时使用三元运算符处理也会很复杂。 相反，我们可以使用'与' `&&`和'或' `||` 逻辑运算符以更简洁的方式书写表达式。 这通常被称为“短路”或“短路运算”。

#### **它是怎么工作的**

假设我们只想返回两个或多个选项中的一个。

使用 `&&`将返回第一个条件为 `假`的值。如果每个操作数的计算值都为 `true`，则返回最后一个计算过的表达式。

```js
let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0
```

使用 `||`将返回第一个条件为 `真`的值。如果每个操作数的计算结果都为 `false`，则返回最后一个计算过的表达式。

```js
let one = 1, two = 2, three = 3;
console.log(one || two || three); // Result: 1
console.log(0 || null); // Result: null
```

#### **例一**

假设我们想返回一个变量的长度，但是我们不知道变量的类型。

我们可以使用 `if/else`语句来检查 `foo`是可接受的类型，但是这可能会变得非常冗长。或运行可以帮助我们简化操作：

```js
return (foo || []).length
```

如果变量 `foo`是true，它将被返回。否则，将返回空数组的长度: `0`。

#### **例二**

你是否遇到过访问嵌套对象属性的问题？ 你可能不知道对象或其中一个子属性是否存在，这可能会导致令人沮丧的错误。

假设我们想在 `this.state`中访问一个名为 `data`的属性，但是在我们的程序成功返回一个获取请求之前， `data` 是未定义的。

根据我们使用它的位置，调用 `this.state.data`可能会阻止我们的应用程序运行。 为了解决这个问题，我们可以将其做进一步的判断：

```js
if (this.state.data) {  
    return this.state.data;} 
else {  
    return 'Fetching Data';
}
```

但这似乎很重复。 ' `或'` 运算符提供了更简洁的解决方案：

```js
return (this.state.data || 'Fetching Data');
```

## 3.转换为布尔值

除了常规的布尔值 `true`和 `false`之外，JavaScript还将所有其他值视为 **‘truthy’**或**‘falsy’**。

除非另有定义，否则 **JavaScript 中的所有值都是'truthy'**，除了 `0`， `“”`， `null`， `undefined`， `NaN`，当然还有 `false`，这些都是'falsy'。

::: tip 假值列表

- 0（包括+0、-0）
- null
- undefined
- NaN
- false

:::

我们可以通过使用负算运算符轻松地在 `true`和 `false`之间切换。它也会将类型转换为“boolean”。

```js
const isTrue  = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"     
```

## 4. 转换为字符串

要快速地将数字转换为字符串，我们可以使用连接运算符 `+`后跟一组空引号 `""`。

```js
const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"
```

## 5. 转换为数字

使用加法运算符 `+`可以快速实现相反的效果。

```js
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); Result: "number"
```

这也可以用于将布尔值转换为数字，如下所示

```js
 console.log(+true);  // Return: 1 
 console.log(+false); // Return: 0
```

在某些上下文中， **`+`将被解释为连接操作符，而不是加法操作符**。**当这种情况发生时(你希望返回一个整数，而不是浮点数)，您可以使用两个波浪号: `~~`。**

连续使用两个波浪有效地否定了操作，因为 `— ( — n — 1) — 1=n+1 — 1=n`。 换句话说， `~—16` 等于 `15。`

```js
const int = ~~"15"
console.log(int); // Result: 15
console.log(typeof int); Result: "number"
```

虽然我想不出很多用例，但是按位NOT运算符也可以用在布尔值上： `~true=-2`和 `~false=-1`。

## 6.性能更好的运算

从ES7开始，可以使用指数运算符 `**`作为幂的简写，这比编写 `Math.pow(2,3)` 更快。 这是很简单的东西，但它之所以出现在列表中，是因为没有多少教程更新过这个操作符。

```js
console.log(2 ** 3); // Result: 8
```

这不应该与通常用于表示指数的^符号相混淆，但在JavaScript中它是按位 `异或`运算符。

在ES7之前，只有以 `2`为基数的幂才存在简写，使用按位左移操作符 `<<`

```js
Math.pow(2, n);2 << (n - 1);2**n;
```

例如， `2<<3=16`等于 `2**4=16`。

## 7. 快速浮点数转整数

如果希望将浮点数转换为整数，可以使用 `Math.floor()`、 `Math.ceil()`或 `Math.round()`。但是还有一种更快的方法可以使用 **`|`(位或运算符)将浮点数截断为整数。**

```js
console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23
```

`|`的行为取决于处理的是正数还是负数，所以最好只在确定的情况下使用这个快捷方式。

如果 `n`为正，则 `n|0`有效地向下舍入。 如果 `n`为负数，则有效地向上舍入。 更准确地说，**此操作将删除小数点后面的任何内容，将浮点数截断为整数。**

你可以使用 `~~`来获得相同的舍入效果，如上所述，实际上任何位操作符都会强制浮点数为整数。这些特殊操作之所以有效，是因为一旦强制为整数，值就保持不变。

#### **删除最后一个数字**

`按位或`运算符还可以用于从整数的末尾删除任意数量的数字。这意味着我们不需要使用这样的代码来在类型之间进行转换。

```
let str = "1553"; 
Number(str.substring(0, str.length - 1));
```

:star2:相反，按位或运算符可以这样写：

```js
console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1
```

## 8. 类中的自动绑定

我们可以在类方法中使用ES6箭头表示法，并且通过这样做可以隐含绑定。 这通常会在我们的类构造函数中保存几行代码，我们可以愉快地告别重复的表达式，例如 `this.myMethod=this.myMethod.bind(this)`

```js
import React, { Component } from React;
export default class App extends Compononent {  
constructor(props) {  
super(props);  
this.state = {};  
}
myMethod = () => {    
// This method is bound implicitly!  
}
render() {    
	return (      
		<>        
			<div>          
				{this.myMethod()}        
			</div>      
		</>    
	)  
  }
};
```

## 9. 数组截断

如果要从数组的末尾删除值，有比使用 `splice()`更快的方法。

例如，如果你知道原始数组的大小，您可以重新定义它的 `length`属性，就像这样

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]
```

这是一个特别简洁的解决方案。但是，**我发现 `slice()`方法的运行时更快**。如果速度是你的主要目标，考虑使用：

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log(array); // Result: [0, 1, 2, 3]
```

## 10. 获取数组中的最后一项

数组方法 `slice()`可以接受负整数，如果提供它，它将接受数组末尾的值，而不是数组开头的值。

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]
```

## 11.格式化JSON代码

最后，你之前可能已经使用过 `JSON.stringify`，但是您是否意识到它还可以帮助你缩进JSON？

`stringify()`方法有两个可选参数：一个 `replacer`函数，可用于过滤显示的JSON和一个空格值。

```js
console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));
// Result:
// '{
//     "alpha": A,
//     "beta": B
// }'
```

**原文：https://medium.com/@bretcameron/12-javascript-tricks-you-wont-find-in-most-tutorials-a9c9331f169d**

