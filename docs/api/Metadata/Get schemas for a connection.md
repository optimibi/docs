---
title: Get schemas for a connection
permalink: /api/Metadata/Get schemas for a connection/
tags: ["api","Metadata"]
description: 
---

## POST Get schemas for a connection

POST /plugin/datafor-modeler/api/metadata/schemas

Preconditions:
1.Current user needs read privileges to the connection.

> Body Parameters

```yaml
connection: foodmart

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|body|body|object| no |none|
|» connection|body|string| no |none|

> Response Examples

```json
{
  "msg": "success",
  "databaseTypeName": "PostgreSQL",
  "default": "foodmart",
  "data": [
    {
      "default": true,
      "name": "foodmart"
    },
    {
      "default": false,
      "name": "information_schema"
    },
    {
      "default": false,
      "name": "pg_catalog"
    },
    {
      "default": false,
      "name": "public"
    }
  ],
  "dbname": "foodmart",
  "success": true,
  "expresions": {
    "quoteField": "\"${v}\"",
    "quoteDate": "DATE '${v}'",
    "quoteTime": "TIME '${v}'",
    "specialMap": {
      "'": "''"
    },
    "quoteString": "'${v}'",
    "joinTypes": [
      "inner",
      "left",
      "right",
      "full"
    ],
    "allowsBetween": true,
    "quoteTimestamp": "TIMESTAMP '${v}'"
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
|» msg|string|false|none||none|
|» databaseTypeName|string|true|none||none|
|» default|string|true|none||none|
|» data|[object]|true|none||none|
|»» default|boolean|false|none||none|
|»» name|string|true|none||none|
|» dbname|string|true|none||none|
|» success|boolean|true|none||none|
|» expresions|object|true|none||none|
|»» quoteField|string|true|none||replace${v} by fieldName|
|»» quoteDate|string|true|none||none|
|»» quoteTime|string|true|none||none|
|»» specialMap|object|true|none||replace each charactor in the map|
|»»» '|string|true|none||none|
|»» quoteString|string|true|none||none|
|»» joinTypes|[string]|true|none||none|
|»» allowsBetween|boolean|true|none||none|
|»» quoteTimestamp|string|true|none||none|