---
title: Get olap config
permalink: /api/System Settings/Get olap config/
tags: ["api","System Settings"]
description: 
---

## GET Get olap config

GET /plugin/datafor/api/modeler/olap/config/meta

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|editable|query|string| no |none|

> Response Examples

```json
{
  "msg": "success",
  "data": [
    {
      "code": "mondrian.rolap.EnableSumBottom",
      "defaults": "true",
      "editable": true,
      "name": "EnableSumBottom",
      "zhdesc": "合计位于底部",
      "range": "true,false",
      "type": "Boolean",
      "value": "true",
      "desc": "controls which decide sum line on bottom or top."
    },
    {
      "code": "mondrian.olap.NullMemberCaption",
      "defaults": "",
      "editable": true,
      "name": "NullMemberCaption",
      "zhdesc": "Null成员标题",
      "range": "",
      "type": "String",
      "value": "",
      "desc": "how a null member value is represented in the result output"
    },
    {
      "code": "mondrian.olap.InfinityRepresentation",
      "defaults": "Infinity",
      "editable": true,
      "name": "InfinityRepresentation",
      "zhdesc": "Infinity名称",
      "range": "",
      "type": "String",
      "value": "Infinity",
      "desc": "how Infinity value is represented in the result output"
    },
    {
      "code": "mondrian.result.limit",
      "defaults": "0",
      "editable": true,
      "name": "ResultLimit",
      "zhdesc": "查询结果行及层级成员的最大数量",
      "range": "",
      "type": "Integer",
      "value": "500000",
      "desc": "if set to a value greater than zero, limits the maximum size of a result set"
    },
    {
      "code": "mondrian.rolap.queryTimeout",
      "defaults": "0",
      "editable": true,
      "name": "QueryTimeout",
      "zhdesc": "查询超时时间(秒)",
      "range": "",
      "type": "Integer",
      "value": "300",
      "desc": "the timeout value (in seconds) for queries"
    },
    {
      "code": "mondrian.query.limit",
      "defaults": "40",
      "editable": true,
      "name": "QueryLimit",
      "zhdesc": "最大并发查询数",
      "range": "",
      "type": "Integer",
      "value": "200",
      "desc": "Maximum number of simultaneous queries the system will allow."
    },
    {
      "code": "mondrian.xmla.drillthroughMaxRows",
      "defaults": "1000",
      "editable": true,
      "name": "MaxRows",
      "range": "sql最大数据行数",
      "type": "Integer",
      "value": "1000",
      "desc": "limit on the number of rows from sql"
    }
  ],
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg|string|false|none||none|
|» data|[object]|true|none||none|
|»» code|string|true|none||none|
|»» defaults|string|true|none||none|
|»» editable|boolean|true|none||none|
|»» name|string|true|none||none|
|»» zhdesc|string|false|none||none|
|»» range|string|false|none||none|
|»» type|string|true|none||none|
|»» value|string|true|none||none|
|»» desc|string|true|none||none|
|» success|boolean|true|none||none|