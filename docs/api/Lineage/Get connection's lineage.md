---
title: Get connection's lineage
permalink: /api/Lineage/Get connection's lineage/
tags: ["api","Lineage","Connections"]
description:
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/lineage/connection
```

**Authorization**  
The current user must have read authority over the connection.

---

## **Query Parameters**

| Name          | Location | Type   | Required | Description |
|--------------|----------|--------|----------|-------------|
| `connection`  | query    | string | No       | The name of the connection to retrieve lineage for. |
| `includeFiles` | query    | string | No       | Whether to include associated files. |
| `includeOthers` | query    | string | No       | Whether to include additional related objects. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "data": [
    {
      "schemas": [
        {
          "owner": "admin",
          "ownerType": 0,
          "lastModifiedDate": 1721889439130,
          "dataSourceStr": "DataSource=\"foodmart\";EnableXmla=\"true\";Provider=\"mondrian\";",
          "name": "workshop-model",
          "files": [],
          "otherFiles": [],
          "title": "workshop-model",
          "dataSource": {
            "canRead": true,
            "name": "foodmart"
          }
        }
      ],
      "name": "foodmart"
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                              |
|------------------|---------------------------------------------------------|------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Connection lineage retrieved successfully. |
| 400              | Bad Request                                             | Invalid request format or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks the required permissions. |
| 404              | Not Found                                               | Specified connection does not exist. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name               | Type           | Required | Description |
|--------------------|---------------|----------|-------------|
| `success`         | boolean        | Yes      | `true` if the request was successful, `false` otherwise. |
| `data`            | array[object]  | Yes      | List of connection lineage details. |
| `data[].schemas`  | array[object]  | No       | List of schemas associated with the connection. |
| `data[].schemas[].owner`  | string  | No      | Owner of the schema. |
| `data[].schemas[].ownerType`  | integer  | No      | Type of owner (e.g., 0 for user). |
| `data[].schemas[].lastModifiedDate`  | integer  | No      | Last modification timestamp. |
| `data[].schemas[].dataSourceStr`  | string  | No      | Data source connection string. |
| `data[].schemas[].name`  | string  | No      | Name of the schema. |
| `data[].schemas[].files`  | array[string]  | No      | List of files associated with the schema. |
| `data[].schemas[].otherFiles`  | array[string]  | No      | Additional related files. |
| `data[].schemas[].title`  | string  | No      | Title of the schema. |
| `data[].schemas[].dataSource`  | object  | No      | Data source details. |
| `data[].schemas[].dataSource.canRead`  | boolean  | Yes      | Whether the user has read access to the data source. |
| `data[].schemas[].dataSource.name`  | string  | Yes      | Name of the data source. |
| `data[].name`  | string  | No      | Name of the connection. |
| `msg`          | string  | No      | Response message (if applicable). |

