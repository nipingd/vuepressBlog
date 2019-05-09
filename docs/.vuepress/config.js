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
        {text: '面试', link: '/font/' },
        {text: '个人心得', link: 'https://github.com/nipingd'},
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
                ['/font/JS/test','你好啊'], // 以docs为根目录来查找文件 
                ['/font/JS/test2','终于噶好了'], // 以docs为根目录来查找文件 
                ['/font/JS/美团网项目','美团网'], // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>font>JS>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            },{
              title:'ES6',
              children:[
                ['/font/ES6/let和const','let和const'],
                ['/font/ES6/变量的解构赋值','变量的解构赋值'],
                ['/font/ES6/字符串的扩展','字符串的扩展'],
              ]
            },{
              title: 'CSS',
              children:[
                ['/font/CSS/test','']
              ]
            }
          ],
          // docs文件夹下面的bar文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
          '/bar/': [
            '/bar/', 
            {
              title: '第二组侧边栏下拉框的标题1',
              children: [
                '/bar/simple/test' 
              ]
            }
          ]
      }, // 侧边栏配置
      sidebarDepth: 1, // 侧边栏显示2级
      
    },
    // head: [ // 注入到当前页面的 JS <head> 中的标签
    //     ['link', { rel: 'manifest', href: '/photo.jpg' }],
    //     ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    //   ],
    //   serviceWorker: true // 是否开启 PWA
  };