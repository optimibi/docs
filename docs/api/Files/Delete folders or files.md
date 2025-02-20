---
title: Delete folders or files
permalink: /api/Files/Delete folders or files/
tags: ["api","Files"]
description: 
---

## POST Delete folders or files

POST /plugin/datafor-modeler/api/repo/files/deleteBatch

Preconditions:The current user has administrator authority of the folder or file

> Body Parameters

```
3be29d39-1504-424b-8115-be940e7c9145,3be29d39-1504-424b-8115-be940e7c9146

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|string| no |none|

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
|» success|boolean|true|none||none|