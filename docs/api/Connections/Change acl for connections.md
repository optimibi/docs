---
title: Change acl for connections
permalink: /api/Connections/Change acl for connections/
tags: ["api","Connections"]
description: 
---

## PUT Change acl for connections

PUT /plugin/datafor-modeler/api/connection/aclBatch

Preconditions:Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "foodmart": {
    "aces": [
      {
        "recipient": "Administrator",
        "modifiable": false,
        "recipientType": 1,
        "permissions": [
          4
        ]
      }
    ],
    "entriesInheriting": false,
    "owner": "admin",
    "ownerType": 0
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» foodmart|body|object| yes |the name of the connection|
|»» aces|body|[object]| yes |none|
|»»» recipient|body|string| no |none|
|»»» modifiable|body|boolean| no |none|
|»»» recipientType|body|integer| no |none|
|»»» permissions|body|[integer]| no |none|
|»» entriesInheriting|body|boolean| yes |none|
|»» owner|body|string| yes |none|
|»» ownerType|body|integer| yes |none|

> Response Examples

```json
{
  "SampleData": "200"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title| description |
|---|---|---|---|---|---------------|
|» SampleData|string|true|none|| |

Return result code of each connection

#### Enum

| Name               | Value | description    |
|--------------------|-------|----------------|
| ${connectionName}  | 200   | success        |
| ${connectionName}  | 401   | no auth        |
| ${connectionName}  | 409   | not found      |
| ${connectionName}  | 500   | internal error |