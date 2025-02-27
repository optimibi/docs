---
title: Get jobs
permalink: /api/Schedule/Get jobs/
tags: ["api","Schedule"]
description: 
---

## GET Get jobs

GET /api/scheduler/getJobs

> Response Examples

```json
{
  "job": [
    {
      "groupName": "admin",
      "jobId": "admin\tPentahoSystemVersionCheck\t350ab76c-52f3-11ef-8d47-14755bc39e02",
      "jobName": "PentahoSystemVersionCheck",
      "jobParams": {
        "jobParams": [
          {
            "name": "ActionAdapterQuartzJob-ActionUser",
            "value": "admin"
          },
          {
            "name": "lineage-id",
            "value": "68bf0d34-4848-4061-abd0-ed334b5ce68d"
          },
          {
            "name": "ActionAdapterQuartzJob-ActionClass",
            "value": "org.pentaho.platform.scheduler2.versionchecker.VersionCheckerAction"
          },
          {
            "name": "versionRequestFlags",
            "value": "0"
          }
        ]
      },
      "jobTrigger": {
        "@type": "simpleJobTrigger",
        "duration": "-1",
        "startTime": "2024-08-05T14:23:18.893+08:00",
        "repeatCount": "-1",
        "repeatInterval": "86400"
      },
      "lastRun": "2024-08-06T14:23:18.893+08:00",
      "nextRun": "2024-08-07T14:23:18.893+08:00",
      "state": "NORMAL",
      "userName": "admin"
    }
  ]
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
|» job|[object]|true|none||none|
|»» groupName|string|false|none||none|
|»» jobId|string|false|none||none|
|»» jobName|string|false|none||none|
|»» jobParams|object|false|none||none|
|»»» jobParams|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» value|string|true|none||none|
|»» jobTrigger|object|false|none||none|
|»»» @type|string|true|none||none|
|»»» duration|string|true|none||none|
|»»» startTime|string|true|none||none|
|»»» repeatCount|string|true|none||none|
|»»» repeatInterval|string|true|none||none|
|»» lastRun|string|false|none||none|
|»» nextRun|string|false|none||none|
|»» state|string|false|none||none|
|»» userName|string|false|none||none|