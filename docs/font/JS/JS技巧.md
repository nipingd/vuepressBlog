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

## 12.编写更好的 JavaScript 条件式和匹配条件的技巧

### 介绍

如果你像我一样乐于见到整洁的代码，那么你会尽可能地减少代码中的条件语句。通常情况下，面向对象编程让我们得以避免条件式，并代之以继承和多态。我认为我们应当尽可能地遵循这些原则。

正如我在另一篇文章 [JavaScript 整洁代码的最佳实践](https://devinduct.com/blogpost/22/javascript-clean-code-best-practices)里提到的，你写的代码不单单是给机器看的，还是给“**未来的自己**”以及“**其他人**”看的。

从另一方面来说，由于各式各样的原因，可能我们的代码最终还是会有条件式。也许是修复 bug 的时间很紧，也许是不使用条件语句会对我们的代码库造成大的改动，等等。本文将会解决这些问题，同时帮助你组织所用的条件语句。

### 技巧

以下是关于如何构造 `if...else` 语句以及如何用更少的代码实现更多功能的技巧。阅读愉快！

### 1. 要事第一。小细节，但很重要

不要使用否定条件式（这可能会让人感到疑惑）。同时，使用条件式简写来表示 `boolean` 值。这个无须再强调了，尤其是否定条件式，这不符合正常的思维方式。

:stuck_out_tongue_closed_eyes:不好的：

```js
const isEmailNotVerified = (email) => {
    // 实现
}

if (!isEmailNotVerified(email)) {
    // 做一些事...
}

if (isVerified === true) {
    // 做一些事...
}
```

:grinning:好的：

```js
const isEmailVerified = (email) => {
    // 实现
}

if (isEmailVerified(email)) {
    // 做一些事...
}

if (isVerified) {
    // 做一些事...
}
```

现在，理清了上面的事情后，我们就可以开始了。

### 2. 对于多个条件，使用 `Array.includes`

假设我们想要在函数中检查汽车模型是 `renault` 还是 `peugeot`。那么代码可能是这样的：

```js
const checkCarModel = (model) => {
    if(model === 'renault' || model === 'peugeot') { 
    console.log('model valid');
    }
}

checkCarModel('renault'); // 输出 'model valid'
```

考虑到我们只有两个模型，这么做似乎也还能接受，但如果我们还想要检查另一个或者是几个模型呢？如果我们增加更多 `or` 语句，那么代码将变得难以维护，且不够整洁。为了让它更加简洁，我们可以像这样重写函数：

```js
const checkCarModel = (model) => {
    if(['peugeot', 'renault'].includes(model)) { 
    console.log('model valid');
    }
}

checkCarModel('renault'); // 输出 'model valid'
```

上面的代码看起来已经很漂亮了。为了更进一步改善它，我们可以创建一个变量来存放汽车模型：

```js
const checkCarModel = (model) => {
    const models = ['peugeot', 'renault'];

    if(models.includes(model)) { 
    console.log('model valid');
    }
}

checkCarModel('renault'); // 输出 'model valid'
```

现在，如果我们想要检查更多模型，只需要添加一个新的数组元素即可。此外，如果它很重要的话，我们还可以将 `models` 变量定义在函数作用域外，并在需要的地方重用。这种方式可以让我们集中管理，并使维护变得轻而易举，因为我们只需在代码中更改一个位置。

### 3. 匹配所有条件，使用 `Array.every` 或者 `Array.find`

在本例中，我们想要检查每个汽车模型是否都是传入函数的那一个。为了以更加命令式的方式实现，我们会这么做：

```js
const cars = [
  { model: 'renault', year: 1956 },
  { model: 'peugeot', year: 1968 },
  { model: 'ford', year: 1977 }
];

const checkEveryModel = (model) => {
  let isValid = true;

  for (let car of cars) {
    if (!isValid) {
      break;
    }
    isValid = car.model === model;
  }

  return isValid;
}

console.log(checkEveryModel('renault')); // 输出 false
```

如果你更喜欢以命令式的风格行事，上面的代码或许还不错。另一方面，如果你不关心其背后发生了什么，那么你可以重写上面的函数并使用 `Array.every` 或者 `Array.find` 来达到相同的结果。

```js
const checkEveryModel = (model) => {
  return cars.every(car => car.model === model);
}

console.log(checkEveryModel('renault')); // 输出 false
```

通过使用 `Array.find` 并做轻微的调整，我们可以达到相同的结果。两者的表现是一致的，因为两个函数都为数组中的每一个元素执行了回调，并且在找到一个 **falsy** 项时立即返回 `false`。

```js
const checkEveryModel = (model) => {
  return cars.find(car => car.model !== model) === undefined;
}

console.log(checkEveryModel('renault')); // 输出 false
```

### 4. 匹配部分条件，使用 `Array.some`

`Array.every` 匹配所有条件，这个方法则可以轻松地检查我们的数组是否包含某一个或某几个元素。为此，我们需要提供一个回调并基于条件返回一个布尔值。

我们可以通过编写一个类似的 `for...loop` 语句来实现相同的结果，就像之前写的一样。但幸运的是，有很酷的 JavaScript 函数可以来帮助我们完成这件事。



```js
const cars = [
  { model: 'renault', year: 1956 },
  { model: 'peugeot', year: 1968 },
  { model: 'ford', year: 1977 }
];

const checkForAnyModel = (model) => {
  return cars.some(car => car.model === model);
}

console.log(checkForAnyModel('renault')); // 输出 true
```

### 5. 提前返回而不是使用 `if...else` 分支

当我还是学生的时候，就有人教过我：一个函数应该只有一个返回语句，并且只从一个地方返回。如果细心处理，这个方法倒也还好。我这么说也就意味着，我们应该意识到它在某些情况下可能会引起条件式嵌套地狱。如果不受控制，多个分支和 `if...else` 嵌套将会让我们感到很痛苦。

另一方面，如果代码库很大且包含很多行代码，位于深层的一个返回语句可能会带来问题。现在我们都实行关注点分离和 SOLID 原则，因此，代码行过多这种情况挺罕见的。

举例来解释这个问题。假设我们想要显示所给车辆的模型和生产年份：

```js
const checkModel = (car) => {
  let result; // 首先，定义一个 result 变量

  // 检查是否有车
  if(car) {

    // 检查是否有车的模型
    if (car.model) {

      // 检查是否有车的年份
      if(car.year) {
        result = `Car model: ${car.model}; Manufacturing year: ${car.year};`;
      } else {
        result = 'No car year';
      }

    } else {
      result = 'No car model'
    }   

  } else {
    result = 'No car';
  }

  return result; // 我们的单独的返回语句
}

console.log(checkModel()); // 输出 'No car'
console.log(checkModel({ year: 1988 })); // 输出 'No car model'
console.log(checkModel({ model: 'ford' })); // 输出 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // 输出 'Car model: ford; Manufacturing year: 1988;'
```

正如你所看到的，即使本例的问题很简单，上面的代码也实在太长了。可以想象一下，如果我们有更加复杂的逻辑会发生什么事。大量的 `if...else` 语句。

我们可以重构上面的函数，分解成多个步骤并稍做改善。例如，使用三元操作符，包括 `&&` 条件式等。不过，这里我直接跳到最后，向你展示借助现代 JavaScript 特性和多个返回语句，代码可以有多简洁。

```js
const checkModel = ({model, year} = {}) => {
  if(!model && !year) return 'No car';
  if(!model) return 'No car model';
  if(!year) return 'No car year';

  // 这里可以任意操作模型或年份
  // 确保它们存在
  // 无需更多检查

  // doSomething(model);
  // doSomethingElse(year);

  return `Car model: ${model}; Manufacturing year: ${year};`;
}

console.log(checkModel()); // 输出 'No car'
console.log(checkModel({ year: 1988 })); // 输出 'No car model'
console.log(checkModel({ model: 'ford' })); // 输出 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // 输出 'Car model: ford; Manufacturing year: 1988;'
```

在重构版本中，我们包含了解构和默认参数。默认参数确保我们在传入 `undefined` 时有可用于解构的值。注意，如果传入 `null` ，函数将会抛出错误。这也是之前那个方法的优点所在，因为那个方法在传入 `null`的时候会输出 `'No car'`。

对象解构确保函数只取所需。例如，如果我们在给定车辆对象中包含额外属性，则该属性在我们的函数中是无法获取的。

根据偏好，开发者会选择其中一种方式。实践中，编写的代码通常介于两者之间。很多人觉得 `if...else`语句更容易理解，并且有助于他们更为轻松地遵循程序流程。

### 6. 使用索引或者映射，而不是 `switch` 语句

假设我们想要基于给定的国家获取汽车模型。



```js
const getCarsByState = (state) => {
  switch (state) {
    case 'usa':
      return ['Ford', 'Dodge'];
    case 'france':
      return ['Renault', 'Peugeot'];
    case 'italy':
      return ['Fiat'];
    default:
      return [];
  }
}

console.log(getCarsByState()); // 输出 []
console.log(getCarsByState('usa')); // 输出 ['Ford', 'Dodge']
console.log(getCarsByState('italy')); // 输出 ['Fiat']
```

上诉代码可以重构，完全去除 `switch` 语句。



```js
const cars = new Map()
  .set('usa', ['Ford', 'Dodge'])
  .set('france', ['Renault', 'Peugeot'])
  .set('italy', ['Fiat']);

const getCarsByState = (state) => {
  return cars.get(state) || [];
}

console.log(getCarsByState()); // 输出 []
console.log(getCarsByState('usa')); //输出 ['Ford', 'Dodge']
console.log(getCarsByState('italy')); // 输出 ['Fiat']
```

或者，我们还可以为包含可用汽车列表的每个国家创建一个类，并在需要的时候使用。不过这个就是题外话了，本文的主题是关于条件句的。更恰当的修改是使用对象字面量。



```js
const carState = {
  usa: ['Ford', 'Dodge'],
  france: ['Renault', 'Peugeot'],
  italy: ['Fiat']
};

const getCarsByState = (state) => {
  return carState[state] || [];
}

console.log(getCarsByState()); // 输出 []
console.log(getCarsByState('usa')); // 输出 ['Ford', 'Dodge']
console.log(getCarsByState('france')); // 输出 ['Renault', 'Peugeot']
```

### 7. 使用自判断链接（optional-chaining）和空合并（nullish-coalescing）

到了这一小节，我终于可以说“**最后**”了。在我看来，这两个功能对于 JavaScript 语言来说是非常有用的。作为一个来自 C# 世界的人，可以说我经常使用它们。

在写这篇文章的时候，这些还没有得到完全的支持。因此，对于以这种方式编写的代码，你需要使用 Babel 进行编译。你可以在[自判断链接](https://github.com/tc39/proposal-optional-chaining)这里以及在[空合并](https://github.com/tc39/proposal-nullish-coalescing)这里查阅。

自判断链接允许我们在没有显式检查中间节点是否存在的时候处理树形结构，空合并可以确保节点不存在时会有一个默认值，配合自判断链接使用会有不错的效果。

让我们用一些例子来支撑上面的结论。一开始，我们还是用以前的老方法：



```js
const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA'
    }
  }
}

// 获取汽车模型
const model = car && car.model || 'default model';
// 获取厂商地址
const street = car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street || 'default street';
// 请求一个不存在的属性
const phoneNumber = car && car.manufacturer && car.manufacturer.address && car.manufacturer.phoneNumber;

console.log(model) // 输出 'Fiesta'
console.log(street) // 输出 'Some Street Name'
console.log(phoneNumber) // 输出 undefined
```

因此，如果我们想要知道厂商是否来自 USA 并将结果打印，那么代码是这样的：



```js
const checkCarManufacturerState = () => {
  if(car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('Is from USA');
  }
}

checkCarManufacturerState() // 输出 'Is from USA'
```

我无需再赘述如果对象结构更加复杂的话，代码会多么混乱了。许多库，例如 lodash，有自己的函数作为替代方案。不过这不是我们想要的，我们想要的是在原生 js 中也能做同样的事。我们来看一下新的方法：



```js
    // 获取汽车模型
    const model = car?.model ?? 'default model';
    // 获取厂商地址
    const street = car?.manufacturer?.address?.street ?? 'default street';

    // 检查汽车厂商是否来自 USA
    const checkCarManufacturerState = () => {
      if(car?.manufacturer?.address?.state === 'USA') {
        console.log('Is from USA');
      }
    }
```

这看起来更加漂亮和简洁，对我来说，非常符合逻辑。如果你想知道为什么应该使用 `??` 而不是 `||` ，只需想一想什么值会被当做 `true` 或者 `false` 从而得到意料之外的输出。

顺便说句题外话。自判断链接同样支持 DOM API，这非常酷，意味着你可以这么做：

```js
const value = document.querySelector('input#user-name')?.value;
```

译者注：
关于最后一个例子的空合并为什么使用 `??` 而不是 `||`，作者可能解释得不是很清楚，这里摘抄一下 [tc39:proposal-nullish-coalescing](https://github.com/tc39/proposal-nullish-coalescing) 的例子：

```js
const headerText = response.settings?.headerText || 'Hello, world!'; // '' 会被当作 false，输出： 'Hello, world!'
const animationDuration = response.settings?.animationDuration || 300; // 0 会被当作 false，输出： 300
const showSplashScreen = response.settings?.showSplashScreen || true; // False 会被当作 false，输出： true
```

照理来说，使用 `||` 是可以的，但是在上面代码中会有点小问题。比如我们想要获取的 animationDuration 的值为 0，那么由于 0 被当作 false，导致我们最后得到的是默认值 300，这显然不是我们想要的结果。而 `??` 就是用来解决这个问题的。
目前 optional-chaining 和 nullish-coalescing 还在 ecma 标准草案的 stage2 阶段，不过 babel 针对前者已有相关插件实现，更多相关文章可以看：
https://segmentfault.com/a/1190000013409955
https://zhuanlan.zhihu.com/p/29296692
https://www.npmjs.com/package/babel-plugin-transform-optional-chaining

译者：@chorer 作者：@Milos Protic
译文：https://chorer.github.io/2019/06/24/Trs-更好的JavaScript条件式和匹配标准技巧/
原文：https://devinduct.com/blogpost/35/tips-and-tricks-for-better-javascript-conditionals-and-match-criteria