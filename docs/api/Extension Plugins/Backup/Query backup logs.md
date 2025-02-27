---
title: Query backup logs
permalink: /api/Extension Plugins/Backup/Query backup logs/
tags: ["api","Extension Plugins","Backup"]
description: 
---

## POST Query backup logs

POST /plugin/datafor-backup/api/log/query

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
      "cron": "{\"complexJobTrigger\":{\"endTime\":null,\"startTime\":\"2024-11-15T11:12:00.000+08:00\",\"uiPassParam\":\"DAILY\",\"repeatCount\":-1,\"daysOfWeek\":[\"1\",\"2\",\"3\",\"4\",\"5\"]}}",
      "update_time": "2025-02-26 11:12:00.35",
      "folder": "backup/",
      "add_by": "admin",
      "backupid": "51b51905fc0b482f995f0f32b48105ba",
      "name": "ll",
      "id": "Backup_2025.02.26-11.12.00.205+0800",
      "update_by": "admin",
      "config": "[{\"id\":\"upload\"}]",
      "add_time": "2025-02-26 11:12:00.207",
      "status": "1"
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
|»» update_time|string|false|none||none|
|»» folder|string|false|none||none|
|»» add_by|string|false|none||none|
|»» backupid|string|false|none||none|
|»» name|string|false|none||none|
|»» id|string|false|none||none|
|»» update_by|string|false|none||none|
|»» config|string|false|none||none|
|»» add_time|string|false|none||none|
|»» status|string|false|none||none|
|» success|boolean|true|none||none|