# Workflows

### Get Workflows List
```js
dayschedule.workflows.list({
    limit: 100
})
```

**Parameters:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| limit     | number      | No of workflow you want to fetch           |


**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
            "org_id": 9847,
            "user_id": 2758,
            "resources": {
                "all": false,
                "selected": [
                    "63a4395eaf987506345f7b52"
                ]
            },
            "name": "15 minutes reminder",
            "trigger": {
                "when": "event_scheduled",
                "is_immediately": true,
                "value": 15,
                "type": "minutes"
            },
            "actions": [
                {
                    "type": "email",
                    "to": [
                        "host"
                    ],
                    "cc": [],
                    "template_id": "641ad8673d52530497cc7fa0",
                    "connection_id": "651d0aab73ca796a34f34267"
                }
            ],
            "is_enabled": true,
            "created_at": "2023-07-11T06:23:18.690Z",
            "updated_at": "2023-10-04T06:50:23.530Z",
            "workflow_id": "64acf556e6810e40d90b85be"
        }]
}
```

### Get Workflow
```js
dayschedule.workflows.get(workflow_id)
```

**Response:**
```json
{
    "org_id": 9847,
    "user_id": 2758,
    "resources": {
        "all": false,
        "selected": [
            "63a4395eaf087406345f7b52"
        ]
    },
    "name": "15 minutes reminder",
    "trigger": {
        "when": "event_scheduled",
        "is_immediately": true,
        "value": 15,
        "type": "minutes"
    },
    "actions": [
        {
            "type": "email",
            "to": [
                "host"
            ],
            "cc": [],
            "template_id": "641ad8673d52530497cc7fa0",
            "connection_id": "651d0aab73ca796a34f34267",
            "template": {
                "org_id": 1,
                "user_id": 1,
                "name": "Cancel meeting",
                "type": "email",
                "category": "UTILITY",
                "language": "en_US",
                "subject": "Cancel Meeting",
                "content": "<p>Hey <span class=\"badge badge-gray\">{{invitee.name}}</span>,</p><p><br></p><p><span>Your meeting cancels successfully...</span></p><ul><li><span class=\"badge badge-gray\">{{booking.invitee_time}}</span></li><li><span class=\"badge badge-gray\">{{booking.resource.name}}</span></li> <li><span class=\"badge badge-gray\">{{booking.location.join_url}}</span></li></ul><p><br></p><p>Thank You</p><p>Thanks and Regards</p><p><span class=\"badge badge-gray\">{{booking.host.name}}</span> </p><p><span class=\"badge badge-gray\"><span class=\"badge badge-gray\">{{invitee.email}}</span><br></span></p>",
                "whatsapp": [],
                "merge_vars": [],
                "privacy": "public",
                "status": "approved",
                "created_at": "2023-03-22T10:28:22.971Z",
                "updated_at": "2023-03-22T10:29:09.163Z",
                "template_id": "641ad8673d52530497cc7fa0"
            }
        }
    ],
    "is_enabled": true,
    "created_at": "2023-07-11T06:23:18.690Z",
    "updated_at": "2023-10-04T06:50:23.530Z",
    "workflow_id": "64acf556e6810e40d90b85be"
}

