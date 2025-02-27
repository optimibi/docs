---
title: Query LDAP config
permalink: /api/Extension Plugins/LDAP/Query LDAP config/
tags: ["api","Extension Plugins","Authentication","LDAP"]
description: 
---

## POST Query LDAP config

POST /plugin/datafor-ldap/api/application/query

Preconditions:
1. install datafor-ldap plugin
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
    "initroles": [
      "SYS_Reader"
    ],
    "user_base": "cn=${username},dc=imysh,dc=com",
    "administrator": "cn=admin,dc=imysh,dc=com",
    "inituser": "1",
    "initial": "com.sun.jndi.ldap.LdapCtxFactory",
    "enable": "0",
    "config": "{\"user\":{\"ObjectClass\":\"organizationalPerson\"}}",
    "url": "ldap://127.0.0.1:389",
    "authtype": "simple",
    "desc": "dev"
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
|»» user_base|string|true|none||none|
|»» inituser|string|true|none||none|
|»» initial|string|true|none||none|
|»» enable|string|true|none||none|
|»» config|string|true|none||none|
|»» url|string|true|none||none|
|»» authtype|string|true|none||none|
|»» administrator|string|false|none||none|
|»» desc|string|false|none||none|
|» success|boolean|true|none||none|
|» msg|string|false|none||none|