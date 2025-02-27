---
title: saml consumer
permalink: /api/Extension Plugins/SAML2/saml consumer/
tags: ["api","Extension Plugins","Authentication","SAML2"]
description: 
---

## POST saml consumer

POST /datafor/saml/consumer

Configuring the url in redirectUrl Section in SAML2 Provider
Redirecting to Initial URL After SAML2 Authentication

> Body Parameters

```yaml
SAMLResponse: PHNhbWxwXXXXXXXX==
ReadyState: f92cdfec-782c-XXXXXX-a33edbf88f67

```

### Params

|Name|Location|Type|Required|Title|Description|
|---|---|---|---|---|---|
|body|body|object| no ||none|
|» SAMLResponse|body|string| no ||none|
|» ReadyState|body|string| no ||none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
