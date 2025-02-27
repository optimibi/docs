---
title: Init locale
permalink: /api/System Settings/Init locale/
tags: ["api","System Settings"]
description: 
---

## POST Init locale

POST /plugin/datafor/api/core/initLocale

after login,call this immediatly

> Body Parameters

```yaml
clientLocale: zh-CN

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» clientLocale|body|string| no |BCP47|

> Response Examples

```json
{
  "islogged": true,
  "locale": "en-US",
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
|» islogged|boolean|false|none||none|
|» locale|string|true|none||the one really effect|
|» success|boolean|true|none||none|