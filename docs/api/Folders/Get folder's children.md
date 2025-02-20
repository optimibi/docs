---
title: Get folder's children
permalink: /api/Folders/:title/
tags: ["api","Folders"]
description: 
---

## GET Get folder's children

GET /plugin/datafor-modeler/api/repo/files/children

Preconditions:The current user has read authority of the folder

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pathId|query|array[string]| no |none|
|showHidden|query|string| no |none|
|filter|query|string| no |none|
|includeAccessMap|query|string| no |none|

> Response Examples

```json
[
  {
    "name": "dev",
    "id": "46bf3cfb-c101-42fa-af63-3eae8c57f8c8",
    "createdDate": "1722912636753",
    "creatorId": null,
    "lastModifiedDate": "",
    "fileSize": -1,
    "folder": true,
    "path": "/public/dev",
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
    "title": "dev",
    "description": "{\"accessMap\":[{\"name\":\"0\",\"value\":\"true\"},{\"name\":\"1\",\"value\":\"true\"},{\"name\":\"2\",\"value\":\"true\"},{\"name\":\"4\",\"value\":\"true\"}]}",
    "locale": "zh",
    "originalParentFolderPath": null,
    "deletedDate": "",
    "localePropertiesMapEntries": null,
    "repositoryFileAclDto": null,
    "pathTitle": "/Public/dev",
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
    "metadata": null,
    "metadataMap": {}
  },
  {
    "name": "workshop.datafor",
    "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
    "createdDate": "1722844149655",
    "creatorId": "admin",
    "lastModifiedDate": "1722846462016",
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
    "title": "workshop3",
    "description": "{\"accessMap\":[{\"name\":\"0\",\"value\":\"true\"},{\"name\":\"1\",\"value\":\"true\"},{\"name\":\"2\",\"value\":\"true\"},{\"name\":\"4\",\"value\":\"true\"}],\"desc\":\"workshop\"}",
    "locale": "zh",
    "originalParentFolderPath": null,
    "deletedDate": "",
    "localePropertiesMapEntries": [
      {
        "locale": "default",
        "properties": [
          {
            "key": "file.title",
            "value": "workshop3"
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
    "pathTitle": "/Public/workshop3",
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
    "metadata": null,
    "metadataMap": {}
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» name|string|true|none||none|
|» id|string|true|none||none|
|» createdDate|string|true|none||none|
|» creatorId|string¦null|false|none||none|
|» lastModifiedDate|string|false|none||none|
|» fileSize|integer|true|none||none|
|» folder|boolean|true|none||none|
|» path|string|true|none||none|
|» hidden|boolean|true|none||none|
|» notSchedulable|boolean|true|none||none|
|» aclNode|boolean|false|none||none|
|» versioned|boolean|false|none||none|
|» versionId|null|false|none||none|
|» locked|boolean|false|none||none|
|» lockOwner|null|false|none||none|
|» lockMessage|null|false|none||none|
|» lockDate|string|false|none||none|
|» owner|null|false|none||none|
|» ownerTenantPath|null|false|none||none|
|» versioningEnabled|boolean|false|none||none|
|» versionCommentEnabled|boolean|false|none||none|
|» ownerType|integer|false|none||none|
|» title|string|true|none||none|
|» description|string|true|none||none|
|» locale|string|false|none||none|
|» originalParentFolderPath|null|false|none||none|
|» deletedDate|string|false|none||none|
|» localePropertiesMapEntries|[object]|false|none||none|
|»» locale|string|false|none||none|
|»» properties|[object]|false|none||none|
|»»» key|string|true|none||none|
|»»» value|string|true|none||none|
|» repositoryFileAclDto|null|false|none||none|
|» pathTitle|string|true|none||none|
|» accessMap|[object]|false|none||none|
|»» name|string|true|none||none|
|»» value|string|true|none||none|
|» metadata|null|false|none||none|
|» metadataMap|object|false|none||none|