---
title: Get user settings and system information
permalink: /api/User Settings/Get user settings and system information/
tags: ["api","User Settings"]
description: 
---

## GET Get user settings and system information

GET /plugin/datafor/api/extension/auth/fetchUser

> Response Examples

```json
{
  "ver": "C",
  "code": 200,
  "__LOAD_VARIABLE__": "1740013039357",
  "plugins": [
    "datafor-modeler",
    "datafor-backup",
    "datafor-auth",
    "datafor"
  ],
  "roles": [
    "Administrator",
    "Authenticated"
  ],
  "lic": {
    "valid": true,
    "licenseType": "O",
    "hasLicense": false,
    "expire": 1742969448711
  },
  "canEdit": true,
  "serverNameFull": "http://localhost:28080/datafor/",
  "contextPath": "/datafor/",
  "locale": "en",
  "localeList": [
    "en",
    "es",
    "zh"
  ],
  "islogged": true,
  "username": "admin"
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
|» ver|string|true|none||none|
|» code|integer|true|none||none|
|» __LOAD_VARIABLE__|string|true|none||none|
|» plugins|[string]|true|none||none|
|» roles|[string]|true|none||none|
|» lic|object|true|none||none|
|»» valid|boolean|true|none||none|
|»» licenseType|string|true|none||none|
|»» hasLicense|boolean|true|none||none|
|»» expire|integer|true|none||none|
|» canEdit|boolean|true|none||none|
|» serverNameFull|string|true|none||none|
|» contextPath|string|true|none||none|
|» locale|string|false|none||return when logged|
|» localeList|[string]|false|none||return when logged,BCP47|
|» islogged|boolean|true|none||none|
|» username|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|ver|C|## GET Get user settings and system information

GET /plugin/datafor/api/extension/auth/fetchUser

> Response Examples

```json
{
  "ver": "C",
  "code": 200,
  "__LOAD_VARIABLE__": "1740013039357",
  "plugins": [
    "datafor-modeler",
    "datafor-backup",
    "datafor-auth",
    "datafor"
  ],
  "roles": [
    "Administrator",
    "Authenticated"
  ],
  "lic": {
    "valid": true,
    "licenseType": "O",
    "hasLicense": false,
    "expire": 1742969448711
  },
  "canEdit": true,
  "serverNameFull": "http://localhost:28080/datafor/",
  "contextPath": "/datafor/",
  "locale": "en",
  "localeList": [
    "en",
    "es",
    "zh"
  ],
  "islogged": true,
  "username": "admin"
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
|» ver|string|true|none||none|
|» code|integer|true|none||none|
|» __LOAD_VARIABLE__|string|true|none||none|
|» plugins|[string]|true|none||none|
|» roles|[string]|true|none||none|
|» lic|object|true|none||none|
|»» valid|boolean|true|none||none|
|»» licenseType|string|true|none||none|
|»» hasLicense|boolean|true|none||none|
|»» expire|integer|true|none||none|
|» canEdit|boolean|true|none||none|
|» serverNameFull|string|true|none||none|
|» contextPath|string|true|none||none|
|» locale|string|false|none||return when logged|
|» localeList|[string]|false|none||return when logged,BCP47|
|» islogged|boolean|true|none||none|
|» username|string|true|none||none|

#### Enum

|Name| Value|
|---|-|
|ver|C|
|ver|F|