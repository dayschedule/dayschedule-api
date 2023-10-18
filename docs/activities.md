# Activities

### Get Activities List
```js
dayschedule.activities.list(contact_id, {
    limit: 15,
    offset: 0
})
```
**Parameters:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| limit     | number      |  No of contact you want to fetch                 |
| offset     | number      | offset value             |

**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
            "org_id": 21287,
            "user": {
                "name": "John Doe",
                "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
                "email": "johndoe@gmail.com",
                "user_id": 758
            },
            "contact_id": "63eeffceff70e237d9de0d66",
            "type": "call",
            "title": "Test Call",
            "description": "<div>This is the test call</div>",
            "date": "2023-10-05T10:27:18.000Z",
            "status": "submitted",
            "created_at": "2023-10-03T11:06:16.966Z",
            "updated_at": "2023-10-03T11:06:16.966Z",
            "activity_id": "651bf5a873ca743a34f324d6"
        }]
}
```

### Get Activity
```js
dayschedule.activities.get(activity_id)
```

**Response:**
```json
{
    "org_id": 21287,
    "user": {
        "name": "John Doe",
        "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "email": "johndoe@gmail.com",
        "user_id": 758
    },
    "contact_id": "63eeffceff70e237d9de0d66",
    "type": "call",
    "title": "Test Call",
    "description": "<div>This is the test call</div>",
    "date": "2023-10-05T10:27:18.000Z",
    "status": "submitted",
    "created_at": "2023-10-03T11:06:16.966Z",
    "updated_at": "2023-10-03T11:06:16.966Z",
    "activity_id": "651bf5a873ca743a34f324d6"
}
```

### Create Activity
```js
dayschedule.activities.create({
  "type": "note",
  "status": "submitted",
  "description": "Description for the activity",
  "contact_id": "63e9db8d12783e54eba25685"
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Activity/operation/ActivityController_createActivity)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| contact_id*    | string     |  contact_id to attact with a particular contact                 |
| type*     | string      | Title of the activity             |

**Response:**
```json
{
    "activity_id": "65279b350f742234877e0d58",
    "type": "note",
    "status": "submitted",
    "description": "Description for the activity",
    "contact_id": "63e9db8d12783e54eba25685",
    "file": {},
    "user": {
        "name": "John Doe",
        "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "email": "johndoe@gmail.com",
        "user_id": 13258
    },
    "org_id": 23227,
    "created_at": "2023-10-12T07:07:33.390Z"
}
```

### Delete Activity
```js
dayschedule.activities.delete(activity_id)
```
**Response:**
```json
{
  "message": "Activity with id: 651bf5a873ca743a34f324d6 deleted successfully"
}
```