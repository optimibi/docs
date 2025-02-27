---
title: Execute one by name
permalink: /api/Alert/Execute one by name/
tags: ["api","Alert"]
description: 
---

## POST Delete an alert by name

POST /plugin/datafor/api/alert/delete

Preconditions: Current user needs administrative privileges to the alert

> Body Parameters

```yaml
name: test

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