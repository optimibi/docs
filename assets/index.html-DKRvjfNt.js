import{_ as i,c as t,b as a,o as n}from"./app-LzMWOs4c.js";const e={};function d(h,s){return n(),t("div",null,s[0]||(s[0]=[a(`<h2 id="post-query-ldap-config" tabindex="-1"><a class="header-anchor" href="#post-query-ldap-config"><span>POST Query LDAP config</span></a></h2><p>POST /plugin/datafor-ldap/api/application/query</p><p>Preconditions:</p><ol><li>install datafor-ldap plugin</li><li>The current user&#39;s user type must be Administrator</li></ol><blockquote><p>Body Parameters</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>Params</span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Title</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>body</td><td>object</td><td>no</td><td></td><td>none</td></tr></tbody></table><blockquote><p>Response Examples</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">code</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">200</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">data</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">initroles</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">      &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">SYS_Reader</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">user_base</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cn=\${username},dc=imysh,dc=com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">administrator</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cn=admin,dc=imysh,dc=com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">inituser</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">initial</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">com.sun.jndi.ldap.LdapCtxFactory</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">enable</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">config</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">user</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:{</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ObjectClass</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">organizationalPerson</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">}}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">url</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ldap://127.0.0.1:389</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">authtype</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">simple</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">desc</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dev</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="responses" tabindex="-1"><a class="header-anchor" href="#responses"><span>Responses</span></a></h3><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>none</td><td>Inline</td></tr></tbody></table><h3 id="responses-data-schema" tabindex="-1"><a class="header-anchor" href="#responses-data-schema"><span>Responses Data Schema</span></a></h3><p>HTTP Status Code <strong>200</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Restrictions</th><th>Title</th><th>description</th></tr></thead><tbody><tr><td>» code</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» data</td><td>object</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» initroles</td><td>[string]</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» user_base</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» inituser</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» initial</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» enable</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» config</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» url</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» authtype</td><td>string</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>»» administrator</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» desc</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» success</td><td>boolean</td><td>true</td><td>none</td><td></td><td>none</td></tr><tr><td>» msg</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table>`,15)]))}const k=i(e,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/api/Extension%20Plugins/LDAP/Query%20LDAP%20config/","title":"Query LDAP config","lang":"en-US","frontmatter":{"title":"Query LDAP config","permalink":"/api/Extension Plugins/LDAP/Query LDAP config/","tags":["api","Extension Plugins","Authentication","LDAP"],"description":null,"createTime":"2025/02/28 04:28:37"},"headers":[],"readingTime":{"minutes":0.67,"words":201},"git":{},"filePathRelative":"api/Extension Plugins/LDAP/Query LDAP config.md"}');export{k as comp,p as data};
