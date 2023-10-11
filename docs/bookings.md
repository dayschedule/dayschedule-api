# Bookings

### Get Bookings List
```js
dayschedule.bookings.list({
    start: "2023-10-11",
    source: "dayschedule",
    limit: 15,
})
```

**Parameters:**

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| start     | date      |         start date          |
| source     | string      | specify source of booking eg:- dayschedule, google etc.            |
| limit     | number      | specify number of bookings you want to fetch            |

**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
        "org_id":287,
        "ical_uid":"651e5487e9d2ba9959f91ca3@ical.dayschedule.com",
        "source":"dayschedule",
        "resource":{
        "resource_id":"63a4395eaf028506345f7b52",
        "type":"event",
        "event_type":"one_on_one",
        "name":"Test Resource",
        "slug":"/test-resource",
        "description":"gh"
        },
        "host":{
        "user_id":758,
        "name":"Vraj",
        "email":"vraj@gmail.com",
        "phone":"+91 xxxxxxxxxx",
        "avatar":"https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "time_zone":"Asia/Calcutta"
        },
        "subject":"John doe and Vraj: Test Resource",
        "start_at":"2023-10-11T04:30:00.000Z",
        "end_at":"2023-10-11T05:00:00.000Z",
        "duration":{
        "type":"minutes",
        "value":30
        },
        "time_zone":"Asia/Kolkata",
        "status":"confirmed",
        "color":"#039be5",
        "location":{
        "type":"google_meet",
        "name":"Google Meet",
        "join_url":"https://meet.google.com/yii-dyph-cge"
        },
        "booking_url":"https://your-domain.dayschedule.com",
        "links":[
        {
        "type":"google",
        "id":"jb791f40jjvv37bgjdkjnvhstg",
        "url":"https://www.google.com/calendar/event?eid=amI3OTFmNDBqanZ2MzdiZ2pka2pudmhzdGcgc2h1YmguamFpbkBkYXlzY2hlZHVsZS5jb20",
        "connection_id":"65167489fc87f6039f7198b1"
        }
        ],
        "reschedules":[
        ],
        "attendees":[
        {
        "email":"vraj1@gmail.com",
        "name":null,
        "organizer":true,
        "status":"accepted"
        },
        {
        "name":null,
        "email":"vraj2@gmail.com",
        "status":"accepted"
        }
        ],
        "busy":true,
        "recurrence":[
        ],
        "created_at":"2023-10-05T06:15:35.358Z",
        "updated_at":"2023-10-05T06:15:40.572Z",
        "description":"<p>John DOw scheduled Google Meet meeting with Vraj on <a href=\"https://your-domain.dayschedule.com/test-resource\">https://your-domain.dayschedule.com/test-resource</a></p><h3>Topic: Test Resource</h3><h4>Time: October, 11 2023 10:00 am (GMT +05:30)</h4><hr/><p><strong>Name:</strong><br/>John Doe</p><p><strong>Email address:</strong><br/>vraj@gmail.com</p><hr/><p><a booking_id=\"651e5487e9d2ba9959f91ca3\" href=\"https://your-domain.dayschedule.com/bookings/in_651e5487e9d2ba9959f91ca6\">See details on DaySchedule →</a></p>",
        "cancel_reason":null,
        "canceled_by":null,
        "booking_id":"651e5487e9d2ba9959f91ca3"
        }]
}
```

### Get Booking
```js
dayschedule.bookings.get(user_id)
```

**Response:**
```json
{
    "org_id": 287,
    "ical_uid": "651e5487e9d2ba9959f91ca3@ical.dayschedule.com",
    "source": "dayschedule",
    "resource": {
        "resource_id": "63a4395eaf028506345f7b52",
        "type": "event",
        "event_type": "one_on_one",
        "name": "Test Resource",
        "slug": "/test-resource",
        "description": "gh"
    },
    "host": {
        "user_id": 758,
        "name": "Vraj",
        "email": "vraj@gmail.com",
        "phone": "+91 9149054584",
        "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "time_zone": "Asia/Calcutta"
    },
    "subject": "Vraj and John Doe: Test Resource",
    "start_at": "2023-10-11T04:30:00.000Z",
    "end_at": "2023-10-11T05:00:00.000Z",
    "duration": {
        "type": "minutes",
        "value": 30
    },
    "time_zone": "Asia/Kolkata",
    "status": "confirmed",
    "color": "#039be5",
    "location": {
        "type": "google_meet",
        "name": "Google Meet",
        "join_url": "https://meet.google.com/yii-dlfh-cge"
    },
    "booking_url": "https://your-domain.dayschedule.com",
    "links": [
        {
            "type": "google",
            "id": "jb791f40jjvv37bgjdkjnvhstg",
            "url": "https://www.google.com/calendar/event?eid=amI3OTFmNDBqanZ2MzdiZ2pka2pudmhzdGcgc2h1YmguamFpbkBkYXlzY2hlZHVsZS5jb20",
            "connection_id": "65167489fc87f6039f7198b1"
        }
    ],
    "reschedules": [],
    "attendees": [
        {
            "email": "johndoe@gmail.com",
            "name": null,
            "organizer": true,
            "status": "accepted"
        },
        {
            "name": null,
            "email": "vraj@gmail.com",
            "status": "accepted"
        }
    ],
    "busy": true,
    "recurrence": [],
    "created_at": "2023-10-05T06:15:35.358Z",
    "updated_at": "2023-10-05T06:15:40.572Z",
    "description": "<p>John Doe scheduled Google Meet meeting with Vraj on <a href=\"https://your-domain.dayschedule.com/test-resource\">https://your-domain.dayschedule.com/test-resource</a></p><h3>Topic: Test Resource</h3><h4>Time: October, 11 2023 10:00 am (GMT +05:30)</h4><hr/><p><strong>Name:</strong><br/>John DOe</p><p><strong>Email address:</strong><br/>johndoe@gmail.com</p><hr/><p><a booking_id=\"651e5487e9d2ba9959f91ca3\" href=\"https://your-domain.dayschedule.com/bookings/in_651e5487e9d2ba9959f91ca6\">See details on DaySchedule &rarr;</a></p>",
    "cancel_reason": null,
    "canceled_by": null,
    "logs": [
        "2023-10-05T06:15:35.961Z\tINFO\tRunning task: booking",
        "2023-10-05T06:15:36.267Z\tINFO\tConnecting to: google",
        "2023-10-05T06:15:38.115Z\tINFO\tStatus: 200",
        "2023-10-05T06:15:38.116Z\tINFO\t{\"status\":200,\"body\":{\"kind\":\"calendar#event\",\"etag\":\"\\\"3392973074338000\\\"\",\"id\":\"jb791f40jjvv37bgjdkjnvhstg\",\"status\":\"confirmed\",\"htmlLink\":\"https://www.google.com/calendar/event?eid=amI3OTFmNDBqanZ2MzdiZ2pka2pudmhzdGcgc2h1YmguamFpbkBkYXlzY2hlZHVsZS5jb20\",\"created\":\"2023-10-05T06:15:37.000Z\",\"updated\":\"2023-10-05T06:15:37.169Z\",\"summary\":\"Vraj: Test Resource\",\"description\":\"<p>John Doe scheduled Google Meet meeting with Vraj on <a href=\\\"https://your-domain.dayschedule.com/test-resource\\\">https://your-domain.dayschedule.com/test-resource</a></p><h3>Topic: Test Resource</h3><h4>Time: October, 11 2023 10:00 am (GMT +05:30)</h4><hr/><p><strong>Name:</strong><br/>John Doe</p><p><strong>Email address:</strong><br/>vraj@gmail.com</p><hr/><p><a booking_id=\\\"651e5487e9d2ba9959f91ca3\\\" href=\\\"https://your-domain.dayschedule.com/bookings/in_651e5487e9d2ba9959f91ca6\\\">See details on DaySchedule &rarr;</a></p>\",\"colorId\":\"7\",\"creator\":{\"email\":\"johndoe@gmail.com\",\"self\":true},\"organizer\":{\"email\":\"johndoe@gmail.com\",\"self\":true},\"start\":{\"dateTime\":\"2023-10-11T10:00:00+05:30\",\"timeZone\":\"Asia/Kolkata\"},\"end\":{\"dateTime\":\"2023-10-11T10:30:00+05:30\",\"timeZone\":\"Asia/Kolkata\"},\"iCalUID\":\"jb791f40jjvv37bgjdkjnvhstg@google.com\",\"sequence\":0,\"attendees\":[{\"email\":\"johndoe@gmail.com\",\"organizer\":true,\"self\":true,\"responseStatus\":\"needsAction\"},{\"email\":\"vraj8@gmail.com\",\"responseStatus\":\"accepted\"}],\"hangoutLink\":\"https://meet.google.com/yii-dyph-cge\",\"conferenceData\":{\"createRequest\":{\"requestId\":\"sample123\",\"conferenceSolutionKey\":{\"type\":\"hangoutsMeet\"},\"status\":{\"statusCode\":\"success\"}},\"entryPoints\":[{\"entryPointType\":\"video\",\"uri\":\"https://meet.google.com/yii-dyph-cge\",\"label\":\"meet.google.com/yii-dyph-cge\"},{\"entryPointType\":\"more\",\"uri\":\"https://tel.meet/yii-dyph-cge?pin=6042646241917\",\"pin\":\"6042646241917\"},{\"regionCode\":\"US\",\"entryPointType\":\"phone\",\"uri\":\"tel:+1-318-588-6748\",\"label\":\"+1 318-588-6748\",\"pin\":\"547779926\"}],\"conferenceSolution\":{\"key\":{\"type\":\"hangoutsMeet\"},\"name\":\"Google Meet\",\"iconUri\":\"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png\"},\"conferenceId\":\"yii-dyph-cge\"},\"reminders\":{\"useDefault\":false,\"overrides\":[{\"method\":\"popup\",\"minutes\":15}]},\"source\":{\"url\":\"http://localhost:4200/bookings/651e5487e9d2ba9959f91ca3\",\"title\":\"DaySchedule\"},\"eventType\":\"default\"}}",
        "2023-10-05T06:15:38.117Z\tINFO\tSending email...",
        "2023-10-05T06:15:39.558Z\tINFO\t{\"email\":\"vraj@gmail.com\",\"status\":\"sent\",\"_id\":\"c6ae075792a14743a1d79fd13616e5a5\",\"reject_reason\":null,\"queued_reason\":null}",
        "2023-10-05T06:15:39.558Z\tINFO\t{\"email\":\"vraj@gmail.com\",\"status\":\"sent\",\"_id\":\"b52375a9df3f4f9ba3cdedc4f82c9e35\",\"reject_reason\":null,\"queued_reason\":null}",
        "2023-10-05T06:15:40.570Z\tINFO\tBooking completed successfully"
    ],
    "invitees": [
        {
            "name": "John Doe",
            "email": "johndoe@gmail.com",
            "guests": [],
            "status": "confirmed",
            "time_zone": "Asia/Calcutta",
            "token": "1WI4401DOY",
            "questions": [
                {
                    "type": "text",
                    "name": "1694500929401",
                    "label": "Name",
                    "value": "John Doe"
                },
                {
                    "type": "email",
                    "name": "1694500929402",
                    "label": "Email address",
                    "value": "johndoe@gmail.com"
                },
                {
                    "type": "textarea",
                    "name": "1694500929403",
                    "label": "Please share anything that will help prepare for our meeting",
                    "value": ""
                }
            ],
            "services": [],
            "custom_fields": [],
            "tracking": {
                "ip": "::1",
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
            "created_at": "2023-10-05T06:15:35.653Z",
            "updated_at": "2023-10-05T06:15:35.653Z",
            "invitee_id": "651e5487e9d2ba9959f91ca6"
        }
    ],
    "booking_id": "651e5487e9d2bo8759f91ca3"
}
```

### Create Booking
```js
dayschedule.bookings.create({
    "resource":{
        "resource_id":"643d0e3511ce9450e585c2a9",
        "type":"event",
        "name":"Test"
    },
    "host":{
        "user_id":758
    },
    "location":{},
    "invitees":[{
        "status":"confirmed",
        "questions":[
            {
                "type":"text",
                "name":"name",
                "label":"Name",
                "value":"John Doe"
            },
            {
                "type":"email",
                "name":"email",
                "label":"Email address",
                "value":"Johndoe@gmail.com"
            },
            {
                "type":"tel",
                "name":"mobile",
                "label":"Mobile ",
                "value":"+91 1234567890"
            },
        ],
        "payment":{},
        "name":"John Doe",
        "email":"Johndoe@gmail.com"
        }],
        "time_zone":"Asia/Calcutta",
        "color":"#f9a8d4",
        "start_at":"2023-10-11T09:00:00.000Z",
        "end_at":"2023-10-11T09:30:00.000Z",
        "duration":{
            "type":"minutes",
            "value":30
        }
     })
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Bookings/operation/BookingController_createBooking)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| resource*     |object     | Any dayschedule resoruce(event, webinar or services).              |
| host*     | object      | Host of this booking.        |
| start_at*     | date-time      | Start date time in UTC.       |
| location*     | object      | Location details for this particular booking.       |
| invitees*     | array      | invitee name, email, phone etc.        |

