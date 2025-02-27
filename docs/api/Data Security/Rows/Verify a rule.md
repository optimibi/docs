---
title: Verify a rule
permalink: /api/Data Security/Rows/Verify a rule/
tags: ["api","Data Security"]
description: 
---

## POST Verify a  rule

POST /plugin/datafor-modeler/api/auth/row/verify

Preconditions:
1.Cuccunt user's type cannot be SYS_Reader
2.Current user needs administrative privileges to the connection.

> Body Parameters

```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
    }
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» dbconn|body|string| yes |none|
|» configList|body|[object]| yes |none|
|»» schema|body|string| yes |none|
|»» tbname|body|string| yes |none|
|»» rows|body|string| no |none|
|»» sql|body|string| yes |none|

> Response Examples

```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "msg": "org.postgresql.util.PSQLException: Unterminated identifier started at position 40 in SQL select * from \"public\".\"time_dim\" where \"YEAR=2005. Expected \" char",
      "tbname": "time_dim",
      "success": false,
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR=2005"
    }
  ]
}
```

```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "data": [
        {
          "MONTH_KEY": 200501,
          "YEAR": 2005,
          "QUARTER_KEY": 20051,
          "DAY_KEY": 20050101,
          "DAY_DATE": "2005-01-01 00:00:00.0"
        }
      ],
      "meta": [
        {
          "typeDesc": "Integer",
          "comments": "DAY_KEY",
          "originalColumnType": 4,
          "originalNullable": 0,
          "numberOfBinaryStringConversions": 0,
          "length": 9,
          "type": 5,
          "originalColumnTypeName": "int4",
          "originalPrecision": 10,
          "originalSigned": true,
          "name": "DAY_KEY",
          "originalScale": 0,
          "storageType": 0,
          "originName": "DAY_KEY"
        },
        {
          "typeDesc": "None",
          "comments": "DAY_DATE",
          "originalColumnType": 93,
          "originalNullable": 0,
          "numberOfBinaryStringConversions": 0,
          "length": -1,
          "type": 0,
          "originalColumnTypeName": "timestamptz",
          "originalPrecision": 35,
          "originalSigned": false,
          "name": "DAY_DATE",
          "originalScale": 6,
          "storageType": 0,
          "originName": "DAY_DATE"
        },
        {
          "typeDesc": "Integer",
          "comments": "MONTH_KEY",
          "originalColumnType": 4,
          "originalNullable": 0,
          "numberOfBinaryStringConversions": 0,
          "length": 9,
          "type": 5,
          "originalColumnTypeName": "int4",
          "originalPrecision": 10,
          "originalSigned": true,
          "name": "MONTH_KEY",
          "originalScale": 0,
          "storageType": 0,
          "originName": "MONTH_KEY"
        },
        {
          "typeDesc": "Integer",
          "comments": "QUARTER_KEY",
          "originalColumnType": 4,
          "originalNullable": 0,
          "numberOfBinaryStringConversions": 0,
          "length": 9,
          "type": 5,
          "originalColumnTypeName": "int4",
          "originalPrecision": 10,
          "originalSigned": true,
          "name": "QUARTER_KEY",
          "originalScale": 0,
          "storageType": 0,
          "originName": "QUARTER_KEY"
        },
        {
          "typeDesc": "Integer",
          "comments": "YEAR",
          "originalColumnType": 5,
          "originalNullable": 0,
          "numberOfBinaryStringConversions": 0,
          "length": 4,
          "type": 5,
          "originalColumnTypeName": "int2",
          "originalPrecision": 5,
          "originalSigned": true,
          "name": "YEAR",
          "originalScale": 0,
          "storageType": 0,
          "originName": "YEAR"
        }
      ],
      "success": true,
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
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
|» dbconn|string|true|none||none|
|» configList|[object]|true|none||none|
|»» schema|string|false|none||none|
|»» msg|string|false|none||none|
|»» tbname|string|false|none||none|
|»» success|boolean|false|none||none|
|»» rows|string|false|none||none|
|»» sql|string|false|none||none|