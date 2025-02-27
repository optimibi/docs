---
title: Get rule list for objects
permalink: /api/Data Security/Objs/Get rule list for objects/
tags: ["api","Data Security"]
description: 
---

## POST Get rule list for objects

POST /plugin/datafor-modeler/api/auth/obj/query

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
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
|» withGranted|body|boolean| no |grantedList|
|» withConfig|body|boolean| no |configList|
|» schema|body|string| no |none|
|» tbname|body|string| no |none|
|» type|body|string| no |none|

> Response Examples

```json
{
  "msg": "success",
  "code": "200",
  "data": [
    {
      "dbconn": "foodmart",
      "update_time": "2024-09-10 10:41:05.611",
      "add_by": "admin",
      "enable": "1",
      "editable": "1",
      "id": "d8a0528c5c614146b683f49ff29a0b00",
      "update_by": "admin",
      "configList": [
        {
          "schema": "foodmart",
          "visible": "1",
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
          "tbname": "time_by_day",
          "colname": "the_year",
          "obj_key": "\"foodmart\".\"time_by_day\".\"the_year\"",
          "obj_type": "2"
        }
      ],
      "add_time": "2024-09-10 10:41:05.611",
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
|» msg|string|true|none||none|
|» code|string|true|none||none|
|» data|[object]|true|none||none|
|»» dbconn|string|true|none||none|
|»» update_time|string|false|none||none|
|»» add_by|string|false|none||none|
|»» enable|string|true|none||none|
|»» editable|string|true|none||none|
|»» id|string|true|none||none|
|»» update_by|string|false|none||none|
|»» configList|[object]|true|none||none|
|»»» schema|string|true|none||none|
|»»» grantedList|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»» tbname|string|true|none||none|
|»»» colname|string|false|none||none|
|»»» obj_key|string|true|none||none|
|»»» obj_type|string|true|none||none|
|»»» visible|string|true|none||1:selected is visible,unselected is invisible 0:selected is invisible,unselected is visible|
|»» add_time|string|false|none||none|
|»» desc|string|false|none||none|
|» success|boolean|true|none||none|