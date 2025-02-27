---
title: Add an alert
permalink: /api/Alert/Add an alert/
tags: ["api","Alert"]
description: 
---

## POST Add  an alert

POST /plugin/datafor/api/alert/add

Preconditions:The cuccunt user's type cannot be SYS_Reader

1.Only table or cross table need to remove  the properties in queryModel
datafor.query.paging.size
datafor.query.paging.start
datafor.query.paging.subset.start
datafor.query.paging.subset.size

> Body Parameters

```json
{
  "pagePath": "/public/test.datafor",
  "componentId": "C739239F-4B54-6C90-8389-BF77F713AA98",
  "componentTitle": "经营情况",
  "enabled": "1",
  "name": "测试预警",
  "title": "",
  "rule": {
    "logical": "and/or",
    "conditions": [
      {
        "id": "sales_fact.store_sales.1717310261398",
        "uniqueName": "[Measures].[store_sales]",
        "comparator": ">=",
        "value": [
          1
        ],
        "match": "any"
      }
    ]
  },
  "qm": {
    "queryModel": {
      "axes": {
        "FILTER": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "FILTER",
          "hierarchies": [
            {
              "name": "[time_by_day].[AGG_the_date]",
              "levels": {
                "the_date@@MONTHS": {
                  "name": "the_date@@MONTHS",
                  "caption": "the_date(Month)",
                  "mdx": null,
                  "selection": {
                    "type": "INCLUSION",
                    "members": "[Object]",
                    "parameterName": null
                  },
                  "aggregators": [],
                  "filters": []
                }
              },
              "cmembers": {},
              "schema": "workshop-model",
              "cube": "workshop-model",
              "id": "UUID-344F5E34-451E-BB1A-B991-2D4192646E1B"
            }
          ],
          "nonEmpty": false
        },
        "COLUMNS": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "filterAxis": false,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "COLUMNS",
          "hierarchies": [],
          "nonEmpty": true
        },
        "ROWS": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "ROWS",
          "hierarchies": [
            {
              "name": "[product_class].[hierarchy_product_family1]",
              "levels": {
                "product_family": {
                  "name": "product_family",
                  "caption": "product_family",
                  "mdx": null,
                  "selection": {},
                  "aggregators": [],
                  "filters": [],
                  "sort": 1
                }
              },
              "cmembers": {},
              "filters": []
            }
          ],
          "nonEmpty": true
        }
      },
      "visualTotals": false,
      "visualTotalsPattern": null,
      "lowestLevelsOnly": false,
      "details": {
        "axis": "COLUMNS",
        "location": "BOTTOM",
        "measures": [
          {
            "caption": "store_sales",
            "name": "sales_fact.store_sales",
            "uniqueName": "[Measures].[sales_fact.store_sales]",
            "id": "sales_fact.store_sales.1717310261398",
            "type": "EXACT",
            "sort": 2
          }
        ]
      },
      "calculatedMeasures": [],
      "calculatedMembers": []
    },
    "queryType": "OLAP",
    "properties": {
      "datafor.query.pick.row": "0,5000",
      "datafor.secret.appKey": "",
      "datafor.olap.result.formatter": "mix",
      "datafor.client.timezone": "Asia/Shanghai",
      "datafor.client.locale": "en",
      "datafor.source.format": "true"
    },
    "parameters": {},
    "plugins": {},
    "mdx": null,
    "name": "C739239F-4B54-6C90-8389-BF77F713AA98",
    "metadata": {},
    "type": "QUERYMODEL",
    "cube": {
      "uniqueName": "[workshop-model].[workshop-model].[workshop-model].[workshop-model]",
      "name": "workshop-model",
      "connection": "workshop-model",
      "catalog": "workshop-model",
      "schema": "workshop-model",
      "caption": "workshop-model",
      "visible": true
    }
  },
  "cron": {
    "complexJobTrigger": {
      "endTime": null,
      "startTime": "2024-08-07T12:00:00.000+08:00",
      "uiPassParam": "WEEKLY",
      "daysOfWeek": [
        "0"
      ]
    }
  },
  "channels": [
    "email"
  ],
  "emailConfig": {
    "toUsers": [
      "admin",
      "peter"
    ],
    "ccUsers": [
      "sally"
    ],
    "bccUsers": [
      "linda"
    ],
    "subject": "标题",
    "content": "富文本内容或普通文本内容${value}"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» enabled|body|string| yes |1true0false|
|» name|body|string| yes |none|
|» title|body|string| yes |none|
|» rule|body|object| yes |none|
|»» logical|body|string| yes |none|
|»» conditions|body|[object]| yes |none|
|»»» id|body|string| yes |none|
|»»» uniqueName|body|string| yes |none|
|»»» comparator|body|string| yes |none|
|»»» value|body|[integer]| no |none|
|»»» inclusiveLeft|body|boolean| no |when comparator is between or not between need|
|»»» inclusiveRight|body|boolean| no |when comparator is between or not between need|
|»»» match|body|string| no |any/all，default is any|
|» qm|body|object| yes |none|
|»» queryModel|body|object| yes |none|
|»»» axes|body|object| yes |none|
|»»»» FILTER|body|object| yes |none|
|»»»»» mdx|body|null| yes |none|
|»»»»» filters|body|[string]| yes |none|
|»»»»» sortOrder|body|null| yes |none|
|»»»»» sortEvaluationLiteral|body|null| yes |none|
|»»»»» hierarchizeMode|body|null| yes |none|
|»»»»» location|body|string| yes |none|
|»»»»» hierarchies|body|[object]| yes |none|
|»»»»»» name|body|string| no |none|
|»»»»»» levels|body|object| no |none|
|»»»»»»» the_date@@MONTHS|body|object| yes |none|
|»»»»»»»» name|body|string| yes |none|
|»»»»»»»» caption|body|string| yes |none|
|»»»»»»»» mdx|body|null| yes |none|
|»»»»»»»» selection|body|object| yes |none|
|»»»»»»»»» type|body|string| yes |none|
|»»»»»»»»» members|body|[object]| yes |none|
|»»»»»»»»»» uniqueName|body|string| no |none|
|»»»»»»»»»» caption|body|null| no |none|
|»»»»»»»»» parameterName|body|null| yes |none|
|»»»»»»»» aggregators|body|[string]| yes |none|
|»»»»»»»» filters|body|[string]| yes |none|
|»»»»»» cmembers|body|object| no |none|
|»»»»»» schema|body|string| no |none|
|»»»»»» cube|body|string| no |none|
|»»»»»» id|body|string| no |none|
|»»»»» nonEmpty|body|boolean| yes |none|
|»»»» COLUMNS|body|object| yes |none|
|»»»»» mdx|body|null| yes |none|
|»»»»» filters|body|[string]| yes |none|
|»»»»» sortOrder|body|null| yes |none|
|»»»»» filterAxis|body|boolean| yes |none|
|»»»»» sortEvaluationLiteral|body|null| yes |none|
|»»»»» hierarchizeMode|body|null| yes |none|
|»»»»» location|body|string| yes |none|
|»»»»» hierarchies|body|[string]| yes |none|
|»»»»» nonEmpty|body|boolean| yes |none|
|»»»» ROWS|body|object| yes |none|
|»»»»» mdx|body|null| yes |none|
|»»»»» filters|body|[string]| yes |none|
|»»»»» sortOrder|body|null| yes |none|
|»»»»» sortEvaluationLiteral|body|null| yes |none|
|»»»»» hierarchizeMode|body|null| yes |none|
|»»»»» location|body|string| yes |none|
|»»»»» hierarchies|body|[object]| yes |none|
|»»»»»» name|body|string| no |none|
|»»»»»» levels|body|object| no |none|
|»»»»»»» product_family|body|object| yes |none|
|»»»»»»»» name|body|string| yes |none|
|»»»»»»»» caption|body|string| yes |none|
|»»»»»»»» mdx|body|null| yes |none|
|»»»»»»»» selection|body|object| yes |none|
|»»»»»»»» aggregators|body|[string]| yes |none|
|»»»»»»»» filters|body|[string]| yes |none|
|»»»»»»»» sort|body|integer| yes |none|
|»»»»»» cmembers|body|object| no |none|
|»»»»»» filters|body|[string]| no |none|
|»»»»» nonEmpty|body|boolean| yes |none|
|»»» visualTotals|body|boolean| yes |none|
|»»» visualTotalsPattern|body|null| yes |none|
|»»» lowestLevelsOnly|body|boolean| yes |none|
|»»» details|body|object| yes |none|
|»»»» axis|body|string| yes |none|
|»»»» location|body|string| yes |none|
|»»»» measures|body|[object]| yes |none|
|»»»»» caption|body|string| no |none|
|»»»»» name|body|string| no |none|
|»»»»» uniqueName|body|string| no |none|
|»»»»» id|body|string| no |none|
|»»»»» type|body|string| no |none|
|»»»»» sort|body|integer| no |none|
|»»» calculatedMeasures|body|[string]| yes |none|
|»»» calculatedMembers|body|[string]| yes |none|
|»» queryType|body|string| yes |none|
|»» properties|body|object| yes |none|
|»»» datafor.query.pick.row|body|string| no |none|
|»»» datafor.secret.appKey|body|string| no |none|
|»»» datafor.olap.result.formatter|body|string| no |none|
|»»» datafor.client.timezone|body|string| no |none|
|»»» datafor.client.locale|body|string| no |none|
|»»» datafor.source.format|body|string| no |none|
|»» parameters|body|object| yes |none|
|»» plugins|body|object| yes |none|
|»» mdx|body|null| yes |none|
|»» name|body|string| yes |it is the componentId|
|»» metadata|body|object| yes |none|
|»» type|body|string| yes |none|
|»» cube|body|object| yes |none|
|»»» uniqueName|body|string| yes |none|
|»»» name|body|string| yes |none|
|»»» connection|body|string| yes |none|
|»»» catalog|body|string| yes |none|
|»»» schema|body|string| yes |none|
|»»» caption|body|string| yes |none|
|»»» visible|body|boolean| yes |none|
|» cron|body|object| yes |none|
|»» complexJobTrigger|body|object| yes |none|
|»»» endTime|body|null| yes |none|
|»»» startTime|body|string| yes |none|
|»»» uiPassParam|body|string| yes |none|
|»»» daysOfWeek|body|[string]| yes |none|
|» channels|body|[string]| yes |none|
|» emailConfig|body|object| yes |none|
|»» toUsers|body|[string]| yes |none|
|»» ccUsers|body|[string]| yes |none|
|»» bccUsers|body|[string]| yes |none|
|»» subject|body|string| yes |none|
|»» content|body|string| yes |none|
|» pagePath|body|string| yes |the full path of the page|
|» componentId|body|string| yes |none|
|» componentTitle|body|string| yes |none|

#### Enum

|Name|Value|
|---|---|
|»» logical|and|
|»» logical|or|
|»»» comparator|<|
|»»» comparator|>|
|»»» comparator|<=|
|»»» comparator|>=|
|»»» comparator|==|
|»»» comparator|!=|
|»»» comparator|between|
|»»» comparator|not between|
|»»» comparator|in|
|»»» comparator|not in|
|»»» comparator|is empty|
|»»» comparator|is not empty|

> Response Examples

```json
{
  "msg": "success",
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
|» success|boolean|true|none||none|