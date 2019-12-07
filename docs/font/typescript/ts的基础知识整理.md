## 1.vscode配置自动编译ts文件

先npm install -g typescript安装ts，在tsc index.ts编译成js文件

::: tip 过程

- tsc --init 生成tsconfig.json配置文件 改"outDir":"输出的js文件目录"
- 找到vscode终端点运行任务，运行监视tsconfig.json(vscode的默认终端需为默认cmd，不然会报错)

:::

## 2.数据类型

::: tip typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验

​        布尔类型（boolean）
​        数字类型（number）
​        字符串类型(string)
​        数组类型（array）
​        元组类型（tuple）
​        枚举类型（enum）
​        任意类型（any）
​        null 和 undefined
​        void类型
​        never类型

:::

### 写法

```typescript
var flag:boolean=true;//冒号后面接数据类型

// flag=123;  //错误

flag=false;  //正确
```

```typescript
// 定义数组的方式1
  let arr1: number[] = [2, 3, 4]

// 定义数组的方式2
  let arr2: Array<number> = [1 ,3 ,4]

// 定义数组的方式3
  let arr33: any[] = [123, false, 'eee']
```

```typescript
// 元组类型(tuple) 属于数组的一种
  let arr3: [number, string] = [123, 'hello']
```

```typescript
//枚举类型 主要用于多个状态判断
  enum Flag { success = 1, error = 0 }
  let t: Flag = Flag.success
  console.log(t)//1

  enum Color {blue,red,'orange'};
  var c:Color=Color.red;
  console.log(c);   //1  如果标识符没有赋值 它的值就是下标
```

```typescript
// 任意类型 any
  let num: any = 123
    num = 'hello'

// 例子
  let oBox: any = document.getElementById('box')
    oBox.style.color = 'pink'


// null 和 undefined

  /*let n: number
  console.log(n)*/

 /* let n: undefined
    console.log(n)*/

  let n: number | undefined | null
  n = 123
  // console.log(n)

// void类型：表示没有任何类型，用于方法无返回值的时候
  function fn(): void {
    console.log('void')
  }
  fn()

// never类型: 其他类型 包括null 和 undefined 的子类型，表示从不会出现的值

  let ne: undefined
  ne = undefined

  let nu: null
  nu = null

  // 例子
  let err: never
  // err = 123 // error
  err = (() => {
    throw new Error('error')
  })()
```

## 3.函数

```typescript
// 函数的声明
  function fn(): string {
    // return 123 // error
    return '123'
  }
//匿名函数
  var fun2=function():number{
    return 123;
  }
```

```typescript
// 传参
  function get(name: string, age: number): string {
    return `${name}---${age}`
  }

  console.log(get('mike', 20));//mike---20

// 没有返回值的方法
  function empty(): void {
    console.log('empty')
  }
  empty()//empty
```

```typescript
// 可选参数
// 注意可选参数必须配置到参数的最后面
  function getInfo(name: string, age?: number) {
    if(age) {
      return `${name}++${age}`
    } else {
      return `${name}+++年龄保密`
    }
  }

  console.log(getInfo('jane'))//jane+++年龄保密
```

```typescript
// 默认参数

  function getInfo2(name:string, age: number = 11): string {
    return `${name}----${age}`
  }

  console.log(getInfo2('mike'))mike---11
  console.log(getInfo2('mike', 32))mike---32

// 剩余参数
  function sum(...args: number[]): number {
    let sum: number = 0
    for(let v of args){
      sum += v
    }
    return sum
  }

  console.log(sum(1, 2 ,3 ,4))//10
```

- java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
- typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。    
- ts为了兼容es5 以及 es6 重载的写法和java中有区别。

```typescript
// 函数重载
  function get2(age: number): number ;
  function get2(name: string): string ;
  function get2(str: any): any {
    if(typeof str === 'string'){
      return `我是${str}`
    } else {
      return `年龄${str}`
    }
  }

  console.log(get2('mike'))//string判断(我是mike)
  console.log(get2(20))//number判断(年龄20)
```

## 4.类

### 类的定义

