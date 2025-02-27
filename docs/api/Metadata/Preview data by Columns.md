---
title: Preview data by Columns
permalink: /api/Metadata/Preview data by Columns/
tags: ["api","Metadata"]
description: 
---


## POST Preview data by Columns

POST /plugin/datafor-modeler/api/metadata/previewcolumn

Preconditions:
1.Current user needs read privileges to the connection.

> Body Parameters

```yaml
connection: foodmart
schema: foodmart
table: time_by_day
columns: '[{"name":"day_of_month","detail":""},{"name":"fiscal_period","detail":""},{"name":"month_of_year","detail":""},{"name":"quarter","detail":""},{"name":"the_date","detail":""},{"name":"the_day","detail":""},{"name":"the_month","detail":""},{"name":"the_year","detail":""},{"name":"time_id","detail":""},{"name":"week_of_year","detail":""}]'
limit: "50"

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» connection|body|string| no |none|
|» schema|body|string| no |none|
|» table|body|string| no |none|
|» columns|body|string| no |when detail is not empty  means calculate column|
|» limit|body|string| no |none|

> Response Examples

```json
{
  "msg": "success",
  "data": [
    {
      "the_month": "January",
      "time_id": 738,
      "the_year": 1998,
      "month_of_year": 1,
      "the_day": "Wednesday",
      "day_of_month": 7,
      "week_of_year": 4,
      "quarter": "Q1",
      "the_date": "1998-01-07 00:00:00.0"
    },
    {
      "the_month": "January",
      "time_id": 739,
      "the_year": 1998,
      "month_of_year": 1,
      "the_day": "Thursday",
      "day_of_month": 8,
      "week_of_year": 4,
      "quarter": "Q1",
      "the_date": "1998-01-08 00:00:00.0"
    }
  ],
  "meta": [
    {
      "typeDesc": "Integer",
      "comments": "day_of_month",
      "originalColumnType": 5,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 4,
      "type": 5,
      "originalColumnTypeName": "int2",
      "originalPrecision": 5,
      "originalSigned": true,
      "name": "day_of_month",
      "originalScale": 0,
      "storageType": 0,
      "originName": "day_of_month"
    },
    {
      "typeDesc": "String",
      "comments": "fiscal_period",
      "originalColumnType": 12,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 30,
      "type": 2,
      "originalColumnTypeName": "varchar",
      "originalPrecision": 30,
      "originalSigned": false,
      "name": "fiscal_period",
      "originalScale": 0,
      "storageType": 0,
      "originName": "fiscal_period"
    },
    {
      "typeDesc": "Integer",
      "comments": "month_of_year",
      "originalColumnType": 5,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 4,
      "type": 5,
      "originalColumnTypeName": "int2",
      "originalPrecision": 5,
      "originalSigned": true,
      "name": "month_of_year",
      "originalScale": 0,
      "storageType": 0,
      "originName": "month_of_year"
    },
    {
      "typeDesc": "String",
      "comments": "quarter",
      "originalColumnType": 12,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 30,
      "type": 2,
      "originalColumnTypeName": "varchar",
      "originalPrecision": 30,
      "originalSigned": false,
      "name": "quarter",
      "originalScale": 0,
      "storageType": 0,
      "originName": "quarter"
    },
    {
      "typeDesc": "None",
      "comments": "the_date",
      "originalColumnType": 93,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": -1,
      "type": 0,
      "originalColumnTypeName": "timestamp",
      "originalPrecision": 29,
      "originalSigned": false,
      "name": "the_date",
      "originalScale": 6,
      "storageType": 0,
      "originName": "the_date"
    },
    {
      "typeDesc": "String",
      "comments": "the_day",
      "originalColumnType": 12,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 30,
      "type": 2,
      "originalColumnTypeName": "varchar",
      "originalPrecision": 30,
      "originalSigned": false,
      "name": "the_day",
      "originalScale": 0,
      "storageType": 0,
      "originName": "the_day"
    },
    {
      "typeDesc": "String",
      "comments": "the_month",
      "originalColumnType": 12,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 30,
      "type": 2,
      "originalColumnTypeName": "varchar",
      "originalPrecision": 30,
      "originalSigned": false,
      "name": "the_month",
      "originalScale": 0,
      "storageType": 0,
      "originName": "the_month"
    },
    {
      "typeDesc": "Integer",
      "comments": "the_year",
      "originalColumnType": 5,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 4,
      "type": 5,
      "originalColumnTypeName": "int2",
      "originalPrecision": 5,
      "originalSigned": true,
      "name": "the_year",
      "originalScale": 0,
      "storageType": 0,
      "originName": "the_year"
    },
    {
      "typeDesc": "Integer",
      "comments": "time_id",
      "originalColumnType": 4,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 9,
      "type": 5,
      "originalColumnTypeName": "int4",
      "originalPrecision": 10,
      "originalSigned": true,
      "name": "time_id",
      "originalScale": 0,
      "storageType": 0,
      "originName": "time_id"
    },
    {
      "typeDesc": "Integer",
      "comments": "week_of_year",
      "originalColumnType": 4,
      "originalNullable": 0,
      "numberOfBinaryStringConversions": 0,
      "length": 9,
      "type": 5,
      "originalColumnTypeName": "int4",
      "originalPrecision": 10,
      "originalSigned": true,
      "name": "week_of_year",
      "originalScale": 0,
      "storageType": 0,
      "originName": "week_of_year"
    }
  ],
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
|» endQuote|string|true|none||none|
|» data|[object]|true|none||none|
|»» schema|string|true|none||none|
|»» fields|[object]|true|none||none|
|»»» typeDesc|string|true|none||none|
|»»» locale.country|string|false|none||none|
|»»» collatorLocale|string|false|none||none|
|»»» numberOfBinaryStringConversions|integer|false|none||none|
|»»» precision|integer|false|none||none|
|»»» decimalFormat.currency.symbol|string|false|none||none|
|»»» formatMask|string|false|none||none|
|»»» type|integer|true|none||none|
|»»» groupingSymbol|string|false|none||none|
|»»» decimalFormat.currency.displayName|string|false|none||none|
|»»» originalPrecision|integer|false|none||none|
|»»» originalScale|integer|false|none||none|
|»»» conversionMask|string|false|none||none|
|»»» decimalSymbol|string|false|none||none|
|»»» locale.language|string|false|none||none|
|»»» originalNullable|integer|false|none||none|
|»»» collatorStrength|integer|false|none||none|
|»»» dataType|integer|true|none||1Number 2String 3Date 9Timestamp 11Time|
|»»» length|integer|false|none||none|
|»»» originColumnType|integer|true|none||none|
|»»» originalColumnTypeName|string|true|none||none|
|»»» originalSigned|boolean|false|none||none|
|»»» name|string|true|none||none|
|»»» storageType|integer|false|none||none|
|»»» decimalFormat.currency.currencyCode|string|false|none||none|
|»» table|string|true|none||none|
|» success|boolean|true|none||none|
|» startQuote|string|true|none||none|
