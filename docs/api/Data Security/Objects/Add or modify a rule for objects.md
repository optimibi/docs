---
title: Add or modify a rule for objects
permalink: /api/Data Security/Objs/Add or modify a rule for objects/
tags: ["api","Data Security"]
description: 
---

## POST Add or modify a rule for objects

POST /plugin/datafor-modeler/api/auth/obj/update

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "dbconn": "foodmart",
  "enable": "1",
  "desc": "test",
  "configList": [
    {
      "schema": "foodmart",
      "tbname": "time_by_day",
      "obj_type": "2",
      "colname": "the_year",
      "visible": "1",
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
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» dbconn|body|string| yes |none|
|» enable|body|string| yes |none|
|» desc|body|string| no |none|
|» configList|body|[object]| yes |none|
|»» schema|body|string| yes |none|
|»» tbname|body|string| yes |none|
|»» obj_type|body|string| yes |1table2column|
|»» colname|body|string| no |none|
|»» visible|body|string| yes |1:selected is visible,unselected is invisible 0:selected is invisible,unselected is visible|
|»» grantedList|body|[object]| no |none|
|»»» name|body|string| yes |none|
|»»» type|body|string| yes |0user1role|

> Response Examples

```json
{
  "msg": "success",
  "endQuote": "\"",
  "success": true,
  "id": "371063d227944c5386fbe81faf8c3bc0",
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