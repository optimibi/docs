import{_ as i,c as s,a as t,o as n}from"./app-CPeDGrmA.js";const a={};function l(o,e){return n(),s("div",null,e[0]||(e[0]=[t('<p>Optimibi can be easily deployed using Docker. This guide provides the steps and commands to deploy the free version of Optimibi.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>Before you start, ensure you have the following:</p><ul><li>Docker installed on your machine. If you don&#39;t have Docker installed, you can download and install it from the Docker website.</li></ul><h2 id="deployment-steps" tabindex="-1"><a class="header-anchor" href="#deployment-steps"><span>Deployment Steps</span></a></h2><ol><li><p><strong>Open a Terminal or Command Prompt</strong>:</p><ul><li>On Windows, you can use Command Prompt or PowerShell.</li><li>On macOS or Linux, you can use the Terminal.</li></ul></li><li><p><strong>Pull the Optimibi Docker Image</strong>:</p><ul><li><p>If you haven&#39;t already pulled the Optimibi Docker image, you can do so by running:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> optimibi/bi-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>This command downloads the Optimibi Docker image to your local machine.</p></li></ul></li><li><p><strong>Run the Docker Container</strong>:</p><ul><li><p>Use the following command to run the Optimibi Docker container:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -itd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> optimibi</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 28080:28080</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 25432:25432</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> optimibi/bi-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Command explanation:</p><ul><li><code>docker run</code>: This command is used to create and start a new Docker container.</li><li><code>-itd</code>: These flags tell Docker to run the container in interactive mode (<code>-i</code>), allocate a pseudo-TTY (<code>-t</code>), and run it in detached mode (<code>-d</code>), which means it will run in the background.</li><li><code>--name optimibi</code>: Names the container <code>optimibi</code> for easy reference.</li><li><code>-p 28080:28080</code>: Maps port 28080 on your local machine to port 28080 in the container.</li><li><code>-p 25432:25432</code>: Maps port 25432 on your local machine to port 25432 in the container.</li><li><code>optimibi/bi-server</code>: Specifies the Docker image to use.</li></ul></li></ul></li><li><p><strong>Verify the Deployment</strong>:</p><ul><li><p>Once the container is running, you can check the container status with the following command to verify that Optimibi is deployed correctly:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>This command lists all running containers. You should see <code>optimibi</code> in the list and its status.</p></li></ul></li><li><p><strong>Access Optimibi</strong>:</p><ul><li>Open your web browser and navigate to <code>http://localhost:28080</code>.</li><li>You should see the Optimibi interface. If you need to connect to the database, you can use port <code>25432</code>.</li></ul></li></ol><h2 id="stopping-and-removing-the-container" tabindex="-1"><a class="header-anchor" href="#stopping-and-removing-the-container"><span>Stopping and Removing the Container</span></a></h2><ul><li><p>To stop the optimibi container, use:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> optimibi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>To remove the optimibi container, use:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> optimibi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p>By following these steps, you should be able to deploy and run optimibi on your local machine using Docker.</p>',9)]))}const r=i(a,[["render",l]]),p=JSON.parse('{"path":"/documentation/Setup/Deploying-Optimibi-Using-Dockers/","title":"Deploying Optimibi Using Docker","lang":"en-US","frontmatter":{"title":"Deploying Optimibi Using Docker","permalink":"/documentation/Setup/Deploying-Optimibi-Using-Dockers/","tags":null,"description":null,"createTime":"2025/03/17 13:02:19"},"headers":[],"readingTime":{"minutes":1.3,"words":390},"git":{},"filePathRelative":"documentation/Setup/50 Docker部署Datafor.md"}');export{r as comp,p as data};
