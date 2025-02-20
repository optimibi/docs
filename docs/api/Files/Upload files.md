---
title: Upload files
permalink: /api/Files/Upload files/
tags: ["api","Files"]
description: 
---

## POST Upload file

POST /plugin/datafor-modeler/api/repo/files/import

when only use importDir and fileUpload and smart true,if it is a new file or dir, the acl is uploader's administrator acl.If already existed,don't change acl.

> Body Parameters

```yaml
importDir: /public
fileUpload: file://E:\E\datafor\001.datafor\temp\schema-Demo.zip
smart: "true"

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» importDir|body|string| no |default is /public,upload models can be empty|
|» fileUpload|body|string(binary)| yes |none|
|» smart|body|boolean| no |default is true,if it is a new file or dir, the acl is uploader's administrator acl.If already existed,don't change acl.|

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