---
title: Save OAuth2 config
permalink: /api/Extension Plugins/OAuth2/Save OAuth2 config/
tags: ["api","Extension Plugins","Authentication","OAuth2"]
description: 
---

**Method**  
`POST`

**Request URL**  
```html
/plugin/datafor-oauth2/api/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
1. The `datafor-oauth2` plugin must be installed.
2. The current user's user type **must be** `Administrator`.

---

## **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `Cookie`     | header   | string  | Yes      | Session cookie for authentication. |
| `Content-Type` | header | string  | Yes      | Must be set to `application/json`. |

---

### **Request Example**

```json
{
  "auth_url": "https://accounts.google.com/o/oauth2/v2/auth",
  "token_url": "https://oauth2.googleapis.com/token",
  "info_url": "https://www.googleapis.com/oauth2/v2/userinfo",
  "client_id": "1062332036927-2h1kbo2j1ti9j1v2sa6f296dfhsuf9h4.apps.googleusercontent.com",
  "client_secret": "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",
  "ticket_key": "code",
  "grant_type": "authorization_code",
  "scope": "email profile",
  "info_method": "GET",
  "jsonpath": {
    "username": "$.email",
    "name": "$.name",
    "email": "$.email"
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

---

### **Body Request Schema**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `auth_url`   | body     | string  | Yes      | OAuth2 authorization URL, e.g., `https://www.test.com/sso/oauth2.0/authorize`. |
| `token_url`  | body     | string  | Yes      | OAuth2 token exchange URL, e.g., `https://www.test.com/sso/oauth2.0/accessToken`. |
| `info_url`   | body     | string  | Yes      | OAuth2 user info URL, e.g., `https://www.test.com/sso/oauth2.0/profile`. |
| `info_method` | body    | string  | Yes      | HTTP method for user info retrieval (`GET` or `POST`). |
| `scope`      | body     | string  | No       | OAuth2 scopes, e.g., `profile`. Required for Google sign-in. |
| `ticket_key` | body     | string  | Yes      | The parameter name of the authorization code (`code`). |
| `enable`     | body     | string  | Yes      | Whether OAuth2 authentication is enabled (`1` = enabled, `0` = disabled). |
| `inituser`   | body     | string  | No       | Whether to initialize user creation (`1` = enabled, `0` = disabled). Default is `0`. |
| `initpwd`    | body     | string  | No       | Initial user password. Required when `inituser` is `1`. |
| `initroles`  | body     | array   | No       | Initial user roles. |
| `ignoreList` | body     | array   | No       | List of paths to ignore during authentication. |
| `includeList` | body    | array   | No       | List of paths to include in authentication. |
| `grant_type` | body     | string  | No       | OAuth2 grant type, only supports `authorization_code`. |
| `jsonpath`   | body     | object  | Yes      | JSON path mappings for extracting user attributes. |

---

## **Enum Values**

| Name        | Value |
|------------|-------|
| `info_method` | `GET` |
| `info_method` | `POST` |

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OAuth2 configuration saved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `msg`     | string | No       | Response message (if any error occurs). |
| `success` | boolean | Yes     | `true` if the request was successful, `false` otherwise. |f296dfhsuf9h4.apps.googleusercontent.com",
  "client_secret": "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",
  "ticket_key": "code",
  "grant_type": "authorization_code",
  "scope": "email profile",
  "info_method": "GET",
  "jsonpath": {
    "username": "$.email",
    "name": "$.name",
    "email": "$.email"
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
|» auth_url|body|string| yes ||for example:https://www.test.com/sso/oauth2.0/authorize|
|» token_url|body|string| yes ||for example:https://www.test.com/sso/oauth2.0/accessToken|
|» info_url|body|string| yes ||for example: https://www.test.com/sso/oauth2.0/profile|
|» info_method|body|string| yes ||GET or POST|
|» scope|body|string| no ||google sign-in cannot be empty,like profile|
|» ticket_key|body|string| yes ||default code when redirect,the parameter name of code|
|» enable|body|string| yes ||1true0false,default is false|
|» inituser|body|string| no ||1true0false,default is false|
|» initpwd|body|string| no ||when inituser 1,then cannot be empty|
|» initroles|body|[string]| no ||initroles|
|» ignoreList|body|[string]| no ||use contains to match|
|» includeList|body|[string]| no ||use contains to match|
|» grant_type|body|string| no ||default and only support is authorization_code|
|» jsonpath|body|object| yes ||{"username":"$.attributes.loginid"}|

#### Enum

|Name|Value|
|---|---|
|» info_method|GET|
|» info_method|POST|

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