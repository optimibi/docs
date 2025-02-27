---
title: Get email config
permalink: /api/Email/Get email config/
tags: ["api","Email"]
description: 
---

## GET Get email config

GET /api/emailconfig/getEmailConfig

Preconditions:The current user's user type must be Administrator

> Response Examples

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

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» authenticate|string|false|none||none|
|» defaultFrom|string|false|none||none|
|» fromName|string|false|none||none|
|» password|string|false|none||none|
|» smtpHost|string|false|none||none|
|» smtpPort|string|false|none||none|
|» smtpProtocol|string|false|none||none|
|» smtpQuitWait|string|false|none||none|
|» useSsl|string|false|none||none|
|» useStartTls|string|false|none||none|
|» userId|string|false|none||none|