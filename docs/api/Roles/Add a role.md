---
title: Add a role
permalink: /api/Roles/Add a role/
tags: ["api","Roles"]
description: 
---

## POST Add a role

POST /plugin/datafor-auth/api/roles/insert

Preconditions:The current user's user type must be Administrator

> Body Parameters

```yaml
authority: DEV

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» authority|body|string| yes |none|

> Response Examples

```json
{
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
|» success|boolean|true|none||none|
|» msg|string|false|none||none|