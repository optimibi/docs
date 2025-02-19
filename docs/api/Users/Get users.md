---
title: Get Users
permalink: /api/Users/Get Users/
tags: ["api","Users"]
description: 
---

## GET Get users

GET /plugin/datafor-auth/api/user/list

Preconditions:User Type must be Administrator

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|start|query|string| no |none|
|count|query|string| no |none|
|withRole|query|string| no |none|
|orderBy|query|string| no |none|

> Response Examples

```json
{
  "data": {
    "total": 2,
    "list": [
      {
        "canEdit": true,
        "dept": "IT",
        "email": "administrator@x.com",
        "enabled": "1",
        "mobile": "",
        "name": "administrator",
        "roles": "",
        "rolesList": [
          {
            "rolename": "Administrator",
            "type": "2"
          }
        ],
        "title": "administrator",
        "username": "admin",
        "usertype": "Administrator"
      },
      {
        "canEdit": true,
        "dept": "IT",
        "email": "demo@x.com",
        "enabled": "1",
        "mobile": "",
        "name": "demo",
        "roles": "",
        "rolesList": [
          {
            "rolename": "SYS_Creator",
            "type": "2"
          }
        ],
        "title": "IT",
        "username": "demo",
        "usertype": "SYS_Creator"
      }
    ]
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
|»» total|integer|true|none||none|
|»» list|[object]|true|none||none|
|»»» canEdit|boolean|true|none||none|
|»»» dept|string|false|none||none|
|»»» email|string|false|none||none|
|»»» enabled|string|true|none||none|
|»»» mobile|string|false|none||none|
|»»» name|string|true|none||none|
|»»» rolesList|[object]|true|none||none|
|»»»» rolename|string|true|none||none|
|»»»» type|string|true|none||none|
|»»» title|string|false|none||none|
|»»» username|string|true|none||none|
|»»» usertype|string|true|none||none|
|» success|boolean|true|none||none|