---
title: Set System Config
permalink: /api/System Settings/Set System Config/
tags: ["api","System Settings"]
description: 
---

## POST Set System Config

POST /plugin/datafor/api/system/settings/update

no need to set all keys ,but you can choose some

> Body Parameters

```json
{
  "locale-country": "",
  "cors-requests-allowed": "true",
  "cors-requests-exposed-headers": "",
  "cors-requests-allowed-domains": "http://test.com, http://localhost:28080, http://localhost:63342, https://login.microsoftonline.com, null",
  "cors-requests-allowed-methods": "GET,HEAD,POST",
  "cors-requests-allow-credentials": "true",
  "fully-qualified-server-url": "http://localhost:28080/datafor/",
  "allowRegister": "true",
  "cors-requests-allowed-headers": "CONTENT-TYPE,X-CSRF-TOKEN",
  "locale-language": "",
  "cors-root-config-is-abstract": "false"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» locale-country|body|string| no |do not use|
|» cors-requests-allowed|body|string| no |none|
|» cors-requests-exposed-headers|body|string| no |none|
|» cors-requests-allowed-domains|body|string| no |none|
|» cors-requests-allowed-methods|body|string| no |none|
|» cors-requests-allow-credentials|body|string| no |none|
|» fully-qualified-server-url|body|string| no |none|
|» allowRegister|body|string| no |none|
|» cors-requests-allowed-headers|body|string| no |none|
|» locale-language|body|string| no |do not use|
|» cors-root-config-is-abstract|body|string| no |none|

> Response Examples

```json
{
  "code": "200",
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
|» code|string|false|none||none|
|» msg|string|false|none||none|