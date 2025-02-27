---
title: Delete tokens
permalink: /api/Token/Delete tokens/
tags: ["api","Authentication","Token"]
description: 
---

## POST Delete tokens

POST /plugin/datafor-modeler/api/token/deleteBatch

Preconditions:The current user's user type must be Administrator

> Body Parameters

```json
[
  "ERP",
  "OA"
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|array[string]| no |none|

> Response Examples

```json
{
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
|» success|boolean|true|none||true/false|
|» msg|string|false|none||error message|