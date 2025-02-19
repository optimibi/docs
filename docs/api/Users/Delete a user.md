---
title: Delete a user
permalink: /api/Users/Delete a user/
tags: ["api","Users"]
description: 
---

## POST Delete a user

POST /plugin/datafor-auth/api/user/delete

Preconditions:User Type must be Administrator

> Body Parameters

```yaml
username: dev

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» username|body|string| yes |none|

> Response Examples

```json
{
  "success": true,
  "username": "dev"
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