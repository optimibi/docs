---
title: Logout
permalink: /api/Authentication/Logout/
tags: ["api","Authentication"]
description: 
---

## GET Logout

GET /Logout

### Description
User can log out of the application and redirects to the specified location.

> Response Examples

> 302 Response

### Responses

|HTTP Status Code |Meaning| Description                |Data schema|
|---|---|----------------------------|---|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Location /datafor/index.jsp |Inline|

### Headers

#### Request Headers
- **Cookie**: The session cookie to identify the user's session.

#### Response Headers
- **Location**: The URL to which the client is redirected after logout.

