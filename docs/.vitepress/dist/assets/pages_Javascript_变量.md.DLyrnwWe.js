import{_ as s,c as i,o as a,a2 as l}from"./chunks/framework.Q7NN9khY.js";const c=JSON.parse('{"title":"变量声明","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Javascript/变量.md","filePath":"pages/Javascript/变量.md","lastUpdated":1714919029000}'),n={name:"pages/Javascript/变量.md"},h=l(`<h1 id="变量声明" tabindex="-1">变量声明 <a class="header-anchor" href="#变量声明" aria-label="Permalink to &quot;变量声明&quot;">​</a></h1><h2 id="var关键字" tabindex="-1">var关键字 <a class="header-anchor" href="#var关键字" aria-label="Permalink to &quot;var关键字&quot;">​</a></h2><h3 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h3><ul><li>var定义的变量会成为包含它的<strong>函数</strong>的局部变量</li><li>声明变量后未进行初始化的情况下，变量是undefined</li><li>省略var操作符创建变量时会成为全局变量（严格模式下不行）</li></ul><h3 id="var声明提升" tabindex="-1">var声明提升 <a class="header-anchor" href="#var声明提升" aria-label="Permalink to &quot;var声明提升&quot;">​</a></h3><ul><li>var声明变量时，会将变量提升到函数作用域顶部。</li><li>var在全局作用域中声明的变量会成为window的属性。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(age);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//undefined</span></span></code></pre></div><h2 id="let声明" tabindex="-1">let声明 <a class="header-anchor" href="#let声明" aria-label="Permalink to &quot;let声明&quot;">​</a></h2><h3 id="let关键字" tabindex="-1">let关键字 <a class="header-anchor" href="#let关键字" aria-label="Permalink to &quot;let关键字&quot;">​</a></h3><ul><li>let 声明的是<strong>块</strong>作用域，只在当前代码块中起作用</li><li>let 不允许在**<code>同一作用域中</code>**重复声明同一变量。</li></ul><h3 id="暂时性死区" tabindex="-1">暂时性死区 <a class="header-anchor" href="#暂时性死区" aria-label="Permalink to &quot;暂时性死区&quot;">​</a></h3><ul><li>let声明的变量不会在作用域中被提升</li></ul><h3 id="全局声明" tabindex="-1">全局声明 <a class="header-anchor" href="#全局声明" aria-label="Permalink to &quot;全局声明&quot;">​</a></h3><ul><li>let 在全局作用域中声明的变量不会成为window的属性。</li></ul><h3 id="条件声明" tabindex="-1">条件声明 <a class="header-anchor" href="#条件声明" aria-label="Permalink to &quot;条件声明&quot;">​</a></h3><ul><li>let 不依赖条件声明模式</li></ul><h3 id="for循环中的let声明" tabindex="-1">for循环中的let声明 <a class="header-anchor" href="#for循环中的let声明" aria-label="Permalink to &quot;for循环中的let声明&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//6，迭代变量渗透到循环体外部</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ReferenceError i  没有定义i</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//迭代变量保存的是导致循环退出的值，在之后执行，所有i都是同一个变量, 宏任务与微任务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5 5 5 5 5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//使用let声明变量时。js在后台为每个迭代循环声明一个新的迭代变量，每个setTimeout引用的都是不同的变量实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//0 1 2 3 4 5</span></span></code></pre></div><h2 id="const声明" tabindex="-1">const声明 <a class="header-anchor" href="#const声明" aria-label="Permalink to &quot;const声明&quot;">​</a></h2><ul><li>变量的声明与初始化必须同时进行</li><li>声明的作用域是块级作用域</li><li>const声明的限制只适用于它指向变量的引用，如果const变量引用的是一个对象，那么可以修改对象内部的属性及属性值</li></ul><h3 id="const循环" tabindex="-1">const循环 <a class="header-anchor" href="#const循环" aria-label="Permalink to &quot;const循环&quot;">​</a></h3><ul><li>const key in Object 遍历对象内的所有属性名</li><li>const key of Array 遍历数组内的所有元素</li></ul>`,23),t=[h];function e(k,p,r,d,E,o){return a(),i("div",null,t)}const y=s(n,[["render",e]]);export{c as __pageData,y as default};
