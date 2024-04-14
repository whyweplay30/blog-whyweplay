import{_ as i,E as n,c as s,m as l,a as e,J as a,w as o,a2 as r,o as d}from"./chunks/framework.Q_H8FdZy.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/CSS/盒模型.md","filePath":"pages/CSS/盒模型.md"}'),h={name:"pages/CSS/盒模型.md"},c=l("h2",{id:"盒子模型",tabindex:"-1"},[e("盒子模型 "),l("a",{class:"header-anchor",href:"#盒子模型","aria-label":'Permalink to "盒子模型"'},"​")],-1),_=l("h3",{id:"_1-标准盒模型",tabindex:"-1"},[e("1. 标准盒模型 "),l("a",{class:"header-anchor",href:"#_1-标准盒模型","aria-label":'Permalink to "1. 标准盒模型"'},"​")],-1),u=l("h3",{id:"_2-ie盒模型-怪异",tabindex:"-1"},[e("2. IE盒模型（怪异） "),l("a",{class:"header-anchor",href:"#_2-ie盒模型-怪异","aria-label":'Permalink to "2. IE盒模型（怪异）"'},"​")],-1),f=l("ul",null,[l("li",null,"属性width,height包含border和padding，指的是content+padding+border。")],-1),b=l("h3",{id:"css定位",tabindex:"-1"},[e("CSS定位 "),l("a",{class:"header-anchor",href:"#css定位","aria-label":'Permalink to "CSS定位"'},"​")],-1),p=l("p",null,"static, relative, fixed, absolute, sticky",-1),m=l("strong",null,"绝对定位",-1),g=l("strong",null,"static 定位以外",-1),x=l("strong",null,"第一个父元素",-1),k=l("strong",null,"绝对定位",-1),S=l("strong",null,"浏览器窗口",-1),P=l("strong",null,"祖先元素",-1),q=l("li",null,[e("relative: 生成"),l("strong",null,"相对定位"),e("的元素，相对于其"),l("strong",null,"正常位置"),e('进行定位。因此，"left:20" 会向元素的left 位置添加 20 像素。')],-1),C=l("li",null,[e("static: 默认值。没有定位，"),l("strong",null,"元素出现在正常的流中"),e("（忽略 top, bottom, left, right 或者 z-index 声明）。")],-1),v=l("li",null,"inherit: 规定应该从父元素继承 position 属性的值。",-1),T=l("strong",null,"根据用户的滚动位置进行定位。",-1),w=r('<h3 id="外边距重叠" tabindex="-1">外边距重叠 <a class="header-anchor" href="#外边距重叠" aria-label="Permalink to &quot;外边距重叠&quot;">​</a></h3><ul><li>水平边距永远不会重叠</li></ul><h4 id="兄弟元素" tabindex="-1">兄弟元素 <a class="header-anchor" href="#兄弟元素" aria-label="Permalink to &quot;兄弟元素&quot;">​</a></h4><ul><li>产生原因是BFC容器的元素在排列时会发生边距重叠</li></ul><h5 id="边距计算规则" tabindex="-1">边距计算规则 <a class="header-anchor" href="#边距计算规则" aria-label="Permalink to &quot;边距计算规则&quot;">​</a></h5><ul><li>一正一负取两数之和</li><li>同符号取绝对值大的数为外边距</li></ul><h5 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h5><ol><li>不在同一个BFC的容器中的元素不会发生边距重叠</li></ol><h4 id="父子元素" tabindex="-1">父子元素 <a class="header-anchor" href="#父子元素" aria-label="Permalink to &quot;父子元素&quot;">​</a></h4><ul><li>所谓父子元素外边重叠问题：便是子元素的外边距会传递个父元素，导致父子元素同时移动</li></ul><h5 id="解决方案-1" tabindex="-1">解决方案： <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案：&quot;">​</a></h5><ol><li>父元素设为BFC元素，[float不为none, overflow:hidden, position为absolute, fixed, display为flex, inline-block]</li><li>外层元素添加：padding</li><li>外层元素 overflow:hidden;</li><li>外层元素透明边框 border:1px solid transparent;</li><li>内层元素绝对定位 postion:absolute:</li><li>内层元素 加float:left;或display:inline-block;</li></ol>',12);function B(N,V,E,y,I,$){const t=n("font");return d(),s("div",null,[c,_,l("ul",null,[l("li",null,[e("属性width,height "),a(t,{color:"#4f92d0"},{default:o(()=>[e("只包含内容content,")]),_:1}),e("不包含border和padding。")])]),u,f,b,p,l("ul",null,[l("li",null,[e("absolute:生成"),a(t,{color:"#4f92d0"},{default:o(()=>[m,e("的元素")]),_:1}),e("，相对于 "),a(t,{color:"#4f92d0"},{default:o(()=>[g,e("的"),x]),_:1}),e('进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行确定')]),l("li",null,[e("fixed: 生成"),a(t,{color:"#4f92d0"},{default:o(()=>[k,e("的元素")]),_:1}),e("，相对于"),S,e('进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。[当其'),a(t,{color:"#4f92d0"},{default:o(()=>[P]),_:1}),e("的transform属性设置为none时，fixed定位属性会实现，定位容器由视口改为该祖先]")]),q,C,v,l("li",null,[e("sticky："),a(t,{color:"#4f92d0"},{default:o(()=>[T]),_:1}),e("粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换，初始是相对定位，直到在视口中遇到给定的偏移位置为止(margin/ top)。")])]),a(t,{color:"#4f92d0"},{default:o(()=>[e("注意它们的不同，fixed和absolute会脱离文档流")]),_:1}),w])}const D=i(h,[["render",B]]);export{F as __pageData,D as default};
