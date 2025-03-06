---
title: Add an alert
permalink: /api/Alert/Add an alert/
tags: ["api","Alert"]
description: 
---

## Add an alert

**Method**

`POST`

**Request URL**

```html
/plugin/datafor/api/alert/add
```

---

**Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.

**Note**
- For **table** or **cross table** components, remove the following properties in `queryModel` if they appear:
    - `datafor.query.paging.size`
    - `datafor.query.paging.start`
    - `datafor.query.paging.subset.start`
    - `datafor.query.paging.subset.size`

---

## **Request Body Example**

```json
{
  "pagePath": "/public/test.datafor",
  "componentId": "C739239F-4B54-6C90-8389-BF77F713AA98",
  "componentTitle": "经营情况",
  "enabled": "1",
  "name": "测试预警",
  "title": "",
  "rule": {
    "logical": "and",
    "conditions": [
      {
        "id": "sales_fact.store_sales.1717310261398",
        "uniqueName": "[Measures].[store_sales]",
        "comparator": ">=",
        "value": [1],
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
      "daysOfWeek": ["0"]
    }
  },
  "channels": ["email"],
  "emailConfig": {
    "toUsers": ["admin", "peter"],
    "ccUsers": ["sally"],
    "bccUsers": ["linda"],
    "subject": "标题",
    "content": "富文本内容或普通文本内容${value}"
  }
}
```

---

## **Body Parameters**

