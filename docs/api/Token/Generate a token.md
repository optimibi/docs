---
title: Generate a token
permalink: /api/Token/Generate a token/
tags: ["api","Authentication","Token"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/token/generate
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Preconditions**
- The current user's user type **must** be `Administrator`.

---

### Parameters

```yaml
name: ERP
privateKey: abcd
username: admin
```

| Name         | Location | Type     | Required | Description                             |
|--------------|----------|----------|----------|-----------------------------------------|
| body         | body     | object   | no       | The main data object for generating the token. |
| ├── name     | body     | string   | no       | Name of the token. |
| ├── privateKey | body   | string   | no       | Private key associated with the token. |
| ├── username | body     | string   | no       | Username for token generation. |

---

## **Response Examples**

```json
{
  "success": true,
  "expire": 86400,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFUlAiOiJhZG1pbiIsImV4cCI6MTcyMzAxNTkxNn0.uEmUwBfNAd5FtzjPPrldU9bierng7fd8rCVlZtVPY2k"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name     | Type    | Required | Restrictions | Description       |
|----------|---------|----------|--------------|-------------------|
| `success`| boolean | **Yes**  | none         | Indicates if the token generation was successful (`true` or `false`). |
| `expire` | integer | **Yes**  | none         | The token's expiration time in seconds. |
| `token`  | string  | **Yes**  | none         | The generated token string. |
