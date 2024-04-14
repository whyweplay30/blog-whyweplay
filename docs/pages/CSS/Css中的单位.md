## CSS中的单位

CSS中的单位有很多种，下面介绍一些常用的单位。
### 1. px

+ px就是pixel的缩写，意为像素。

### 2. em

+ 参考物是<font color="red">父元素</font>的font-size，具有继承的特点。如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。

### 3. rem

+ 相对于<font color="red">根元素html（网页）的font-size</font>，不会像em那样，依赖于父元素的字体大小，而造成混乱。

### 4. %

+ 一般宽泛的讲是相对于父元素，但是并不是十分准确。

​		1、对于普通定位元素就是我们理解的父元素

​		2、对于position: absolute;的元素是相对于已定位的父元素

​		3、对于position: fixed;的元素是相对于ViewPort（可视窗口)

​		4、使用transform:translate()时，百分号指的是元素自身的大小

​		5、margin时是相对于父元素的宽度计算的

### 5. vw

+ 1vw等于视口宽度的1%。

### 6.vh

+ 1vh等于视口高度的1%。

### 7.vmin 

+ 选取 vw 和 vh 中最小的那个

### 8.vmax 

+ 选取 vw 和 vh 中最大的那个