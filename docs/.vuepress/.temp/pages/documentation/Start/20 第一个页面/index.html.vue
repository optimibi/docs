<template><div><p>You can create your first data analysis page in just three steps.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110170823049.png" width="67%" /></div>
<h2 id="_1-connect-the-data-source" tabindex="-1"><a class="header-anchor" href="#_1-connect-the-data-source"><span>1.  Connect the data source</span></a></h2>
<p>Connecting to a data source refers to establishing a connection between DATAFOR and your database (for example: PostgresSQL, Mysql, Oracle, SQL Server, etc.), so that DATAFOR can use and query the data in your database. This chapter takes the PostgresSQL database as an example. We assume that you already have a PostgresSQL database, and the data to be analyzed and displayed already exists in the database.</p>
<p>Select the &quot;Datasource&quot; menu in the menu navigation, and select the &quot;PostgresSQL&quot; data source in the data source on the right.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110171726026.png"  /></div>
<p>Fill in the relevant information about the database connection, and save the connection after the connectivity test passes.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110171807169.png"  /></div>
<h2 id="_2-create-an-analysis-model" tabindex="-1"><a class="header-anchor" href="#_2-create-an-analysis-model"><span>2. Create an analysis model</span></a></h2>
<p>Select &quot;Models&quot; from the navigation menu and click &quot;New Model&quot;</p>
<div align="left"><img src="@source/documentation/Start/image-20230110171844979.png"  /></div>
<p>Select &quot;Connection or Dataset&quot;, specify Dimension Table and Fact Table</p>
<div align="left"><img src="@source/documentation/Start/image-20230110171957138.png"  /></div>
<p>Drag the table fields to establish the relationship between the tables, or click the connection line and select &quot;Edit&quot; in the pop-up menu to modify the table relationship.
Select dimensions and fields on the Analytical Model panel to modify related properties.
Save the model when finished.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110172118319.png"  /></div>
<h2 id="_3-create-data-analysis-report" tabindex="-1"><a class="header-anchor" href="#_3-create-data-analysis-report"><span>3. Create data analysis report</span></a></h2>
<p>In the &quot;Private&quot; or &quot;Public&quot; folder, click the &quot;New Analysis Report&quot; button.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110192903403.png"  /></div>
<h3 id="drag-and-drop-components" tabindex="-1"><a class="header-anchor" href="#drag-and-drop-components"><span>Drag and drop components</span></a></h3>
<p>Click the component icon in the &quot;Components&quot;, and drag the component on the canvas.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110192706824.png"  /></div>
<div align="left"><img src="@source/documentation/Start/image-20230110193014155.png"  /></div>
<h3 id="set-data" tabindex="-1"><a class="header-anchor" href="#set-data"><span>Set data</span></a></h3>
<p>Select the analysis model in the &quot;Analysis Model&quot; box of the data panel, and set the relevant data properties of the component. Components will query data and render graphics.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110193059983.png"  /></div>
<h3 id="adjust-style" tabindex="-1"><a class="header-anchor" href="#adjust-style"><span>Adjust style</span></a></h3>
<p>Drag and drop different components in the canvas, and set corresponding properties such as data and styles. We have completed the design of the first analysis report.</p>
<div align="left"><img src="@source/documentation/Start/image-20230110193204722.png"  /></div>
<p>Click the &quot;Preview&quot; button to view your first analysis report.</p>
</div></template>


