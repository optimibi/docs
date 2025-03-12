import{_ as o,c as r,a as d,b as e,e as n,d as i,f as a,r as h,o as l}from"./app-DEBrgamE.js";const c={};function p(g,t){const s=h("RouteLink");return l(),r("div",null,[t[6]||(t[6]=d('<p><strong>Method</strong><br><code>PUT</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/connection/aclBatch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3)),e("p",null,[t[1]||(t[1]=e("strong",null,"Authorization",-1)),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=n(" Use of this API requires authentication. For details about the authentication method, see")),t[4]||(t[4]=e("br",null,null,-1)),i(s,{to:"/api/index/#_5-authentication-security"},{default:a(()=>t[0]||(t[0]=[n("Authorization")])),_:1}),t[5]||(t[5]=n("."))]),t[7]||(t[7]=d('<p><strong>Content Type</strong><br><code>application/json</code></p><p><strong>Preconditions</strong></p><ul><li>The current user must have <strong>administrative</strong> privileges for the specified connections.</li></ul><hr><h3 id="request-schema" tabindex="-1"><a class="header-anchor" href="#request-schema"><span><strong>Request Schema</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><strong>body</strong></td><td>body</td><td>object</td><td>No</td><td>Overall JSON payload</td></tr><tr><td>└── <strong>foodmart</strong></td><td>body</td><td>object</td><td>Yes</td><td>Object key is the connection name (e.g., <code>&quot;foodmart&quot;</code>)</td></tr><tr><td>  ├── <strong>aces</strong></td><td>body</td><td>[object]</td><td>Yes</td><td>Array of ACE (Access Control Entry) objects</td></tr><tr><td>  │ ├── <strong>recipient</strong></td><td>body</td><td>string</td><td>No</td><td>Recipient of the ACE (e.g., username, role)</td></tr><tr><td>  │ ├── <strong>modifiable</strong></td><td>body</td><td>boolean</td><td>No</td><td>Whether this ACE can be changed by the recipient</td></tr><tr><td>  │ ├── <strong>recipientType</strong></td><td>body</td><td>integer</td><td>No</td><td>1 = user, 2 = group, etc. (implementation-defined)</td></tr><tr><td>  │ └── <strong>permissions</strong></td><td>body</td><td>[integer]</td><td>No</td><td>Array of permission codes (e.g., <code>[4]</code> = Admin)</td></tr><tr><td>  ├── <strong>entriesInheriting</strong></td><td>body</td><td>boolean</td><td>Yes</td><td>Whether entries are inheritable</td></tr><tr><td>  ├── <strong>owner</strong></td><td>body</td><td>string</td><td>Yes</td><td>Owner of this connection (e.g., <code>admin</code>)</td></tr><tr><td>  └── <strong>ownerType</strong></td><td>body</td><td>integer</td><td>Yes</td><td>0 = user owner, 1 = role owner, etc. (implementation-defined)</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">SampleData</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>none</td><td>Inline</td></tr></tbody></table><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>SampleData</code></td><td>string</td><td>Yes</td><td>Shows the result code for the specified connection</td></tr></tbody></table><p><strong>Return result code of each connection</strong><br> The key corresponds to the connection name, and the value is a result code:</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>${connectionName}</code></td><td>200</td><td>success</td></tr><tr><td><code>${connectionName}</code></td><td>401</td><td>no auth</td></tr><tr><td><code>${connectionName}</code></td><td>409</td><td>not found</td></tr><tr><td><code>${connectionName}</code></td><td>500</td><td>internal error</td></tr></tbody></table>',15))])}const m=o(c,[["render",p],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/api/Connections/Change%20acl%20for%20connections/","title":"Change acl for connections","lang":"en-US","frontmatter":{"title":"Change acl for connections","permalink":"/api/Connections/Change acl for connections/","tags":["api","Connections"],"description":null,"createTime":"2025/03/12 03:30:56"},"headers":[],"readingTime":{"minutes":0.91,"words":272},"git":{},"filePathRelative":"api/Connections/Change acl for connections.md"}');export{m as comp,b as data};
