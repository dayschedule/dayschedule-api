# Schedules

### Get Schedules List
```js
dayschedule.schedules.list()
```

**Response:**
```json
 [{
        "schedule_id": 397,
        "user_id": 758,
        "org_id": 287,
        "name": "Schedule ",
        "time_zone": "Europe/London",
        "availability": [
            {
                "day": "SUN",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "MON",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
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
                "is_available": true
            }
        ],
        "is_default": 0,
        "created_at": "2022-12-26T08:30:21.000Z",
        "updated_at": "2023-10-05T09:24:11.000Z"
    }]
```

### Get Schedule
```js
dayschedule.schedules.get(schedule_id)
```

**Response:**
```json
 [{
        "schedule_id": 397,
        "user_id": 758,
        "org_id": 287,
        "name": "Schedule ",
        "time_zone": "Europe/London",
        "availability": [
            {
                "day": "SUN",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
                    }
                ],
                "is_available": true
            },
            {
                "day": "MON",
                "times": [
                    {
                        "end": "18:00",
                        "start": "09:00"
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
                "is_available": true
            }
        ],
        "is_default": 0,
        "created_at": "2022-12-26T08:30:21.000Z",
        "updated_at": "2023-10-05T09:24:11.000Z"
    }]
```

### Create Schedule
```js
dayschedule.schedules.create({
  "user_id": 758,
  "name": "My schedule",
  "availability": [
    {
      "is_available": false,
      "day": "SUN",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": true,
      "day": "MON",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": true,
      "day": "TUE",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": true,
      "day": "WED",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": true,
      "day": "THU",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": true,
      "day": "FRI",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    },
    {
      "is_available": false,
      "day": "SAT",
      "times": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    }
  ],
  "time_zone": "Asia/Calcutta"
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Schedules/operation/ScheduleController_createSchedule)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*     | string      | Name of the schedule.             |
| timezone*     | string      | timezone for schedule.             |
| availability*     | array      | specify timings.             |

**Response:**
```json
{
    "schedule_id":572,"message":"Schedule created successfully"
}
```

### Update Schedule
```js
dayschedule.schedules.update(schedule_id, {
  "schedule_id": 537,
  "user_id": 758,
  "org_id": 287,
  "name": "Shubh Jain's Schedule",
  "time_zone": "Asia/Kolkata",
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
  "is_default": 1,
  "created_at": "2023-02-15T10:53:13.000Z",
  "updated_at": "2023-10-03T07:18:23.000Z"
})
```
**Parameters:**

[For complete reference click here](https://dayschedule.com/docs/api#tag/Schedules/operation/ScheduleController_updateSchedule)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*     | string      | Name of the schedule.             |
| timezone*     | string      | timezone for schedule.             |
| availability*     | array      | specify timings.             |

**Response:**
```json
{
    "message":"Schedule with id: 537 updated successfully"
}
```

### Delete Schedule
```js
dayschedule.schedules.delete(schedule_id)
```
**Response:**
```json
{
  "message": "Schedule with id: 558 deleted successfully"
}
```