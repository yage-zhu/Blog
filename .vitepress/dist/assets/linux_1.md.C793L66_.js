import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.7ep0oyv4.js";const o=JSON.parse('{"title":"远程连接","description":"","frontmatter":{},"headers":[],"relativePath":"linux/1.md","filePath":"linux/1.md"}'),l={name:"linux/1.md"},t=n(`<h1 id="远程连接" tabindex="-1">远程连接 <a class="header-anchor" href="#远程连接" aria-label="Permalink to &quot;远程连接&quot;">​</a></h1><h2 id="ubuntu初始化" tabindex="-1">ubuntu初始化 <a class="header-anchor" href="#ubuntu初始化" aria-label="Permalink to &quot;ubuntu初始化&quot;">​</a></h2><p>1）root账户设置密码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               #进入root账号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                #root账号设置密码</span></span></code></pre></div><p>2）允许root账户远程连接</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sshd_config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #修改sshd配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PermitRootLogin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #33行修改，允许root账户远程登入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #重启sshd服务</span></span></code></pre></div><p>3）修改更新源</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>4）固定ip地址</p><p>Ubuntu默认使用Systemd网络管理器（systemd-networkd）和Netplan来提供网络服务。</p><p>Netplan是一个网络配置工具，它使用简单的YAML语法来配置网络接口和连接。Netplan允许您在Ubuntu中轻松配置网络设置，可以使用Netplan来配置和固定IP地址。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/netplan/00-installer-config.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">network:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  version:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  renderer:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> networkd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ethernets:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    eth0:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      addresses:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [192.168.77.201/24]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      gateway4:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.77.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      dhcp4:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      nameservers:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        addresses:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [223.5.5.5, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">223.6.6.6]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netplan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Alma linux使用NetworkManager 来管理网络连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/NetworkManager/system-connections/ens33.nmconnection</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ipv4]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">address1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.77.102/24,192.168.77.2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">223.5.5.5/223.6.6.6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">manual</span></span></code></pre></div><h2 id="ssh远程连接" tabindex="-1">ssh远程连接 <a class="header-anchor" href="#ssh远程连接" aria-label="Permalink to &quot;ssh远程连接&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看ssh版本，检查是否安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装openssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动ssh服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看ssh服务状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#ssh客户端命令（linux或unix系统下使用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-p </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">port]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@remote</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#port是ssh server监听的端口，默认22</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#user是远程机器上的用户名，如果不指定默认为当前用户</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#remote是远程机器上的地址，可以是ip/域名或者别名</span></span></code></pre></div><h2 id="lrzsz文件传输" tabindex="-1">lrzsz文件传输 <a class="header-anchor" href="#lrzsz文件传输" aria-label="Permalink to &quot;lrzsz文件传输&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lrzsz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #安装lrzsz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #上传文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件名</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #下载文件</span></span></code></pre></div><h2 id="scp文件传输" tabindex="-1">scp文件传输 <a class="header-anchor" href="#scp文件传输" aria-label="Permalink to &quot;scp文件传输&quot;">​</a></h2><ul><li>scp就是secure copy，是一个在Linux下用来进行远程拷贝文件的命**（linux或unix系统下使用）** <ul><li>-P（大写） 后面接ssh服务器的端口号</li><li>-r 复制目录</li></ul></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@remote:Desktop/01.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 01.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#把远程家目录下的Desktop/01.py文件复制到本地当前目录下的01.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#加上-r 选项可以传送文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@remote:Desktop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#把当前目录下的demo文件夹复制到远程家目录下的Desktop</span></span></code></pre></div><h2 id="免密码登录" tabindex="-1">免密码登录 <a class="header-anchor" href="#免密码登录" aria-label="Permalink to &quot;免密码登录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#在Windows主机上生成SSH密钥对，它会提示你输入生成SSH密钥的文件名和存放路径，默认情况下文件名为id_rsa，而存放路径为当前用户的主目录下的.ssh子目录中，C:\\Users\\Administrator\\.ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#linux也生成密钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#将主机公钥添加至Linux服务器上的authorized_keys文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> id_rsa.pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/authorized_keys</span></span></code></pre></div><h2 id="配置别名" tabindex="-1">配置别名 <a class="header-anchor" href="#配置别名" aria-label="Permalink to &quot;配置别名&quot;">​</a></h2><blockquote><p>在windos主机里~/.ssh/config里追加以下内容</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HostName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">User</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span></span></code></pre></div><p>保存后，即可ssh mac实现远程登录，scp同样</p><h2 id="ftp-tftp安装" tabindex="-1">ftp/tftp安装 <a class="header-anchor" href="#ftp-tftp安装" aria-label="Permalink to &quot;ftp/tftp安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装ftp服务 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vsftpd</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isntall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tftpd-hpa</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #安装tftp服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/default/tftpd-hpa</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #修改配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TFTP_DIRECTORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/root/tftp&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #修改位置 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TFTP_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--secure -c&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #-c允许客户端向服务器上传文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tftpd-hpa</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #重启tftp服</span></span></code></pre></div><blockquote><p>windows可使用FileZilla软件</p></blockquote>`,31),p=[t];function h(e,k,d,r,c,F){return a(),i("div",null,p)}const y=s(l,[["render",h]]);export{o as __pageData,y as default};
