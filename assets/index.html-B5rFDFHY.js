import{_ as s,c as e,b as a,o as i}from"./app-rkGa4bH5.js";const d={};function n(l,t){return i(),e("div",null,t[0]||(t[0]=[a(`<h2 id="post-upload-file" tabindex="-1"><a class="header-anchor" href="#post-upload-file"><span>POST Upload file</span></a></h2><p>POST /plugin/datafor-modeler/api/repo/files/import</p><p>when only use importDir and fileUpload and smart true,if it is a new file or dir, the acl is uploader&#39;s administrator acl.If already existed,don&#39;t change acl.</p><blockquote><p>Body Parameters</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">importDir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">fileUpload</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://E:\\E\\datafor\\001.datafor\\temp\\schema-Demo.zip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">smart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>Params</span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>body</td><td>object</td><td>no</td><td>none</td></tr><tr><td>» importDir</td><td>body</td><td>string</td><td>no</td><td>default is /public,upload models can be empty</td></tr><tr><td>» fileUpload</td><td>body</td><td>string(binary)</td><td>yes</td><td>none</td></tr><tr><td>» smart</td><td>body</td><td>boolean</td><td>no</td><td>default is true,if it is a new file or dir, the acl is uploader&#39;s administrator acl.If already existed,don&#39;t change acl.</td></tr></tbody></table><blockquote><p>Response Examples</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="responses" tabindex="-1"><a class="header-anchor" href="#responses"><span>Responses</span></a></h3><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>none</td><td>Inline</td></tr></tbody></table><h3 id="responses-data-schema" tabindex="-1"><a class="header-anchor" href="#responses-data-schema"><span>Responses Data Schema</span></a></h3><p>HTTP Status Code <strong>200</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Restrictions</th><th>Title</th><th>description</th></tr></thead><tbody><tr><td>» success</td><td>boolean</td><td>true</td><td>none</td><td></td><td>none</td></tr></tbody></table>`,14)]))}const o=s(d,[["render",n],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/api/Files/Upload%20files/","title":"Upload files","lang":"en-US","frontmatter":{"title":"Upload files","permalink":"/api/Files/Upload files/","tags":["api","Files"],"description":null,"createTime":"2025/02/20 02:19:23"},"headers":[],"readingTime":{"minutes":0.55,"words":164},"git":{},"filePathRelative":"api/Files/Upload files.md"}');export{o as comp,p as data};
