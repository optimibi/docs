---
title: Get connections
permalink: /api/Connections/Get connections/
tags: ["api","Connections"]
description: 
---
## GET Get connections

GET /plugin/datafor-modeler/api/connection/list

Preconditions:Current user needs read privileges to the connection.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|includeAccessMap|query|string| no |none|

> Response Examples

```json
{
  "success": true,
  "databaseConnections": [
    {
      "connectSql": "",
      "databaseName": "training",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "testOnBorrow": "true",
        "validationQuery": "select 1",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "85f98919-fe84-409c-ac5a-7de78820e40d",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "Demo",
      "sqlserverInstance": null,
      "attributes": {
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
    },
    {
      "connectSql": "",
      "databaseName": "sampledata",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "testOnBorrow": "true",
        "validationQuery": "select 1",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "82f7ce1a-798c-41f3-a3ba-33b64a581c83",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "SampleData",
      "sqlserverInstance": null,
      "attributes": {
        "driverId": "postgresql",
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
    },
    {
      "connectSql": "",
      "databaseName": "foodmart",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "3255113e-6d7e-4031-8a46-cc21dfda06e9",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "foodmart",
      "sqlserverInstance": null,
      "attributes": {
        "driverId": "postgresql",
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
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
|» databaseConnections|[object]|true|none||none|
|»» connectSql|string|true|none||none|
|»» databaseName|string|true|none||none|
|»» partitioned|boolean|true|none||none|
|»» quoteAllFields|boolean|true|none||none|
|»» extraOptionsOrder|object|true|none||none|
|»» accessTypeValue|string|true|none||none|
|»» accessType|string|true|none||none|
|»» hostname|string|true|none||none|
|»» password|null|true|none||none|
|»» connectionPoolingProperties|object|true|none||none|
|»»» minIdle|string|true|none||none|
|»»» maxIdle|string|true|none||none|
|»»» testOnBorrow|string|false|none||none|
|»»» validationQuery|string|false|none||none|
|»»» initialSize|string|true|none||none|
|»»» maxActive|string|true|none||none|
|»» forcingIdentifiersToUpperCase|boolean|true|none||none|
|»» id|string|true|none||none|
|»» initialPoolSize|integer|true|none||none|
|»» isUploadDataset|boolean|true|none||none|
|»» partitioningInformation|null|true|none||none|
|»» indexTablespace|string|true|none||none|
|»» dataTablespace|string|true|none||none|
|»» streamingResults|boolean|true|none||none|
|»» databaseType|object|true|none||none|
|»»» extraOptionsHelpUrl|string|true|none||none|
|»»» defaultDatabaseName|null|true|none||none|
|»»» defaultOptions|null|true|none||none|
|»»» name|string|true|none||none|
|»»» defaultDatabasePort|integer|true|none||none|
|»»» shortName|string|true|none||none|
|»»» supportedAccessTypes|[string]|true|none||none|
|»» isSystem|boolean|true|none||none|
|»» extraOptions|object|true|none||none|
|»» forcingIdentifiersToLowerCase|boolean|true|none||none|
|»» accessMap|[object]|true|none||none|
|»»» name|string|true|none||none|
|»»» value|string|true|none||none|
|»» name|string|true|none||none|
|»» sqlserverInstance|null|true|none||none|
|»» attributes|object|true|none||none|
|»»» PORT_NUMBER|string|true|none||none|
|»»» driverId|string|true|none||none|
|»» maximumPoolSize|integer|true|none||none|
|»» informixServername|string|true|none||none|
|»» usingConnectionPool|boolean|true|none||none|
|»» usingDoubleDecimalAsSchemaTableSeparator|boolean|true|none||none|
|»» databasePort|string|true|none||none|
|»» username|string|true|none||none|
|»» changed|boolean|true|none||none|
