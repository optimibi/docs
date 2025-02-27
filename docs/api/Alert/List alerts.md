---
title: List alerts
permalink: /api/Alert/List alerts/
tags: ["api","Alert"]
description: 
---

## POST List alerts

POST /plugin/datafor/api/alert/list

Preconditions: Current user needs read privileges to the alerts

> Body Parameters

```yaml
pagePath: /public/test.datafor
componentId: C739239F-4B54-6C90-8389-BF77F713AA98

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» pagePath|body|string| no |none|
|» componentId|body|string| no |id of component|

> Response Examples

```json
{
  "success": true,
  "data": [
    {
      "cron": {
        "complexJobTrigger": {
          "uiPassParam": "WEEKLY",
          "startTime": "2024-08-07T12:00:00.000+08:00",
          "endTime": null,
          "daysOfWeek": [
            "0"
          ]
        }
      },
      "componentId": "C739239F-4B54-6C90-8389-BF77F713AA98",
      "rule": {
        "conditions": [
          {
            "comparator": "between",
            "uniqueName": "[Measures].[store_sales]",
            "match": "any",
            "inclusiveLeft": true,
            "inclusiveRight": true,
            "id": "sales_fact.store_sales.1717310261398",
            "value": [
              1,
              2
            ]
          }
        ],
        "logical": "and/or"
      },
      "pagePath": "/public/test.datafor",
      "pageExists": true,
      "pagePathTitle": "/公共/test",
      "pageTitle": "测试",
      "title": "",
      "enabled": "1",
      "nextRun": 1739678400000,
      "emailConfig": {
        "ccUsers": [
          "sally"
        ],
        "subject": "标题",
        "executor": "admin",
        "bccUsers": [
          "linda"
        ],
        "toUsers": [
          "ada",
          "peter"
        ],
        "content": "富文本内容或普通文本内容"
      },
      "jobid": "admin\tAlertTaskAction\t64afc643-ea02-11ef-85a8-14755bc39e02",
      "channels": [
        "email"
      ],
      "componentTitle": "经营情况",
      "executor": "admin",
      "name": "测试预警",
      "state": "NORMAL",
      "qm": {
        "mdx": null,
        "metadata": {},
        "plugins": {},
        "name": "C739239F-4B54-6C90-8389-BF77F713AA98",
        "queryModel": {
          "calculatedMembers": [],
          "lowestLevelsOnly": false,
          "calculatedMeasures": [],
          "axes": {
            "FILTER": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [
                {
                  "schema": "workshop-model",
                  "cmembers": {},
                  "name": "[time_by_day].[AGG_the_date]",
                  "cube": "workshop-model",
                  "id": "UUID-344F5E34-451E-BB1A-B991-2D4192646E1B",
                  "levels": {
                    "the_date@@MONTHS": "[Object]"
                  }
                }
              ],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": false,
              "location": "FILTER",
              "filters": []
            },
            "COLUMNS": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": true,
              "location": "COLUMNS",
              "filters": [],
              "filterAxis": false
            },
            "ROWS": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [
                {
                  "cmembers": {},
                  "name": "[product_class].[hierarchy_product_family1]",
                  "filters": [],
                  "levels": {
                    "product_family": "[Object]"
                  }
                }
              ],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": true,
              "location": "ROWS",
              "filters": []
            }
          },
          "details": {
            "measures": [
              {
                "uniqueName": "[Measures].[sales_fact.store_sales]",
                "name": "sales_fact.store_sales",
                "caption": "store_sales",
                "id": "sales_fact.store_sales.1717310261398",
                "sort": 2,
                "type": "EXACT"
              }
            ],
            "location": "BOTTOM",
            "axis": "COLUMNS"
          },
          "visualTotalsPattern": null,
          "visualTotals": false
        },
        "cube": {
          "schema": "workshop-model",
          "uniqueName": "[workshop-model].[workshop-model].[workshop-model].[workshop-model]",
          "visible": true,
          "catalog": "workshop-model",
          "name": "workshop-model",
          "caption": "workshop-model",
          "connection": "workshop-model"
        },
        "type": "QUERYMODEL",
        "parameters": {},
        "properties": {
          "datafor.secret.appKey": "",
          "datafor.query.pick.row": "0,5000",
          "datafor.source.format": "true",
          "datafor.olap.result.formatter": "mix",
          "datafor.client.locale": "en",
          "datafor.client.timezone": "Asia/Shanghai"
        },
        "queryType": "OLAP"
      }
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
|» success|boolean|true|none||none|
|» data|[object]|true|none||none|
|»» cron|object|false|none||none|
|»»» complexJobTrigger|object|true|none||none|
|»»»» uiPassParam|string|true|none||none|
|»»»» startTime|string|true|none||none|
|»»»» endTime|null|true|none||none|
|»»»» daysOfWeek|[string]|true|none||none|
|»» componentId|string|false|none||none|
|»» rule|object|false|none||none|
|»»» conditions|[object]|true|none||none|
|»»»» comparator|string|false|none||none|
|»»»» uniqueName|string|false|none||none|
|»»»» match|string|false|none||none|
|»»»» inclusiveLeft|boolean|false|none||none|
|»»»» inclusiveRight|boolean|false|none||none|
|»»»» id|string|false|none||none|
|»»»» value|[integer]|false|none||none|
|»»» logical|string|true|none||none|
|»» pagePath|string|false|none||none|
|»» pageExists|boolean|false|none||none|
|»» pagePathTitle|string|false|none||none|
|»» pageTitle|string|false|none||none|
|»» title|string|false|none||none|
|»» enabled|string|false|none||none|
|»» nextRun|integer|false|none||none|
|»» emailConfig|object|false|none||none|
|»»» ccUsers|[string]|true|none||none|
|»»» subject|string|true|none||none|
|»»» executor|string|true|none||none|
|»»» bccUsers|[string]|true|none||none|
|»»» toUsers|[string]|true|none||none|
|»»» content|string|true|none||none|
|»» jobid|string|false|none||none|
|»» channels|[string]|false|none||none|
|»» componentTitle|string|false|none||none|
|»» executor|string|false|none||none|
|»» name|string|false|none||none|
|»» state|string|false|none||none|
|»» qm|object|false|none||none|
|»»» mdx|null|true|none||none|
|»»» metadata|object|true|none||none|
|»»» plugins|object|true|none||none|
|»»» name|string|true|none||none|
|»»» queryModel|object|true|none||none|
|»»»» calculatedMembers|[string]|true|none||none|
|»»»» lowestLevelsOnly|boolean|true|none||none|
|»»»» calculatedMeasures|[string]|true|none||none|
|»»»» axes|object|true|none||none|
|»»»»» FILTER|object|true|none||none|
|»»»»»» mdx|null|true|none||none|
|»»»»»» hierarchizeMode|null|true|none||none|
|»»»»»» hierarchies|[object]|true|none||none|
|»»»»»»» schema|string|false|none||none|
|»»»»»»» cmembers|object|false|none||none|
|»»»»»»» name|string|false|none||none|
|»»»»»»» cube|string|false|none||none|
|»»»»»»» id|string|false|none||none|
|»»»»»»» levels|object|false|none||none|
|»»»»»»»» the_date@@MONTHS|object|true|none||none|
|»»»»»»»»» mdx|null|true|none||none|
|»»»»»»»»» aggregators|[string]|true|none||none|
|»»»»»»»»» selection|object|true|none||none|
|»»»»»»»»»» members|[object]|true|none||none|
|»»»»»»»»»»» uniqueName|string|false|none||none|
|»»»»»»»»»»» caption|null|false|none||none|
|»»»»»»»»»» parameterName|null|true|none||none|
|»»»»»»»»»» type|string|true|none||none|
|»»»»»»»»» name|string|true|none||none|
|»»»»»»»»» caption|string|true|none||none|
|»»»»»»»»» filters|[string]|true|none||none|
|»»»»»» sortOrder|null|true|none||none|
|»»»»»» sortEvaluationLiteral|null|true|none||none|
|»»»»»» nonEmpty|boolean|true|none||none|
|»»»»»» location|string|true|none||none|
|»»»»»» filters|[string]|true|none||none|
|»»»»» COLUMNS|object|true|none||none|
|»»»»»» mdx|null|true|none||none|
|»»»»»» hierarchizeMode|null|true|none||none|
|»»»»»» hierarchies|[string]|true|none||none|
|»»»»»» sortOrder|null|true|none||none|
|»»»»»» sortEvaluationLiteral|null|true|none||none|
|»»»»»» nonEmpty|boolean|true|none||none|
|»»»»»» location|string|true|none||none|
|»»»»»» filters|[string]|true|none||none|
|»»»»»» filterAxis|boolean|true|none||none|
|»»»»» ROWS|object|true|none||none|
|»»»»»» mdx|null|true|none||none|
|»»»»»» hierarchizeMode|null|true|none||none|
|»»»»»» hierarchies|[object]|true|none||none|
|»»»»»»» cmembers|object|false|none||none|
|»»»»»»» name|string|false|none||none|
|»»»»»»» filters|[string]|false|none||none|
|»»»»»»» levels|object|false|none||none|
|»»»»»»»» product_family|object|true|none||none|
|»»»»»»»»» mdx|null|true|none||none|
|»»»»»»»»» aggregators|[string]|true|none||none|
|»»»»»»»»» selection|object|true|none||none|
|»»»»»»»»» name|string|true|none||none|
|»»»»»»»»» caption|string|true|none||none|
|»»»»»»»»» filters|[string]|true|none||none|
|»»»»»»»»» sort|integer|true|none||none|
|»»»»»» sortOrder|null|true|none||none|
|»»»»»» sortEvaluationLiteral|null|true|none||none|
|»»»»»» nonEmpty|boolean|true|none||none|
|»»»»»» location|string|true|none||none|
|»»»»»» filters|[string]|true|none||none|
|»»»» details|object|true|none||none|
|»»»»» measures|[object]|true|none||none|
|»»»»»» uniqueName|string|false|none||none|
|»»»»»» name|string|false|none||none|
|»»»»»» caption|string|false|none||none|
|»»»»»» id|string|false|none||none|
|»»»»»» sort|integer|false|none||none|
|»»»»»» type|string|false|none||none|
|»»»»» location|string|true|none||none|
|»»»»» axis|string|true|none||none|
|»»»» visualTotalsPattern|null|true|none||none|
|»»»» visualTotals|boolean|true|none||none|
|»»» cube|object|true|none||none|
|»»»» schema|string|true|none||none|
|»»»» uniqueName|string|true|none||none|
|»»»» visible|boolean|true|none||none|
|»»»» catalog|string|true|none||none|
|»»»» name|string|true|none||none|
|»»»» caption|string|true|none||none|
|»»»» connection|string|true|none||none|
|»»» type|string|true|none||none|
|»»» parameters|object|true|none||none|
|»»» properties|object|true|none||none|
|»»»» datafor.secret.appKey|string|true|none||none|
|»»»» datafor.query.pick.row|string|true|none||none|
|»»»» datafor.source.format|string|true|none||none|
|»»»» datafor.olap.result.formatter|string|true|none||none|
|»»»» datafor.client.locale|string|true|none||none|
|»»»» datafor.client.timezone|string|true|none||none|
|»»» queryType|string|true|none||none|