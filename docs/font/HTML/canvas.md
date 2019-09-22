**canvas画布是白色的，默认为300*150**。

**获取画布**

​	1.通过DOM方式

​	2.通过绘制工具。ctx.canvas.width / ctx.canvas.height

## 基本步骤
```js
var myCanvas = document.querySelector('canvas');
var ctx = myCanvas.getContext('2d');//获取上下文，绘制工具箱
ctx.moveTo(100,100);//移动画笔
ctx.lineTo(200,100);//绘制直线(路径)
ctx.stroke();//描边
```

## 路径的绘制

- 描边 **stroke()**
- 填充 **fill()**  

**填充规则(非零环绕)**：非零就填充，零就不填充。拉一条线出来，顺时针+1，逆时针-1，顺逆时针说的是绘制路径的方向![1569119054522](../../.vuepress/public/1569119054522.png)

## 路径

### 闭合路径

 - 手动闭合
 - 程序闭合 closePath()

### 开启新的路径

- beginPath()

## 画笔的状态

- **lineWidth**：线宽，默认1px
- **lineCap**：线末端类型：(butt默认)、round、square 
- **lineJoin**：相交线的拐点 miter(默认)、round、bevel
- **strokeStyle**：线的颜色
- **fillStyle**：填充颜色
- **setLineDash()**：设置虚线![1569119322444](../../.vuepress/public/1569119322444.png)
- **getLineDash()**：获取虚线宽度集合，获取的是不重复的那一段的排列方式
- **lineDashOffset**：设置虚线偏移量（负值向右偏移）

## 绘制矩形

- **rect(x,y,w,h)**：没有独立路径
- **strokeRect(x,y,w,h)**：有独立路径，不影响别的绘制
- **fillRect(x,y,w,h)**：有独立路径，不影响别的绘制
- **clearRect(x,y,w,h)**：擦除矩形区域![1569119580003](../../.vuepress/public/1569119580003.png)
  	

## 渐变

- **createLinearGradient(x0,y0,x1,y1)**：创建线性的渐变对象
  	- x0y0 起始点 x1y1 结束点  确定长度和方向
  	- **.addColorStop**：规定 gradient 对象中的颜色和位置![1569119791731](../../.vuepress/public/1569119791731.png)

- **createRadialGradient(x1,y1,r1,x2,y2,r2)**：创建放射渐变对象
  	- 前三个参数指定起点圆的原心和半径，后三个指定终点圆

## 圆弧绘制

- **arc(x,y,r,startAngle,endAngle,anticlockwise)**
  	- x 圆心横坐标
  	- y 圆心纵坐标
  	- r 半径
  	- startAngle 开始角度：Math.PI计算
  	- endAngle 结束角度：Math.PI计算
  	- anticlockwise 是否逆时针方向绘制（默认false表示顺时针；true表示逆时针）

## 绘制文本

- **ctx.font** = '40px 微软雅黑'：设置字体
- **ctx.textAlign** = 'center'：左右对齐方式
  - center left right start end
  - 基准起始坐标
  - 建议不用left和right
  
- **ctx.textBaseline** = 'middle'：垂直对齐的方式
  - baseline(默认),top,bottom,middle
   
- 绘制
   - **ctx.strokeText(text,x,y);**
   - **ctx.fillText(text,x,y);**
   - text 要绘制的文本
   - x,y 文本绘制的坐标（文本左下角）
   - maxWidth 设置文本最大宽度，可选参数
- measureText()：获取文本宽度![1569120393198](../../.vuepress/public/1569120393198.png)

## 绘制图片

### drawImage()

![1569120483679](../../.vuepress/public/1569120483679.png)

### img对象创建

![1569120501575](../../.vuepress/public/1569120501575.png)

## 坐标变换

![1569120514298](../../.vuepress/public/1569120514298.png)

## 阴影

![1569120527949](../../.vuepress/public/1569120527949.png)

## 模式

![1569120853451](../../.vuepress/public/1569120853451.png)