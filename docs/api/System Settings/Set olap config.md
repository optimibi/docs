---
title: Set olap config
permalink: /api/System Settings/Set olap config/
tags: ["api","System Settings"]
description: 
---

## POST Set olap config

POST /plugin/datafor/api/modeler/olap/config/updateBatch

Preconditions:The current user's user type must be Administrator

> Body Parameters

```json
[
  {
    "code": "mondrian.olap.NullMemberCaption",
    "value": "#null"
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
  "msg": "success",
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
|» success|boolean|true|none||none|