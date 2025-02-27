---
title: Execute an alert by name
permalink: /api/Alert/Execute an alert by name/
tags: ["api","Alert"]
description: 
---

## POST Execute one by name

POST /plugin/datafor/api/alert/execute

Preconditions: Current user needs read privileges to the alert

> Body Parameters

```yaml
name: 测试预警

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| no |none|

> Response Examples

```json
{
  "msg": "success",
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