---
title: Get model's lineage
permalink: /api/Lineage/Get model's lineage/
tags: ["api","Lineage","Models"]
description: 
---

## GET Get model's lineage

GET /datafor/plugin/datafor-modeler/api/lineage/schema

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|includeOthers|query|string| no |none|
|schema|query|string| no |none|

> Response Examples

```json
{
  "data": [
    {
      "schema": "workshop-model",
      "files": [],
      "otherFiles": []
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
|» data|[object]|true|none||none|
|»» schema|string|false|none||none|
|»» files|[string]|false|none||none|
|»» otherFiles|[string]|false|none||none|
|» success|boolean|true|none||none|