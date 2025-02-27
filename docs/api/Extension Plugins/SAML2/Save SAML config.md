---
title: Save SAML config
permalink: /api/Extension Plugins/SAML2/Save SAML config/
tags: ["api","Extension Plugins","Authentication","SAML2"]
description: 
---

## POST Save SAML config

POST /plugin/datafor-saml/api/application/update

Preconditions:
1. install datafor-saml plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{
  "idp_sso_url": "https://login.microsoftonline.com/1fdff6f1-4338-4212-bdc7-4544f8c9b2f6/saml2",
  "idp_entity_id": "https://sts.windows.net/1fdff6f1-4338-4212-bdc7-4544f8c9b2f6/",
  "idp_certificate": "-----BEGIN CERTIFICATE-----\nMIIC1DCCAdigAwIBAgIQExQlgAyX1rRDnlWzQl3+TjANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQD\nEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yNDEyMjUwNjI4\nMTZaFw0yNzEyMjUwNjI4MTVaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQg\nU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzn2MrkOZ0/ek\nZVaN+Y1KTXhSe/CakJ8QYni02+YGFoNagubRy99tWW1OBWf4Vxb///KR9VwgU4N1G+VI5njASZvf\n8rPByqVTk3ax5cGNuVrfqIUZIhbqfWStDWN51OAYI4nxBbPUmyDSqIE/5/OrVjNuEVvhRbU7AJzP\n1eI/G8oZDstGP8pFrgbeSPanY6B2lJU/EITGGSQC1KoU2eo47h6nJrWTbV9AwdMwis8FYd1z+bHL\nxCvWjckyrlA6bGNVb4HhTbqIaVic7V9VQq/29Eqcx8OyLsROcW73aLlBrkU3e2oe70RysZnJKetu\nOgfPLBjb1QWxlElYFPyj7fNErQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQBsGz8+VVBJ+mj1g3oa\nKgrQDDYZ1SMGGZp665vTtosAc3kW1TIHDYXs5T3A/7YqB4Cbb4/K9UKLksKqouxyP3gMeiEQYxKG\nQWAyo8KuAfZpJp2vVAcaUil8x9sBvthiXzXLbgAy2a/X3sAovYjD4Isgg3uhPbqq7oGfyrTMvw9R\n62+BBypdB/wfV+AUHwYF8G5Ate4EESdhPAMSJBp4P40kG/MvhsqNWaNPaPiEieXmy85Rp48rnZDS\nyIUfUZR7sFkVrumwuAe0vzQ94DSLPpp2CoryL/4Tla67zlKsq1EbPTVELngkT6D22q1VQ29ivUEr\nS6OVVx93CK/8CZXnCyii\n-----END CERTIFICATE-----\n",
  "sp_entity_id": "bi",
  "allowed_clock_skew": 2,
  "message_lifetime": "2",
  "fieldmap": {
    "username": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    "name": "http://schemas.microsoft.com/identity/claims/displayname",
    "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
  },
  "enable": "1",
  "inituser": "1",
  "initpwd": "password",
  "initroles": [
    "SYS_Reader"
  ],
  "ignoreList": [
    "/plugin/datafor-modeler/api"
  ],
  "includeList": [
    "/datafor/console"
  ]
}
```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|
|» idp_sso_url|body|string| yes | idp url|The Location attribute in the <SingleSignOnService> element|
|» idp_entity_id|body|string| yes ||The entityID attribute in the <EntityDescriptor> element.|
|» idp_certificate|body|string| yes ||The public key used by Looker to verify the signature of the IdP response, found in the <KeyDescriptor use="signing"><KeyInfo><X509Data><X509Certificate> section.|
|» sp_entity_id|body|string| yes ||SP Entity/IdP Audience|
|» allowed_clock_skew|body|integer| yes ||允许的时间偏移。默认0，有的idp需要。定义 IdP 和 SP 之间时间戳差异的允许范围（单位：秒）。|
|» enable|body|string| yes ||1true0false,default is false|
|» inituser|body|string| yes ||1true0false,default is false|
|» initpwd|body|string| yes ||when inituser 1,then cannot be empty|
|» initroles|body|[string]| yes ||initroles|
|» ignoreList|body|[string]| yes ||use contains to match|
|» includeList|body|[string]| yes ||use contains to match|
|» fieldmap|body|object| yes ||none|
|»» username|body|string| yes ||none|
|»» name|body|string| yes ||none|
|»» email|body|string| yes ||none|

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