---
title: Execute an alert
permalink: /api/Alert/Execute an alert/
tags: ["api","Alert"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/alert/execute
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user must have **read** privileges for the alert.

---

### **Parameters**

| Name  | Location | Type   | Required | Description             |
|-------|----------|--------|----------|-------------------------|
| **body** | body     | object | No       | Overall JSON payload    |
| ├── **pagePath**         | body | string   | No  | Full path of the page (e.g., `/public/test.datafor`) |
| ├── **componentId**      | body | string   | No  | Component identifier    |
| ├── **componentTitle**   | body | string   | No  | Component title (e.g., "经营情况") |
| ├── **enabled**          | body | string   | Yes | Whether alert is enabled: `1` (true) or `0` (false) |
| ├── **name**             | body | string   | No  | Alert name             |
| ├── **title**            | body | string   | No  | Alert title (can be empty) |
| ├── **rule**             | body | object   | Yes | Defines the alert conditions |
| │   ├── **logical**      | body | string   | Yes | Logical operator (`and` / `or`) |
| │   └── **conditions**   | body | [object] | Yes | Array of condition objects |
| │       ├── **id**           | body | string   | No  | Unique condition or measure ID |
| │       ├── **uniqueName**   | body | string   | No  | Unique measure identifier      |
| │       ├── **comparator**   | body | string   | No  | Comparison operator (`>=`, `<=`, `in`, `not in`, etc.) |
| │       ├── **value**        | body | [integer]| No  | Numeric threshold(s) for the comparator |
| │       └── **match**        | body | string   | No  | `any` or `all` (default: `any`) |
| ├── **qm**                | body | object | Yes | Query configuration wrapper  |
| │   ├── **queryModel**    | body | object | Yes | Defines the axes, measures, etc. |
| │   │   ├── **axes**      | body | object | Yes | Object containing `FILTER`, `COLUMNS`, `ROWS` |
| │   │   │   ├── **FILTER**   | body | object | Yes | Filter axis configuration  |
| │   │   │   ├── **COLUMNS**  | body | object | Yes | Columns axis configuration |
| │   │   │   └── **ROWS**     | body | object | Yes | Rows axis configuration    |
| │   │   ├── **visualTotals**        | body | boolean | Yes | Whether to enable visual totals |
| │   │   ├── **visualTotalsPattern** | body | null    | Yes | Not used in this example   |
| │   │   ├── **lowestLevelsOnly**    | body | boolean | Yes | Whether to only show lowest levels of the hierarchy |
| │   │   ├── **details**             | body | object  | Yes | Additional detail settings |
| │   │   ├── **calculatedMeasures**  | body | [string]| Yes | Calculated measure definitions |
| │   │   ├── **calculatedMembers**   | body | [string]| Yes | Calculated member definitions |
| │   │   ├── **queryType**           | body | string  | Yes | E.g., `OLAP`                |
| │   │   ├── **properties**          | body | object  | Yes | Query properties (paging, time zone, etc.) |
| │   │   ├── **parameters**          | body | object  | Yes | Query parameters (empty if none) |
| │   │   ├── **plugins**             | body | object  | Yes | Plugin configuration (empty if none) |
| │   │   ├── **mdx**                 | body | null    | Yes | Not used in this example    |
| │   │   ├── **name**                | body | string  | Yes | Query model name (often the same as `componentId`) |
| │   │   ├── **metadata**            | body | object  | Yes | Metadata object             |
| │   │   ├── **type**                | body | string  | Yes | E.g., `QUERYMODEL`          |
| │   │   └── **cube**                | body | object  | Yes | Cube definition (schema, catalog, etc.) |
| ├── **cron**              | body | object | Yes | Scheduling configuration     |
| │   └── **complexJobTrigger** | body | object | Yes | Detailed scheduling settings |
| │       ├── **endTime**       | body | null    | Yes | End time (null if no end date) |
| │       ├── **startTime**     | body | string  | Yes | Start time (e.g., `2024-08-07T12:00:00.000+08:00`) |
| │       ├── **uiPassParam**   | body | string  | Yes | Scheduling frequency (e.g., `WEEKLY`) |
| │       └── **daysOfWeek**    | body | [string]| Yes | Days of the week for scheduling (e.g., `["0"]` for Sunday) |
| ├── **channels**         | body | [string] | Yes | Alert channels (e.g., `[ "email" ]`) |
| └── **emailConfig**      | body | object   | Yes | Email alert configuration   |
|     ├── **toUsers**  | body | [string] | Yes | Email recipients (usernames) |
|     ├── **ccUsers**  | body | [string] | Yes | CC recipients               |
|     ├── **bccUsers** | body | [string] | Yes | BCC recipients              |
|     ├── **subject**  | body | string   | Yes | Email subject (e.g., "标题") |
|     └── **content**  | body | string   | Yes | Email body (rich or plain text) |

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

| Name       | Type    | Required | Description        |
|------------|---------|----------|--------------------|
| `msg`      | string  | No       | Message string     |
| `success`  | boolean | Yes      | Request status     |