---
title: Get email config
permalink: /api/Email/Get email config/
tags: ["api","Email"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/api/emailconfig/getEmailConfig
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

Preconditions:The current user's user type must be Administrator

### **Response Examples**

```json
{
  "authenticate": "true",
  "debug": "false",
  "defaultFrom": "",
  "fromName": "",
  "password": "",
  "smtpHost": "",
  "smtpPort": "25",
  "smtpProtocol": "smtp",
  "smtpQuitWait": "false",
  "useSsl": "false",
  "useStartTls": "false",
  "userId": ""
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### **Response Data Schema (HTTP 200)**
| Name            | Type   | Required | Restrictions | Description |
|----------------|--------|----------|--------------|-------------|
| `authenticate` | string | No       | None         | Whether authentication is required (`true` or `false`) |
| `defaultFrom`  | string | No       | None         | Default sender email address |
| `fromName`     | string | No       | None         | Display name of the sender |
| `password`     | string | No       | None         | Password for SMTP authentication (if applicable) |
| `smtpHost`     | string | No       | None         | SMTP server hostname or IP address |
| `smtpPort`     | string | No       | None         | Port number for SMTP server (e.g., `25`, `465`, `587`) |
| `smtpProtocol` | string | No       | None         | SMTP protocol type (e.g., `smtp`, `smtps`) |
| `smtpQuitWait` | string | No       | None         | Whether the SMTP connection should wait before quitting (`true` or `false`) |
| `useSsl`       | string | No       | None         | Whether to use SSL encryption (`true` or `false`) |
| `useStartTls`  | string | No       | None         | Whether to use STARTTLS (`true` or `false`) |
| `userId`       | string | No       | None         | User ID for SMTP authentication |