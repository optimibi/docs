---
title: Get a connection
permalink: /api/Connections/Get a connection/
tags: ["api","Connections"]
description: 
---

## GET Get a connection

GET /plugin/datafor-modeler/api/connection/get

Preconditions:Current user needs read privileges to the connection.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| no |none|

> Response Examples

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
    "minIdle": "5",
    "maxIdle": "20",
    "initialSize": "5",
    "maxActive": "200"
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
  "usingDoubleDecimalAsSchemaTableSeparator": false
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
