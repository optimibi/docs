---
title: Search
permalink: /api/Files/Search/
tags: ["api","Files"]
description: 
---

## GET Search

GET /plugin/datafor-modeler/api/repo/files/search

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|word|query|string| no |none|

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
