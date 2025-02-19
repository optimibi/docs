---
title: Add or modify a user
permalink: /api/Users/Add or modify a user/
tags: ["api","Users"]
description: 
---

## POST Add or modify a user

POST /plugin/datafor-auth/api/user/insertOrUpdate

Preconditions:User Type must be Administrator or update the user‘s own information

> Body Parameters

```yaml
username: dev
password: dev
roles: dev&test
name: developer
mobile: "12345678910"
email: a@a.com
dept: IT
title: Manager
usertype: SYS_Creator
enabled: "1"

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» username|body|string| yes |none|
|» password|body|string| no |none|
|» roles|body|string| no |use & to separate multiple roles|
|» name|body|string| yes |none|
|» mobile|body|string| no |none|
|» email|body|string| yes |none|
|» dept|body|string| no |none|
|» title|body|string| no |none|
|» usertype|body|string| yes |none|
|» enabled|body|string| yes |none|

#### Enum

|Name|Value|
|---|---|
|» enabled|0|
|» enabled|1|

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
|» username|string|false|none||none|