```typescript
  class Person {
    name: string; // 属性
  
    constructor(n: string) { // 构造函数  实例化类的时候触发的方法
      this.name = n
    }
  
    getName(): string {
      return this.name
    }
  
    setName(name: string): void {
      this.name = name
    }
  
  
  }
```

### 类的继承

extends super

```typescript
  class Person{
    name: string

    constructor(name: string) {
      this.name = name
    }


    run(): string {
      return `${this.name}的方法`
    }
  }

  // let p = new Person('小五')
  // console.log(p.run())

  class Web extends Person{
    constructor(name: string) {
      super(name) // 初始化父类的构造函数
    }

  }

  let w = new Web('小6')
  console.log(w.run())
```

### 类的修饰符

|        可以访问         |     当前类里面     |           子类           |          类外面          |
| :---------------------: | :----------------: | :----------------------: | :----------------------: |
|    **public**：公有     | :heavy_check_mark: |    :heavy_check_mark:    |    :heavy_check_mark:    |
| **protected**：保护类型 | :heavy_check_mark: |    :heavy_check_mark:    | :heavy_multiplication_x: |
|    **private**：私有    | :heavy_check_mark: | :heavy_multiplication_x: | :heavy_multiplication_x: |

```typescript
class Person{
  // public name: string
  // protected name: string
  private name: string

  constructor(name: string) {
    this.name = name
  }

  run(): string {
    return `${this.name}的方法`
  }
}
```

### 静态属性与静态方法

```typescript
  class Person{
    public name: string;
    public age: number = 22;
    static sex: string = '女' // 静态属性

    constructor(name: string) {
      this.name = name
    }

    run(): void {
      console.log(`${this.name}在运动`)
    }

    work(): void {
      console.log(`${this.name}在工作`)
    }

    static print(): void { // 静态方法  不能直接调用类里面的属性
      // console.log(`今天${this.age}`)
      console.log('性别' + Person.sex)//调用了静态属性
    }

  }

  let p = new Person('Cooo')
  // console.log(p.run())
  console.log(Person.print())
  // console.log(Person.sex)
```

### 多态

父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现，多态也属于继承

```typescript
  class Animal{
    name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    eat(): void {
      console.log('吃的方法')
    }
  }
  
  class Dog extends Animal{
  
    constructor(name: string) {
      super(name)
    }
  
    eat(): string {
      return this.name + '吃狗粮'
    }
  
  }
  
  class Cat extends Animal{
    constructor(name: string) {
      super(name)
    }
  
    eat(): string {
      return `${this.name}吃猫粮`
    }
  
  }
```

### 抽象类与抽象方法


::: tip 注意点
- typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。

- 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

- abstract抽象方法只能放在抽象类里面

- 抽象类和抽象方法用来定义标准 。  标准：Animal 这个类要求它的子类必须包含eat方法
:::

```typescript
  abstract class Animal {
    public name: string;

    constructor(name: string) {
      this.name = name
    }

    abstract eat(): any;

    run() {
      console.log('其他方法可以不实现')
    }
  }

  //let a = new Animal() // error

  class Dog extends Animal {

    // 抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name: string) {
      super(name)
    }

    eat() {
      console.log(this.name + '吃')
    }

  }

  let d = new Dog('小黑')
  d.eat()
```

## 5.接口

 :star:接口：行为和动作的规范，对批量方法进行约束

:star:接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它**只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要**。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

### 属性类接口

```typescript
//就是传入对象的约束    属性接口
interface FullName{
    firstName:string;   //注意;结束
    secondName:string;//可选属性写法就是加上问号，secondName?:string;
}
function printName(name:FullName){
    // 必须传入对象  firstName  secondName
    console.log(name.firstName+'--'+name.secondName);
}
// printName('1213');  //错误
var obj={   /*传入的参数必须包含 firstName  secondName，参数的顺序可以不一样*/
    age:20,
    firstName:'张',
    secondName:'三'
};
printName(obj)
```

### 函数类型接口

**函数类型接口**:对方法传入的参数 以及返回值进行约束  批量约束

```typescript
// 加密的函数类型接口
interface encrypt{
    (key:string,value:string):string;
}

var md5:encrypt=function(key:string,value:string):string{
        //模拟操作
        return key+value;
}
console.log(md5('name','zhangsan'));

var sha1:encrypt=function(key:string,value:string):string{
    //模拟操作
    return key+'----'+value;
}
console.log(sha1('name','lisi'));
```

