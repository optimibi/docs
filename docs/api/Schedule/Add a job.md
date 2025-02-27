---
title: Add a job
permalink: /api/Schedule/Add a job/
tags: ["api","Schedule"]
description: 
---

## POST Add a job

POST /api/scheduler/job

> Body Parameters

```json
{
  "jobName": "Update_Logging_Datamart",
  "overwriteFile": "false",
  "simpleJobTrigger": {
    "uiPassParam": "RUN_ONCE",
    "repeatInterval": 0,
    "repeatCount": 0,
    "startTime": "2024-08-07T00:00:00.000+08:00",
    "endTime": null
  },
  "inputFile": "/public/pentaho-operations-mart/DI Ops Mart ETL/Update_Logging_Datamart.kjb",
  "outputFile": "/home/admin",
  "timeZone": "Etc/UCT",
  "jobParameters": []
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» jobName|body|string| yes |none|
|» overwriteFile|body|string| no |none|
|» simpleJobTrigger|body|object| no |none|
|»» uiPassParam|body|string| yes |none|
|»» repeatInterval|body|integer| yes |none|
|»» repeatCount|body|integer| yes |none|
|»» startTime|body|string| yes |none|
|»» endTime|body|null| yes |none|
|» inputFile|body|string| no |none|
|» outputFile|body|string| no |none|
|» timeZone|body|string| yes |none|
|» jobParameters|body|[string]| no |none|

> Response Examples

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|