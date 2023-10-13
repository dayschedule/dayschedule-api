# Invitees

### Get Invitees List
```js
dayschedule.invitees.list({
  booking_id: "651d0b5a73cag56a34f342b9",
  limit: 15,
  offset: 0
})
```
**Parameters:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| limit     | number      |  No of contact you want to fetch                 |
| offset     | number      | offset value             |
| booking_id*     | string      | Booking id to fetch invitees of a particular booking            |

**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
    "booking_id": "651d0b5a73ca796a34f342b9",
    "org_id": 287,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "guests": [],
    "status": "confirmed",
    "time_zone": "Asia/Calcutta",
    "token": "49HVGP11MV",
    "questions": [],
    "custom_fields": [],
    "tracking": {
        "ip": "103.237.159.37",
        "client": {
            "type": "browser",
            "name": "Chrome",
            "version": "117.0",
            "engine": "Blink",
            "engineVersion": ""
        },
        "os": {
            "name": "Mac",
            "version": "10.15",
            "platform": ""
        },
        "device": {
            "type": "desktop",
            "brand": "Apple",
            "model": ""
        },
        "bot": null
    },
    "created_at": "2023-10-13T04:52:21.903Z",
    "updated_at": "2023-10-13T04:54:11.964Z",
    "invitee_id": "6528cd05bf8e41ca2cf30633"
 }]
}
```

### Get Invitee
```js
dayschedule.invitees.get(invitee_id)
```

**Response:**
```json
{
    "booking_id": "651d0b5a73ca796a34f342b9",
    "org_id": 287,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "guests": [],
    "status": "confirmed",
    "time_zone": "Asia/Calcutta",
    "token": "49HVGP11MV",
    "questions": [],
    "custom_fields": [],
    "tracking": {
        "ip": "103.237.159.37",
        "client": {
            "type": "browser",
            "name": "Chrome",
            "version": "117.0",
            "engine": "Blink",
            "engineVersion": ""
        },
        "os": {
            "name": "Mac",
            "version": "10.15",
            "platform": ""
        },
        "device": {
            "type": "desktop",
            "brand": "Apple",
            "model": ""
        },
        "bot": null
    },
    "created_at": "2023-10-13T04:52:21.903Z",
    "updated_at": "2023-10-13T04:54:11.964Z",
    "invitee_id": "6528cd05bf8e41ca2cf30633"
}
```

### Create Invitee
```js
dayschedule.invitees.create({
  "status": "confirmed",
  "guests": [],
  "questions": [],
  "payment": {},
  "booking_id": "651d0b5a73ca796a34f342b9",
  "time_zone": "Asia/Calcutta",
  "name": "John Doe",
  "email": "johndoe@gmail.com"
})
```

**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Invitees/operation/InviteeController_addInvitee)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*    | string     |  name of the invitee                 |
| email*     | string      | email of the invitee             |
| booking_id*     | string      | Booking id to fetch invitees of a particular booking            |

**Response:**
```json
{
    "invitee_id": "6528cd05bfr441ca2cf30633",
    "status": "confirmed",
    "guests": [],
    "questions": [],
    "payment": {},
    "booking_id": "651d0b5a23ca796a34f342b9",
    "time_zone": "Asia/Calcutta",
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "custom_fields": [],
    "org_id": 287,
    "token": "49HVG121MV",
    "tracking": {
        "ip": "103.237.159.37",
        "client": {
            "type": "browser",
            "name": "Chrome",
            "version": "117.0",
            "engine": "Blink",
            "engineVersion": ""
        },
        "os": {
            "name": "Mac",
            "version": "10.15",
            "platform": ""
        },
        "device": {
            "type": "desktop",
            "brand": "Apple",
            "model": ""
        },
        "bot": null,
        "location": {}
    }
}
```

### Update Invitee
```js
dayschedule.invitees.update(invitee_id, {
  "invitee_id": "6528cd05bf8e41ca2cf30633",
  "status": "confirmed",
  "guests": [],
  "questions": [],
  "payment": {},
  "booking_id": "651d0b5a73ca796a34f342b9",
  "time_zone": "Asia/Calcutta",
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "custom_fields": [],
  "org_id": 287,
  "token": "49HVGP11MV",
  "tracking": {
    "ip": "103.237.159.37",
    "client": {
      "type": "browser",
      "name": "Chrome",
      "version": "117.0",
      "engine": "Blink",
      "engineVersion": ""
    },
    "os": {
      "name": "Mac",
      "version": "10.15",
      "platform": ""
    },
    "device": {
      "type": "desktop",
      "brand": "Apple",
      "model": ""
    },
    "bot": null,
    "location": {}
  }
})
```

**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Invitees/operation/InviteeController_updateInvitee)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*    | string     |  name of the contact                 |
| email*     | string      | email of the contact             |

**Response:**
```json
{
    "booking_id": "651d0b5a7wea796a34f342b9",
    "org_id": 287,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "guests": [],
    "status": "confirmed",
    "time_zone": "Asia/Calcutta",
    "token": "49HVGP11MV",
    "questions": [],
    "custom_fields": [],
    "tracking": {
        "ip": "103.237.159.37",
        "client": {
            "type": "browser",
            "name": "Chrome",
            "version": "117.0",
            "engine": "Blink",
            "engineVersion": ""
        },
        "os": {
            "name": "Mac",
            "version": "10.15",
            "platform": ""
        },
        "device": {
            "type": "desktop",
            "brand": "Apple",
            "model": ""
        },
        "bot": null
    },
    "created_at": "2023-10-13T04:52:21.903Z",
    "updated_at": "2023-10-13T04:54:11.964Z",
    "invitee_id": "6528cd05bf8e32ca2cf30633"
}
```

### Delete Invitee
```js
dayschedule.invitees.delete(invitee_id)
```
**Response:**
```json
{
  "message": "Invitee with id: 652779434b555dee67cc87b8 deleted successfully"
}
```