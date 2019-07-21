module.exports = {
    title: 'niping',
    description: '欢迎来到我的博客',
    head: [ // 注入到当前页面的 JS <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: 'HOME', link: '/' },
        {text: '前端', link: '/font/' },
        {text: '计算机', link: '/computer/' },
        // {text: '面试', link: '/font/' },
        {text: '个人学习笔记', link: '/other/'},
        {text: '关于我', 
         items: [
           {text:'instagram',link:'https://www.instagram.com/nipingd/'},
           {text:'github',link:'https://github.com/nipingd'}
         ]
      },
      ],
      sidebar:{
        // docs文件夹下面的font文件夹 文档中md文件 书写的位置(命名随意)
        '/font/': [
            // '/font/', // font文件夹的README.md 不是下拉框形式
            {
              title: 'JS',
              children: [
                ['/font/JS/apply、call与bind','apply、call与bind'], // 以docs为根目录来查找文件 
                ['/font/JS/JS单线程、异步、同步','JS单线程、异步、同步'], // 以docs为根目录来查找文件 
                ['/font/JS/常用正则表达式备忘录','常用正则表达式备忘录'], // 以docs为根目录来查找文件 
                ['/font/JS/Object.defineProperty与Proxy理解整理','Object.defineProperty与Proxy理解整理'], // 以docs为根目录来查找文件 
                ['/font/JS/柯里化','柯里化'], // 以docs为根目录来查找文件 
                ['/font/JS/JS技巧','JS技巧'], // 以docs为根目录来查找文件 
                ['/font/JS/闭包','闭包'], // 以docs为根目录来查找文件 
                ['/font/JS/作用域与作用域链','作用域与作用域链'], // 以docs为根目录来查找文件 
                ['/font/JS/JS运行机制总结','JS运行机制总结'], // 以docs为根目录来查找文件 
                ['/font/JS/赋值、浅拷贝与深拷贝','赋值、浅拷贝与深拷贝'], // 以docs为根目录来查找文件 
                ['/font/JS/构造函数、原型、继承和原型链','构造函数、原型、继承和原型链'], // 以docs为根目录来查找文件 
                ['/font/JS/原生JS知识','原生JS知识'], // 以docs为根目录来查找文件 
                ['/font/JS/防抖与节流','防抖与节流'], 
                ['/font/JS/类型转换比较问题','类型转换比较问题'], 
                 // 以docs为根目录来查找文件 
                 // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>font>JS>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            },{
              title:'ES6',
              children:[
                ['/font/ES6/let和const','let和const'],
                ['/font/ES6/变量的解构赋值','变量的解构赋值'],
                ['/font/ES6/字符串的扩展','字符串的扩展'],
                ['/font/ES6/正则的扩展','正则的扩展'],
                ['/font/ES6/数值的扩展','数值的扩展'],
                ['/font/ES6/函数的扩展','函数的扩展'],
                ['/font/ES6/数组的扩展','数组的扩展'],
                ['/font/ES6/对象的扩展','对象的扩展'],
                ['/font/ES6/Symbol','Symbol'],
                ['/font/ES6/Set和Map数据结构','Set和Map数据结构'],
                ['/font/ES6/Proxy','Proxy'],
                ['/font/ES6/Reflect','Reflect'],
                ['/font/ES6/Promise','Promise'],
                ['/font/ES6/Iterator和for...of循环','Iterator和for...of循环'],
                ['/font/ES6/Generator 函数与异步','Generator 函数与异步'],
                ['/font/ES6/async 函数','async 函数'],
                ['/font/ES6/Class','Class'],
                ['/font/ES6/Module','Module'],
                ['/font/ES6/编程风格','编程风格'],
                ['/font/ES6/读懂规格','读懂规格'],
              ]
            },{
              title: '浏览器网络',
              children:[
                ['/font/浏览器网络/URL到页面呈现过程总结','URL到页面呈现过程总结'],
                ['/font/浏览器网络/Web安全','Web安全'],
                ['/font/浏览器网络/Cookie、Session和Web Storage','Cookie、Session和Web Storage'],
                ['/font/浏览器网络/跨域实现','跨域实现'],
                ['/font/浏览器网络/浏览器缓存','浏览器缓存'],
                ['/font/浏览器网络/页面性能优化','页面性能优化'],
                ['/font/浏览器网络/网络基础','网络基础'],
                ['/font/浏览器网络/前端路由','前端路由'],
                ['/font/浏览器网络/chrome调试技巧','chrome调试技巧'],
              ]
            },{
              title: 'CSS',
              children:[
                ['/font/CSS/CSS动画','CSS动画'],
                ['/font/CSS/CSS技巧','CSS技巧'],
                ['/font/CSS/BFC与清除浮动','BFC与清除浮动'],
                ['/font/CSS/z-index','z-index'],
              ]
            },{
              title: 'vue',
              children:[
                ['/font/vue/vue组件间通信六种方式','vue组件间通信六种方式'],
                ['/font/vue/vue开发技巧','vue开发技巧'],
                ['/font/vue/slot与slot-scope','slot与slot-scope'],
              ]
            },{
              title: 'node',
              children:[
                ['/font/node/node知识','node知识'],
              ]
            },{
              title: '其他',
              children:[
                ['/font/其他/webpack基础知识','webpack基础知识'],
                ['/font/其他/Nginx反向代理与负载均衡','Nginx反向代理与负载均衡'],
              ]
            }
          ],
          // docs文件夹下面的bar文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
          '/computer/': [
            {
              title: '第二组',
              children: [
                ['/computer/four','demo'], // 以docs为根目录来查找文件 
              
              ]
            }
          ],
          '/other/': [
            // '/font/', // font文件夹的README.md 不是下拉框形式
            {
              title: '小程序',
              children: [
                ['/other/小程序学习笔记','小程序'], // 以docs为根目录来查找文件 
              ]
            },
          ],
      }, // 侧边栏配置
      sidebarDepth: 1, // 侧边栏显示1级
    },
    // head: [ // 注入到当前页面的 JS <head> 中的标签
    //     ['link', { rel: 'manifest', href: '/photo.jpg' }],
    //     ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    //   ],
    //   serviceWorker: true // 是否开启 PWA
  };