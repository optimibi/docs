---
title: Get user types
permalink: /api/Authentication/Users/
tags: ["api","Users"]
description: 
---

## GET Get user types

GET /plugin/datafor-auth/api/roles/types

> Response Examples

```json
{
  "data": {
    "total": 3,
    "success": true,
    "list": [
      {
        "authority": "SYS_Reader"
      },
      {
        "authority": "SYS_Creator"
      },
      {
        "authority": "Administrator"
      }
    ]
  },
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
|» data|object|true|none||none|
|»» total|integer|true|none||none|
|»» success|boolean|true|none||none|
|»» list|[object]|true|none||none|
|»»» authority|string|true|none||none|
|» success|boolean|true|none||none|