import{_ as t,c as o,o as e,a3 as r}from"./chunks/framework.7ep0oyv4.js";const u=JSON.parse('{"title":"三、CSS三大特性","description":"","frontmatter":{},"headers":[],"relativePath":"css/3.md","filePath":"css/3.md"}'),a={name:"css/3.md"},s=r('<h1 id="三、css三大特性" tabindex="-1">三、CSS三大特性 <a class="header-anchor" href="#三、css三大特性" aria-label="Permalink to &quot;三、CSS三大特性&quot;">​</a></h1><h2 id="_1-层叠性" tabindex="-1">1. 层叠性 <a class="header-anchor" href="#_1-层叠性" aria-label="Permalink to &quot;1. 层叠性&quot;">​</a></h2><ul><li><p>概念：如果发生了样式冲突，那就会根据一定的规则（选择器优先级），进行样式的层叠（覆盖）。</p><blockquote><p>什么是样式冲突？ ——— 元素的<strong>同一个样式名</strong>，被设置了<strong>不同的值</strong>，这就是冲突</p></blockquote></li></ul><h2 id="_2-继承性" tabindex="-1">2. 继承性 <a class="header-anchor" href="#_2-继承性" aria-label="Permalink to &quot;2. 继承性&quot;">​</a></h2><ul><li><p>概念：元素会自动拥有 <strong>其父元素</strong>、或 <strong>其祖先元素</strong> 上所设置的 <strong>某些样式</strong>。</p></li><li><p>规则：优先继承 <strong>离得近</strong> 的。</p></li><li><p>常见的可继承属性：</p><blockquote><p><code>text-??</code> ， <code>font-??</code> ，<code> line-??</code> 、 <code>color</code> ......</p></blockquote></li><li><p>备注：参照 <a href="https://developer.mozilla.org/zh-CN/" target="_blank" rel="noreferrer">MDN</a> 网站，可查询属性是否可被继承</p></li></ul><h2 id="_3-优先级" tabindex="-1">3. 优先级 <a class="header-anchor" href="#_3-优先级" aria-label="Permalink to &quot;3. 优先级&quot;">​</a></h2><ul><li><p>简单聊： <code>!important</code> &gt; <strong>行内样式</strong> &gt; <strong>ID选择器</strong> &gt; <strong>类选择器</strong> &gt; <strong>元素选择器</strong> &gt; ***** &gt; <strong>继承的样式。</strong></p></li><li><p>详细聊：需要计算权重。</p><blockquote><p>计算权重时需要注意：<strong>并集选择器的每一个部分是分开算的！</strong></p></blockquote></li></ul>',7),n=[s];function l(c,i,d,_,p,g){return e(),o("div",null,n)}const b=t(a,[["render",l]]);export{u as __pageData,b as default};