### 可索引接口：数组、对象的约束 （不常用）

```typescript
//可索引接口 对数组的约束
interface UserArr{
    [index:number]:string
}
var arr:UserArr=['aaa','bbb'];
console.log(arr[0]);
// var arr:UserArr=[123,'bbb'];  /*错误*/
// console.log(arr[0]);

//可索引接口 对对象的约束
interface UserObj{
    [index:string]:string
}
var arr:UserObj={name:'张三'};
```

### 类类型接口:对类的约束（跟抽象类抽象有点相似）

```typescript
interface Animal{
    name:string;
    eat(str:string):void;
}
class Dog implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(this.name+'吃粮食')
    }
}
```

### 接口拓展

```typescript
interface Animal{

        eat():void;
    }

    interface Person extends Animal{

        work():void;
    }


    class Programmer{

        public name:string;
        constructor(name:string){
            this.name=name;
        }
        
        coding(code:string){

            console.log(this.name+code)
        }
    }


    class Web extends Programmer implements Person{
        
        constructor(name:string){
           super(name)
        }
        eat(){

            console.log(this.name+'喜欢吃馒头')
        }
        work(){

            console.log(this.name+'写代码');
        }
        
    }

    var w=new Web('小李');

    // w.eat();

    w.coding('写ts代码');
```

## 6.泛型

泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

通俗理解：:star:泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

### 泛型函数

```typescript
//T表示泛型，具体什么类型是调用这个方法的时候决定的

function getData<T>(value:T):T{
    return value;
}
getData<number>(123);
getData<string>('1214231');
getData<number>('2112');       /*错误的写法*/  
```

### 泛型类

```typescript
//比如有个最小堆算法，需要同时支持返回数字和字符串 a  -  z两种类型。  通过类的泛型来实现
class MinClass<T>{

    public list:T[]=[];

    add(value:T):void{

        this.list.push(value);
    }

    min():T{        
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}

var m1=new MinClass<number>();   /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);

var m2=new MinClass<string>();   /*实例化类 并且制定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
m2.add('v');
alert(m2.min())
```

### 泛型接口

```typescript
//函数类型接口
interface ConfigFn{
    (value1:string,value2:string):string;
}

var setData:ConfigFn=function(value1:string,value2:string):string{
    return value1+value2;
}

setData('name','张三');
```

#### 泛型接口定义有两种

```typescript
//1、泛型接口

interface ConfigFn{
    <T>(value:T):T;
}

var getData:ConfigFn=function<T>(value:T):T{
    return value;
}

// getData<string>('张三');
// getData<string>(1243);  //错误
```

```typescript
//2、泛型接口

interface ConfigFn<T>{
    (value:T):T;
}

function getData<T>(value:T):T{
    return value;
}

var myGetData:ConfigFn<string>=getData;     
myGetData('20');  /*正确*/
// myGetData(20)  //错误
```

### 把类作为参数来约束数据传入的类型

```typescript
//定义操作数据库的泛型类
class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info);       
        return true;
    }
    updated(info:T,id:number):boolean {
        console.log(info);  
        
        console.log(id); 

        return true;
    }
}
class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined,
        desc:string | undefined,
        status?:number | undefined
    }){

        this.title=params.title;
        this.desc=params.desc;
        this.status=params.status;


    }
}
//增加操作
// var a=new ArticleCate({
//     title:'分类',
//     desc:'1111',
//     status:1
// });

// //类当做参数的泛型类
// var Db=new MysqlDb<ArticleCate>();
// Db.add(a);

//修改数据
var a=new ArticleCate({
        title:'分类111',
        desc:'2222'      
});

a.status=0;
var Db=new MysqlDb<ArticleCate>();
Db.updated(a,12);
```

## 7.模块与命名空间

“内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”

模块跟es6差不多

::: tip 命名空间

  在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内。

  同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过**export**关键字对外暴露。

:::

::: tip 命名空间和模块的区别：

  **命名空间**：内部模块，主要用于组织代码，避免命名冲突。

  **模  块**：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

:::

```typescript
namespace A{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 吃猫粮。`);
        }
    }   

}




