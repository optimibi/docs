---
title: Add or modify a token
permalink: /api/Token/Add or modify a token/
tags: ["api","Authentication","Token"]
description: 
---

## POST Add or modify a token

POST /plugin/datafor-modeler/api/token/update

Preconditions:The current user's user type must be Administrator

> Body Parameters

```json
{
  "name": "ERP",
  "token_name": "token",
  "secret": "abcd",
  "expire": 86400,
  "fieldmap": {
    "username": "loginname",
    "name": "name",
    "email": "email"
  },
  "algorithm": "HS256",
  "enable": "1",
  "inituser": "1",
  "initroles": [
    "SYS_Reader"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |应用名称，不能重复，和报表文件名一样不能使用的特殊字符|
|» secret|body|string| yes |公钥|
|» token_name|body|string| yes |url中存放token的参数名，默认token|
|» expire|body|integer| yes |second|
|» fieldmap|body|object| yes |none|
|»» username|body|string| yes |none|
|»» name|body|string| yes |none|
|»» email|body|string| yes |none|
|» algorithm|body|string| yes |HS256,HS384,HS512,RS256,RS384,RS512,ES256,ES384,ES512|
|» enable|body|string| yes |0false1true|
|» inituser|body|string| yes |0false1true|
|» initroles|body|[string]| yes |like SYS_Reader|
|» initpwd|body|string| no |when not empty,will create new user autolly, be used as the default password|

> Response Examples

```json
{
  "msg": "success",
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
|» msg|string|false|none||none|
|» success|boolean|true|none||none|