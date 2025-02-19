---
title: Get user's own information
permalink: /api/Authentication/Users/
tags: ["api","Users"]
description: 
---

## GET Get user's own information

GET /plugin/datafor-auth/api/user/detail

> Response Examples

```json
{
  "data": {
    "user": {
      "dept": "IT",
      "email": "administrator@x.com",
      "enabled": "1",
      "mobile": "1",
      "name": "administrator",
      "password": "5f4dcc3b5aa765d61d8327deb882cf99",
      "title": "administrator",
      "username": "admin"
    }
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
|»» user|object|true|none||none|
|»»» dept|string|false|none||none|
|»»» email|string|false|none||none|
|»»» enabled|string|true|none||none|
|»»» mobile|string|false|none||none|
|»»» name|string|true|none||none|
|»»» password|string|true|none||md5|
|»»» title|string|false|none||none|
|»»» username|string|true|none||none|
|» success|boolean|true|none||none|
