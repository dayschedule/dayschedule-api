# Users

### Get Users List
```js
dayschedule.users.list()
```

**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
        "user_id": 3233,
        "org_id": 5322,
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "phone": "+91 xxxxxxxxxx",
        "role": "Owner",
        "permissions": null,
        "is_verified": 1,
        "team_access": 1,
        "page_id": 42322,
        "booking_url": "your-domain.dayschedule.in",
        "status": "active",
        "time_zone": "Asia/Calcutta",
        "location": "Delhi",
        "team": "Development",
        "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "availability": [
            {
                "day": "SUN",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": false
            },
            {
                "day": "MON",
                "times": [
                    {
                        "end": "18:00",
                        "start": "10:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "TUE",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "WED",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "THU",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "FRI",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "SAT",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": false
            },
            {
                "day": "2023-05-17",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": false
            },
            {
                "day": "2023-05-16",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": false
            }
        ],
        "last_login_at": "2023-10-10T04:06:32.000Z",
        "created_at": "2022-12-15T04:15:10.000Z",
        "updated_at": "2023-10-10T04:06:32.000Z"
    }]
}
```

### Get User
```js
dayschedule.users.get(user_id)
```

**Response:**
```json
{
    "user_id": 34218,
    "org_id": 12312,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "role": "Owner",
    "permissions": null,
    "status": "active",
    "time_zone": "Asia/Calcutta",
    "team_access": 1,
    "is_verified": 1,
    "location": "Delhi",
    "team": "Development",
    "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
    "phone": "+91 xxxxxxxxxx",
    "plan": "Pro",
    "seats_limit": 1,
    "seats_used": 3,
    "domain": "your-domain",
    "page_id": 23222,
    "created_at": "2022-12-15T04:15:10.000Z",
    "last_login_at": "2023-10-10T04:06:32.000Z"
}
```

### Create User
```js
dayschedule.users.create({
    "emails":["johndoe@gmail.com"],
    "team_access":true,
    "role":"Admin",
    "location":"Delhi",
    "team":"Sales"
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Users/operation/UserController_createUser)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| emails*     | array<string>      |  Add user emails you want to add                 |
| role*     | array      | specify user role.             |

**Response:**
```json
[{
    "user_id":86234,
    "name":"John Doe",
    "email":"johndoe@gmail.com"
}]

```

### Update User
```js
dayschedule.users.update({
    "name":"John Doe",
    "email":"johndoe@gmail.com",
    "phone":"+91 xxxxxxxxxx",
    "role":"Admin",
    "permissions":null,
    "status":"active",
    "location":"Delhi",
    "team":"Sales",
    "team_access": true
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Users/operation/UserController_updateUser)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*     | string      | Name of the user.             |
| email*     | array<string>      |  email of the user                 |
| role*     | array      | specify user role.             |
| status*     | string      | specify user status.             |
| permissions*     | string      | specify user access permission.             |
| phone*     | string      | specify user phone number.             |

**Response:**
```json
{ 
    "user_id": 81464,
    "org_id": 2657,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "phone": null,
    "role": "Admin",
    "permissions": null,
    "is_verified": 0,
    "team_access": 1,
    "page_id": null,
    "booking_url": null,
    "status": "active",
    "time_zone": null,
    "location": "Delhi",
    "team": "Sales",
    "avatar": null,
    "availability": null,
    "last_login_at": null,
    "created_at": "2023-10-10T10:23:33.000Z",
    "updated_at": null
}
```

### Delete User
```js
dayschedule.users.delete(user_id)
```
**Response:**
```json
{
  "message": "User with id: 76093 deleted successfully"
}
```