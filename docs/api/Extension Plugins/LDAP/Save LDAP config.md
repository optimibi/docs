---
title: Save LDAP config
permalink: /api/Extension Plugins/LDAP/Save LDAP config/
tags: ["api","Extension Plugins","Authentication","LDAP"]
description: 
---

## POST Save LDAP config

POST /plugin/datafor-ldap/api/application/update

Preconditions:
1. install datafor-ldap plugin
2. The current user's user type must be Administrator

> Body Parameters

```json
{
  "initial": "com.sun.jndi.ldap.LdapCtxFactory",
  "administrator": "cn=admin,dc=imysh,dc=com",
  "secret": "123456",
  "url": "ldap://127.0.0.1:389",
  "authtype": "simple",
  "user_base": "cn=${username},dc=imysh,dc=com",
  "enable": "1",
  "inituser": "1",
  "initroles": [
    "SYS_Reader"
  ],
  "desc": "dev"
}
```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|
|» initial|body|string| yes | 前后关系,初始上下文工厂的类名|com.sun.jndi.ldap.LdapCtxFactory|
|» url|body|string| yes ||ldap://127.0.0.1:389|
|» authtype|body|string| yes ||simple / none|
|» user_base|body|string| yes ||cn=${username},dc=imysh,dc=com|
|» enable|body|string| yes ||1true0 false|
|» inituser|body|string| yes ||1true0false|
|» initroles|body|[string]| yes ||none|
|» administrator|body|string| no | 管理员名称|cn=admin,dc=imysh,dc=com|
|» secret|body|string| no | 管理员密码|Currently, the system does not perform any data retrieval. This setup is solely for testing LDAP authentication. In the future, we can enhance this functionality to automatically create users by fetching their LDAP roles, department emails, and other relevant information.|
|» desc|body|string| no ||none|

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