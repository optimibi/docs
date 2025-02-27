---
title: Save CAS config
permalink: /api/Extension Plugins/Cas/Save CAS config/
tags: ["api","Extension Plugins","Authentication","Cas"]
description: 
---

## POST Query CAS config

POST /plugin/datafor-cas/api/query

Preconditions:
1. install datafor-cas plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{
  "logout_url": "https://127.0.0.1:8443/cas/logout",
  "login_url": "https://127.0.0.1:8443/cas/login",
  "enable": "1",
  "inituser": "1",
  "initpwd": "pwd123"
}
```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|

> Response Examples

```json
{
  "code": "200",
  "data": {
    "initroles": [
      "SYS_Reader"
    ],
    "logout_url": "http://127.0.0.1:8080/cas/logout",
    "center_url": "http://127.0.0.1:8080/cas",
    "login_url": "http://127.0.0.1:8080/cas/login",
    "inituser": "1",
    "initpwd": "password",
    "enable": "0",
    "ignoreList": [
      "/plugin/datafor-modeler/api",
      "/Login"
    ],
    "type": "jasig"
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
|» code|string|true|none||none|
|» data|object|true|none||none|
|»» initroles|[string]|true|none||none|
|»» logout_url|string|true|none||none|
|»» center_url|string|true|none||none|
|»» login_url|string|true|none||none|
|»» inituser|string|true|none||none|
|»» initpwd|string|false|none||none|
|»» enable|string|true|none||none|
|»» ignoreList|[string]|true|none||none|
|»» type|string|true|none||none|
|» success|boolean|true|none||none|