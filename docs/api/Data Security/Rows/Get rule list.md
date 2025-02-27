---
title: Get rule list
permalink: /api/Data Security/Rows/Get rule list/
tags: ["api","Data Security"]
description: 
---

## POST Get rule list

POST /plugin/datafor-modeler/api/auth/row/query

Preconditions:
1.Current user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "id": "3a95ade7937743d6a04d27db8d4c69a3",
  "dbconn": "Demo",
  "schema": "public",
  "tbname": "time_dim",
  "enable": "1",
  "withGranted": true,
  "type": "1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» id|body|string| no |none|
|» dbconn|body|string| no |none|
|» enable|body|string| no |none|
|» editable|body|string| no |none|
|» withGranted|body|boolean| no |grantedList|
|» withConfig|body|boolean| no |configList|

> Response Examples

```json
{
  "code": "200",
  "data": [
    {
      "grantedList": [
        {
          "name": "admin",
          "type": "0"
        },
        {
          "name": "Administrator",
          "type": "1"
        }
      ],
      "dbconn": "Demo",
      "update_time": "2025-02-26 17:29:35.872",
      "add_by": "admin",
      "enable": "1",
      "editable": "1",
      "id": "8699a11df24c49ddab9451e249ff2c97",
      "update_by": "admin",
      "add_time": "2025-02-26 17:29:35.872",
      "desc": "test"
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
|» code|string|false|none||none|
|» data|[object]|true|none||none|
|»» grantedList|[object]|false|none||none|
|»»» name|string|true|none||none|
|»»» type|string|true|none||none|
|»» dbconn|string|false|none||none|
|»» update_time|string|false|none||none|
|»» add_by|string|false|none||none|
|»» enable|string|false|none||none|
|»» editable|string|false|none||none|
|»» id|string|false|none||none|
|»» update_by|string|false|none||none|
|»» add_time|string|false|none||none|
|»» desc|string|false|none||none|
|» success|boolean|true|none||none|
|» msg|string|false|none||none|