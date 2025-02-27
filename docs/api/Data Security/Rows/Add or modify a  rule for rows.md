---
title: Add or modify a  rule for rows
permalink: /api/Data Security/Rows/Add or modify a  rule for rows/
tags: ["api","Data Security"]
description: 
---

## POST Add or modify a  rule for rows

POST /plugin/datafor-modeler/api/auth/row/update

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "dbconn": "Demo",
  "enable": "1",
  "desc": "test",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
    }
  ],
  "grantedList": [
    {
      "name": "admin",
      "type": "0"
    },
    {
      "name": "Power User",
      "type": "1"
    }
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» id|body|string| yes |empty add,otherwise modify|
|» dbconn|body|string| yes |none|
|» enable|body|string| yes |none|
|» desc|body|string| yes |none|
|» configList|body|[object]| yes |none|
|»» schema|body|string| yes |none|
|»» tbname|body|string| yes |none|
|»» rows|body|string| no |none|
|»» sql|body|string| no |none|
|» grantedList|body|[object]| yes |none|
|»» name|body|string| yes |none|
|»» type|body|string| yes |none|

> Response Examples

```json
{
  "msg": "success",
  "endQuote": "\"",
  "success": true,
  "id": "8699a11df24c49ddab9451e249ff2c97",
  "startQuote": "\""
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
|» endQuote|string|false|none||none|
|» success|boolean|true|none||none|
|» id|string|true|none||none|
|» startQuote|string|false|none||none|