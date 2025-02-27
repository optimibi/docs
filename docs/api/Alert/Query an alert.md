---
title: Query an alert
permalink: /api/Alert/Query an alert/
tags: ["api","Alert"]
description: 
---

## GET Query an alert

GET /plugin/datafor/api/alert/detail

Preconditions: Current user needs read privileges to the alert

> Body Parameters

```yaml
{}

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| no |名称|
|body|body|object| no |none|

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