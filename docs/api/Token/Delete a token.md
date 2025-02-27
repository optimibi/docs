---
title: Delete a token
permalink: /api/Token/Delete a token/
tags: ["api","Authentication","Token"]
description: 
---

## POST Delete a token

POST /plugin/datafor-modeler/api/token/delete

Preconditions:The current user's user type must be Administrator

> Body Parameters

```yaml
name: ERP

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| no |none|

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
|» msg|string|true|none||error message|