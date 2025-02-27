---
title: Get token list
permalink: /api/Token/Get token list/
tags: ["api","Authentication","Token"]
description: 
---

## GET Get token list

GET /plugin/datafor-modeler/api/token/list

Preconditions:The current user's user type must be Administrator

> Response Examples

```json
{
  "data": [
    {
      "initroles": [
        "SYS_Reader"
      ],
      "fieldmap": {
        "name": "name",
        "email": "email",
        "username": "loginname"
      },
      "createdDate": 1737599864898,
      "inituser": "1",
      "lastModifiedDate": 1737601114115,
      "enable": "1",
      "expire": 86400,
      "name": "ERP",
      "token_name": "token",
      "creatorId": 1737601114115,
      "secret": "abcd",
      "algorithm": "HS256"
    }
  ],
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
|» data|[object]|true|none||none|
|»» initroles|[string]|false|none||none|
|»» fieldmap|object|false|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» username|string|true|none||none|
|»» inituser|string|false|none||none|
|»» enable|string|false|none||none|
|»» expire|integer|false|none||none|
|»» name|string|false|none||none|
|»» token_name|string|false|none||none|
|»» secret|string|false|none||none|
|»» creatorId|integer|false|none||none|
|»» lastModifiedDate|integer|false|none||none|
|»» createdDate|integer|false|none||none|
|»» algorithm|string|false|none||none|
|» success|boolean|true|none||none|