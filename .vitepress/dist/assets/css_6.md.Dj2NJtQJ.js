import{_ as a,c as s,o as t,a3 as i}from"./chunks/framework.7ep0oyv4.js";const e="/assets/240416-nkkZYFqvzd.DFs1MRzn.png",E=JSON.parse('{"title":"六、浮动","description":"","frontmatter":{},"headers":[],"relativePath":"css/6.md","filePath":"css/6.md"}'),o={name:"css/6.md"},l=i('<h1 id="六、浮动" tabindex="-1">六、浮动 <a class="header-anchor" href="#六、浮动" aria-label="Permalink to &quot;六、浮动&quot;">​</a></h1><h2 id="_1-浮动的简介" tabindex="-1">1. 浮动的简介 <a class="header-anchor" href="#_1-浮动的简介" aria-label="Permalink to &quot;1. 浮动的简介&quot;">​</a></h2><p>在最初，浮动是用来实现文字环绕图片效果的，现在浮动是主流的页面布局方式之一。</p><img src="'+e+`" alt="image-20240416141932670" style="zoom:67%;"><h2 id="_2-元素浮动后的特点" tabindex="-1">2. 元素浮动后的特点 <a class="header-anchor" href="#_2-元素浮动后的特点" aria-label="Permalink to &quot;2. 元素浮动后的特点&quot;">​</a></h2><ol><li><p>🤢脱离文档流。</p></li><li><p>😊不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽高。</p></li><li><p>😊不会独占一行，可以与其他元素共用一行。</p></li><li><p>😊不会 <code>margin</code> 合并，也不会 <code>margin</code> 塌陷，能够完美的设置四个方向的 margin 和 <code>padding</code> 。</p></li><li><p>😊不会像行内块一样被当做文本处理（没有行内块的空白问题）。</p></li></ol><h2 id="_3-解决浮动产生的影响" tabindex="-1">3. 解决浮动产生的影响 <a class="header-anchor" href="#_3-解决浮动产生的影响" aria-label="Permalink to &quot;3. 解决浮动产生的影响&quot;">​</a></h2><h3 id="_3-1-元素浮动后会有哪些影响" tabindex="-1">3.1 元素浮动后会有哪些影响 <a class="header-anchor" href="#_3-1-元素浮动后会有哪些影响" aria-label="Permalink to &quot;3.1 元素浮动后会有哪些影响&quot;">​</a></h3><p><strong>对兄弟元素的影响：</strong> 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟无影响。</p><p><strong>对父元素的影响：</strong> 不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元素。</p><h3 id="_3-2-解决浮动产生的影响-清除浮动" tabindex="-1">3.2 解决浮动产生的影响（清除浮动） <a class="header-anchor" href="#_3-2-解决浮动产生的影响-清除浮动" aria-label="Permalink to &quot;3.2 解决浮动产生的影响（清除浮动）&quot;">​</a></h3><p><strong>解决方案：</strong></p><ol><li><p>方案一： 给父元素指定高度。</p></li><li><p>方案二： 给父元素也设置浮动，带来其他影响。</p></li><li><p>方案三： 给父元素设置 <code>overflow:hidden</code> 。</p></li><li><p>方案四： 在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置 <code>clear:both</code> 。</p></li><li><p><strong>方案五</strong>： 给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。===&gt; 推荐使用</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent::after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">both</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><blockquote><p>布局中的一个原则：设置浮动的时候，兄弟元素要么全都浮动，要么全都不浮动。</p></blockquote><h2 id="_4-浮动相关属性" tabindex="-1">4.浮动相关属性 <a class="header-anchor" href="#_4-浮动相关属性" aria-label="Permalink to &quot;4.浮动相关属性&quot;">​</a></h2><table><thead><tr><th><strong>CSS</strong> <strong>属性</strong></th><th><strong>功能</strong></th><th><strong>属性值</strong></th></tr></thead><tbody><tr><td><code>float</code></td><td>设置浮动</td><td><code>left</code> : 设置左浮动<br><code>right</code> : 设置右浮动<br><code>none</code> ：不浮动，默认值</td></tr><tr><td><code>clear</code></td><td>清除浮动<br>清除前面兄弟元素浮动元素的响应</td><td><code>left</code> ：清除前面左浮动的影响<br><code>right</code> ：清除前面右浮动的影响<br><code>both</code> ：清除前面左右浮动的影响</td></tr></tbody></table>`,16),n=[l];function r(h,d,p,c,k,g){return t(),s("div",null,n)}const b=a(o,[["render",r]]);export{E as __pageData,b as default};