| Name                                        | Location | Type     | Required | Description                                                      |
|---------------------------------------------|----------|---------:|:--------|------------------------------------------------------------------|
| body                                        | body     | object   | No       | Overall JSON payload                                             |
| **enabled**                                 | body     | string   | **Yes**  | `1` (true) or `0` (false)                                        |
| **name**                                    | body     | string   | **Yes**  | Alert name                                                        |
| **title**                                   | body     | string   | **Yes**  | Alert title (can be empty string)                                 |
| **rule**                                    | body     | object   | **Yes**  | Rule definition                                                  |
| ┣━ **logical**                              | body     | string   | **Yes**  | `and` / `or`                                                     |
| ┗━ **conditions**                           | body     | [object] | **Yes**  | Condition objects                                                |
| ┗━ **id**                                   | body     | string   | **Yes**  | Measure/metric ID                                                |
| ┗━ **uniqueName**                           | body     | string   | **Yes**  | Unique measure identifier                                        |
| ┗━ **comparator**                           | body     | string   | **Yes**  | `<` / `>` / `<=` / `>=` / `==` / `!=` / `between` / ...          |
| ┗━ value                                    | body     | [integer]| No       | Used by comparators expecting numeric values                     |
| ┗━ inclusiveLeft                            | body     | boolean  | No       | For `between`/`not between`                                      |
| ┗━ inclusiveRight                           | body     | boolean  | No       | For `between`/`not between`                                      |
| ┗━ match                                    | body     | string   | No       | `any` / `all` (default: `any`)                                   |
| **qm**                                      | body     | object   | **Yes**  | Query configuration object                                       |
| ┣━ **queryModel**                           | body     | object   | **Yes**  | Axes, details, measures, etc.                                    |
| ┃━ **axes**                                 | body     | object   | **Yes**  | Defines `FILTER`, `COLUMNS`, `ROWS` axes                         |
| ┃━ **FILTER**                               | body     | object   | **Yes**  | Filter axis configuration                                        |
| ┃━━ mdx                                     | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ filters                                 | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━ sortOrder                               | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ sortEvaluationLiteral                   | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ hierarchizeMode                         | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ **location**                            | body     | string   | **Yes**  | `FILTER`                                                         |
| ┃━━ **hierarchies**                         | body     | [object] | **Yes**  | Hierarchy definitions                                            |
| ┃━━━ name                                   | body     | string   | No       | Hierarchy name                                                   |
| ┃━━━ levels                                 | body     | object   | No       | Contains the level objects                                      |
| ┃━━━ **the_date@@MONTHS**                  | body     | object   | **Yes**  | Example level                                                    |
| ┃━━━━ name                                  | body     | string   | **Yes**  | Level name                                                       |
| ┃━━━━ caption                               | body     | string   | **Yes**  | Level caption                                                    |
| ┃━━━━ mdx                                   | body     | null     | **Yes**  | N/A                                                              |
| ┃━━━━ **selection**                         | body     | object   | **Yes**  | Defines members, parameter, etc.                                 |
| ┃━━━━━ type                                 | body     | string   | **Yes**  | e.g., `INCLUSION`                                                |
| ┃━━━━━ members                              | body     | [object] | **Yes**  | Members of the selection                                        |
| ┃━━━━━ parameterName                        | body     | null     | **Yes**  | N/A                                                              |
| ┃━━━━ aggregators                           | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━━━ filters                               | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━━ cmembers                               | body     | object   | No       | Calculated members                                               |
| ┃━━━ schema                                 | body     | string   | No       | Schema name                                                      |
| ┃━━━ cube                                   | body     | string   | No       | Cube name                                                        |
| ┃━━━ id                                     | body     | string   | No       | Hierarchy ID                                                     |
| ┃━━ nonEmpty                                | body     | boolean  | **Yes**  | Exclude empty cells                                              |
| ┃━ **COLUMNS**                              | body     | object   | **Yes**  | Columns axis configuration                                       |
| ┃━━ mdx                                     | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ filters                                 | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━ sortOrder                               | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ **filterAxis**                          | body     | boolean  | **Yes**  | Whether to apply a filter                                        |
| ┃━━ sortEvaluationLiteral                   | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ hierarchizeMode                         | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ **location**                            | body     | string   | **Yes**  | `COLUMNS`                                                        |
| ┃━━ **hierarchies**                         | body     | [string] | **Yes**  | Array of hierarchies                                             |
| ┃━━ nonEmpty                                | body     | boolean  | **Yes**  | Exclude empty cells                                              |
| ┃━ **ROWS**                                 | body     | object   | **Yes**  | Rows axis configuration                                          |
| ┃━━ mdx                                     | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ filters                                 | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━ sortOrder                               | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ sortEvaluationLiteral                   | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ hierarchizeMode                         | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ **location**                            | body     | string   | **Yes**  | `ROWS`                                                           |
| ┃━━ **hierarchies**                         | body     | [object] | **Yes**  | Rows hierarchy definitions                                       |
| ┃━━━ name                                   | body     | string   | No       | Hierarchy name                                                   |
| ┃━━━ levels                                 | body     | object   | No       | Contains the level objects                                      |
| ┃━━━ **product_family**                     | body     | object   | **Yes**  | Example level                                                    |
| ┃━━━━ name                                  | body     | string   | **Yes**  | Level name                                                       |
| ┃━━━━ caption                               | body     | string   | **Yes**  | Caption                                                          |
| ┃━━━━ mdx                                   | body     | null     | **Yes**  | N/A                                                              |
| ┃━━━━ **selection**                         | body     | object   | **Yes**  | Selection object                                                 |
| ┃━━━━ aggregators                           | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━━━ filters                               | body     | [string] | **Yes**  | N/A                                                              |
| ┃━━━━ sort                                  | body     | integer  | **Yes**  | Sort order                                                       |
| ┃━━━ cmembers                               | body     | object   | No       | Calculated members                                               |
| ┃━━━ filters                                | body     | [string] | No       | Additional filters                                               |
| ┃━━ nonEmpty                                | body     | boolean  | **Yes**  | Exclude empty cells                                              |
| ┣━ **visualTotals**                         | body     | boolean  | **Yes**  | Enable or disable visual totals                                  |
| ┣━ visualTotalsPattern                      | body     | null     | **Yes**  | N/A                                                              |
| ┣━ **lowestLevelsOnly**                     | body     | boolean  | **Yes**  | Only lowest levels or not                                        |
| ┣━ **details**                              | body     | object   | **Yes**  | Additional detail settings                                       |
| ┃━ axis                                     | body     | string   | **Yes**  | e.g., `COLUMNS`                                                  |
| ┃━ location                                 | body     | string   | **Yes**  | e.g., `BOTTOM`                                                   |
| ┃━ **measures**                             | body     | [object] | **Yes**  | Measure definitions                                              |
| ┃━━ caption                                 | body     | string   | No       | e.g., `store_sales`                                              |
| ┃━━ name                                    | body     | string   | No       | e.g., `sales_fact.store_sales`                                   |
| ┃━━ uniqueName                              | body     | string   | No       | e.g., `[Measures].[sales_fact.store_sales]`                      |
| ┃━━ id                                      | body     | string   | No       | Unique measure ID                                                |
| ┃━━ type                                    | body     | string   | No       | e.g., `EXACT`                                                    |
| ┃━━ sort                                    | body     | integer  | No       | Sort order                                                       |
| ┣━ **calculatedMeasures**                   | body     | [string] | **Yes**  | Calculated measures array                                        |
| ┣━ **calculatedMembers**                    | body     | [string] | **Yes**  | Calculated members array                                        |
| ┣━ **queryType**                            | body     | string   | **Yes**  | e.g., `OLAP`                                                     |
| ┣━ **properties**                           | body     | object   | **Yes**  | Misc. properties                                                 |
| ┃━━ datafor.query.pick.row                  | body     | string   | No       | e.g., `0,5000`                                                   |
| ┃━━ datafor.secret.appKey                   | body     | string   | No       | App key                                                          |
| ┃━━ datafor.olap.result.formatter           | body     | string   | No       | e.g., `mix`                                                      |
| ┃━━ datafor.client.timezone                 | body     | string   | No       | e.g., `Asia/Shanghai`                                            |
| ┃━━ datafor.client.locale                   | body     | string   | No       | e.g., `en`                                                       |
| ┃━━ datafor.source.format                   | body     | string   | No       | e.g., `true`                                                     |
| ┣━ **parameters**                           | body     | object   | **Yes**  | Query parameters                                                 |
| ┣━ **plugins**                              | body     | object   | **Yes**  | Plugin-related configuration                                     |
| ┣━ mdx                                      | body     | null     | **Yes**  | N/A                                                              |
| ┣━ **name**                                 | body     | string   | **Yes**  | Same as `componentId`                                            |
| ┣━ **metadata**                             | body     | object   | **Yes**  | Metadata object                                                  |
| ┣━ **type**                                 | body     | string   | **Yes**  | e.g., `QUERYMODEL`                                               |
| ┗━ **cube**                                 | body     | object   | **Yes**  | Cube definition                                                  |
| ┗━ uniqueName                               | body     | string   | **Yes**  | e.g., `[workshop-model].[...]`                                   |
| ┗━ name                                     | body     | string   | **Yes**  | Cube name                                                        |
| ┗━ connection                               | body     | string   | **Yes**  | Connection name                                                  |
| ┗━ catalog                                  | body     | string   | **Yes**  | Catalog name                                                     |
| ┗━ schema                                   | body     | string   | **Yes**  | Schema name                                                      |
| ┗━ caption                                  | body     | string   | **Yes**  | Cube caption                                                     |
| ┗━ visible                                  | body     | boolean  | **Yes**  | Cube visibility                                                 |
| **cron**                                    | body     | object   | **Yes**  | Scheduling config                                                |
| ┣━ **complexJobTrigger**                    | body     | object   | **Yes**  | Complex trigger settings                                         |
| ┃━━ endTime                                 | body     | null     | **Yes**  | N/A                                                              |
| ┃━━ **startTime**                           | body     | string   | **Yes**  | e.g., `2024-08-07T12:00:00.000+08:00`                            |
| ┃━━ **uiPassParam**                         | body     | string   | **Yes**  | e.g., `WEEKLY`                                                   |
| ┃━━ **daysOfWeek**                          | body     | [string] | **Yes**  | e.g., `["0"]` for Sunday                                         |
| **channels**                                | body     | [string] | **Yes**  | e.g., `["email"]`                                                |
| **emailConfig**                             | body     | object   | **Yes**  | Email alert configuration                                        |
| ┣━ **toUsers**                              | body     | [string] | **Yes**  | Usernames to send to                                             |
| ┣━ **ccUsers**                              | body     | [string] | **Yes**  | CC recipients                                                    |
| ┣━ **bccUsers**                             | body     | [string] | **Yes**  | BCC recipients                                                   |
| ┣━ **subject**                              | body     | string   | **Yes**  | Email subject                                                    |
| ┗━ **content**                              | body     | string   | **Yes**  | Email body (rich text or plain text)                             |
| **pagePath**                                | body     | string   | **Yes**  | Full page path (e.g., `/public/...`)                             |
| **componentId**                             | body     | string   | **Yes**  | Component ID                                                     |
| **componentTitle**                          | body     | string   | **Yes**  | Component title                                                  |

---

## **Enum Values**

| Name            | Value                                                                         |
|-----------------|-------------------------------------------------------------------------------|
| `rule.logical`  | `and`, `or`                                                                   |
| `comparator`    | `<`, `>`, `<=`, `>=`, `==`, `!=`, `between`, `not between`, `in`, `not in`, `is empty`, `is not empty` |

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description    |
|-----------|---------|---------:|----------------|
| `msg`     | string  | No       | Message string |
| `success` | boolean | **Yes**  | Request status |