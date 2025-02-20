---
title: Get file or folder's acl
permalink: /api/Files/Get file or folder's acl/
tags: ["api","Files"]
description: 
---

## GET Get file or folder's acl

GET /plugin/datafor-modeler/api/repo/files/acl

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|string| no |none|

> Response Examples

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
    },
    {
      "recipient": "Administrator",
      "tenantPath": null,
      "modifiable": false,
      "recipientType": 1,
      "permissions": [
        4
      ]
    }
  ],
  "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
  "owner": "admin",
  "tenantPath": null,
  "ownerType": 0,
  "entriesInheriting": false
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
|» aces|[object]|true|none||none|
|»» recipient|string|true|none||none|
|»» tenantPath|null|true|none||none|
|»» modifiable|boolean|true|none||none|
|»» recipientType|integer|true|none||none|
|»» permissions|[integer]|true|none||none|
|» id|string|true|none||none|
|» owner|string|true|none||none|
|» tenantPath|null|true|none||none|
|» ownerType|integer|true|none||none|
|» entriesInheriting|boolean|true|none||none|