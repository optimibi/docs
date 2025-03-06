import{_ as t,c as i,a,o as s}from"./app-B0MdynzR.js";const l="/assets/1739515138397-CiLnOp0p.png",n="/assets/1739515290376-BG2vNEJk.png",d="/assets/1739515783364-DXYCosNu.png",o="/assets/1739515722197-BGtEffBd.png",h="/assets/1739515525810-CKOp25nT.png",r="/assets/1739515620221-CAPfVb6H.png",c={};function p(u,e){return s(),i("div",null,e[0]||(e[0]=[a('<p>A <strong>Calculated Field</strong> is a new field created in tables and views through custom SQL expressions. The SQL syntax for the calculated field must adhere to the database type specification of the data source used in the model.</p><h2 id="accessing-the-calculated-field-feature" tabindex="-1"><a class="header-anchor" href="#accessing-the-calculated-field-feature"><span>Accessing the Calculated Field Feature</span></a></h2><p>Select the &quot;New column&quot; menu from the table view&#39;s menu.</p><div align="left"><img src="'+l+'" width="60%"></div><h2 id="setting-up-a-calculated-field" tabindex="-1"><a class="header-anchor" href="#setting-up-a-calculated-field"><span>Setting Up a Calculated Field</span></a></h2><div align="left"><img src="'+n+'" width="55%"></div><ol><li><p><strong>Name the Field</strong>: In the pop-up window, enter the name for the new calculated field.</p></li><li><p><strong>Write the SQL Formula</strong>:</p><ul><li><p>Use SQL syntax that complies with the data source&#39;s database type.</p></li><li><p>Supports mathematical operations (+, -, *, /), string operations, conditional statements (CASE WHEN), etc.</p></li><li><p><strong>Table References</strong>: If the field names used in the calculation expression exist in other tables within the model, you must specify the table in the SQL expression to avoid ambiguity (e.g., <code>&quot;table&quot;.&quot;field&quot;</code>).</p></li><li><p>Example:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">CONCAT</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customers</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fname</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customers</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">lname</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>Select Data Type</strong>: Choose the appropriate data type based on the calculation result (e.g., numeric, text, date, etc.).</p></li><li><p><strong>Validate SQL Syntax</strong>: Use the &quot;<strong>Check and preview</strong>&quot; button to check the correctness of the SQL syntax.</p></li><li><p><strong>Save the Calculated Field</strong>: Once everything is correct, click the &quot;Save&quot; or &quot;Apply&quot; button.</p></li></ol><h2 id="using-the-calculated-field" tabindex="-1"><a class="header-anchor" href="#using-the-calculated-field"><span>Using the Calculated Field</span></a></h2><ul><li><p>The created calculated field will appear in the table view.</p><div align="left"><img src="'+d+'" width="28%"></div></li><li><p>The calculated field can be set as a dimension or measure field in the analytical model.</p><div align="left"><img src="'+o+'" width="35%"></div></li></ul><h2 id="editing-and-deleting-a-calculated-field" tabindex="-1"><a class="header-anchor" href="#editing-and-deleting-a-calculated-field"><span>Editing and Deleting a Calculated Field</span></a></h2><p>Click on the calculated field menu.</p><div align="left"><img src="'+h+'" width="28%"></div><p>Choose &quot;Edit Calculated Field&quot; or &quot;Delete Calculated Field.&quot;</p><div align="left"><img src="'+r+'" width="35%"></div><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>The SQL syntax for the calculated field must meet the requirements of the data source&#39;s database type.</li><li>If using aggregate functions (such as SUM, AVG), ensure the grouping level is correct.</li><li>The performance of calculated fields may be affected by the volume of data. It&#39;s recommended to optimize the SQL query for better performance.</li></ul>',16)]))}const k=t(c,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/documentation/Model/Calculated-Field/","title":"Calculated Field","lang":"en-US","frontmatter":{"title":"Calculated Field","permalink":"/documentation/Model/Calculated-Field/","tags":null,"description":null,"createTime":"2025/03/06 06:18:27"},"headers":[],"readingTime":{"minutes":1.28,"words":383},"git":{},"filePathRelative":"documentation/Model/40 计算字段.md"}');export{k as comp,m as data};
