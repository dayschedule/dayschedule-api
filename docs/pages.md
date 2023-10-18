# Pages

### Get Pages List
```js
dayschedule.pages.list()
```

**Response:**
```json
{
    "offset": 0,
    "limit": 20,
    "total": 40,
    "returned": 20, 
    "result": [{
        "page_id": 1223,
        "org_id": 2437,
        "user_id": 12758,
        "name": "John Doe Page",
        "description": "Add description for this page. ",
        "domain": "your-domain.dayschedule.com",
        "logo": null,
        "is_public": false,
        "is_default": true,
        "is_default_template": true,
        "is_published": true,
        "screenshots": [],
        "created_at": "2022-12-15T04:15:47.000Z",
        "updated_at": "2023-02-15T10:44:43.000Z"
    }]
}
```

### Get Page
```js
dayschedule.pages.get(page_id)
```

**Response:**
```json
{
    "page_id": 1223,
    "org_id": 2437,
    "user_id": 12758,
    "name": "John Doe Page",
    "description": "Add description for this page. ",
    "domain": "your-domain.dayschedule.com",
    "is_default": true,
    "logo": null,
    "color": {
        "primary": "#0052cc",
        "secondary": "#dde8f8"
    },
    "seo": {
        "crawl": true,
        "title": "Your title",
        "description": "Your description"
    },
    "integrations": {
        "facebook_pixel_id": "",
        "google_analytics_id": ""
    },
    "template": {
        "blocks": [],
        "is_public": false
    },
    "is_default_template": true,
    "is_published": true,
    "is_public": false,
    "remove_branding": false,
    "screenshots": [],
    "created_at": "2022-12-15T04:15:47.000Z",
    "updated_at": "2023-02-15T10:44:43.000Z"
}
```

### Create Page
```js
dayschedule.pages.create({
    "color":{
        "primary":"#0f0980",
        "secondary":"#afeefe"
    },
    "seo":{},
    "template":{
        "is_public":false,"blocks":[]
    },
    "is_default":false,
    "is_public":false,
    "remove_branding":false,
    "screenshots":[],
    "name":"Test Page",
    "domain":"test-page",
    "is_default_template":true
})
```

[For complete reference click here](https://dayschedule.com/docs/api#tag/Pages/operation/PageController_createPage)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*     | string      |  Name of the page.                |
| domain*     | string      | Domain of the page.             |

**Response:**
```json
{
    "color": {
        "primary": "#0f0980",
        "secondary": "#afeefe"
    },
    "seo": {},
    "template": {
        "is_public": false,
        "blocks": []
    },
    "is_default": false,
    "is_public": false,
    "remove_branding": false,
    "screenshots": [],
    "name": "Test Page",
    "domain": "test-page",
    "is_default_template": true,
    "is_published": true,
    "page_id": 1223,
    "org_id": 2437,
    "user_id": 12758,
}
```

### Update Page
```js
dayschedule.pages.update(page_id, {
    "page_id": 1223,
    "org_id": 2437,
    "user_id": 12758,
    "name": "Test Page",
    "domain": "test-page",
    "is_default": false,
    "description": null,
    "logo": null,
    "color": {
        "primary": "#0f0980",
        "secondary": "#afeefe"
    },
    "seo": {},
    "integrations": {},
    "template": {
        "blocks": [],
        "is_public": false
    },
    "is_default_template": true,
    "is_published": true,
    "is_public": false,
    "remove_branding": false,
    "screenshots": [],
    "created_at": "2023-10-11T06:01:56.000Z",
    "updated_at": null
})
```

[For complete reference click here](https://dayschedule.com/docs/api#tag/Pages/operation/PageController_createPage)

| Name          | Type        | Description                                 |
|---------------|-------------|---------------------------------------------|
| name*     | string      |  Name of the page.                |
| domain*     | string      | Domain of the page.             |

**Response:**
```json
{
    "page_id": 1223,
    "org_id": 2437,
    "user_id": 12758,
    "name": "Test Page",
    "domain": "test-page",
    "is_default": false,
    "description": null,
    "logo": null,
    "color": {
        "primary": "#0f0980",
        "secondary": "#afeefe"
    },
    "seo": {},
    "integrations": {},
    "template": {
        "blocks": [],
        "is_public": false
    },
    "is_default_template": true,
    "is_published": true,
    "is_public": false,
    "remove_branding": false,
    "screenshots": [],
    "created_at": "2023-10-11T06:01:56.000Z",
    "updated_at": null
}
```

### Delete Page
```js
dayschedule.pages.delete(page_id)
```
**Response:**
```json
{
  "message": "Page with id: 1223 deleted successfully"
}
```