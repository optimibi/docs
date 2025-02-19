---
title: Get register code
permalink: /api/Register/Get register code/
tags: ["api","Users","Register"]
description: 
---

## POST Get register code

POST /plugin/datafor-auth/api/user/sendRegisterCode

> Body Parameters

```yaml
email: a@a.com
locale: en-US

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» locale|body|string| no |none|

> Response Examples

```json
{
  "success": true
}
```

```json
{
  "msg": "email already sent,if not received,please send 1 min later",
  "code": "send.later",
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