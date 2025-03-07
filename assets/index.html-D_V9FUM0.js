import{_ as e,c as s,a as i,o as a}from"./app-B2wIfm0t.js";const d={};function r(n,t){return a(),s("div",null,t[0]||(t[0]=[i(`<p><strong>Method</strong><br><code>POST</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/repo/files/import</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> The current user must have write permissions in the target directory.</p><p><strong>Content Type</strong><br><code>multipart/form-data</code></p><hr><h2 id="body-parameters" tabindex="-1"><a class="header-anchor" href="#body-parameters"><span><strong>Body Parameters</strong></span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">importDir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">fileUpload</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file://D:\\temp\\schema-Demo.zip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">smart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>importDir</code></td><td>body</td><td>string</td><td>No</td><td>Default is <code>/public</code>. If empty, the file is uploaded to the root directory.</td></tr><tr><td><code>fileUpload</code></td><td>body</td><td>binary</td><td><strong>Yes</strong></td><td>The file to upload.</td></tr><tr><td><code>smart</code></td><td>body</td><td>boolean</td><td>No</td><td>Default is <code>true</code>. If <code>true</code>, new files or directories inherit the uploader&#39;s administrator ACL, but existing files retain their ACL.</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h4 id="✅-success-response" tabindex="-1"><a class="header-anchor" href="#✅-success-response"><span>✅ <strong>Success Response</strong></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>File uploaded successfully.</td></tr><tr><td>400</td><td>Bad Request</td><td>Invalid request format or missing parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>Authentication required.</td></tr><tr><td>403</td><td>Forbidden</td><td>User lacks permission to upload.</td></tr><tr><td>500</td><td>Internal Server Error</td><td>Unexpected error occurred.</td></tr></tbody></table><hr><h2 id="response-data-schema" tabindex="-1"><a class="header-anchor" href="#response-data-schema"><span><strong>Response Data Schema</strong></span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td><code>true</code> if the upload was successful, <code>false</code> otherwise.</td></tr></tbody></table>`,19)]))}const l=e(d,[["render",r],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/api/Files/Upload%20files/","title":"Upload files","lang":"en-US","frontmatter":{"title":"Upload files","permalink":"/api/Files/Upload files/","tags":["api","Files"],"description":null,"createTime":"2025/03/07 06:00:07"},"headers":[],"readingTime":{"minutes":0.59,"words":177},"git":{},"filePathRelative":"api/Files/Upload files.md"}');export{l as comp,h as data};
