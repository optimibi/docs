---
title: Add or modify a diction
permalink: /api/Dictionaries/Add or modify a diction/
tags: ["api","Dictionaries"]
description: 
---

## POST Add or modify a diction

POST /plugin/datafor-modeler/api/dict/update

> Body Parameters

```yaml
id: dev
name: dev
datatype: "2"
type: "2"
dbconn: foodmart
default: "1"
detail: select warehouse_class_id,description from foodmart.warehouse_class
expire: 86400

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» id|body|string| no |empty add otherwise update|
|» name|body|string| yes |none|
|» datatype|body|string| yes |1NUMBER2STRING|
|» type|body|string| yes |1list2sql|
|» dbconn|body|string| no |none|
|» default|body|string| no |none|
|» detail|body|string| no |string array or sql|
|» expire|body|integer| no |second|

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