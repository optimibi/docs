---
title: Register
permalink: /api/Authentication/Users/Register/
tags: ["api","Users","Register"]
description: 
---

## POST Register

POST /plugin/datafor-auth/api/user/register

> Body Parameters

```json
{
  "company": "optimibi",
  "dept": "IT",
  "description": "dev",
  "dob": "2001-01-01",
  "email": "a@a.com",
  "mobile": "111",
  "name": "管理员",
  "password": "password",
  "title": "dev",
  "username": "dev",
  "code": "037173"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» company|body|string| no |none|
|» dept|body|string| no |none|
|» description|body|string| no |none|
|» dob|body|string| no |none|
|» email|body|string| yes |none|
|» mobile|body|string| no |none|
|» name|body|string| yes |none|
|» password|body|string| yes |none|
|» title|body|string| no |none|
|» username|body|string| yes |none|
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
|» msg|string|false|none||none|
|» code|string|false|none||none|
|» success|boolean|true|none||none|
