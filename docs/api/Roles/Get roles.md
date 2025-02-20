---
title: Get roles
permalink: /api/Roles/Get roles/
tags: ["api","Roles"]
description: 
---

## GET Get roles

GET /plugin/datafor-auth/api/roles/list

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|type|query|string| no |none|

> Response Examples

```json
{
  "data": {
    "total": 1,
    "success": true,
    "list": [
      {
        "authority": "DEV",
        "loadDate": "2024-08-05T14:59:32",
        "type": "0"
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
|»»» authority|string|false|none||none|
|»»» loadDate|string|false|none||none|
|»»» type|string|false|none||none|
|»» success|boolean|true|none||none|
|» success|boolean|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|0|
|type|2|