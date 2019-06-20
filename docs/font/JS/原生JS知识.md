## 1.原始类型有哪几种？null 是对象吗？原始数据类型和复杂数据类型存储有什么区别？

- 原始类型有6种，分别是**undefined,null,bool,string,number,symbol**(ES6新增)。
- 虽然 typeof null 返回的值是 object,但是null不是对象，而是基本数据类型的一种。
- 原始数据类型存储在栈内存，存储的是值。
- 复杂数据类型存储在堆内存，存储的是地址。当我们把对象赋值给另外一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变时，另一个对象也会变化。

## 2.typeof 是否正确判断类型? instanceof呢？ instanceof 的实现原理是什么？

首先 typeof 能够正确的​​判断基本数据类型，但是除了 null, **typeof null输出的是对象。**

但是对象来说，typeof 不能正确的判断其类型， **typeof 一个函数可以输出 ‘function’,**而除此之外，输出的全是 object,这种情况下，我们无法准确的知道对象的类型。

instanceof可以准确的判断复杂数据类型，但是不能正确判断基本数据类型。(正确判断数据类型请戳：<https://github.com/YvetteLau/Blog/blob/master/JS/data-type.js>)

instanceof 是通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype，如果一直找到A的原型链的顶端(null;即`Object.prototype.__proto__`),仍然不等于B.prototype，那么返回false，否则返回true.

instanceof的实现代码:

```javascript
// L instanceof R
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;// 取 R 的显式原型
    L = L.__proto__;    // 取 L 的隐式原型
    while (true) { 
        if (L === null) //已经找到顶层
            return false;  
        if (O === L)   //当 O 严格等于 L 时，返回 true
            return true; 
        L = L.__proto__;  //继续向上一层原型链查找
    } 
}
```

## 3.for of , for in 和 forEach,map 的区别。

- for…of循环：具有 iterator 接口，就可以用for…of循环遍历它的成员(属性值)。for…of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。for…of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，for…of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。可以中断循环。
- for…in循环：遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环。
- forEach: 只能遍历数组，不能中断，没有返回值(或认为返回值是undefined)。
- map: 只能遍历数组，不能中断，返回值是修改后的数组。

PS: Object.keys()：返回给定对象所有可枚举属性的字符串数组。

关于forEach是否会改变原数组的问题，有些小伙伴提出了异议，为此我写了代码测试了下(注意数组项是复杂数据类型的情况)。
除了forEach之外，map等API，也有同样的问题。

```javascript
let arry = [1, 2, 3, 4];

arry.forEach((item) => {
    item *= 10;
});
console.log(arry); //[1, 2, 3, 4]

arry.forEach((item) => {
    arry[1] = 10; //直接操作数组
});
console.log(arry); //[ 1, 10, 3, 4 ]

let arry2 = [
    { name: "Yve" },
    { age: 20 }
];
arry2.forEach((item) => {
    item.name = 10;
});
console.log(arry2);//[ { name: 10 }, { age: 20, name: 10 } ]
```

如还不了解 iterator 接口或 for…of, 请先阅读ES6文档: [Iterator 和 for…of 循环](http://es6.ruanyifeng.com/#docs/iterator)

更多细节请戳: <https://github.com/YvetteLau/Blog/blob/master/JS/for.js>

## 4.如何判断一个变量是不是数组？

- 使用 Array.isArray 判断，如果返回 true, 说明是数组
- 使用 instanceof Array 判断，如果返回true, 说明是数组
- 使用 Object.prototype.toString.call 判断，如果值是 [object Array], 说明是数组
- 通过 constructor 来判断，如果是数组，那么 `arr.constructor === Array`. (不准确，因为我们可以指定 `obj.constructor = Array`)

```javascript
function fn() {
    console.log(Array.isArray(arguments));   //false; 因为arguments是类数组，但不是数组
    console.log(Array.isArray([1,2,3,4]));   //true
    console.log(arguments instanceof Array); //fasle
    console.log([1,2,3,4] instanceof Array); //true
    console.log(Object.prototype.toString.call(arguments)); //[object Arguments]
    console.log(Object.prototype.toString.call([1,2,3,4])); //[object Array]
    console.log(arguments.constructor === Array); //false
    arguments.constructor = Array;
    console.log(arguments.constructor === Array); //true
    console.log(Array.isArray(arguments));        //false
}
fn(1,2,3,4);
```

##  5.类数组和数组的区别是什么？

> 类数组:

1）拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）;

2）不具有数组所具有的方法；

类数组是一个普通对象，而真实的数组是Array类型。

常见的类数组有: 函数的参数 arugments, DOM 对象列表(比如通过 document.querySelectorAll 得到的列表), jQuery 对象 (比如 $(“div”)).

类数组可以转换为数组:

```javascript
//第一种方法
Array.prototype.slice.call(arrayLike, start);
//第二种方法
[...arrayLike];
//第三种方法:
Array.from(arrayLike);
```

**PS:** 任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。

Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象。

## 6.== 和 === 有什么区别？

1. === 不需要进行类型转换，只有类型相同并且值相等时，才返回 true.

   == 如果两者类型不同，首先需要进行类型转换。具体流程如下:

   1. 首先判断两者类型是否相同，如果相等，判断值是否相等.
   2. 如果类型不同，进行类型转换
   3. 判断比较的是否是 null 或者是 undefined, 如果是, 返回 true .
   4. 判断两者类型是否为 string 和 number, 如果是, 将字符串转换成 number
   5. 判断其中一方是否为 boolean, 如果是, 将 boolean 转为 number 再进行判断
   6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol , 如果是, 将 object 转为原始类型再进行判断

   ```
   let person1 = {
       age: 25
   }
   let person2 = person1;
   person2.gae = 20;
   console.log(person1 === person2); //true,注意复杂数据类型，比较的是引用地址
   复制代码
   ```

   ### 思考: `[] == ![]`

   我们来分析一下: `[] == ![]` 是true还是false？

   1. 首先，我们需要知道 ! 优先级是高于 == (更多运算符优先级可查看: [运算符优先级](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FOperator_Precedence))
   2. `![]` 引用类型转换成布尔值都是true,因此`![]`的是false
   3. 根据上面的比较步骤中的第五条，其中一方是 boolean，将 boolean 转为 number 再进行判断，false转换成 number，对应的值是 0.
   4. 根据上面比较步骤中的第六条，有一方是 number，那么将object也转换成Number,空数组转换成数字，对应的值是0.(空数组转换成数字，对应的值是0，如果数组中只有一个数字，那么转成number就是这个数字，其它情况，均为NaN)
   5. 0 == 0; 为true

## 7.ES6中的class和ES5的类有什么区别？

1. ES6 class 内部所有定义的方法都是不可枚举的;
2. ES6 class 必须使用 new 调用;
3. ES6 class 不存在变量提升;
4. ES6 class 默认即是严格模式;
5. ES6 class 子类必须在父类的构造函数中调用super()，这样才有this对象;ES5中类继承的关系是相反的，先有子类的this，然后用父类的方法应用在this上。
