---
title: Get dictionaries
permalink: /api/Dictionaries/Get dictionaries/
tags: ["api","Dictionaries"]
description: 
---

## POST Get dictionaries

POST /plugin/datafor/api/modeler/dict/query

> Body Parameters

```yaml
{}

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

```json
{
  "msg": "",
  "data": [
    {
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
|» msg|string|true|none||none|
|» data|[object]|true|none||none|
|»» default|string|false|none||none|
|»» update_time|string|false|none||none|
|»» datatype|string|false|none||none|
|»» name|string|false|none||none|
|»» id|string|false|none||none|
|»» detail|string|false|none||none|
|»» source|string|false|none||none|
|»» type|string|false|none||none|
|»» update_by|string|false|none||none|
|»» add_time|string|false|none||none|
|»» desc|string|false|none||none|
|»» dbconn|string|false|none||none|
|»» expire|string|false|none||none|
|» success|boolean|true|none||none|