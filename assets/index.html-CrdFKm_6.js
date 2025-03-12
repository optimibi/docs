import{_ as t,c as i,a,o as s}from"./app-itKebgTZ.js";const o="/assets/image-20250312203013290-1741785560252-1-DeRpSlNi.png",r="/assets/image-20250312202258533-1741782769889-2-1741785560252-2-zekCAjEb.png",n={};function l(d,e){return s(),i("div",null,e[0]||(e[0]=[a('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>Pie Chart</strong> is used to represent proportions of a whole, displaying data as slices of a circle. Each slice corresponds to a category and its relative contribution to the total. This type of visualization is ideal for understanding distribution and comparison at a glance.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To <strong>show proportions</strong> of a dataset where categories contribute to a whole.</li><li>To <strong>compare relative sizes</strong> of groups without focusing on trends over time.</li><li>To <strong>simplify categorical data</strong> into an easily interpretable format.</li></ul><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>A <strong>Pie Chart</strong> requires:</p><ul><li><strong>Legend</strong>: A categorical field that defines different slices (e.g., Product Family, Department, Category).</li><li><strong>Measures</strong>: A numerical field representing the values that define the size of each slice (e.g., Sales, Revenue, Units Sold).</li><li><strong>Filters (Optional)</strong>: Used to refine the data displayed by the chart (e.g., filtering by month, region, or product type).</li></ul><h3 id="example-data-structure" tabindex="-1"><a class="header-anchor" href="#example-data-structure"><span>Example Data Structure</span></a></h3><table><thead><tr><th>product_family</th><th>store_sales</th><th>store_cost</th></tr></thead><tbody><tr><td>Drink</td><td>4802.03</td><td>1925.31</td></tr><tr><td>Food</td><td>41484.40</td><td>16562.05</td></tr><tr><td>Non-Consumable</td><td>10679.21</td><td>4258.77</td></tr></tbody></table><h2 id="how-to-configure" tabindex="-1"><a class="header-anchor" href="#how-to-configure"><span>How to Configure</span></a></h2><h3 id="comparing-a-single-measure" tabindex="-1"><a class="header-anchor" href="#comparing-a-single-measure"><span>Comparing a Single Measure</span></a></h3><ol><li><p><strong>Select the Analysis Model</strong>: Choose the dataset containing the necessary fields.</p></li><li><p><strong>Set Legend</strong>: Select the categorical field to define the pie slices (e.g., <code>product_family</code>).</p></li><li><p><strong>Set Measures</strong>: Select a single numerical field representing values (e.g., <code>store_sales</code>).</p></li><li><p><strong>Optional Customization</strong>:</p><ul><li><strong>Color</strong>: Assign custom colors to categories.</li><li><strong>Tooltips</strong>: Show additional details when hovering over slices.</li><li><strong>Filters</strong>: Restrict data using filters to refine the visualization.</li></ul><div align="left"><img src="'+o+'" width="100%"></div></li></ol><h3 id="comparing-multiple-measures" tabindex="-1"><a class="header-anchor" href="#comparing-multiple-measures"><span>Comparing Multiple Measures</span></a></h3><p>A <strong>Pie Chart</strong> can also compare multiple measures without a categorical legend. Instead of segmenting by a category, the pie slices represent different measures directly.</p><ol><li><p><strong>Select the Analysis Model</strong>: Choose the dataset containing the necessary fields.</p></li><li><p><strong>Set Measures</strong>: Select multiple numerical fields to compare (e.g., <code>store_sales</code>, <code>store_cost</code>).</p></li><li><p><strong>Optional Customization</strong>:</p><ul><li><strong>Color</strong>: Assign distinct colors to differentiate measures.</li><li><strong>Tooltips</strong>: Display additional details when hovering over slices.</li><li><strong>Filters</strong>: Apply filters to refine the dataset.</li></ul><div align="left"><img src="'+r+'" width="100%"></div></li></ol>',15)]))}const g=t(n,[["render",l],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/documentation/Visualization/Pie-Chart/","title":"Pie Chart","lang":"en-US","frontmatter":{"title":"Pie Chart","permalink":"/documentation/Visualization/Pie-Chart/","createTime":"2025/03/12 13:34:30"},"headers":[],"readingTime":{"minutes":1.17,"words":350},"git":{},"filePathRelative":"documentation/Visualization/Chart/30 Pie Chart.md"}');export{g as comp,h as data};
