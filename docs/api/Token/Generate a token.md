---
title: Generate a token
permalink: /api/Token/Generate a token/
tags: ["api","Authentication","Token"]
description: 
---

## POST Generate a token

POST /plugin/datafor-modeler/api/token/generate

Preconditions:The current user's user type must be Administrator

> Body Parameters

```yaml
name: ERP
privateKey: abcd
username: admin

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| no |none|
|» privateKey|body|string| no |none|
|» username|body|string| no |none|

> Response Examples

```json
{
  "success": true,
  "expire": 86400,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFUlAiOiJhZG1pbiIsImV4cCI6MTcyMzAxNTkxNn0.uEmUwBfNAd5FtzjPPrldU9bierng7fd8rCVlZtVPY2k"
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
|» success|boolean|true|none||none|
|» expire|integer|true|none||none|
|» token|string|true|none||none|