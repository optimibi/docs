---
title: Save CAS config
permalink: /api/Extension Plugins/Cas/Save CAS config/
tags: ["api","Extension Plugins","Authentication","Cas"]
description: 
---

## POST Save CAS config

POST /plugin/datafor-cas/api/update

Currently, the system only supports authentication via JASIG CAS
Preconditions:
1. install datafor-cas plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{
  "center_url": "http://127.0.0.1:8080/cas",
  "logout_url": "http://127.0.0.1:8080/cas/logout",
  "login_url": "http://127.0.0.1:8080/cas/login",
  "enable": "1",
  "inituser": "1",
  "initpwd": "pwd123",
  "type": "jasig",
  "ignoreList": [
    "/plugin/datafor-modeler/api",
    "/Login"
  ]
}
```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|
|» center_url|body|string| yes ||none|
|» logout_url|body|string| no ||default is center_url/logout|
|» login_url|body|string| no ||default is center_url/login|
|» enable|body|string| yes ||1true0false|
|» inituser|body|string| yes ||1true0false，默认0|
|» initroles|body|[string]| yes ||none|
|» initpwd|body|string| no ||none|
|» type|body|string| yes ||jasig，目前只支持这一种|
|» ignoreList|body|[string]| no ||use contains to match|
|» includeList|body|[string]| yes ||use contains to match|

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
|» msg|string|false|none||none|
|» success|boolean|true|none||none|