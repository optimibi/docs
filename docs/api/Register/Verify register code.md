---
title: Verify register code
permalink: /api/Authentication/Users/Register/
tags: ["api","Users","Register"]
description: 
---

## POST Verify register code

POST /plugin/datafor-auth/api/user/verifyRegisterCode

> Body Parameters

```json
{
  "email": "a@a.com",
  "code": "037173"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» code|body|string| yes |none|

> Response Examples

```json
{
  "success": true
}
```

```json
{
  "msg": "email already existed",
  "code": 409,
  "success": false
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
|» msg|string|true|none||none|
|» success|boolean|true|none||none|