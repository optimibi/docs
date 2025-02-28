---
title: Get configList for a rule
permalink: /api/Data Security/Rows/Get configList for a rule/
tags: ["api","Data Security"]
description: 
---

## POST Get configList for a rule

POST /plugin/datafor-modeler/api/auth/row/config/query

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
      "schema": "public",
      "dbconn": "Demo",
      "tbname": "time_dim",
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "id": "d3a7e82ddd6d4126bcd749a6f1876e30",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
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
|»» schema|string|false|none||none|
|»» dbconn|string|false|none||none|
|»» tbname|string|false|none||none|
|»» group_id|string|false|none||none|
|»» id|string|false|none||none|
|»» rows|string|false|none||none|
|»» sql|string|false|none||none|
|» success|boolean|true|none||none|