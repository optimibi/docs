import{_ as h,c as l,a as t,b as i,f as a,d as k,e,r as p,o as d}from"./app-Ccz0uYPT.js";const r={};function o(g,s){const n=p("RouteLink");return d(),l("div",null,[s[6]||(s[6]=t('<p><strong>Method</strong><br><code>POST</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/auth/row/verify</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3)),i("p",null,[s[1]||(s[1]=i("strong",null,"Authorization",-1)),s[2]||(s[2]=i("br",null,null,-1)),s[3]||(s[3]=a(" Use of this API requires authentication. For details about the authentication method, see")),s[4]||(s[4]=i("br",null,null,-1)),k(n,{to:"/api/index/#_5-authentication-security"},{default:e(()=>s[0]||(s[0]=[a("Authorization")])),_:1}),s[5]||(s[5]=a("."))]),s[7]||(s[7]=t(`<p><strong>Content Type</strong><br><code>application/json</code></p><p><strong>Preconditions</strong></p><ul><li>The current user’s type <strong>cannot</strong> be <code>SYS_Reader</code>.</li><li>The current user must have <strong>administrative privileges</strong> for the connection.</li></ul><hr><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span><strong>Parameters</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><strong>body</strong></td><td>body</td><td>object</td><td>Yes</td><td>Request payload</td></tr><tr><td>├── <code>dbconn</code></td><td>body</td><td>string</td><td>Yes</td><td>Database connection name</td></tr><tr><td>├── <code>configList</code></td><td>body</td><td>array</td><td>Yes</td><td>List of rule configurations</td></tr><tr><td>│ ├── <code>schema</code></td><td>body</td><td>string</td><td>Yes</td><td>Schema name</td></tr><tr><td>│ ├── <code>tbname</code></td><td>body</td><td>string</td><td>Yes</td><td>Table name</td></tr><tr><td>│ ├── <code>rows</code></td><td>body</td><td>string</td><td>No</td><td>JSON formatted rule condition</td></tr><tr><td>│ ├── <code>sql</code></td><td>body</td><td>string</td><td>Yes</td><td>SQL condition</td></tr></tbody></table><hr><h2 id="request-example" tabindex="-1"><a class="header-anchor" href="#request-example"><span><strong>Request Example</strong></span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dbconn</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">configList</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">schema</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">public</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tbname</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_dim</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">field</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">operator</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">value</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:2005}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sql</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=2005</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h3 id="error-response-example" tabindex="-1"><a class="header-anchor" href="#error-response-example"><span><strong>Error Response Example</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dbconn</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">configList</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">schema</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">public</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">msg</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">org.postgresql.util.PSQLException: Unterminated identifier started at position 40 in SQL select * from </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">public</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_dim</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> where </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR=2005. Expected </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> char</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tbname</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_dim</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">field</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">operator</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">value</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:2005}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sql</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR=2005</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="success-response-example" tabindex="-1"><a class="header-anchor" href="#success-response-example"><span><strong>Success Response Example</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dbconn</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">configList</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">schema</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">public</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tbname</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">time_dim</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">data</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">MONTH_KEY</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200501</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">YEAR</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2005</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">QUARTER_KEY</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20051</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">DAY_KEY</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20050101</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">DAY_DATE</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2005-01-01 00:00:00.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">meta</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">typeDesc</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Integer</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">comments</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DAY_KEY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalColumnType</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalNullable</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalColumnTypeName</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">int4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalPrecision</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalSigned</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DAY_KEY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originalScale</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">storageType</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">          &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">originName</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DAY_KEY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      ],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">rows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">field</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">operator</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">value</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:2005}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sql</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">YEAR</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=2005</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>none</td><td>Inline</td></tr></tbody></table><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>dbconn</code></td><td>string</td><td>Yes</td><td>Database connection name</td></tr><tr><td><code>configList</code></td><td>array</td><td>Yes</td><td>List of rule verification results</td></tr><tr><td>├── <code>schema</code></td><td>string</td><td>No</td><td>Schema name</td></tr><tr><td>├── <code>msg</code></td><td>string</td><td>No</td><td>Error message (if any)</td></tr><tr><td>├── <code>tbname</code></td><td>string</td><td>No</td><td>Table name</td></tr><tr><td>├── <code>success</code></td><td>boolean</td><td>No</td><td>Whether the verification was successful</td></tr><tr><td>├── <code>rows</code></td><td>string</td><td>No</td><td>JSON formatted rule condition</td></tr><tr><td>├── <code>sql</code></td><td>string</td><td>No</td><td>SQL condition</td></tr><tr><td>├── <code>data</code></td><td>array</td><td>No</td><td>Retrieved data if verification passes</td></tr><tr><td>├── <code>meta</code></td><td>array</td><td>No</td><td>Column metadata for retrieved data</td></tr></tbody></table>`,20))])}const u=h(r,[["render",o],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/api/Data%20Security/Rows/Verify%20a%20rule/","title":"Verify a rule","lang":"en-US","frontmatter":{"title":"Verify a rule","permalink":"/api/Data Security/Rows/Verify a rule/","tags":["api","Data Security"],"description":null,"createTime":"2025/03/07 02:22:14"},"headers":[],"readingTime":{"minutes":1.15,"words":344},"git":{},"filePathRelative":"api/Data Security/Rows/Verify a rule.md"}');export{u as comp,A as data};