namespace B{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃猫粮。`);
        }
    }   

}


var c=new B.Cat('小花');

c.eat();
```

## 8.装饰器

- 装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
- 通俗的讲**装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。**
- 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）
- 装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一

### 类装饰器

:star:类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 

```typescript
//1.1 类装饰器:普通装饰器（无法传参）
    
function logClass(params:any){
    console.log(params);
    // params 就是当前类
    params.prototype.apiUrl='动态扩展的属性';
    params.prototype.run=function(){
        console.log('我是一个run方法');
    }
}
@logClass
class HttpClient{
    constructor(){
    }
    getData(){
    }
}
var http:any=new HttpClient();
console.log(http.apiUrl);//'动态扩展的属性'
http.run();//'我是一个run方法'
```

```typescript
//1.2 类装饰器:装饰器工厂（可传参）

function logClass(params:string){
    return function(target:any){
        console.log(target);
        console.log(params);
        target.prototype.apiUrl=params;
    }
}
@logClass('http://www.itying.com/api')
class HttpClient{
    constructor(){
    }
    getData(){
    }
}
var http:any=new HttpClient();
console.log(http.apiUrl);//'http://www.itying.com/api'
```

### 属性装饰器

:star:属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

​      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      2、成员的名字。

```typescript
function logProperty(params:any){
  return function(target:any,attr:any){
      console.log(target);//HttpClient{ getDate:[Function]}
      console.log(attr);//url(属性的名字)
      target[attr]=params;
  }
}
class HttpClient{
  @logProperty('http://itying.com')
  public url:any | undefined;
  constructor(){
  }
  getData(){
      console.log(this.url);
  }
}
var http=new HttpClient();
http.getData();//'http://itying.com'
```

### 方法装饰器

它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

::: tip 方法装饰会在运行时传入下列3个参数：

​      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      2、成员的名字。

​      3、成员的属性描述符。

:::

```typescript
//第一种，增加类的方法和属性
function get(params:any){
  return function(target:any,methodName:any,desc:any){
      console.log(target);//原型对象
      console.log(methodName);//getData(方法的名字)
      console.log(desc);//getData方法的一些描述信息，比如可枚举，可写，值等等
      target.apiUrl='xxxx';
      target.run=function(){
          console.log('run');
      }
  }
}

class HttpClient{  
  public url:any |undefined;
  constructor(){
  }
  @get('http://www.itying,com')
  getData(){
      console.log(this.url);
  }
}

var http:any=new HttpClient();
console.log(http.apiUrl);//'xxxx'
http.run();//'run'
```

```typescript
//第二种，修改方法
function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);//原型对象
    console.log(methodName);//方法名字
    console.log(desc.value);//方法体

    //修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型

    //1、保存当前的方法

    var oMethod = desc.value;//保存方法体
    desc.value = function (...args: any[]) {//修改方法体
      args = args.map((value) => {
        return String(value);
      })
      oMethod.apply(this, args);//执行一遍原来的方法
    }

  }
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @get('http://www.itying,com')
  getData(...args: any[]) {
    console.log(args);
    console.log('我是getData里面的方法');
  }
}

var http = new HttpClient();
http.getData(123, 'xxx');
```

### 方法参数装饰器(不常用)

参数装饰器表达式会在运行时当作函数被调用，可以使用**参数装饰器为类的原型增加一些元素数据** ，传入下列3个参数：

​      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      2、方法的名字。

​      3、参数在函数参数列表中的索引。

```typescript
function logParams(params:any){

    return function(target:any,methodName:any,paramsIndex:any){

        console.log(params);//参数

        console.log(target);//原型对象

        console.log(methodName);//方法名

        console.log(paramsIndex);//索引


        target.apiUrl=params;

    }   

}

class HttpClient{  
            public url:any |undefined;
            constructor(){
            }           
            getData(@logParams('xxxxx') uuid:any){               
                console.log(uuid);
            }
 }


 var http:any = new HttpClient();
 http.getData(123456);//123456
console.log( http.apiUrl);//xxxxx
```

::: tip 装饰器执行顺序

- 属性 > 方法 > 方法参数 > 类
- 如果有多个同样的装饰器，它会先执行后面的

:::