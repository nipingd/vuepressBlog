## 对象(数据结构化)

::: tip 三要素：

**继承**：子类继承父类

**封装**：数据的权限和保密

**多态**：同一接口不同实现

:::

::: tip 三要素—封装：

减少耦合，不该外露的不外露

利于数据、接口的权限管理

ES6目前不支持，一般认为_开头的属性是private

:::

**泛化->继承**

**关联->引用**

## 设计原则与设计模式

### 设计原则

**设计**：即按照哪一种思路或者标准来实现功能

::: tip 《UNIX/LINUX设计哲学》

- 准则1：**小则是美**
- 准则2：**让每个程序只做好一件事**
- 准则3：**快速建立原型**
- 准则4：**舍弃高效率而取可移植性**
- 准则5：**采用纯文本来存储数据**
- 准则6：**充分利用软件的杠杆效应（软件复用）**
- 准则7：**使用 shell 脚本来提高杠杆效应和可移植性**
- 准则8：**避免强制性的用户界面**
- 准则9：**让每个程序都称为过滤器**
- 小准则：**允许用户定制环境**
- 小准则：**尽量使操作系统内核小而轻量化**
- 小准则：**使用小写字母并尽量简短**
- 小准则：**沉默是金**
- 小准则：**各部分之和大于整体**
- 小准则：**寻求90%的解决方案**

:::

::: tip S O L I D五大设计原则

- :yum:S - **单一职责原则**（一个程序只做好一件事）
- :key:O - **开放封闭原则**（对扩展开放，对修改封闭）
- :ox:L - **李氏置换原则**（子类能覆盖父类，父类能出现的地方子类就能出现）
- :cloud:I - **接口独立原则**（保持接口的单一独立，避免出现“胖接口”）
- :o:D - **依赖导致原则**（面向接口编程，依赖于抽象而不依赖于具体）

:::

### 设计模式

::: tip 创建型

- **工厂模式**（工厂方法模式，抽象工厂模式，建造者模式）
- **单例模式**
- **原型模式**

:::

::: tip 结构型

- **适配器模式**
- **装饰器模式**
- **代理模式**
- **外观模式**
- （上面的用得多，下面的少）
- **桥接模式**
- **组合模式**
- **享元模式**

:::

::: tip 行为型

- **策略模式**
- **模板方法模式**
- **观察者模式**（:yum:重要）
- **迭代器模式**（:smile:重要）
- **职责连模式**
- **命令模式**
- **备忘录模式**
- **状态模式**（:yum:重要）
- **访问者模式**
- **中介者模式**
- **解释器模式**

:::

## 工厂模式

### 介绍

- 将 new 操作**单独封装**
- **遇到 new 时**，就要考虑是否该使用工厂模式

**UML类图**

![image-20200412142819377](../../.vuepress/public/image-20200412142819377.png)

```js
class Product {
  constructor (name) {
    this.name = name;
  }
  init() {
    console.log(`${this.name} init`)
  }
}

class Creator {
  create(name) {
    return new Product(name) //工厂模式精髓
  }
}

let creator = new Creator();
let p = creator.create('p1')
p.init()
```

### 场景

- JQuery - $( 'div' )
- React.createElement
- vue异步组件

### 设计原则验证

- 构造函数与创建者分离:white_check_mark:
- 符合开放封闭原则:white_check_mark:

## 单例模式

### 介绍

- 系统中被**唯一**使用
- **一个类只有一个实例**

**UML类图**

![image-20200412204923045](../../.vuepress/public/image-20200412204923045.png)

```js
class SingleObject {
  login() {
    console.log('login....')
  }
}
SingleObject.getInstance = (function () {
  //利用了闭包
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
//单例模式所讲就是每次获取都是唯一的那一个
console.log('obj1是否强相等于obj2 ==>',obj1 === obj2)

let obj3 = new SingleObject()//无法完全控制别人按照文档规范来创建对象
obj3.login()
//此时就不强相等了
console.log('obj1是否强相等于obj2 ==>',obj1 === obj3)
```

### 场景

- 购物车（和登录框类似）
- vuex 和 redux 中的store

### 设计原则验证

- 符合单一职责原则，只实例化唯一的对象
- 没法具体开放封闭原则，但是绝对不违反开放封闭原则

## 适配器模式

### 介绍

- 旧接口格式和使用者不兼容
- 中间加一个适配转换接口

**UML类图**

![image-20200412205912573](../../.vuepress/public/image-20200412205912573.png)

```js
class Adaptee {
  specificRequest() {
    return '德国插头'
  }
}

class Target {
  constructor () {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 中国插头`
  }
}

let target = new Target()
console.log(target.request())
```

### 场景

- 封装旧接口
- vue computed

### 设计原则验证

- 讲旧接口和使用者进行分离
- 符合开放封闭原则

## 装饰器模式(给手机加上手机壳)

### 介绍

- 为对象添加新功能
- 不改变其原有的结构和功能

**UML类图**

![image-20200412215813709](../../.vuepress/public/image-20200412215813709.png)

```js
class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle){
    console.log('设置红色边框')
  }
}
let circle = new Circle()
circle.draw()
let dec = new Decorator(circle)
dec.draw()
```

### 场景

- ES7 装饰器
- 装饰类和方法