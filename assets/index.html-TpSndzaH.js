import{_ as n,c as d,a as i,b as e,d as s,e as r,f as o,r as l,o as h}from"./app-B6Q4mIDj.js";const p={};function k(c,t){const a=l("RouteLink");return h(),d("div",null,[t[6]||(t[6]=i('<p><strong>Method</strong><br><code>POST</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/token/generate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3)),e("p",null,[t[1]||(t[1]=e("strong",null,"Authorization",-1)),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=s(" Use of this API requires authentication. For details about the authentication method, see")),t[4]||(t[4]=e("br",null,null,-1)),r(a,{to:"/api/index/#_5-authentication-security"},{default:o(()=>t[0]||(t[0]=[s("Authorization")])),_:1}),t[5]||(t[5]=s("."))]),t[7]||(t[7]=i(`<p><strong>Content Type</strong><br><code>application/x-www-form-urlencoded</code></p><hr><p><strong>Preconditions</strong></p><ul><li>The current user&#39;s user type <strong>must</strong> be <code>Administrator</code>.</li></ul><hr><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ERP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">privateKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> abcd</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>body</td><td>object</td><td>no</td><td>The main data object for generating the token.</td></tr><tr><td>├── name</td><td>body</td><td>string</td><td>no</td><td>Name of the token.</td></tr><tr><td>├── privateKey</td><td>body</td><td>string</td><td>no</td><td>Private key associated with the token.</td></tr><tr><td>├── username</td><td>body</td><td>string</td><td>no</td><td>Username for token generation.</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">expire</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 86400</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">token</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFUlAiOiJhZG1pbiIsImV4cCI6MTcyMzAxNTkxNn0.uEmUwBfNAd5FtzjPPrldU9bierng7fd8rCVlZtVPY2k</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>The request was successful.</td><td>Inline</td></tr></tbody></table><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Restrictions</th><th>Description</th></tr></thead><tbody><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td>none</td><td>Indicates if the token generation was successful (<code>true</code> or <code>false</code>).</td></tr><tr><td><code>expire</code></td><td>integer</td><td><strong>Yes</strong></td><td>none</td><td>The token&#39;s expiration time in seconds.</td></tr><tr><td><code>token</code></td><td>string</td><td><strong>Yes</strong></td><td>none</td><td>The generated token string.</td></tr></tbody></table>`,16))])}const g=n(p,[["render",k],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/api/Token/Generate%20a%20token/","title":"Generate a token","lang":"en-US","frontmatter":{"title":"Generate a token","permalink":"/api/Token/Generate a token/","tags":["api","Authentication","Token"],"description":null,"createTime":"2025/03/07 11:09:47"},"headers":[],"readingTime":{"minutes":0.62,"words":187},"git":{},"filePathRelative":"api/Token/Generate a token.md"}');export{g as comp,m as data};
