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

