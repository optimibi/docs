---
title: Recaption a file or folder
permalink: /api/Files/Recaption a file or folder/
tags: ["api","Files"]
description: 
---

## POST Recaption a file or folder

POST /plugin/datafor-modeler/api/repo/files/recaption

Preconditions:The current user has administrator authority of the folder or file

> Body Parameters

```yaml
pathId: /public/workshop.datafor
newName: workshop3

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|string| no |none|
|newName|query|string| no |none|
|body|body|object| no |none|
|» pathId|body|string| no |none|
|» newName|body|string| no |none|

> Response Examples

```json
{
  "code": 200,
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
|» code|integer|false|none||none|
|» success|boolean|true|none||none|