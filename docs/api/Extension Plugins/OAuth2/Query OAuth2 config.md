---
title: Query OAuth2 config
permalink: /api/Extension Plugins/OAuth2/Query OAuth2 config/
tags: ["api","Extension Plugins","Authentication","OAuth2"]
description: 
---

## POST Query OAuth2 config

POST /plugin/datafor-oauth2/api/query

Preconditions:
1. install datafor-oauth2 plugin
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
    "includeList": [
      "/datafor/console"
    ],
    "ignoreList": [
      "/plugin/datafor-modeler/api"
    ],
    "info_method": "GET",
    "client_id": "xxx.apps.googleusercontent.com",
    "inituser": "1",
    "grant_type": "authorization_code",
    "enable": "0",
    "scope": "email profile",
    "jsonpath": {
      "name": "$.name",
      "email": "$.email",
      "username": "$.email"
    },
    "token_name": "code",
    "auth_url": "https://accounts.google.com/o/oauth2/v2/auth",
    "client_secret": "GOCS-xxxxx",
    "ticket_key": "code",
    "token_url": "https://oauth2.googleapis.com/token",
    "info_url": "https://www.googleapis.com/oauth2/v2/userinfo"
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
|» code|string|false|none||none|
|» data|object|true|none||none|
|»» initroles|[string]|true|none||none|
|»» includeList|[string]|true|none||none|
|»» ignoreList|[string]|true|none||none|
|»» info_method|string|true|none||none|
|»» client_id|string|true|none||none|
|»» inituser|string|true|none||none|
|»» grant_type|string|true|none||none|
|»» enable|string|true|none||none|
|»» scope|string|true|none||none|
|»» jsonpath|object|true|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» username|string|true|none||none|
|»» token_name|string|true|none||none|
|»» auth_url|string|true|none||none|
|»» client_secret|string|true|none||none|
|»» ticket_key|string|true|none||none|
|»» token_url|string|true|none||none|
|»» info_url|string|true|none||none|
|» success|boolean|true|none||none|
|» msg|string|false|none||none|