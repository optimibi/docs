---
title: Add recent
permalink: /api/Recent/Add recent/
tags: ["api","Recent"]
description: 
---

## POST Add recent

POST /datafor/plugin/datafor/api/user-settings/recent

> Body Parameters

```json
[
  {
    "fullPath": "/public/workshop.datafor",
    "title": "workshop",
    "lastUse": 1722844149964
  }
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|append|query|string| no |none|
|distinct|query|string| no |none|
|body|body|array[object]| no |none|

> Response Examples

```json
{
  "data": "[{\"fullPath\":\"/public/workshop.datafor\",\"lastUse\":1722844149964,\"title\":\"workshop\"}]",
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
|» data|string|true|none||none|
|» success|boolean|true|none||none|