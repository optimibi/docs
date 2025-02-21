---
title: Delete a connection
permalink: /api/Connections/Delete a connection/
tags: ["api","Connections"]
description: 
---

## DELETE Delete a connection

DELETE /plugin/datafor-modeler/api/connection/deletebyname

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| no |none|

> Response Examples

> 200 Response

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
