---
title: Restful Logout
permalink: /api/Authentication/Restful-Logout/
tags: ["api","Authentication"]
description: 
---

## GET Restful Logout

GET /plugin/datafor/api/extension/auth/logout

> Response Examples

```json
{
  "code": "200",
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
|» code|string|true|none||none|
|» success|boolean|true|none||none|
