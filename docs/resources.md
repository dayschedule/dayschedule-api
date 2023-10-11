# Resources

### Get Resources List
```js
dayschedule.resources.list()
```

**Response:**
```json
{   
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
        "color": "#006b75",
        "payment": {
            "is_enabled": false,
            "gateways": [
                "razorpay"
            ]
        },
        "org_id": 1117,
        "page_id": 1000,
        "user_id": 3241,
        "name": "Test Resource",
        "slug": "/test-resource",
        "type": "event",
        "schedule_id": 39127,
        "language": "en-US",
        "description": "Add description for this event",
        "is_enabled": true,
        "booking_url": "https://your-domain.dayschedule.com",
        "rank": 1,
        "created_at": "2022-12-22T11:02:54.237Z",
        "updated_at": "2023-09-12T06:42:21.481Z",
        "durations": [
            {
                "type": "minutes",
                "value": 30
            }
        ],
        "prices": [
            {
                "name": "Test 1",
                "duration": "30m",
                "amount": 10,
                "currency": "INR"
            }
        ],
        "is_template": false,
        "id": "63a4395eago29006345f7b52"
    }]
}
```

### Get Resource
```js
dayschedule.resources.get(resource_id)
```
**Response:**
```json
{
    "event_type": "one_on_one",
    "notice": {
        "type": "days",
        "value": 0
    },
    "durations": [
        {
            "type": "minutes",
            "value": 30
        }
    ],
    "slots": {
        "type": "minutes",
        "value": 30
    },
    "color": "#0052cc",
    "capacity": {
        "is_unlimited": true,
        "is_public": false,
        "max": 10,
        "type": "perday"
    },
    "break": {
        "after": 0,
        "before": 0
    },
    "period": {
        "type": "calendar_days",
        "days": 60,
        "specific": []
    },
    "payment": {
        "is_enabled": false,
        "gateways": []
    },
    "prices": [],
    "members": [],
    "org_id": 2887,
    "page_id": 3343,
    "user_id": 7538,
    "name": "Test Resource",
    "slug": "/test-resource",
    "type": "event",
    "schedule_id": 39647,
    "language": "en-US",
    "description": "",
    "locations": [
        {
            "type": "google_meet",
            "name": "Google Meet"
        }
    ],
    "questions": [
        {
            "type": "text",
            "name": "1695963612423",
            "label": "Name",
            "value": "",
            "required": true,
            "options": []
        },
        {
            "type": "email",
            "name": "1695963612424",
            "label": "Email address",
            "value": "",
            "required": true,
            "options": []
        },
        {
            "type": "tel",
            "name": "1695963612425",
            "label": "Mobile number",
            "value": "",
            "required": true,
            "options": []
        },
        {
            "type": "textarea",
            "name": "1695963612426",
            "label": "Please share anything that will help prepare for our meeting",
            "value": "",
            "required": false,
            "options": []
        }
    ],
    "settings": {
        "confirmation": {
            "redirect": {},
            "link": {},
            "type": "default"
        },
        "date_format": "MMM, DD YYYY",
        "time_format": "h:mm a",
        "privacy": {
            "type": "public"
        },
        "guest": {
            "is_allowed": true,
            "max_allowed": 10,
            "is_chargeable": false
        },
        "policy": {
            "reschedule": {
                "is_enabled": true,
                "description": "",
                "terms": {
                    "type": "minutes",
                    "value": 15
                }
            },
            "cancellation": {
                "is_enabled": true,
                "description": "",
                "terms": {
                    "type": "minutes",
                    "value": 15
                }
            }
        },
        "prevent_duplicates": false,
        "require_approval": false,
        "email_to_host": true,
        "email_to_invitee": true,
        "skip_form": false,
        "hide_language": false,
        "hide_timezone": false,
        "attendees": [],
        "clock_24": false,
        "is_timezone_locked": false
    },
    "attachments": [],
    "is_enabled": true,
    "booking_url": "https://your-domain.dayschedule.com",
    "rank": 1,
    "is_template": false,
    "created_at": "2023-09-28T05:52:21.175Z",
    "updated_at": "2023-09-29T04:54:04.711Z",
    "id": "63a4395eago29006345f7b52"
}
```

