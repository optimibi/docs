---
title: Get recent
permalink: /api/Recent/Get recent/
tags: ["api","Recent"]
description: 
---

## GET Get recent

GET /plugin/datafor-modeler/api/user-settings/recent

> Response Examples

```json
[
  {
    "fullPath": "/public/workshop.datafor",
    "lastUse": 1722219194406,
    "title": "workshop"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» fullPath|string|true|none||none|
|» lastUse|integer|true|none||none|
|» title|string|true|none||none|