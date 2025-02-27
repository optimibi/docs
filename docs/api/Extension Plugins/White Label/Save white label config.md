---
title: Save white label config
permalink: /api/Extension Plugins/White Label/Save white label config/
tags: ["api","Extension Plugins","White Label"]
description: 
---

## POST Save white label config

POST /plugin/datafor-whitelabel/api/update

Preconditions:
1. install datafor-whitelabel plugin
2. The current user's user type must be Administrator

> Body Parameters

```yaml
login_title: Access and manage your instances from this account
login_copyright: Copyright ©2025 company All rights reserved.
main_title: Datafor Visualization and Analysis
main_subtitle: Discover the value of data，help your business smarter
enable_help: "1"
enable_start: "1"
wl_logo: file://E:\E\datafor\product\aws-server\datafor-server-dev-9.3\pentaho-solutions\system\datafor\ui\images\wl_logo.png
wl_main: file://E:\E\datafor\product\aws-server\datafor-server-dev-9.3\pentaho-solutions\system\datafor\ui\images\wl_main.png
wl_favicon: file://E:\E\datafor\product\aws-server\datafor-server-dev-9.3\pentaho-solutions\system\datafor\ui\images\wl_favicon.ico
wl_main_small: file://E:\E\datafor\product\aws-server\datafor-server-dev-9.3\pentaho-solutions\system\datafor\ui\images\wl_main_small.png

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» login_title|body|string| no |none|
|» login_copyright|body|string| no |none|
|» main_title|body|string| no |none|
|» main_subtitle|body|string| no |none|
|» enable_help|body|string| no |0false1true|
|» enable_start|body|string| no |0false1true|
|» wl_logo|body|string(binary)| no |png|
|» wl_main|body|string(binary)| no |png|
|» wl_favicon|body|string(binary)| no |ico|
|» wl_main_small|body|string(binary)| no |png|

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