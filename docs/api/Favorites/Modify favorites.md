---
title: Modify favorites
permalink: /api/Favorites/Modify favorites/
tags: ["api","Favorites"]
description: 
---

## POST Modify favorites

POST /plugin/datafor-modeler/api/user-settings/favorites

> Body Parameters

```json
[
  {
    "fullPath": "/public/workshop.datafor",
    "title": "workshop",
    "lastUse": 1722844154850
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
  "data": "[{\"fullPath\":\"/public/workshop.datafor\",\"title\":\"workshop\",\"lastUse\":1722844154850}]",
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