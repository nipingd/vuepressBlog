## 1.vscode配置自动编译ts文件

先npm install -g typescript安装ts，在tsc index.ts编译成js文件

::: tip 过程

- tsc --init 生成tsconfig.json配置文件 改"outDir":"输出的js文件目录"
- 找到vscode终端点运行任务，运行监视tsconfig.json(vscode的默认终端需为默认cmd，不然会报错)

:::