import{_ as r,c as a,a as n,b as e,f as s,d,e as i,r as p,o as l}from"./app-Kw2yx6EA.js";const u={};function h(c,t){const o=p("RouteLink");return l(),a("div",null,[t[6]||(t[6]=n('<p><strong>Method</strong><br><code>GET</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-backup/api/log/download</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3)),e("p",null,[t[1]||(t[1]=e("strong",null,"Authorization",-1)),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=s(" Use of this API requires authentication. For details about the authentication method, see")),t[4]||(t[4]=e("br",null,null,-1)),d(o,{to:"/api/index/#_5-authentication-security"},{default:i(()=>t[0]||(t[0]=[s("Authorization")])),_:1}),t[5]||(t[5]=s("."))]),t[7]||(t[7]=n('<p><strong>Content Type</strong><br><code>application/json</code></p><hr><p><strong>Preconditions</strong></p><ul><li>The current user&#39;s user type <strong>must be</strong> <code>Administrator</code>.</li></ul><hr><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span><strong>Params</strong></span></a></h2><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>query</td><td>string</td><td>Yes</td><td>The unique backup identifier (e.g., <code>Backup_2023.10.27-10.59.45.850+0800</code>).</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h3 id="✅-success-response-200-ok" tabindex="-1"><a class="header-anchor" href="#✅-success-response-200-ok"><span>✅ Success Response (200 OK)</span></a></h3><p>The response will contain a downloadable <strong>ZIP file</strong>.</p><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>Backup file download successful.</td></tr><tr><td>400</td><td>Bad Request</td><td>Invalid request parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>Authentication required.</td></tr><tr><td>403</td><td>Forbidden</td><td>User does not have permission.</td></tr><tr><td>404</td><td>Not Found</td><td>The specified backup file does not exist.</td></tr><tr><td>500</td><td>Internal Server Error</td><td>Unexpected server error.</td></tr></tbody></table>',14))])}const m=r(u,[["render",h],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/api/Extension%20Plugins/Backup/Download%20backup%20zip/","title":"Download backup zip","lang":"en-US","frontmatter":{"title":"Download backup zip","permalink":"/api/Extension Plugins/Backup/Download backup zip/","tags":["api","Extension Plugins","Backup"],"description":null,"createTime":"2025/03/11 09:37:02"},"headers":[],"readingTime":{"minutes":0.49,"words":147},"git":{},"filePathRelative":"api/Extension Plugins/Backup/Download backup zip.md"}');export{m as comp,b as data};
