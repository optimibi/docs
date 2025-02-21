---
title: Test a connection
permalink: /api/Connections/Test a connection/
tags: ["api","Connections"]
description: 
---

## PUT Test a connection

PUT /plugin/datafor-modeler/api/connection/test

Preconditions:Current user needs read privileges to the connection.

> Body Parameters

```json
{
  "SQLServerInstance": null,
  "accessType": "NATIVE",
  "accessTypeValue": "NATIVE",
  "attributes": {
    "driverId": "postgresql",
    "PORT_NUMBER": "25432"
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
    "defaultDatabaseName": null,
    "defaultDatabasePort": 5432,
    "defaultOptions": null,
    "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
    "name": "PostgreSQL",
    "shortName": "POSTGRESQL"
  },
  "extraOptions": {},
  "extraOptionsOrder": {},
  "forcingIdentifiersToLowerCase": false,
  "forcingIdentifiersToUpperCase": false,
  "hostname": "127.0.0.1",
  "id": "3255113e-6d7e-4031-8a46-cc21dfda06e9",
  "indexTablespace": "",
  "informixServername": "",
  "initialPoolSize": 0,
  "maximumPoolSize": 0,
  "name": "foodmart",
  "partitioned": false,
  "password": null,
  "quoteAllFields": false,
  "streamingResults": false,
  "username": "postgres",
  "usingConnectionPool": true,
  "usingDoubleDecimalAsSchemaTableSeparator": false,
  "driverId": "postgresql",
  "PORT_NUMBER": "25432",
  "CUSTOM_URL": null,
  "CUSTOM_DRIVER_CLASS": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| no |none|
|body|body|object| no |none|
|» SQLServerInstance|body|null| no |none|
|» accessType|body|string| yes |none|
|» accessTypeValue|body|string| yes |none|
|» attributes|body|object| yes |none|
|»» driverId|body|string| yes |none|
|»» PORT_NUMBER|body|string| yes |none|
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
|»» defaultDatabaseName|body|null| yes |none|
|»» defaultDatabasePort|body|integer| yes |none|
|»» defaultOptions|body|null| yes |none|
|»» extraOptionsHelpUrl|body|string| yes |none|
|»» name|body|string| yes |none|
|»» shortName|body|string| yes |none|
|» extraOptions|body|object| yes |none|
|» extraOptionsOrder|body|object| yes |none|
|» forcingIdentifiersToLowerCase|body|boolean| yes |none|
|» forcingIdentifiersToUpperCase|body|boolean| yes |none|
|» hostname|body|string| yes |none|
|» id|body|string| yes |none|
|» indexTablespace|body|string| yes |none|
|» informixServername|body|string| yes |none|
|» initialPoolSize|body|integer| yes |none|
|» maximumPoolSize|body|integer| yes |none|
|» name|body|string| yes |none|
|» partitioned|body|boolean| yes |none|
|» password|body|null| yes |none|
|» quoteAllFields|body|boolean| yes |none|
|» streamingResults|body|boolean| yes |none|
|» username|body|string| yes |none|
|» usingConnectionPool|body|boolean| yes |none|
|» usingDoubleDecimalAsSchemaTableSeparator|body|boolean| yes |none|
|» driverId|body|string| yes |none|
|» PORT_NUMBER|body|string| yes |none|
|» CUSTOM_URL|body|null| no |none|
|» CUSTOM_DRIVER_CLASS|body|null| no |none|

> Response Examples

```json
{
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
|» SQLServerInstance|null|false|none||none|
|» accessType|string|true|none||none|
|» accessTypeValue|string|true|none||none|
|» attributes|object|true|none||none|
|»» driverId|string|true|none||none|
|»» PORT_NUMBER|string|true|none||none|
|» changed|boolean|true|none||none|
|» connectSql|string|true|none||none|
|» connectionPoolingProperties|object|true|none||none|
|»» minIdle|string|true|none||none|
|»» maxIdle|string|true|none||none|
|»» initialSize|string|true|none||none|
|»» maxActive|string|true|none||none|
|» dataTablespace|string|true|none||none|
|» databaseName|string|true|none||none|
|» databasePort|string|true|none||none|
|» databaseType|object|true|none||none|
|»» defaultDatabaseName|null|true|none||none|
|»» defaultDatabasePort|integer|true|none||none|
|»» defaultOptions|null|true|none||none|
|»» extraOptionsHelpUrl|string|true|none||none|
|»» name|string|true|none||none|
|»» shortName|string|true|none||none|
|» extraOptions|object|true|none||none|
|» extraOptionsOrder|object|true|none||none|
|» forcingIdentifiersToLowerCase|boolean|true|none||none|
|» forcingIdentifiersToUpperCase|boolean|true|none||none|
|» hostname|string|true|none||none|
|» id|string|true|none||none|
|» indexTablespace|string|true|none||none|
|» informixServername|string|true|none||none|
|» initialPoolSize|integer|true|none||none|
|» maximumPoolSize|integer|true|none||none|
|» name|string|true|none||none|
|» partitioned|boolean|true|none||none|
|» password|null|true|none||none|
|» quoteAllFields|boolean|true|none||none|
|» streamingResults|boolean|false|none||none|
|» username|string|true|none||none|
|» usingConnectionPool|boolean|true|none||none|
|» usingDoubleDecimalAsSchemaTableSeparator|boolean|true|none||none|