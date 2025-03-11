import{_ as t,c as a,a as r,o as i}from"./app-D-tW7aub.js";const o="/assets/image-20250311165858896-NYCNzWeK.png",s="/assets/image-20250311170853709-hu8dcjlD.png",l="/assets/image-20250311171046336-Dsi9jYLS.png",n={};function p(d,e){return i(),a("div",null,e[0]||(e[0]=[r('<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h3><p>Optimibi enables users to dynamically modify the default filter values in reports and the data filtering values in chart components through URL parameters. This feature is particularly useful when embedding reports and dashboards into external systems. By leveraging external systems, users can control the default display content of the report and filter the data. Filters manage the default display, while chart component filters control the data being presented in the report.</p><h3 id="create-parameters" tabindex="-1"><a class="header-anchor" href="#create-parameters"><span>Create Parameters</span></a></h3><p>Reference document: <a href="https://help.optimibi.com/documentation/Analysis/Parameters/" target="_blank" rel="noopener noreferrer">Parameters</a></p><h3 id="default-filter-values" tabindex="-1"><a class="header-anchor" href="#default-filter-values"><span>Default Filter Values</span></a></h3><p>The default filter values can be set to one of the following three types:</p><ol><li><strong>Fixed Value</strong>: A static value defined by the report creator.</li><li><strong>Relative Value</strong>: A dynamically adjusted value based on certain criteria, such as the &quot;first&quot; or &quot;last&quot; item in a list.</li><li><strong>Parameter Value</strong>: A dynamic value passed via the URL or parameter filters. When the report is opened, the default value is updated based on the passed parameter.</li></ol><h4 id="using-parameter-values-for-default-filter-settings" tabindex="-1"><a class="header-anchor" href="#using-parameter-values-for-default-filter-settings"><span>Using Parameter Values for Default Filter Settings</span></a></h4><p>When the default value of a filter is set to <strong>Parameter Value</strong>, it can be modified via URL parameters. The steps are as follows:</p><ul><li><p><strong>Step 1</strong>: Set the default value of the filter to &quot;Parameter Value&quot; in the filter configuration.</p></li><li><p><strong>Step 2</strong>: Select a parameter for the filter.</p><div align="left"><img src="'+o+'" width="52%"></div></li><li><p><strong>Step 3</strong>: When opening the report, include the parameter in the URL, formatted as: <code>?parameter_name=value</code></p><p>For example, to set the default value of the region filter to &quot;North America&quot;, the URL would look like: <code>https://your-report-url.com?country_parameter=Mexico</code></p></li></ul><p>Additionally, you can use <strong>parameter filters</strong> to modify the parameter value and thus influence the default filter values.</p><h3 id="filter-types-for-chart-components" tabindex="-1"><a class="header-anchor" href="#filter-types-for-chart-components"><span>Filter Types for Chart Components</span></a></h3><p>In Optimibi, chart components allow users to filter data. The filter fields can be of different data types:</p><ul><li><strong>Text</strong></li><li><strong>Number</strong></li><li><strong>Date</strong></li></ul><h4 id="numeric-type-filters" tabindex="-1"><a class="header-anchor" href="#numeric-type-filters"><span>Numeric Type Filters</span></a></h4><p>For numeric fields, you can choose from the following comparison operators:</p><ul><li><p>Greater than</p></li><li><p>Less than</p></li><li><p>Greater than or equal to</p></li><li><p>Less than or equal to</p></li><li><p>Equal to</p><div align="left"><img src="'+s+'" width="75%"></div></li></ul><p>These comparison operators can be used with specific values or parameter values passed via the URL. For example, a filter might use the following URL to filter the data: <code>https://your-report-url.com?price&gt;={price_parameter}</code> This will filter records where the price is greater than or equal to the value passed in the <code>price_parameter</code>.</p><h4 id="date-type-filters" tabindex="-1"><a class="header-anchor" href="#date-type-filters"><span>Date Type Filters</span></a></h4><p>For date fields, you can choose from the following comparison operators:</p><ul><li><p>Before</p></li><li><p>Before or equal to</p></li><li><p>Equal to</p></li><li><p>After</p></li><li><p>After or equal to</p><div align="left"><img src="'+l+'" width="75%"></div></li></ul><p>These comparison operators can be used with specific dates or parameter values passed via the URL. For example, a filter might use the following URL to filter the data: <code>https://your-report-url.com?order_date&gt;=2023-01-01</code> This will filter records with an order date greater than or equal to January 1, 2023.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>The URL-passed date parameters support the following formats:</p><ul><li>yyyy</li><li>yyyy-MM</li><li>yyyy-MM-dd</li><li>yyyy-MM-dd HH</li><li>yyyy-MM-dd HH:mm</li><li>yyyy-MM-dd HH:mm:ss</li><li>yyyy-MM-dd HH:mm:ss.[S]{1-6} Additionally, the ISO 8601 date-time format is supported, such as <code>2025-02-21T06:24:48-05:00</code>, which represents the UTC-5 timezone (Eastern Standard Time, EST).</li></ul></div><h3 id="complete-example" tabindex="-1"><a class="header-anchor" href="#complete-example"><span>Complete Example</span></a></h3><p>Here is an example of a URL that includes parameters for default filter values and chart component filters: <code>https://your-report-url.com?country_parameter=Mexico&amp;price_parameter=1000&amp;order_date=2023-01-01</code></p><ul><li>The <code>Country</code> filter will have its <strong>default value</strong> set to &quot;North America&quot;.</li><li>The <code>Area chat</code> will display records where the price is <strong>less than</strong> 1000.</li><li>The <code>Area chat</code> will display records where the order date is <strong>before</strong> January 1, 2023.</li></ul>',26)]))}const c=t(n,[["render",p],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/documentation/Pass-parameters-through-URL/","title":"Pass parameters through URL","lang":"en-US","frontmatter":{"title":"Pass parameters through URL","permalink":"/documentation/Pass-parameters-through-URL/","createTime":"2025/03/11 09:26:45"},"headers":[],"readingTime":{"minutes":2.18,"words":654},"git":{},"filePathRelative":"documentation/Embedded/80 URL Parameter.md"}');export{c as comp,u as data};
