import{_ as t,E as d,c as o,m as i,a as s,J as e,w as l,a2 as n,o as r}from"./chunks/framework.Q_H8FdZy.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/CSS/布局.md","filePath":"pages/CSS/布局.md"}'),p={name:"pages/CSS/布局.md"},h=n(`<h2 id="css中的布局" tabindex="-1">Css中的布局 <a class="header-anchor" href="#css中的布局" aria-label="Permalink to &quot;Css中的布局&quot;">​</a></h2><h3 id="网格布局-grid" tabindex="-1">网格布局(grid) <a class="header-anchor" href="#网格布局-grid" aria-label="Permalink to &quot;网格布局(grid)&quot;">​</a></h3><ul><li>采用grid布局的元素，被称为grid容器(grid container)，简称“容器”。其所有直接子元素（直接子元素的子元素不包含在内）自动成为容器成员，称为grid项目(grid item)，简称“项目”</li></ul><h4 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h4><ol><li>display: grid[块级网格]/inline-grid[行级网格]</li><li>grid-template-columns/grid-template-rows属性：使用以空格分隔的多个值来定义网格的行和列，这些值表示网格轨道(Grid Track) 大小，如果定义中包含重复的部分，可以使用<code>repeat(n width)</code>，<code>fr</code>单元允许等分网格容器剩余可用空间来设置网络轨道的大小。</li><li>grid-template-areas属性：网格的可视化结构，属性值[name/ ，. / none]</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item-a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-area</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: header;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item-b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-area</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: main;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item-c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-area</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: sidebar;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item-d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-area</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: footer;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-template-columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-template-rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	grid-template-areas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;header header header header&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;main main . sidebar&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;footer footer footer footer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="4"><li>grid-template属性:单个声明中定义<code>grid-template-columns</code>、<code>grid-template-rows</code>和<code>grid-template-areas</code></li><li>grid-column-gap/ grid-row-gap属性:指定网格线的大小，可以想象为设置列/行之间的间距宽度</li><li>justify-items/ align-items属性:沿着行/列轴对齐网格内的内容，适用于容器内的所有的grid items,属性值：[start/ end/ center/ stretch ]</li><li>place-items属性:设置 <code>align-items</code> 和 <code>justify-items</code> 的简写</li><li>justify-content/align-content属性: 如果所有的grid items都使用像px这样的非弹性单位来设置大小，则可能出现网格总大小小于其容器的大小，此时，可以设置网格容器的内的网格对齐方式，沿着行/列轴对齐网格,属性值：[start/ end/ center/ stretch/ space-around/ space-between/ space-evenly]</li><li>place-content属性:设置 <code>align-content</code> 和 <code>justify-content</code> 的简写</li><li>grid-auto-columns/grid-auto-rows设置浏览器自动创建多余网格的列宽和行高</li><li>grid-template:<code>grid-template</code>属性是<code>grid-template-columns</code>、<code>grid-template-rows</code>和<code>grid-template-areas</code>这三个属性的合并简写形式。</li><li><code>grid</code>属性是<code>grid-template-rows</code>、<code>grid-template-columns</code>、<code>grid-template-areas</code>、 <code>grid-auto-rows</code>、<code>grid-auto-columns</code>、<code>grid-auto-flow</code>这六个属性的合并简写形式。</li></ol><h4 id="项目属性" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性" aria-label="Permalink to &quot;项目属性&quot;">​</a></h4><h5 id="指定项目的位置" tabindex="-1">指定项目的位置 <a class="header-anchor" href="#指定项目的位置" aria-label="Permalink to &quot;指定项目的位置&quot;">​</a></h5><ul><li><code>grid-column-start</code>属性：左边框所在的垂直网格线</li><li><code>grid-column-end</code>属性：右边框所在的垂直网格线</li><li><code>grid-row-start</code>属性：上边框所在的水平网格线</li><li><code>grid-row-end</code>属性：下边框所在的水平网格线</li></ul><p>这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。</p><p>这四个属性的值还可以使用<code>span</code>关键字，表示&quot;跨越&quot;，即左右边框（上下边框）之间跨越多少个网格。</p><p><code>grid-column</code>属性是<code>grid-column-start</code>和<code>grid-column-end</code>的合并简写形式，<code>grid-row</code>属性是<code>grid-row-start</code>属性和<code>grid-row-end</code>的合并简写形式。</p><p><code>grid-area</code>属性指定项目放在哪一个区域。</p><p><code>grid-area</code>属性还可用作<code>grid-row-start</code>、<code>grid-column-start</code>、<code>grid-row-end</code>、<code>grid-column-end</code>的合并简写形式，直接指定项目的位置。</p><p><code>justify-self</code>属性设置单元格内容的水平位置（左中右），跟<code>justify-items</code>属性的用法完全一致，但只作用于单个项目。</p><p><code>align-self</code>属性设置单元格内容的垂直位置（上中下），跟<code>align-items</code>属性的用法完全一致，也是只作用于单个项目。</p><p><code>place-self</code>属性是<code>align-self</code>属性和<code>justify-self</code>属性的合并简写形式。</p><h3 id="弹性盒子-flexbox" tabindex="-1">弹性盒子(flexbox) <a class="header-anchor" href="#弹性盒子-flexbox" aria-label="Permalink to &quot;弹性盒子(flexbox)&quot;">​</a></h3>`,19),c=i("li",null,[i("p",null,"概念：弹性盒模型（Flexible Box模型），也被成为flexbox，是一种一维的布局模型（也就是说一次只能处理一个维度上的元素布局，一行或者一列）。它给flexbox的子元素之间提供了强大的空间分布和对齐能力。")],-1),k=i("li",null,[i("p",null,"子元素浮动失效")],-1),g=n(`<h4 id="容器属性-1" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性-1" aria-label="Permalink to &quot;容器属性&quot;">​</a></h4><ol><li>flex-direction：主轴的方向，row/row-reverse/column/column-reverse</li><li>flex-wrap：是否换行，nowrap/wrap/wrap-reverse[第一行在下方]</li><li>flex-flow:上两个属性的简写方式，flex-flow: flex-direction || flex-wrap;</li><li>justify-content：主轴方向的对齐方式，flex-start/flex-end/space-between/space-around/center，还可以对中间元素设置margin：auto实现居中</li><li>align-items：垂直于主轴的对齐方式，flex-start/flex-end/center/baseline/stretch(未设高度时占满)</li><li>align-content：多根轴线的对齐方式（多行时），flex-start/flex-end/center/space-between/space-around</li></ol><h4 id="项目属性-1" tabindex="-1">项目属性 <a class="header-anchor" href="#项目属性-1" aria-label="Permalink to &quot;项目属性&quot;">​</a></h4><ol><li>order: 定义项目的排序顺序，由小到大优先排列，</li><li>flex-grow：定义放大比例，（存在剩余空间才会进行放大），默认值为0。</li><li>flex-shrink：定义缩小比例（空间不足时会进行缩小），默认值为1</li><li>flex-basis：项目占据主轴的空间，默认值为auto。</li><li>flex：上面3个属性的简写，flex: none | [ &lt;&#39;flex-grow&#39;&gt; &lt;&#39;flex-shrink&#39;&gt;? || &lt;&#39;flex-basis&#39;&gt; ]</li><li>align-self：允许单个项目于其他项目的对其方式不同，继承父元素的align-items的属性</li></ol><h3 id="多列布局-multicolumn" tabindex="-1">多列布局(multicolumn) <a class="header-anchor" href="#多列布局-multicolumn" aria-label="Permalink to &quot;多列布局(multicolumn)&quot;">​</a></h3><h4 id="columns分栏式布局" tabindex="-1">columns分栏式布局 <a class="header-anchor" href="#columns分栏式布局" aria-label="Permalink to &quot;columns分栏式布局&quot;">​</a></h4><ul><li>一般用于文本布局</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> //分两栏没栏100px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  columns-gap:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="定位布局-positioning" tabindex="-1">定位布局(positioning) <a class="header-anchor" href="#定位布局-positioning" aria-label="Permalink to &quot;定位布局(positioning)&quot;">​</a></h3>`,9);function E(u,m,y,f,F,x){const a=d("font");return r(),o("div",null,[h,i("ul",null,[c,i("li",null,[i("p",null,[s("注意：设为flex布局之后，"),e(a,{color:"red"},{default:l(()=>[s("子元素的float、clear和vertical-align属性将会失效")]),_:1})])]),i("li",null,[e(a,{color:"red"},{default:l(()=>[s("flex的子元素margin值不会重叠")]),_:1})]),k]),g])}const b=t(p,[["render",E]]);export{_ as __pageData,b as default};
