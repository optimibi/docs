---
title: Download folder
permalink: /api/Folders/Download folder/
tags: ["api","Folders"]
description:
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/repo/files/download
```

**Authorization**  
The current user must have administrator authority over the folder.

---

## **Query Parameters**

| Name         | Location | Type   | Required | Description |
|-------------|----------|--------|----------|-------------|
| `pathId`    | query    | string | No       | The path of the folder to be downloaded. |
| `withManifest` | query    | string | No       | Whether to include a manifest file in the download. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                                     |
|------------------|---------------------------------------------------------|-------------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Folder download initiated successfully.        |
| 400              | Bad Request                                             | Invalid request format or missing parameters.  |
| 401              | Unauthorized                                            | Authentication required.                        |
| 403              | Forbidden                                               | User lacks the required permissions.           |
| 404              | Not Found                                               | Specified folder does not exist.               |
| 500              | Internal Server Error                                   | Unexpected error occurred.                      |

---

## **Response Headers**

| Status | Header        | Type   | Format | Description |
|--------|--------------|--------|--------|-------------|
| 200    | Content-Type | string |        | Response content type. |

