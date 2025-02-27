---
title: Get grantedList for a rule
permalink: /api/Data Security/Rows/Get grantedList for a rule/
tags: ["api","Data Security"]
description: 
---

## POST Get grantedList for a rule

POST /plugin/datafor-modeler/api/auth/row/granted/query

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "group_id": "b096f367be994cf9bf9080c72120df3e",
  "dbconn": "Demo"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» group_id|body|string| yes |none|
|» dbconn|body|string| yes |none|

> Response Examples

```json
{
  "msg": "success",
  "code": "200",
  "data": [
    {
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "name": "admin",
      "type": "0"
    },
    {
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "name": "Administrator",
      "type": "1"
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
|» code|string|false|none||none|
|» data|[object]|true|none||none|
|»» group_id|string|true|none||none|
|»» name|string|true|none||none|
|»» type|string|true|none||none|
|» success|boolean|true|none||none|