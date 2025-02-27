---
title: Get version
permalink: /api/Version/Get version/
tags: ["api","Version"]
description: 
---

## GET Get version

GET /plugin/datafor/api/version/info

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|refresh|query|string| no |none|

> Response Examples

```json
{
  "current": {
    "buildId": "datafor-2024-07-26",
    "branch": "commercial",
    "version": "6.06"
  },
  "success": true,
  "newest": {
    "buildId": "datafor-2022-06-14",
    "branch": "commercial",
    "version": "4.01"
  },
  "status": -1
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
|» current|object|true|none||none|
|»» buildId|string|true|none||none|
|»» branch|string|true|none||none|
|»» version|string|true|none||none|
|» success|boolean|true|none||none|
|» newest|object|false|none||none|
|»» buildId|string|false|none||none|
|»» branch|string|false|none||none|
|»» version|string|false|none||none|
|» status|integer|true|none||none|