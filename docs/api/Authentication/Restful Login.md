---
title: Restful Login
permalink: /api/Authentication/REstful Login/
tags: ["api","Authentication"]
description: 
---

## POST Restful Login

POST /plugin/datafor/api/extension/auth/login

### Description
User can log in and get the result in JSON format.

> Response Examples

```json
{
  "msg": "login success",
  "jsessionid": "1EFBB53E585762CBD4DDBF918FBF5347",
  "data": "1",
  "success": true
}
```

```json
{
  "msg": "wrong password",
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
|» jsessionid|string|false|none||none|
|» data|string|false|none||1login 2 has logged in before request|
|» success|boolean|true|none||none|