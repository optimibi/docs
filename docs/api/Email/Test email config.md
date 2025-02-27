---
title: Test email config
permalink: /api/Email/Test email config/
tags: ["api","Email"]
description: 
---

## POST Get value range

POST /plugin/datafor-modeler/api/dict/data

> Body Parameters

```yaml
id: dev
name: ""

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» id|body|string| no |none|
|» name|body|string| no |none|

> Response Examples

```json
{
  "msg": "",
  "data": [
    {
      "warehouse_class_id": 1,
      "description": "Small Independent"
    },
    {
      "warehouse_class_id": 2,
      "description": "Medium Independent"
    },
    {
      "warehouse_class_id": 3,
      "description": "Large Independent"
    },
    {
      "warehouse_class_id": 4,
      "description": "Small Owned"
    },
    {
      "warehouse_class_id": 5,
      "description": "Medium Owned"
    },
    {
      "warehouse_class_id": 6,
      "description": "Large Owned"
    }
  ],
  "success": true,
  "config": {
    "dbconn": "foodmart",
    "default": "1",
    "update_time": "2024-08-06 10:20:17.532",
    "expire": "86400",
    "name": "dev",
    "id": "dev",
    "detail": "select warehouse_class_id,description from foodmart.warehouse_class",
    "type": "2",
    "update_by": "admin",
    "add_time": "2024-08-06 10:16:32.634"
  }
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
|» msg|string|true|none||none|
|» data|[string]|true|none||none|
|» success|boolean|true|none||none|
|» config|object|true|none||none|
|»» default|string|true|none||none|
|»» update_time|string|true|none||none|
|»» datatype|string|true|none||none|
|»» name|string|true|none||none|
|»» id|string|true|none||none|
|»» detail|string|true|none||none|
|»» source|string|true|none||none|
|»» type|string|true|none||none|
|»» update_by|string|true|none||none|
|»» add_time|string|true|none||none|
|»» desc|string|true|none||none|