---
title: Add a folder
permalink: /api/Folders/Add a folder/
tags: ["api","Folders"]
description: 
---

## POST Add a folder

POST /plugin/datafor-modeler/api/repo/dirs/add


Preconditions:The current user has administrator authority of the parent folder

> Body Parameters

```json
{
  "aces": [
    {
      "recipient": "admin",
      "tenantPath": null,
      "modifiable": true,
      "recipientType": 0,
      "permissions": [
        4
      ]
    }
  ],
  "id": null,
  "owner": "admin",
  "tenantPath": null,
  "ownerType": 0,
  "entriesInheriting": false
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|string| no |none|
|body|body|object| no |none|
|» aces|body|[object]| yes |none|
|»» recipient|body|string| no |none|
|»» tenantPath|body|null| no |none|
|»» modifiable|body|boolean| no |none|
|»» recipientType|body|integer| no |none|
|»» permissions|body|[integer]| no |none|
|» id|body|null| no |none|
|» owner|body|string| yes |none|
|» tenantPath|body|null| no |none|
|» ownerType|body|integer| yes |none|
|» entriesInheriting|body|boolean| yes |none|

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