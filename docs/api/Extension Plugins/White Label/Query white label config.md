---
title: Query white label config
permalink: /api/Extension Plugins/White Label/Query white label config/
tags: ["api","Extension Plugins","White Label"]
description: 
---

## POST Query white label config

POST /plugin/datafor/api/core/wl/query

> Response Examples

```json
{
  "code": "200",
  "data": {
    "main_subtitle": "Simplify Insights, Amplify Growth",
    "enable_start": "true",
    "login_copyright": "Copyright@ 2025 company",
    "enable_help": "true",
    "main_title": "product"
  },
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
|» code|string|true|none||none|
|» data|object|true|none||none|
|»» main_subtitle|string|true|none||none|
|»» enable_start|string|true|none||none|
|»» login_copyright|string|true|none||none|
|»» enable_help|string|true|none||none|
|»» main_title|string|true|none||none|
|» success|boolean|true|none||none|
