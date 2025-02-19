---
title: Verify username can be registered
permalink: /api/Register/Verify username can be registered/
tags: ["api","Users","Register"]
description: 
---

## POST Verify username can be registered

POST /plugin/datafor-auth/api/user/isRightUsernameForAdd

> Body Parameters

```yaml
username: admin

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» username|body|string| yes |case insensitive|

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