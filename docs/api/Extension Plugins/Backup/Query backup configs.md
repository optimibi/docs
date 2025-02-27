---
title: Query backup configs
permalink: /api/Extension Plugins/Backup/Query backup configs/
tags: ["api","Extension Plugins","Backup"]
description: 
---

## POST Query backup configs

POST /plugin/datafor-backup/api/query

Preconditions:The current user's user type must be Administrator

> Body Parameters

```yaml
{}

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Cookie|header|string| yes |none|
|Content-Type|header|string| yes |none|
|body|body|object| no |none|

> Response Examples

```json
{
  "msg": "",
  "data": [
    {
      "cron": "{\"complexJobTrigger\":{\"endTime\":null,\"startTime\":\"2024-11-15T11:12:00.000+08:00\",\"uiPassParam\":\"DAILY\",\"repeatCount\":-1,\"cronString\":\"TO_BE_GENERATED\",\"repeatInterval\":259200}}",
      "add_by": "admin",
      "trigger": "0 12 11 */3 * ? *",
      "nextRun": 1740712320000,
      "jobid": "admin\tBackupTaskAction\td90a02fa-f4b3-11ef-833b-14755bc39e02",
      "update_time": "2025-02-27 10:37:54.827",
      "folder": "backup/",
      "enable": "1",
      "name": "ll",
      "id": "51b51905fc0b482f995f0f32b48105ba",
      "state": "NORMAL",
      "update_by": "admin",
      "config": "[{\"id\":\"upload\"}]",
      "add_time": "2024-11-15 11:02:41.876"
    }
  ],
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
|» data|[object]|true|none||none|
|»» cron|string|false|none||none|
|»» add_by|string|false|none||none|
|»» trigger|string|false|none||none|
|»» nextRun|integer|false|none||none|
|»» jobid|string|false|none||none|
|»» update_time|string|false|none||none|
|»» folder|string|false|none||none|
|»» enable|string|true|none||none|
|»» name|string|true|none||none|
|»» id|string|true|none||none|
|»» state|string|true|none||none|
|»» update_by|string|false|none||none|
|»» config|string|true|none||none|
|»» add_time|string|true|none||none|
|» success|boolean|true|none||none|