**Response**
```json
{
    "resource": {
        "resource_id": "643d0e3511ce9450e585c2a9",
        "type": "event",
        "event_type": "one_on_one",
        "name": "Test",
        "slug": "/test",
        "description": null
    },
    "host": {
        "user_id": 758,
        "name": "Vraj",
        "email": "vraj@gamil.com",
        "phone": "+91 xxxxxxxxxx",
        "avatar": "https://cdn.dayschedule.com/uploads/org-287/Avatar/758-1695969730791-a49ae2b2-9472-4de7-ad6e-d09157d8eb09.webp",
        "time_zone": "Asia/Calcutta"
    },
    "location": {
        "name": "Google Meet",
        "type": "google_meet",
        "remarks": "Web conference using Google meet"
    },
    "invitees": [
        {
            "status": "confirmed",
            "questions": [
                {
                    "type": "text",
                    "name": "name",
                    "label": "Name",
                    "value": "John Doe"
                },
                {
                    "type": "email",
                    "name": "email",
                    "label": "Email address",
                    "value": "Johndoe@gmail.com"
                },
                {
                    "type": "tel",
                    "name": "mobile",
                    "label": "Mobile ",
                    "value": "+91 1234567890"
                },
                {
                    "type": "radio",
                    "name": "question4",
                    "label": "home_year_start",
                    "value": "2023"
                }
            ],
            "payment": {},
            "name": "John Doe",
            "email": "Johndoe@gmail.com",
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
                "bot": null,
                "location": {}
            },
            "time_zone": "Europe/London",
            "org_id": 287,
            "token": "OZPNWHYBJW",
            "booking_id": "65262ab797859944f3a2dc00",
            "phone": "+91 xxxxxxxxxx",
            "_id": "65262ab797859944f3a2dc03",
            "invitee_id": "65262ab797859944f3a2dc03"
        }
    ],
    "time_zone": "Asia/Calcutta",
    "color": "#fbca04",
    "start_at": "2023-10-11T09:00:00.000Z",
    "end_at": "2023-10-11T09:30:00.000Z",
    "duration": {
        "type": "minutes",
        "value": 30
    },
    "org_id": 287,
    "attendees": [],
    "status": "confirmed",
    "booking_url": "https://your-domain.dayschedule.com",
    "subject": "John Doe and Vraj: Test",
    "booking_id": "65262ab797859944f3a2dc00"
}
```

### Delete Booking
```js
dayschedule.bookings.delete(booking_id)
```
**Response:**
```json
{
  "message": "Booking deleted successfully"
}
```