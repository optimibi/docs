---
title: Login
permalink: /api/Authentication/Login/
tags: ["api","Authentication"]
description: 
---

## GET Login

GET /j_spring_security_check

### Description
User can log in and redirects to the specified location.

> Body Parameters

```yaml
j_username: admin
j_password: password
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» j_username|body|string| no |none|
|» j_password|body|string| no |none|



> Response Examples

> 302 Response

### Responses

|HTTP Status Code |Meaning| Description      |Data schema|
|---|---|------------------|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Location /datafor |Inline|

### Headers

#### Request Headers
- **Cookie**: The session cookie to identify the user's session.

#### Response Headers
- **Location**: The URL to which the client is redirected after logout.

