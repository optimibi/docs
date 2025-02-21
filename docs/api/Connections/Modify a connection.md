---
title: Modify a connection
permalink: /api/Connections/Modify a connection/
tags: ["api","Connections"]
description: 
---

## POST Modify a connection

POST /plugin/datafor-modeler/api/connection/update

Preconditions:
1.The cuccunt user's type cannot be SYS_Reader
2.Current user needs edit privileges to the connection.

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
  "extraOptions": {
    "POSTGRESQL.TimeZone": "Asia/Shanghai"
  },
  "extraOptionsOrder": {
    "0": "POSTGRESQL.TimeZone"
  },
  "forcingIdentifiersToLowerCase": false,
  "forcingIdentifiersToUpperCase": false,
  "hostname": "127.0.0.1",
  "id": "d55f86ef-0c20-4442-b806-074d4211b0fb",
  "indexTablespace": "",
  "informixServername": "",
  "initialPoolSize": 0,
  "maximumPoolSize": 0,
  "name": "foodmart2",
  "partitioned": false,
  "password": null,
  "quoteAllFields": false,
  "streamingResults": false,
  "username": "postgres",
  "usingConnectionPool": true,
  "usingDoubleDecimalAsSchemaTableSeparator": false,
  "driverId": "postgresql",
  "PORT_NUMBER": "25432",
  "CUSTOM_URL": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string| no |none|
|Access-Control-Request-Headers|header|string| no |none|
|body|body|object| no |none|
|» SQLServerInstance|body|null| no |none|
|» accessType|body|string| yes |none|
|» accessTypeValue|body|string| yes |none|
|» attributes|body|object| yes |none|
|»» driverId|body|string| yes |none|
|»» PORT_NUMBER|body|string| yes |none|
|» changed|body|boolean| no |none|
|» connectSql|body|string| no |none|
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
|»» POSTGRESQL.TimeZone|body|string| yes |none|
|» extraOptionsOrder|body|object| yes |none|
|»» 0|body|string| yes |none|
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
|» code|string|true|none||none|
|» success|boolean|true|none||none|