```


### Create Workflow
```js
dayschedule.workflows.create({
  "org_id": 9847,
  "user_id": 2758,
  "resources": {
    "all": false,
    "selected": [
      "63a4395eaf028506345f7b52"
    ]
  },
  "name": "15 minutes reminder",
  "trigger": {
    "when": "event_scheduled",
    "is_immediately": true,
    "value": 15,
    "type": "minutes"
  },
  "actions": [
    {
      "type": "email",
      "to": [
        "host"
      ],
      "cc": [],
      "template_id": "641ad8673d52530497cc7fa0",
      "connection_id": "651d0aab73ca796a34f34267",
      "template": {
        "org_id": 1,
        "user_id": 1,
        "name": "Cancel meeting",
        "type": "email",
        "category": "UTILITY",
        "language": "en_US",
        "subject": "Cancel Meeting",
        "content": "<p>Hey <span class=\"badge badge-gray\">{{invitee.name}}</span>,</p><p><br></p><p><span>Your meeting cancels successfully...</span></p><ul><li><span class=\"badge badge-gray\">{{booking.invitee_time}}</span></li><li><span class=\"badge badge-gray\">{{booking.resource.name}}</span></li> <li><span class=\"badge badge-gray\">{{booking.location.join_url}}</span></li></ul><p><br></p><p>Thank You</p><p>Thanks and Regards</p><p><span class=\"badge badge-gray\">{{booking.host.name}}</span> </p><p><span class=\"badge badge-gray\"><span class=\"badge badge-gray\">{{invitee.email}}</span><br></span></p>",
        "whatsapp": [],
        "merge_vars": [],
        "privacy": "public",
        "status": "approved",
        "created_at": "2023-03-22T10:28:22.971Z",
        "updated_at": "2023-03-22T10:29:09.163Z",
        "template_id": "641ad8673d52530497cc7fa0"
      }
    }
  ],
  "is_enabled": true,
  "created_at": "2023-07-11T06:23:18.690Z",
  "updated_at": "2023-10-04T06:50:23.530Z",
  "workflow_id": "64acf556e6810e40d90b85be"
})
```

**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Workflows/operation/WorkflowController_createWorkflow)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| resource*     | object      | attach the resource to run workflow             |
| name*     | string      | name of the workflow.             |
| trigger*     | object      | trigger details i.e when to run this workflow.             |
| action*     | array      | specify action to perform when the workflow get executed.             |
| is_enabled*     | boolean      | enable, disable workflow.             |

**Response:**
```json
{
    "workflow_id": "6526721dab555dee67cc68e7",
    "message": "Workflow created successfully"
}
```

### Update Workflow
```js
dayschedule.workflows.update(workflow_id, {
  "org_id": 9847,
  "user_id": 2758,
  "resources": {
    "all": false,
    "selected": [
      "63a4395eag028506345f7b52"
    ]
  },
  "name": "15 minutes reminder",
  "trigger": {
    "when": "event_scheduled",
    "is_immediately": true,
    "value": 15,
    "type": "minutes"
  },
  "actions": [
    {
      "type": "email",
      "to": [
        "host"
      ],
      "cc": [],
      "template_id": "641ad8673d52530497cc7fa0",
      "connection_id": "651d0aab73ca796a34f34267",
      "template": {
        "org_id": 1,
        "user_id": 1,
        "name": "Cancel meeting",
        "type": "email",
        "category": "UTILITY",
        "language": "en_US",
        "subject": "Cancel Meeting",
        "content": "<p>Hey <span class=\"badge badge-gray\">{{invitee.name}}</span>,</p><p><br></p><p><span>Your meeting cancels successfully...</span></p><ul><li><span class=\"badge badge-gray\">{{booking.invitee_time}}</span></li><li><span class=\"badge badge-gray\">{{booking.resource.name}}</span></li> <li><span class=\"badge badge-gray\">{{booking.location.join_url}}</span></li></ul><p><br></p><p>Thank You</p><p>Thanks and Regards</p><p><span class=\"badge badge-gray\">{{booking.host.name}}</span> </p><p><span class=\"badge badge-gray\"><span class=\"badge badge-gray\">{{invitee.email}}</span><br></span></p>",
        "whatsapp": [],
        "merge_vars": [],
        "privacy": "public",
        "status": "approved",
        "created_at": "2023-03-22T10:28:22.971Z",
        "updated_at": "2023-03-22T10:29:09.163Z",
        "template_id": "641ad8673d52530497cc7fa0"
      }
    }
  ],
  "is_enabled": true,
  "created_at": "2023-07-11T06:23:18.690Z",
  "updated_at": "2023-10-04T06:50:23.530Z",
  "workflow_id": "64acf556e6810e40d90b85be"
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Workflows/operation/WorkflowController_updateWorkflow)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| resource*     | object      | attach the resource to run workflow             |
| name*     | string      | name of the workflow.             |
| trigger*     | object      | trigger details i.e when to run this workflow.             |
| action*     | array      | specify action to perform when the workflow get executed.             |
| is_enabled*     | boolean      | enable, disable workflow.             |

**Response:**
```json
{
    "message":"Workflow with id: 537 updated successfully"
}
```


### Delete Workflow
```js
dayschedule.workflows.delete(workflow_id)
```
**Response:**
```json
{
  "message": "Workflow deleted successfully"
}
```