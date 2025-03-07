---
title: Get model's lineage
permalink: /api/Lineage/Get model's lineage/
tags: ["api","Lineage","Models"]
description:
---

**Method**  
`GET`

**Request URL**
```html
/datafor/plugin/datafor-modeler/api/lineage/schema
```

**Authorization**  
The current user must have read access to the specified model.

---

## **Query Parameters**

| Name           | Location | Type   | Required | Description |
|---------------|----------|--------|----------|-------------|
| `includeOthers` | query    | string | No       | Whether to include additional related objects. |
| `schema`      | query    | string | No       | The name of the model to retrieve lineage for. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "data": [
    {
      "schema": "workshop-model",
      "files": [],
      "otherFiles": []
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                              |
|------------------|---------------------------------------------------------|------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Model lineage retrieved successfully.   |
| 400              | Bad Request                                             | Invalid request format or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks the required permissions. |
| 404              | Not Found                                               | Specified model does not exist. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name             | Type          | Required | Description |
|-----------------|--------------|----------|-------------|
| `success`       | boolean      | Yes      | `true` if the request was successful, `false` otherwise. |
| `data`          | array[object] | Yes      | List of model lineage details. |
| `data[].schema` | string        | No       | Name of the schema (model). |
| `data[].files`  | array[string] | No       | List of files associated with the schema. |
| `data[].otherFiles` | array[string] | No   | Additional related files. |
| `msg`           | string        | No       | Response message (if applicable). |

