import{_ as n,c as d,a as t,b as a,d as e,e as r,f as l,r as o,o as h}from"./app-B6Q4mIDj.js";const p={};function c(u,s){const i=o("RouteLink");return h(),d("div",null,[s[4]||(s[4]=t('<h3 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span><strong>Method</strong></span></a></h3><p><code>POST</code></p><h3 id="request-url" tabindex="-1"><a class="header-anchor" href="#request-url"><span><strong>Request URL</strong></span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/datasource/analysis/deleteBatch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization"><span><strong>Authorization</strong></span></a></h3>',5)),a("p",null,[s[1]||(s[1]=e("Use of this API requires authentication. For details about the authentication method, see")),s[2]||(s[2]=a("br",null,null,-1)),r(i,{to:"/api/index/#_5-authentication-security"},{default:l(()=>s[0]||(s[0]=[e("Authorization")])),_:1}),s[3]||(s[3]=e("."))]),s[5]||(s[5]=t(`<h3 id="content-type" tabindex="-1"><a class="header-anchor" href="#content-type"><span><strong>Content Type</strong></span></a></h3><p><code>application/json</code></p><hr><h3 id="preconditions" tabindex="-1"><a class="header-anchor" href="#preconditions"><span><strong>Preconditions</strong></span></a></h3><ul><li>The current user <strong>must</strong> have administrative privileges for the models.</li></ul><hr><h3 id="request-example" tabindex="-1"><a class="header-anchor" href="#request-example"><span><strong>Request Example</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">  &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">  &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>body</code></td><td>body</td><td>array[string]</td><td>No</td><td>A list of model names to be deleted.</td></tr></tbody></table><hr><h3 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">msg</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h3><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data Schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>The request was successful.</td><td>Inline</td></tr></tbody></table><hr><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>msg</code></td><td>string</td><td>No</td><td>Response message.</td></tr><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td>Indicates whether the request was successful.</td></tr></tbody></table>`,18))])}const m=n(p,[["render",c],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/api/Models/Delete%20models/","title":"Delete models","lang":"en-US","frontmatter":{"title":"Delete models","permalink":"/api/Models/Delete models/","tags":["api","Models"],"description":null,"createTime":"2025/03/07 11:09:47"},"headers":[],"readingTime":{"minutes":0.43,"words":130},"git":{},"filePathRelative":"api/Models/Delete models.md"}');export{m as comp,g as data};
