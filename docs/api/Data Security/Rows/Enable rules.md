---
title: Enable rules
permalink: /api/Data Security/Rows/Enable rules/
tags: ["api","Data Security"]
description: 
---

## POST Enable rules

POST /plugin/datafor-modeler/api/auth/row/enableBatch

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
[
  {
    "id": "b096f367be994cf9bf9080c72120df3e",
    "dbconn": "Demo",
    "enable": "0"
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
      "msg": "",
      "dbconn": "Demo",
      "enable": "0",
      "success": true,
      "id": "a5ca4426d3774d92a320f8c10b0d7d2b"
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
|»» enable|string|false|none||none|
|»» success|boolean|false|none||none|
|»» id|string|false|none||none|
|» success|boolean|true|none||none|