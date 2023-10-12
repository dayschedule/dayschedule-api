# Contacts

### Get Contacts List
```js
dayschedule.contacts.list({
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
            "org_id": 287,
            "name": "John Doe",
            "email": "johndoe@gmail.com",
            "phone": "",
            "company": "",
            "source": "",
            "hotness": 3,
            "tags": [
                {
                    "background": "#BAB86C",
                    "color": "#333",
                    "name": "Proposal Sent"
                }
            ],
            "custom_fields": [
                {
                    "name": "url",
                    "value": ""
                },
                {
                    "name": "date",
                    "value": ""
                },
                {
                    "name": "source",
                    "value": ""
                }
            ],
            "created_at": "2023-02-14T06:36:54.664Z",
            "updated_at": "2023-10-03T09:44:01.547Z",
            "followup": "2023-03-31T07:05:00.000Z",
            "user_id": 34758,
            "contact_id": "63eb2c063g48dca5b69fc0e5"
        }]
}
```

### Get Contact
```js
dayschedule.contacts.get(contact_id)
```

**Response:**
```json
{
    "email": "johndoe@gmail.com",
    "org_id": 287,
    "created_at": "2023-10-05T06:06:33.066Z",
    "custom_fields": [],
    "hotness": 4,
    "name": "John Doe",
    "source": "https://your-domain.dayschedule.in",
    "tags": [],
    "updated_at": "2023-10-05T06:21:24.531Z",
    "contact_id": "651e526930a04e4r1fb682f5"
}
```

### Create Contact
```js
dayschedule.contacts.create({
  "tags": [
    {
      "background": "#FE828C",
      "color": "#333",
      "name": "Meeting scheduled"
    }
  ],
  "custom_fields": [],
  "user_id": 17358,
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "phone": "+91 xxxxxxxxxx",
  "company": "Dayschedule",
  "source": ""
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Contacts/operation/ContactController_createContact)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*    | string     |  name of the contact                 |
| email*     | string      | email of the contact             |

**Response:**
```json
{
    "contact_id": "652779434b555dee67cc87b8",
    "tags": [
        {
            "background": "#FE828C",
            "color": "#333",
            "name": "Meeting scheduled"
        }
    ],
    "custom_fields": [],
    "user_id": 17358,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": "+91 xxxxxxxxxx",
    "company": "Dayschedule",
    "source": "",
    "hotness": 1,
    "org_id": 12287,
    "created_at": "2023-10-12T04:42:46.835Z"
}

```

### Update Contact
```js
dayschedule.contacts.update(contact_id, {
  "email": "johndoe@gmail.com",
  "org_id": 13287,
  "created_at": "2023-10-11T04:55:19.221Z",
  "custom_fields": [],
  "hotness": 4,
  "name": "John Doe",
  "phone": "+91 xxxxxxxxxx",
  "source": "https://powergym.dayschedule.in",
  "tags": [],
  "updated_at": "2023-10-11T05:08:54.868Z",
  "contact_id": "65262ab780ed436d6a4db92e",
  "company": ""
})
```

**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Contacts/operation/ContactController_createContact)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*    | string     |  name of the contact                 |
| email*     | string      | email of the contact             |

**Response:**
```json
{
    "email": "johndoe@gmail.com",
    "org_id": 287,
    "created_at": "2023-10-11T04:55:19.221Z",
    "custom_fields": [],
    "hotness": 4,
    "name": "John Doe",
    "phone": "+91 xxxxxxxxxx",
    "source": "https://your-domain.dayschedule.in",
    "tags": [],
    "updated_at": "2023-10-12T06:41:06.866Z",
    "company": "",
    "contact_id": "65262ab780ed436d6a4db92e"
}
```

### Delete Contact
```js
dayschedule.contacts.delete(contact_id)
```
**Response:**
```json
{
  "message": "Contact with id: 652779434b555dee67cc87b8 deleted successfully"
}
```