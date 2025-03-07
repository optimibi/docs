---
title: Query OAuth2 config
permalink: /api/Extension Plugins/OAuth2/Query OAuth2 config/
tags: ["api","Extension Plugins","Authentication","OAuth2"]
description:
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-oauth2/api/query
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

## **Body Parameters**

```json
{
  "logout_url": "https://127.0.0.1:8443/cas/logout",
  "login_url": "https://127.0.0.1:8443/cas/login",
  "enable": "1",
  "inituser": "1",
  "initpwd": "password"
}
```

---

## **Body Parameters Table**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `logout_url` | body     | string  | No       | URL for logging out. |
| `login_url`  | body     | string  | No       | URL for logging in. |
| `enable`     | body     | string  | Yes      | Whether OAuth2 authentication is enabled (`1` = enabled, `0` = disabled). |
| `inituser`   | body     | string  | Yes      | Initial user setup (`1` = enabled, `0` = disabled). |
| `initpwd`    | body     | string  | No       | Initial user password. |

---

## **Response Examples**

### ✅ Success Response (200 OK)
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

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | OAuth2 configuration retrieved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema (HTTP 200)**

| Name             | Type    | Required | Description |
|-----------------|---------|----------|-------------|
| `code`          | string  | No       | Response status code. |
| `data`          | object  | Yes      | OAuth2 configuration details. |
| `initroles`     | array   | Yes      | Initial user roles. |
| `includeList`   | array   | Yes      | List of paths to include in authentication. |
| `ignoreList`    | array   | Yes      | List of paths to ignore in authentication. |
| `info_method`   | string  | Yes      | HTTP method for retrieving user info (`GET` or `POST`). |
| `client_id`     | string  | Yes      | OAuth2 client ID. |
| `inituser`      | string  | Yes      | Initial user setting. |
| `grant_type`    | string  | Yes      | OAuth2 grant type (e.g., `authorization_code`). |
| `enable`        | string  | Yes      | Whether OAuth2 authentication is enabled (`1` or `0`). |
| `scope`         | string  | Yes      | Scopes requested from the OAuth2 provider. |
| `jsonpath`      | object  | Yes      | JSON path mappings for extracting user attributes. |
| `token_name`    | string  | Yes      | Name of the token parameter in the OAuth2 flow. |
| `auth_url`      | string  | Yes      | Authorization URL for the OAuth2 provider. |
| `client_secret` | string  | Yes      | OAuth2 client secret. |
| `ticket_key`    | string  | Yes      | Key for the authentication ticket in the OAuth2 flow. |
| `token_url`     | string  | Yes      | URL to exchange the authorization code for an access token. |
| `info_url`      | string  | Yes      | URL to retrieve user information from the OAuth2 provider. |
| `success`       | boolean | Yes      | `true` if the request was successful, `false` otherwise. |
| `msg`           | string  | No       | Response message (if any error occurs). |