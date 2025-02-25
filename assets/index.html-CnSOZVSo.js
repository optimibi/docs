import{_ as i,c as t,a,o as r}from"./app-DBcFpGD8.js";const o={};function s(m,e){return r(),t("div",null,e[0]||(e[0]=[a('<p>Optimibi Server runs on Java Virtual Machine (JVM) which uses Java heap as a memory storage pool. Heap space is allocated when a process starts. Although JVM is good at dynamic memory management, using too much memory may cause JVM to perform poorly or even crash. On Optimibi Server, using too little memory may result in performance degradation. If you use Optimibi Server to process large datasets or high concurrency, you can improve its performance by setting the maximum memory usage of JVM.</p><p>This article explains how to increase the memory limit of JVM by editing the startup script file of Optimibi Server. Following the steps in this article, you can change the memory settings of Optimibi Server to meet your specific needs.</p><p>Important Note: Changing the memory usage of JVM may affect the stability of Optimibi Server. If you are not sure what you are doing, do not change this setting.</p><p><strong>Prerequisites</strong></p><ul><li>Optimibi Server is installed.</li><li>You have administrator privileges.</li></ul><p><strong>Increasing Memory Limit for Optimibi Server</strong></p><p>Follow these steps to increase the memory limit of Optimibi Server.</p><ol><li><p>Log in to the server where Optimibi Server is installed with administrator privileges.</p></li><li><p>Navigate to the installation directory of Optimibi Server.</p></li><li><p>Open the startup.sh or startup.bat file in Optimibi/bin, which is the startup script file of Optimibi Server.</p></li><li><p>Find the following lines:</p><p><code>set Optimibi_JAVA_HOME=/usr/local/java set CATALINA_OPTS=-Xms512m -Xmx1024m</code></p><p>If you are using Windows, change the path to the installation path of Java. If you are using Linux, change the path to the installation path of Java.</p></li><li><p>Change the values of Xms and Xmx to increase the memory limit of Optimibi Server.</p><p>-Xms sets the initial heap size of Java Virtual Machine. The minimum value is 64 MB. You can set it to 20% of the available memory of Optimibi Server.</p><p>-Xmx sets the maximum heap size of Java Virtual Machine. The maximum value is 2048 MB. You can set it to 80% of the available memory.</p><p>For example:</p><p><code>set CATALINA_OPTS=-Xms1024m -Xmx2048m</code></p><p>The above example sets Xms to 1024 MB and Xmx to 2048 MB.</p></li><li><p>Save and close the startup script file.</p></li><li><p>Restart Optimibi Server.</p></li></ol><p>You have successfully increased the memory limit of Optimibi Server.</p><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>This article explains how to increase the memory limit of JVM by editing the startup script file of Optimibi Server. By adjusting the memory limit of JVM, you can improve the performance of Optimibi Server. However, please note that changing the memory usage of JVM may affect the stability of Optimibi Server. So, be careful while making changes.</p>',11)]))}const p=i(o,[["render",s],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/documentation/Tools/Increasing-Memory-Limit/","title":"Increasing Memory Limit for Optimibi Server","lang":"en-US","frontmatter":{"title":"Increasing Memory Limit for Optimibi Server","permalink":"/documentation/Tools/Increasing-Memory-Limit/","tags":null,"createTime":"2025/02/25 14:57:09"},"headers":[],"readingTime":{"minutes":1.51,"words":454},"git":{},"filePathRelative":"documentation/Best/20 增加Datafor Server内存限制.md"}');export{p as comp,l as data};
