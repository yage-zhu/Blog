import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.7ep0oyv4.js";const o=JSON.parse('{"title":"2、基本命令","description":"","frontmatter":{},"headers":[],"relativePath":"git/2.md","filePath":"git/2.md"}'),h={name:"git/2.md"},p=t(`<h1 id="_2、基本命令" tabindex="-1">2、基本命令 <a class="header-anchor" href="#_2、基本命令" aria-label="Permalink to &quot;2、基本命令&quot;">​</a></h1><h2 id="_2-1-基础操作指令" tabindex="-1">2.1 基础操作指令 <a class="header-anchor" href="#_2-1-基础操作指令" aria-label="Permalink to &quot;2.1  基础操作指令&quot;">​</a></h2><p>1.初始化</p><p>​ 作用：初始化当前目录为一个git仓库</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>2.查看修改的状态（status）</p><p>​ 作用：查看的修改的状态（暂存区、工作区）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><p>3.添加工作区到暂存区(add)</p><p>​ 作用：添加工作区一个或多个文件的修改到暂存区</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 单个文件名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 通配符</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #将所有修改加入暂存区</span></span></code></pre></div><p>4.提交暂存区到本地仓库(commit)</p><p>​ 作用：提交暂存区内容到本地仓库的当前分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;注释内容&#39;</span></span></code></pre></div><p>5.查看提交日志(log)</p><p>​ 在之前配置的别名 git-log 就包含了这些参数，所以后续可以直接使用指令 git-log</p><p>​ 作用:查看提交记录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	--all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 显示所有分支</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	--pretty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oneline</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 将提交信息显示为一行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	--abbrev-commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使得输出的commitId更简短</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	--graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 以图的形式显示</span></span></code></pre></div><p>6.版本回退</p><p>​ 作用：版本切换，commitID 可以使用 git-log 或 git log 指令查看</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       #查看已经删除的记录</span></span></code></pre></div><p>7.查看修改记录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blame</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="_2-2-分支" tabindex="-1">2.2 分支 <a class="header-anchor" href="#_2-2-分支" aria-label="Permalink to &quot;2.2  分支&quot;">​</a></h2><p>1.查看本地分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span></code></pre></div><p>2.创建本地分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名</span></span></code></pre></div><p>3.切换分支(checkout)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #直接切换到一个不存在的分支（创建并切换）</span></span></code></pre></div><p>4.合并分支(merge)</p><p>​ 一个分支上的提交可以合并到另一个分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支名称</span></span></code></pre></div><p>5.删除分支</p><p>​ 不能删除当前分支，只能删除其他分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       #删除分支时，需要做各种检查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       #不做任何检查，强制删除</span></span></code></pre></div><p>6.解决冲突</p><p>当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解决冲突，解决冲突步骤如下：</p><ol><li>处理文件中冲突的地方</li><li>将解决完冲突的文件加入暂存区(add)</li><li>提交到仓库(commit)</li></ol><h2 id="_2-3-其他命令" tabindex="-1">2.3 其他命令 <a class="header-anchor" href="#_2-3-其他命令" aria-label="Permalink to &quot;2.3  其他命令&quot;">​</a></h2><p>1.文件状态：</p><p>​ 未跟踪(U)：从未被Git管理过</p><p>​ 新添加(A)：第一次被Git暂存</p><p>​ 未修改(&quot;)：三个区域统一</p><p>​ 已修改(M)：工作区内容变化</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span></span></code></pre></div><p>2.查看暂存区文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-files</span></span></code></pre></div><p>3.暂存区文件覆盖工作区</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restore</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>4.暂存区删除文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>5.版本回退</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitID</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #工作区和暂缓区保留其他文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitID</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #不保留其他文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitID</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #等价git reset，工作区保留其他文件</span></span></code></pre></div><h2 id="_2-4-忽略文件" tabindex="-1">2.4 忽略文件 <a class="header-anchor" href="#_2-4-忽略文件" aria-label="Permalink to &quot;2.4 忽略文件&quot;">​</a></h2><p>根目录下创建文件<code>.gitignore</code>，里面填写需要忽略的文件或文件夹名。(不用填写路径)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.prm</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node_modeles</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.vscode</span></span></code></pre></div>`,57),n=[p];function l(e,k,d,g,r,c){return a(),i("div",null,n)}const y=s(h,[["render",l]]);export{o as __pageData,y as default};
