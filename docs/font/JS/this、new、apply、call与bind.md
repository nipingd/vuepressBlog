## apply、call

在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。

```js
function person(){}
person.prototype = {
    sex:"man",
    say:function(){
        console.log('My sex is ' + this.sex)
    }
}
var jack = new person;
jack.say();
//假设我们有另一个人也想调用say方法，又不想重新定义say方法，那么我们可以借助call或apply来实现
mary={
    sex:'woman'
}
jack.say.call(mary);
```

所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法（本例子中mary没有say方法），但是其他的有（本栗子中jack有say方法），我们可以借助call或apply用其它对象的方法来操作。

### **apply、call 的区别**

```js
func.call(this, arg1, arg2);

func.apply(this, [arg1, arg2])
```

其中 this 是你想指定的上下文，他可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。　　

JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call 。

而不确定的时候用 apply，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。

## 常用用法

**1、数组之间追加**

```js
var array1 = [12 , "foo" , {name "Joe"} , -2458];
var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);//相当于array1.push(array2)
/* array1 值为 [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */
```

**2、获取数组中的最大值和最小值**

```js
var numbers = [5, 458 , 120 , -215 ];
var maxInNumbers = Math.max.apply(Math, numbers), //458
maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
```

**3、验证是否是数组（前提是toString()方法没有被重写过）**

```js
functionisArray(obj){
    returnObject.prototype.toString.call(obj) === '[object Array]' ;
}
```

**4、类（伪）数组使用数组方法**

```js
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。

但是我们能通过 Array.prototype.slice.call 转换为真正的数组的带有 length 属性的对象，这样 domNodes 就可以应用 Array 下的所有方法了。

### **深入理解运用apply、call**

定义一个 log 方法，让它可以代理 console.log 方法

```js
function log(){

    var args = Array.prototype.slice.call(arguments);

    args.unshift('(app)');//要求加入app前缀

    console.log.apply(console, args);//	不确定传入参数多少

};
```

## **bind**

MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

```js
var foo = {
bar : 1,
eventBind: function(){
$('.someClass').on('click',function(event) {
/* Act on the event */
console.log(this.bar); //1
}.bind(this));
}
}
```

在上述代码里，bind() 创建了一个函数，当这个click事件绑定在被调用的时候，它的 this 关键词会被设置成被传入的值（这里指调用bind()时传入的参数）。因此，这里我们传入想要的上下文 this(其实就是 foo )，到 bind() 函数中。然后，当回调函数被执行的时候， this 便指向 foo 对象。

在Javascript中，多次 bind() 是无效的。更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。

## **apply、call、bind比较**

```js
console.log(foo.getX.bind(obj)()); //81

console.log(foo.getX.call(obj)); //81

console.log(foo.getX.apply(obj)); //81
```

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。



另一篇文章转载自：https://www.imooc.com/read/38/article/477