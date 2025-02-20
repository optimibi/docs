---
title: Download folder
permalink: /api/Folders/:title/
tags: ["api","Folders"]
description: 
---

## GET Download folder

GET /plugin/datafor-modeler/api/repo/files/download

Preconditions:The current user has administrator authority of the folder

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|string| no |none|
|withManifest|query|string| no |none|

> Response Examples

> 200 Response

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

### Response Header

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Type|string||none|