### Create Resource
```js
dayschedule.resources.create({
    "language":"en-US",
    "locations":[{
        "name":"Google Meet",
        "type":"google_meet"
     }],
     "questions":[
        {
            "type":"text",
            "name":"name",
            "label":"Name",
            "value":"",
            "required":true
        },{
            "type":"email",
            "name":"email",
            "label":"Email address",
            "value":"",
            "required":true
        },{
            "type":"tel",
            "name":"mobile",
            "label":"Mobile number",
            "value":"",
            "required":true
        },{
            "type":"textarea",
            "name":"description",
            "label":"Please share anything that will help prepare for our meeting",
            "value":"",
            "required":false
         }],
         "settings":{
            "confirmation":{
                "type":"thanks",
                "link":{},
                "redirect":{},
                "message":"Thank you for scheduling an appointment with us, we are looking forward to our meeting soon."
            },
            "attendees":[],
            "guest":{
                "is_allowed":true,
                "max_allowed":10,
                "is_chargeable":false
            },
            "privacy":{
                "type":"public"
            },
            "policy":{
                "reschedule":{
                    "is_enabled":true,
                    "terms":{
                        "type":"minutes",
                        "value":0
                    }
                },
                "cancellation":{
                    "is_enabled":true,
                    "terms":{
                        "type":"minutes",
                        "value":0
                    }
                }
            },
            "email_to_invitee":true,
            "email_to_host":true,
            "date_format":"MMM, DD YYYY",
            "time_format":"h:mm a",
            "is_timezone_locked":false,
            "hide_timezone":false,
            "hide_language":false,
            "skip_form":false},
            "attachments":[],
            "is_enabled":true,
            "notice":{
                "type":"minutes",
                "value":0
            },
            "slots":{
                "type":"minutes",
                "value":30
            },
            "durations":[{
                "type":"minutes",
                "value":30
             }],
             "color":"#5319e7",
             "capacity":{ 
                "is_unlimited":true
             },
             "break":{},
             "period":{
                "type":"calendar_days",
                "days":60,
                "specific":[]
             },
             "payment":{
                "gateways":[]
              },
              "prices":[],
              "members":[],
              "page_id":333,
              "type":"event",
              "user_id":758,
              "event_type":"one_on_one",
              "name":"Test Resource",
              "slug":"/test-resource",
              "description":"Description for this event"
            })
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Resources/operation/ResourceController_createResource)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| location*     | object      | Specify location whether its conference type, physical or telephonic.                       |
| question*     | array      | Add questions to collect more information about your customers. (e.g. their phone number, address etc.)             |
| page_id*         | number      | Id of the page you want to add this resource                           |
| type*         | string      | Type of resource                           |
| name*         | string      | Name of the resource                        |
| schedule_id*         | number      | Resource owner schedule id                            |

**Response:**
```json
{
    "language": "en-US",
    "locations": [
        {
            "name": "Google Meet",
            "type": "google_meet",
            "remarks": "Web conference using Google meet"
        }
    ],
    "questions": [
        {
            "type": "text",
            "name": "name",
            "label": "Name",
            "value": "",
            "required": true
        },
        {
            "type": "email",
            "name": "email",
            "label": "Email address",
            "value": "",
            "required": true
        },
        {
            "type": "tel",
            "name": "mobile",
            "label": "Mobile number",
            "value": "",
            "required": true
        },
        {
            "type": "textarea",
            "name": "description",
            "label": "Please share anything that will help prepare for our meeting",
            "value": "",
            "required": false
        }
    ],
    "settings": {
        "confirmation": {
            "type": "thanks",
            "link": {},
            "redirect": {},
            "message": "Thank you for scheduling an appointment with us, we are looking forward to our meeting soon."
        },
        "attendees": [],
        "guest": {
            "is_allowed": true,
            "max_allowed": 10,
            "is_chargeable": false
        },
        "privacy": {
            "type": "public"
        },
        "policy": {
            "reschedule": {
                "is_enabled": true,
                "terms": {
                    "type": "minutes",
                    "value": 0
                }
            },
            "cancellation": {
                "is_enabled": true,
                "terms": {
                    "type": "minutes",
                    "value": 0
                }
            }
        },
        "email_to_invitee": true,
        "email_to_host": true,
        "date_format": "MMM, DD YYYY",
        "time_format": "h:mm a",
        "is_timezone_locked": false,
        "hide_timezone": false,
        "hide_language": false,
        "skip_form": false,
        "require_approval": false,
        "prevent_duplicates": false,
        "clock_24": false
    },
    "attachments": [],
    "is_enabled": true,
    "notice": {
        "type": "minutes",
        "value": 0
    },
    "slots": {
        "type": "minutes",
        "value": 30
    },
    "durations": [
        {
            "type": "minutes",
            "value": 30
        }
    ],
    "color": "#5319e7",
    "capacity": {
        "is_unlimited": true
    },
    "break": {},
    "period": {
        "type": "calendar_days",
        "days": 60,
        "specific": []
    },
    "payment": {
        "gateways": []
    },
    "prices": [],
    "members": [],
    "page_id": 3233,
    "type": "event",
    "user_id": 2458,
    "event_type": "one_on_one",
    "name": "Test Resource",
    "slug": "/test-resource",
    "description": "Description for this event",
    "is_template": false,
    "rank": 1,
    "org_id": 2347,
    "booking_url": "https://your-domain.dayschedule.com",
    "schedule_id": 52337,
    "id": "6524eewed72b40081c7361c11"
}
```

### Update Resource
```js
dayschedule.resources.update(resource_id, {
  "event_type": "one_on_one",
  "notice": {
    "type": "minutes",
    "value": 0
  },
  "durations": [
    {
      "type": "minutes",
      "value": 30
    }
  ],
  "slots": {
    "type": "minutes",
    "value": 30
  },
  "color": "#5319e7",
  "capacity": {
    "is_unlimited": true
  },
  "break": {},
  "period": {
    "type": "calendar_days",
    "days": 60,
    "specific": []
  },
  "payment": {
    "gateways": []
  },
  "prices": [],
  "members": [],
  "org_id": 2547,
  "page_id": 33333,
  "user_id": 72528,
  "name": "Test Resource",
  "slug": "/test-resource",
  "type": "event",
  "schedule_id": 53437,
  "language": "en-US",
  "description": "<p>Description for this event</p>\n",
  "locations": [
    {
      "name": "Google Meet",
      "type": "google_meet",
      "remarks": "Web conference using Google meet"
    }
  ],
  "questions": [
    {
      "type": "text",
      "name": "name",
      "label": "Name",
      "value": "",
      "required": true
    },
    {
      "type": "email",
      "name": "email",
      "label": "Email address",
      "value": "",
      "required": true
    },
    {
      "type": "tel",
      "name": "mobile",
      "label": "Mobile number",
      "value": "",
      "required": true
    },
    {
      "type": "textarea",
      "name": "description",
      "label": "Please share anything that will help prepare for our meeting",
      "value": "",
      "required": false
    }
  ],
  "settings": {
    "confirmation": {
      "type": "thanks",
      "link": {},
      "redirect": {},
      "message": "Thank you for scheduling an appointment with us, we are looking forward to our meeting soon."
    },
    "attendees": [],
    "guest": {
      "is_allowed": true,
      "max_allowed": 10,
      "is_chargeable": false
    },
    "privacy": {
      "type": "public"
    },
    "policy": {
      "reschedule": {
        "is_enabled": true,
        "terms": {
          "type": "minutes",
          "value": 0
        }
      },
      "cancellation": {
        "is_enabled": true,
        "terms": {
          "type": "minutes",
          "value": 0
        }
      }
    },
    "email_to_invitee": true,
    "email_to_host": true,
    "date_format": "MMM, DD YYYY",
    "time_format": "h:mm a",
    "is_timezone_locked": false,
    "hide_timezone": false,
    "hide_language": false,
    "skip_form": false,
    "require_approval": false,
    "prevent_duplicates": false,
    "clock_24": false
  },
  "attachments": [],
  "is_enabled": true,
  "booking_url": "https://your-domain.dayschedule.com",
  "rank": 1,
  "is_template": false,
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Resources/operation/ResourceController_createResource)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| location*     | object      | Specify location whether its conference type, physical or telephonic.                       |
| question*     | array      | Add questions to collect more information about your customers. (e.g. their phone number, address etc.)             |
| page_id*         | number      | Id of the page you want to add this resource                           |
| type*         | string      | Type of resource                           |
| name*         | string      | Name of the resource                        |
| schedule_id*         | number      | Resource owner schedule id                            |

**Response:**
```json
{
    "language": "en-US",
    "locations": [
        {
            "name": "Google Meet",
            "type": "google_meet",
            "remarks": "Web conference using Google meet"
        }
    ],
    "questions": [
        {
            "type": "text",
            "name": "name",
            "label": "Name",
            "value": "",
            "required": true
        },
        {
            "type": "email",
            "name": "email",
            "label": "Email address",
            "value": "",
            "required": true
        },
        {
            "type": "tel",
            "name": "mobile",
            "label": "Mobile number",
            "value": "",
            "required": true
        },
        {
            "type": "textarea",
            "name": "description",
            "label": "Please share anything that will help prepare for our meeting",
            "value": "",
            "required": false
        }
    ],
    "settings": {
        "confirmation": {
            "type": "thanks",
            "link": {},
            "redirect": {},
            "message": "Thank you for scheduling an appointment with us, we are looking forward to our meeting soon."
        },
        "attendees": [],
        "guest": {
            "is_allowed": true,
            "max_allowed": 10,
            "is_chargeable": false
        },
        "privacy": {
            "type": "public"
        },
        "policy": {
            "reschedule": {
                "is_enabled": true,
                "terms": {
                    "type": "minutes",
                    "value": 0
                }
            },
            "cancellation": {
                "is_enabled": true,
                "terms": {
                    "type": "minutes",
                    "value": 0
                }
            }
        },
        "email_to_invitee": true,
        "email_to_host": true,
        "date_format": "MMM, DD YYYY",
        "time_format": "h:mm a",
        "is_timezone_locked": false,
        "hide_timezone": false,
        "hide_language": false,
        "skip_form": false,
        "require_approval": false,
        "prevent_duplicates": false,
        "clock_24": false
    },
    "attachments": [],
    "is_enabled": true,
    "notice": {
        "type": "minutes",
        "value": 0
    },
    "slots": {
        "type": "minutes",
        "value": 30
    },
    "durations": [
        {
            "type": "minutes",
            "value": 30
        }
    ],
    "color": "#5319e7",
    "capacity": {
        "is_unlimited": true
    },
    "break": {},
    "period": {
        "type": "calendar_days",
        "days": 60,
        "specific": []
    },
    "payment": {
        "gateways": []
    },
    "prices": [],
    "members": [],
    "page_id": 34333,
    "type": "event",
    "user_id": 75328,
    "event_type": "one_on_one",
    "name": "Test Resource",
    "slug": "/test-resource",
    "description": "Description for this event",
    "is_template": false,
    "rank": 1,
    "org_id": 222387,
    "booking_url": "https://your-domain.dayschedule.com",
    "schedule_id": 537,
    "id": "6524e2ad72b54221c7361c11"
}
```

### Delete  Resource
```js
dayschedule.resources.delete(resource_id)
```
**Response:**
```json
{
  "message": "1 resource's deleted successfully"
}
```
