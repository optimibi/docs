---
title: Verify a LDAP
permalink: /api/Extension Plugins/LDAP/Verify a LDAP/
tags: ["api","Extension Plugins","Authentication","LDAP"]
description: 
---

## POST Verify a LDAP

POST /plugin/datafor-ldap/api/application/verifyConfig

Preconditions:
1. install datafor-ldap plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{
  "initial": "com.sun.jndi.ldap.LdapCtxFactory",
  "dn": "cn=admin,dc=imysh,dc=com",
  "url": "ldap://127.0.0.1:389",
  "authtype": "simple",
  "secret": "123456"
}
```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|
|» initial|body|string| yes ||none|
|» dn|body|string| yes ||none|
|» url|body|string| yes ||none|
|» authtype|body|string| yes ||none|
|» config|body|string| yes ||none|

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