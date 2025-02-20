---
title: Get language and theme
permalink: /api/User Settings/Get language and theme/
tags: ["api","User Settings"]
description: 
---

## GET Get language and theme

GET /plugin/datafor-modeler/api/user-settings/display

> Response Examples

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

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||none|
|» value|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|id|language|
|id|theme|