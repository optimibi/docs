---
title: Query SAML config
permalink: /api/Extension Plugins/SAML2/Query SAML config/
tags: ["api","Extension Plugins","Authentication","SAML2"]
description: 
---

## POST Query SAML config

POST /plugin/datafor-saml/api/application/query

Preconditions:
1. install datafor-saml plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{}
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
    "idp_entity_id": "https://sts.windows.net/dff6f1-4338-4212-bdc7-4544f8c9b2f6/",
    "initroles": [
      "SYS_Reader"
    ],
    "fieldmap": {
      "name": "http://schemas.microsoft.com/identity/claims/displayname",
      "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
      "username": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
    },
    "includeList": [
      "/datafor/console"
    ],
    "idp_sso_url": "https://login.microsoftonline.com/dff6f1-4338-4212-bdc7-4544f8c9b2f6/saml2",
    "ignoreList": [
      "/plugin/datafor-modeler/api"
    ],
    "initpwd": "",
    "sp_entity_id": "bi",
    "allowed_clock_skew": 2,
    "idp_certificate": "-----BEGIN CERTIFICATE-----\nMI.....uAe0vzQ94DSLPpp2CoryL/4Tla67zlKsq1EbPTVELngkT6D22q1VQ29ivUEr\nS6OVVx93CK/8CZXnCyii\n-----END CERTIFICATE-----\n",
    "inituser": "1",
    "enable": "1"
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
|»» idp_entity_id|string|true|none||none|
|»» initroles|[string]|true|none||none|
|»» fieldmap|object|true|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» username|string|true|none||none|
|»» includeList|[string]|true|none||none|
|»» idp_sso_url|string|true|none||none|
|»» ignoreList|[string]|true|none||none|
|»» initpwd|string|true|none||none|
|»» sp_entity_id|string|true|none||none|
|»» allowed_clock_skew|integer|false|none||none|
|»» idp_certificate|string|true|none||none|
|»» inituser|string|true|none||none|
|»» enable|string|true|none||none|
|» success|boolean|true|none||none|
|» msg|string|false|none||none|