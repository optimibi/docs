import{_ as e,c as r,a,o as i}from"./app-DBcFpGD8.js";const s="/assets/1739455422492-1739458420538-9-DVxT3MnS.png",o="/assets/1739455525723-1739458420539-10-DISK7WfU.png",n="/assets/1739455591679-1739458420539-11-CEDZaUj6.png",h="/assets/1739455975907-1739458420539-12-QFTtkbPg.png",l="/assets/1739456612163-1739458420539-13-C9eNd2Li.png",d="/assets/86q1o-auikn-1739458420539-14-DcXuNqf0.gif",c="/assets/1739456841043-1739458420539-15-smr6R8EM.png",g="/assets/ul6f4-hkas5-1739458420541-16-Dvh36bvu.gif",p="/assets/image-20250213224747058-CmTLzhR9.png",y="/assets/1739458268042-zcUj5bZv.png",u={};function m(_,t){return i(),r("div",null,t[0]||(t[0]=[a('<h2 id="_1-what-is-a-hierarchy" tabindex="-1"><a class="header-anchor" href="#_1-what-is-a-hierarchy"><span><strong>1. What is a Hierarchy?</strong></span></a></h2><p>A hierarchy is a structure used to represent the layered relationship of data, typically applied in time, geography, organizational structure, etc. Here are some examples:</p><ul><li><strong>Time Hierarchy</strong>: Year → Quarter → Month → Day</li><li><strong>Geography Hierarchy</strong>: Country → State → City</li><li><strong>Product Hierarchy</strong>: Category → Subcategory → Product Name</li></ul><p>After creating a hierarchy, users can analyze data step by step based on the hierarchy in reports, making it easier to aggregate and drill down into the data.</p><hr><h2 id="_2-how-to-create-a-hierarchy" tabindex="-1"><a class="header-anchor" href="#_2-how-to-create-a-hierarchy"><span><strong>2. How to Create a Hierarchy?</strong></span></a></h2><h3 id="_2-1-access-the-model-editor" tabindex="-1"><a class="header-anchor" href="#_2-1-access-the-model-editor"><span><strong>2.1 Access the Model Editor</strong></span></a></h3><ol><li><p><strong>Select a model</strong> and enter the <strong>Model Editor</strong>.</p><p><img src="'+s+'" alt="1739455422492"></p></li></ol><h3 id="_2-2-create-hierarchy" tabindex="-1"><a class="header-anchor" href="#_2-2-create-hierarchy"><span><strong>2.2 Create Hierarchy</strong></span></a></h3><ol><li><p>In the model area, select the field to create a hierarchy, such as <strong>product_family</strong>.</p><div align="left"><img src="'+o+'" width="28%"></div></li><li><p><strong>Right-click the field</strong> or <strong>use the menu</strong> to select &quot;<strong>Create Hierarchy</strong>&quot;.</p><div align="left"><img src="'+n+'" width="28%"></div></li><li><p>Below the field, a hierarchy <strong>product_family_hierarchy</strong> is generated, which contains the selected field <strong>product_family</strong>.</p><div align="left"><img src="'+h+'" width="28%"></div></li><li><p>Add other fields to the hierarchy.</p><ul><li>Right-click the <strong>product_department</strong> field or use the field menu, select <strong>Add to Hierarchy</strong> → <strong>product_family_hierarchy</strong> to add the field to the hierarchy.</li></ul><div align="left"><img src="'+l+'" width="48%"></div><ul><li>Drag and drop the field into the hierarchy.</li></ul><div align="left"><img src="'+d+'" width="28%"></div></li><li><p>Add <strong>product_category</strong> and <strong>product_subcategory</strong> to the hierarchy structure sequentially.</p><div align="left"><img src="'+c+'" width="28%"></div></li><li><p>Save the model to complete the hierarchy creation.</p></li></ol><hr><h3 id="_2-3-adjust-the-hierarchy-relationship" tabindex="-1"><a class="header-anchor" href="#_2-3-adjust-the-hierarchy-relationship"><span><strong>2.3 Adjust the Hierarchy Relationship</strong></span></a></h3><p>In the <strong>Hierarchy Management Interface</strong>, drag and drop fields to adjust their order according to the logical structure.</p><div align="left"><img src="'+g+'" width="28%"></div> ### **2.4 Delete a Hierarchy** - **Right-click the hierarchy** and select &quot;Delete Hierarchy&quot; to remove the hierarchy, without deleting the original fields. <div align="left"><img src="'+p+'" width="28%"></div> ## 3. Using Hierarchies in Visualization <h3 id="_3-1-add-hierarchy-to-a-visualization-component" tabindex="-1"><a class="header-anchor" href="#_3-1-add-hierarchy-to-a-visualization-component"><span><strong>3.1 Add Hierarchy to a Visualization Component</strong></span></a></h3><ol><li><p>In the <strong>Analysis Report Editor</strong>, select a visualization component that supports hierarchies (e.g., bar chart, line chart).</p></li><li><p>Drag the created hierarchy into the <strong>X-axis or Y-axis</strong>.</p></li><li><p>The <strong>Enable Drill Down</strong> button will appear in the chart toolbar. Once enabled, you can <strong>drill down by hierarchy</strong> to view more detailed data.</p><div align="left"><img src="'+y+'" width="67%"></div></li></ol><hr><h2 id="_5-hierarchy-use-cases" tabindex="-1"><a class="header-anchor" href="#_5-hierarchy-use-cases"><span><strong>5. Hierarchy Use Cases</strong></span></a></h2><table><thead><tr><th><strong>Scenario</strong></th><th><strong>Example Hierarchy</strong></th></tr></thead><tbody><tr><td><strong>Time Analysis</strong></td><td>Year → Quarter → Month → Day</td></tr><tr><td><strong>Geography Analysis</strong></td><td>Country → State → City</td></tr><tr><td><strong>Product Classification</strong></td><td>Category → Subcategory → Product</td></tr><tr><td><strong>Sales Channel Analysis</strong></td><td>Region → State → Salesperson</td></tr></tbody></table><hr><p><strong>📌 Related Content</strong></p><ul><li><a href="">How to Manage Data Models</a></li><li><a href="">How to Create Calculated Fields</a></li><li><a href="">How to Set Data Filters</a></li><li><a href="">How to Establish Table Relationships</a></li></ul>',25)]))}const v=e(u,[["render",m],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/documentation/Model/Creating-Hierarchy/","title":"Creating Hierarchy","lang":"en-US","frontmatter":{"title":"Creating Hierarchy","permalink":"/documentation/Model/Creating-Hierarchy/","tags":null,"description":null,"createTime":"2025/02/25 14:57:09"},"headers":[],"readingTime":{"minutes":1.64,"words":493},"git":{},"filePathRelative":"documentation/Model/30 创建层级.md"}');export{v as comp,b as data};
