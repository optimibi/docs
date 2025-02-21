---
title: Add a connection
permalink: /api/Connections/Add a connection/
tags: ["api","Connections"]
description: 
---

## POST Add a connection

POST /plugin/datafor-modeler/api/connection/add

Preconditions:The cuccunt user's type cannot be SYS_Reader

> Body Parameters

```json
{
  "SQLServerInstance": null,
  "accessType": "NATIVE",
  "accessTypeValue": "NATIVE",
  "attributes": {
    "PORT_NUMBER": "25432",
    "driverId": "postgresql"
  },
  "changed": false,
  "connectSql": "",
  "connectionPoolingProperties": {
    "initialSize": "5",
    "maxActive": "200",
    "maxIdle": "20",
    "minIdle": "5"
  },
  "dataTablespace": "",
  "databaseName": "foodmart",
  "databasePort": "25432",
  "databaseType": {
    "defaultDatabasePort": "5432",
    "name": "PostgreSQL",
    "shortName": "POSTGRESQL"
  },
  "extraOptions": {
    "POSTGRESQL.TimeZone": "Asia/Shanghai"
  },
  "extraOptionsOrder": {
    "0": "POSTGRESQL.TimeZone"
  },
  "forcingIdentifiersToLowerCase": false,
  "forcingIdentifiersToUpperCase": false,
  "hostname": "127.0.0.1",
  "id": null,
  "indexTablespace": "",
  "informixServername": "",
  "initialPoolSize": 0,
  "maximumPoolSize": 0,
  "name": "foodmart2",
  "partitioned": false,
  "password": "postgres",
  "quoteAllFields": false,
  "streamingResults": false,
  "username": "postgres",
  "usingConnectionPool": true,
  "usingDoubleDecimalAsSchemaTableSeparator": false,
  "PORT_NUMBER": "25432",
  "driverId": "postgresql",
  "CUSTOM_URL": null,
  "CUSTOM_DRIVER_CLASS": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Access-Control-Request-Headers|header|string| no |none|
|body|body|object| no |none|
|» SQLServerInstance|body|null| yes |none|
|» accessType|body|string| yes |none|
|» accessTypeValue|body|string| yes |none|
|» attributes|body|object| yes |none|
|»» PORT_NUMBER|body|string| yes |none|
|»» driverId|body|string| yes |none|
|» changed|body|boolean| yes |none|
|» connectSql|body|string| yes |none|
|» connectionPoolingProperties|body|object| yes |none|
|»» initialSize|body|string| yes |none|
|»» maxActive|body|string| yes |none|
|»» maxIdle|body|string| yes |none|
|»» minIdle|body|string| yes |none|
|» dataTablespace|body|string| yes |none|
|» databaseName|body|string| yes |none|
|» databasePort|body|string| yes |none|
|» databaseType|body|object| yes |none|
|»» defaultDatabasePort|body|string| yes |none|
|»» name|body|string| yes |none|
|»» shortName|body|string| yes |none|
|» extraOptions|body|object| yes |none|
|»» POSTGRESQL.TimeZone|body|string| yes |none|
|» extraOptionsOrder|body|object| yes |none|
|»» 0|body|string| yes |none|
|» forcingIdentifiersToLowerCase|body|boolean| yes |none|
|» forcingIdentifiersToUpperCase|body|boolean| yes |none|
|» hostname|body|string| yes |none|
|» id|body|null| yes |none|
|» indexTablespace|body|string| yes |none|
|» informixServername|body|string| yes |none|
|» initialPoolSize|body|integer| yes |none|
|» maximumPoolSize|body|integer| yes |none|
|» name|body|string| yes |none|
|» partitioned|body|boolean| yes |none|
|» password|body|string| yes |none|
|» quoteAllFields|body|boolean| yes |none|
|» streamingResults|body|boolean| yes |none|
|» username|body|string| yes |none|
|» usingConnectionPool|body|boolean| yes |none|
|» usingDoubleDecimalAsSchemaTableSeparator|body|boolean| yes |none|
|» PORT_NUMBER|body|string| yes |none|
|» driverId|body|string| yes |none|
|» CUSTOM_URL|body|null| yes |none|
|» CUSTOM_DRIVER_CLASS|body|null| yes |none|

> Response Examples

```json
{
  "msg": "success",
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
|» msg|string|false|none||none|
|» code|string|false|none||none|
|» success|boolean|true|none||none|