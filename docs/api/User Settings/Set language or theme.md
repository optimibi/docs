---
title: Set language or theme
permalink: /api/User Settings/Set language or theme/
tags: ["api","User Settings"]
description: 
---

## POST Set language or theme

POST /plugin/datafor-modeler/api/user-settings/display

> Body Parameters

```json
[
  {
    "id": "language",
    "value": "en"
  },
  {
    "id": "theme",
    "value": "light"
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
|» success|boolean|true|none||none|