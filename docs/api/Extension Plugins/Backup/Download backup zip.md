---
title: Download backup zip
permalink: /api/Extension Plugins/Backup/Download backup zip/
tags: ["api","Extension Plugins","Backup"]
description: 
---

## GET Download backup zip

GET /plugin/datafor-backup/api/log/download

Preconditions:The current user's user type must be Administrator

> Body Parameters

```yaml
id: Backup_2023.10.27-10.59.45.850+0800

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|query|string| yes |none|
|Cookie|header|string| yes |none|
|body|body|object| no |none|
|» id|body|string| yes |none|

> Response Examples

> 200 Response

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|