---
title: Set olap config
permalink: /api/System Settings/Set olap config/
tags: ["api","System Settings"]
description: 
---

## GET Query System Config

GET /plugin/datafor/api/system/settings/query

> Response Examples

```json
{
  "code": "200",
  "data": {
    "locale-country": "",
    "cors-requests-allowed": "true",
    "cors-requests-exposed-headers": "",
    "cors-requests-allowed-domains": "http://test.com, http://localhost:28080, http://localhost:63342, https://aws.datafor.com.cn:448, http://117.144.48.146:48480, https://login.microsoftonline.com, null",
    "cors-requests-allowed-methods": "GET,HEAD,POST",
    "cors-requests-allow-credentials": "true",
    "fully-qualified-server-url": "http://localhost:28080/datafor/",
    "allowRegister": "true",
    "cors-requests-allowed-headers": "CONTENT-TYPE,X-CSRF-TOKEN",
    "locale-language": "",
    "cors-root-config-is-abstract": "false"
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
|» code|string|false|none||none|
|» data|object|true|none||none|
|»» locale-country|string|true|none||none|
|»» cors-requests-allowed|string|true|none||none|
|»» cors-requests-exposed-headers|string|true|none||none|
|»» cors-requests-allowed-domains|string|true|none||none|
|»» cors-requests-allowed-methods|string|true|none||none|
|»» cors-requests-allow-credentials|string|true|none||none|
|»» fully-qualified-server-url|string|true|none||none|
|»» allowRegister|string|true|none||none|
|»» cors-requests-allowed-headers|string|true|none||none|
|»» locale-language|string|true|none||none|
|»» cors-root-config-is-abstract|string|true|none||none|
|» success|boolean|true|none||none|