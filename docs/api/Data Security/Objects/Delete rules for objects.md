---
title: Delete rules for objects
permalink: /api/Data Security/Objs/Delete rules for objects/
tags: ["api","Data Security"]
description: 
---

## POST Delete rules for objects

POST /plugin/datafor-modeler/api/auth/obj/deleteBatch

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
[
  {
    "id": "b096f367be994cf9bf9080c72120df3e",
    "dbconn": "Demo"
  }
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|array[object]| no |none|

> Response Examples

```json
{
  "code": "200",
  "data": [
    {
      "msg": "success",
      "dbconn": "foodmart",
      "success": true,
      "id": "b60195a71b1140359e3fbec61f3344cd"
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
|» code|string|true|none||none|
|» data|[object]|true|none||none|
|»» msg|string|false|none||none|
|»» dbconn|string|false|none||none|
|»» success|boolean|true|none||none|
|»» id|string|true|none||none|
|» success|boolean|true|none||none|