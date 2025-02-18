import{_ as s,c as i,b as t,o as a}from"./app-G3aNsWmq.js";const n="/assets/image-20220829172346058-DY753mda.png",d="/assets/image-20220829172418679-DYVxIWcJ.png",o="/assets/image-20220829172434849-BXQHYFZe.png",p="/assets/image-20220829172446528-B6yT5526.png",r="/assets/image-20220829172501348-Dh9pof2G.png",l="/assets/image-20220829172513074-CozXNe8x.png",c="/assets/image-20220829172525119-BYZkzxH5.png",m="/assets/image-20220829172541387-CuHD-koS.png",u={};function v(g,e){return a(),i("div",null,e[0]||(e[0]=[t('<p><strong>Step 1. Switch to the root user</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sudo su root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+n+'"></div><p><strong>Step 2. Create the &#39;optimibi&#39; user group</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>groupadd optimibi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+d+`"></div><p><strong>Step 3. Create the &#39;OptimiBI&#39; user, add it to the &#39;OptimiBI&#39; user group, and set the user password to &#39;OptimiBI&#39; as well.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>adduser OptimiBI -g OptimiBI</span></span>
<span class="line"><span>passwd OptimiBI</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div align="left"><img src="`+o+'"></div><p><strong>Step 4. Navigate to the directory containing the installation package and extract the package to the /opt directory.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>unzip -o optimibi-server_202203240605.zip -d /opt/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+p+`"></div><p><strong>Step 5. After extracting, go to the /opt/ directory and modify permissions.</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>cd /opt/</span></span>
<span class="line"><span>chmod -R 700 optimibi-server</span></span>
<span class="line"><span>chown -R optimibi optimibi-server</span></span>
<span class="line"><span>chgrp -R optimibi optimibi-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align="left"><img src="`+r+`"></div><p><strong>Installation completed.</strong></p><h2 id="start-optimibi" tabindex="-1"><a class="header-anchor" href="#start-optimibi"><span>Start OptimiBI</span></a></h2><p><strong>Please operate as the &#39;optimibi&#39; user</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>su OptimiBI</span></span>
<span class="line"><span>cd /opt/optimibi-server/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Start the service</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>./start-optimibi.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="`+l+'"></div><p><strong>Stop Service</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>./stop-optimibi.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+c+'"></div><p><strong>Check Service Start/Stop Status</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ps -ef|grep tomcat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+m+'"></div><p>If the command produces the above output, it indicates that the service is in a running state.</p><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login"><span>Login</span></a></h2><p>URL: <code>http://localhost:28080/</code></p><p>username / password</p><ul><li><code>admin</code> / <code>password</code></li><li><code>demo</code> / <code>demo</code></li></ul><h2 id="update-the-system" tabindex="-1"><a class="header-anchor" href="#update-the-system"><span>Update the System</span></a></h2><p>Place the update package <code>optimibi-upload.jar</code> in the <code>optimibi-server\\update</code> folder and restart the system.</p>',35)]))}const b=s(u,[["render",v],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/documentation/Setup/OptimiBI-Installation-CentOS/","title":"OptimiBI Installation (CentOS)","lang":"en-US","frontmatter":{"title":"OptimiBI Installation (CentOS)","permalink":"/documentation/Setup/OptimiBI-Installation-CentOS/","createTime":"2025/02/18 04:09:32"},"headers":[],"readingTime":{"minutes":0.9,"words":270},"git":{},"filePathRelative":"documentation/Setup/20 Centos安装.md"}');export{b as comp,k as data};
