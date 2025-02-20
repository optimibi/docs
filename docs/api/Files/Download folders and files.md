---
title: Download folders and files
permalink: /api/Files/Download folders and files/
tags: ["api","Files"]
description: 
---

## POST Download folders and files

POST /plugin/datafor-modeler/api/repo/files/downloadList

Preconditions:The current user has read authority of the folder or file

> Body Parameters

```yaml
pathList: '["/public/ivan.datafor"]'

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» pathList|body|string| no |none|

> Response Examples

> 200 Response

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
