import{_ as t,c as i,b as a,o as e}from"./app-LzMWOs4c.js";const n={};function d(l,s){return e(),i("div",null,s[0]||(s[0]=[a(`<h2 id="post-save-white-label-config" tabindex="-1"><a class="header-anchor" href="#post-save-white-label-config"><span>POST Save white label config</span></a></h2><p>POST /plugin/datafor-whitelabel/api/update</p><p>Preconditions:</p><ol><li>install datafor-whitelabel plugin</li><li>The current user&#39;s user type must be Administrator</li></ol><blockquote><p>Body Parameters</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">login_title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Access and manage your instances from this account</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">login_copyright</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Copyright ©2025 company All rights reserved.</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">main_title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Datafor Visualization and Analysis</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">main_subtitle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Discover the value of data，help your business smarter</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">enable_help</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">enable_start</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">wl_logo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://E:\\E\\datafor\\product\\aws-server\\datafor-server-dev-9.3\\pentaho-solutions\\system\\datafor\\ui\\images\\wl_logo.png</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">wl_main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://E:\\E\\datafor\\product\\aws-server\\datafor-server-dev-9.3\\pentaho-solutions\\system\\datafor\\ui\\images\\wl_main.png</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">wl_favicon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://E:\\E\\datafor\\product\\aws-server\\datafor-server-dev-9.3\\pentaho-solutions\\system\\datafor\\ui\\images\\wl_favicon.ico</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">wl_main_small</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://E:\\E\\datafor\\product\\aws-server\\datafor-server-dev-9.3\\pentaho-solutions\\system\\datafor\\ui\\images\\wl_main_small.png</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>Params</span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>body</td><td>object</td><td>no</td><td>none</td></tr><tr><td>» login_title</td><td>body</td><td>string</td><td>no</td><td>none</td></tr><tr><td>» login_copyright</td><td>body</td><td>string</td><td>no</td><td>none</td></tr><tr><td>» main_title</td><td>body</td><td>string</td><td>no</td><td>none</td></tr><tr><td>» main_subtitle</td><td>body</td><td>string</td><td>no</td><td>none</td></tr><tr><td>» enable_help</td><td>body</td><td>string</td><td>no</td><td>0false1true</td></tr><tr><td>» enable_start</td><td>body</td><td>string</td><td>no</td><td>0false1true</td></tr><tr><td>» wl_logo</td><td>body</td><td>string(binary)</td><td>no</td><td>png</td></tr><tr><td>» wl_main</td><td>body</td><td>string(binary)</td><td>no</td><td>png</td></tr><tr><td>» wl_favicon</td><td>body</td><td>string(binary)</td><td>no</td><td>ico</td></tr><tr><td>» wl_main_small</td><td>body</td><td>string(binary)</td><td>no</td><td>png</td></tr></tbody></table><blockquote><p>Response Examples</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">msg</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="responses" tabindex="-1"><a class="header-anchor" href="#responses"><span>Responses</span></a></h3><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>none</td><td>Inline</td></tr></tbody></table><h3 id="responses-data-schema" tabindex="-1"><a class="header-anchor" href="#responses-data-schema"><span>Responses Data Schema</span></a></h3><p>HTTP Status Code <strong>200</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Restrictions</th><th>Title</th><th>description</th></tr></thead><tbody><tr><td>» msg</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» success</td><td>boolean</td><td>true</td><td>none</td><td></td><td>none</td></tr></tbody></table>`,15)]))}const r=t(n,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/api/Extension%20Plugins/White%20Label/Save%20white%20label%20config/","title":"Save white label config","lang":"en-US","frontmatter":{"title":"Save white label config","permalink":"/api/Extension Plugins/White Label/Save white label config/","tags":["api","Extension Plugins","White Label"],"description":null,"createTime":"2025/02/28 04:28:37"},"headers":[],"readingTime":{"minutes":0.91,"words":274},"git":{},"filePathRelative":"api/Extension Plugins/White Label/Save white label config.md"}');export{r as comp,p as data};
