---
title: Get file tree
permalink: /api/Files/Get file tree/
tags: ["api","Files"]
description: 
---

## GET Get file tree

GET /plugin/datafor-modeler/api/repo/files/tree

List all folders and files in the specified path in a tree structure.

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|string| no |none|
|showHidden|query|string| no |none|

> Response Examples

```json
{
  "file": {
    "name": "public",
    "id": "44153c42-e4c4-4cce-8ca7-f9025ea7e1ab",
    "createdDate": "1636119568448",
    "creatorId": null,
    "lastModifiedDate": "",
    "fileSize": -1,
    "folder": true,
    "path": "/public",
    "hidden": false,
    "notSchedulable": false,
    "aclNode": false,
    "versioned": false,
    "versionId": null,
    "locked": false,
    "lockOwner": null,
    "lockMessage": null,
    "lockDate": "",
    "owner": null,
    "ownerTenantPath": null,
    "versioningEnabled": false,
    "versionCommentEnabled": false,
    "ownerType": -1,
    "title": "Public",
    "description": null,
    "locale": "zh",
    "originalParentFolderPath": null,
    "deletedDate": "",
    "localePropertiesMapEntries": [
      {
        "locale": "default",
        "properties": [
          {
            "key": "file.title",
            "value": "Public"
          },
          {
            "key": "jcr:primaryType",
            "value": "nt:unstructured"
          },
          {
            "key": "file.description",
            "value": ""
          }
        ]
      }
    ],
    "repositoryFileAclDto": null,
    "pathTitle": null,
    "accessMap": null,
    "metadata": null,
    "metadataMap": {}
  },
  "children": [
    {
      "file": {
        "name": "workshop.datafor",
        "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
        "createdDate": "1722844149655",
        "creatorId": "admin",
        "lastModifiedDate": "1722844149655",
        "fileSize": 322,
        "folder": false,
        "path": "/public/workshop.datafor",
        "hidden": false,
        "notSchedulable": false,
        "aclNode": false,
        "versioned": false,
        "versionId": null,
        "locked": false,
        "lockOwner": null,
        "lockMessage": null,
        "lockDate": "",
        "owner": null,
        "ownerTenantPath": null,
        "versioningEnabled": false,
        "versionCommentEnabled": false,
        "ownerType": -1,
        "title": "workshop",
        "description": "workshop",
        "locale": "zh",
        "originalParentFolderPath": null,
        "deletedDate": "",
        "localePropertiesMapEntries": [
          {
            "locale": "default",
            "properties": [
              {
                "key": "file.title",
                "value": "workshop"
              },
              {
                "key": "jcr:primaryType",
                "value": "nt:unstructured"
              },
              {
                "key": "contentCreator",
                "value": "admin"
              },
              {
                "key": "file.description",
                "value": "workshop"
              }
            ]
          }
        ],
        "repositoryFileAclDto": null,
        "pathTitle": "/Public/workshop",
        "accessMap": null,
        "metadata": null,
        "metadataMap": {}
      },
      "children": []
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
|» file|object|true|none||none|
|»» name|string|true|none||none|
|»» id|string|true|none||none|
|»» createdDate|string|true|none||none|
|»» creatorId|null|true|none||none|
|»» lastModifiedDate|string|true|none||none|
|»» fileSize|integer¦null|true|none||none|
|»» folder|boolean|true|none||none|
|»» path|string|true|none||none|
|»» hidden|boolean|true|none||none|
|»» notSchedulable|boolean¦null|true|none||none|
|»» aclNode|boolean¦null|true|none||none|
|»» versioned|boolean¦null|true|none||none|
|»» versionId|null|true|none||none|
|»» locked|boolean|true|none||none|
|»» lockOwner|null|true|none||none|
|»» lockMessage|null|true|none||none|
|»» lockDate|string¦null|true|none||none|
|»» owner|null|true|none||none|
|»» ownerTenantPath|null|true|none||none|
|»» versioningEnabled|boolean¦null|true|none||none|
|»» versionCommentEnabled|boolean¦null|true|none||none|
|»» ownerType|integer|true|none||none|
|»» title|string|true|none||none|
|»» description|null|true|none||none|
|»» locale|string¦null|true|none||none|
|»» originalParentFolderPath|null|true|none||none|
|»» deletedDate|string¦null|true|none||none|
|»» localePropertiesMapEntries|[object]¦null|true|none||none|
|»»» locale|string|false|none||none|
|»»» properties|[object]|false|none||none|
|»»»» key|string|true|none||none|
|»»»» value|string|true|none||none|
|»» repositoryFileAclDto|null|true|none||none|
|»» pathTitle|null|true|none||none|
|»» accessMap|null|true|none||none|
|»» metadata|null|true|none||none|
|»» metadataMap|object|true|none||none|
|» children|[object]|true|none||none|
|»» file|object|false|none||none|
|»»» name|string|true|none||none|
|»»» id|string|true|none||none|
|»»» createdDate|string|true|none||none|
|»»» creatorId|string|true|none||none|
|»»» lastModifiedDate|string|true|none||none|
|»»» fileSize|integer¦null|true|none||none|
|»»» folder|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» hidden|boolean|true|none||none|
|»»» notSchedulable|boolean|true|none||none|
|»»» aclNode|boolean|true|none||none|
|»»» versioned|boolean|true|none||none|
|»»» versionId|null|true|none||none|
|»»» locked|boolean|true|none||none|
|»»» lockOwner|null|true|none||none|
|»»» lockMessage|null|true|none||none|
|»»» lockDate|string¦null|true|none||none|
|»»» owner|null|true|none||none|
|»»» ownerTenantPath|null|true|none||none|
|»»» versioningEnabled|boolean¦null|true|none||none|
|»»» versionCommentEnabled|boolean¦null|true|none||none|
|»»» ownerType|integer|true|none||none|
|»»» title|string|true|none||none|
|»»» description|string¦null|true|none||none|
|»»» locale|string¦null|true|none||none|
|»»» originalParentFolderPath|null|true|none||none|
|»»» deletedDate|string|true|none||none|
|»»» localePropertiesMapEntries|[object]|true|none||none|
|»»»» locale|string|false|none||none|
|»»»» properties|[object]|false|none||none|
|»»»»» key|string|true|none||none|
|»»»»» value|string|true|none||none|
|»»» repositoryFileAclDto|null|true|none||none|
|»»» pathTitle|string|true|none||none|
|»»» accessMap|null|true|none||none|
|»»» metadata|null|true|none||none|
|»»» metadataMap|object|true|none||none|
|»» children|[string]|false|none||none|