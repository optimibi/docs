---
title: Check unique for columns
permalink: /api/Metadata/Check unique for columns/
tags: ["api","Metadata"]
description: 
---

## POST Check unique for columns

POST /plugin/datafor-modeler/api/metadata/checkunique

Preconditions:
1.Current user needs read privileges to the connection.

> Body Parameters

```json
{
  "connection": "foodmart",
  "schema": "foodmart",
  "table": "time_by_day",
  "fields": [
    "the_year",
    "the_month"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|body|body|object| no |none|
|» connection|body|string| yes |connection name|
|» schema|body|string| yes |schema name|
|» table|body|string| yes |table name|
|» fields|body|[string]| yes |none|

> Response Examples

```json
{
  "code": "200",
  "data": true,
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
|» success|boolean|true|none||true:no error,false:error occur|
|» data|boolean|true|none||true:unique,false:not unique|
|» code|string|false|none||none|
|» msg|string|false|none||error msg|