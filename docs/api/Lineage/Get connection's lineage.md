---
title: Get connection's lineage
permalink: /api/Lineage/Get connection's lineage/
tags: ["api","Lineage","Connections"]
description: 
---

## GET Get connection's lineage

GET /plugin/datafor-modeler/api/lineage/connection

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|connection|query|string| no |none|
|includeFiles|query|string| no |none|
|includeOthers|query|string| no |none|

> Response Examples

```json
{
  "data": [
    {
      "schemas": [
        {
          "owner": "admin",
          "ownerType": 0,
          "lastModifiedDate": 1721889439130,
          "dataSourceStr": "DataSource=\"foodmart\";EnableXmla=\"true\";Provider=\"mondrian\";",
          "name": "workshop-model",
          "files": [],
          "otherFiles": [],
          "title": "workshop-model",
          "dataSource": {
            "canRead": true,
            "name": "foodmart"
          }
        }
      ],
      "name": "foodmart"
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
|» success|boolean|true|none||none|
|» data|[object]|true|none||none|
|»» schemas|[object]|false|none||none|
|»»» owner|string|false|none||none|
|»»» ownerType|integer|false|none||none|
|»»» lastModifiedDate|integer|false|none||none|
|»»» dataSourceStr|string|false|none||none|
|»»» name|string|false|none||none|
|»»» files|[string]|false|none||none|
|»»» otherFiles|[string]|false|none||none|
|»»» title|string|false|none||none|
|»»» dataSource|object|false|none||none|
|»»»» canRead|boolean|true|none||none|
|»»»» name|string|true|none||none|
|»» name|string|false|none||none|
|» msg|string|false|none||none|