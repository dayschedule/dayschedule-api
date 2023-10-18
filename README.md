# dayschedule

[![version](https://img.shields.io/npm/v/dayschedule-api.svg)](https://www.npmjs.com/package/dayschedule-api)
[![license](https://img.shields.io/npm/l/dayschedule-api.svg)](https://www.npmjs.com/package/dayschedule-api)

Official Node.js library for [DaySchedule](https://dayschedule.com/) API to integrate online appointments bookings, reservation and calendar scheduling in any tool with [embeddable widget](https://github.com/dayschedule/dayschedule-widget) on front-end and this SDK on backend for complete white-label appointment scheduling at any scale.

## Installation

```
npm i dayschedule-api
```

## Documentation

Full API documentation to understand the appointement booking flow with DaySchedule is available at -
https://dayschedule.com/docs/api

### Getting started

Instantiate the `DaySchedule` instance with api key. You can get your api keys from the app https://app.dayschedule.com/settings/apikeys

```
const DaySchedule = require('dayschedule-api');

const daySchedule = new DaySchedule('YOUR_API_KEY');

```

Now, the API can be accessed via the `daySchedule` instance. All the methods follows the namespaced signature. For example, to fetch all the booked appointments -

```
// API signature
// {daySchedule}.{api}.{method}(id, [params])

// example
const bookings = await daySchedule.bookings.list();
```

Every request returns a promise.

### Methods

Each API endpoint has these 5 methods `list`, `get`, `create`, `update`, `delete` API operations. For example, here is the booking API methods -  

| Method  | Description                       | Parameters                | Return Value |
|---------|-----------------------------------|---------------------------|--------------|
| `list`  | Get all the bookings           | `params: any`             | `Promise<Bookings[]>` |
| `get`   | Get details of a booking by ID   | `id: string`              | `Promise<Bookings>` |
| `create`| Create a new booking             | `data: any`               | `Promise<Bookings>` |
| `update`| Update an existing booking by ID | `id: string, data: any`   | `Promise<Bookings>` |
| `delete`| Delete a booking by ID            | `id: string`              | `Promise<any>` |

### Examples
- [Resources](docs/resources.md)
- [Bookings](docs/bookings.md)
- [invitees](docs/invitees.md)
- [Pages](docs/pages.md)
- [Schedules](docs/schedules.md)
- [Users](docs/users.md)
- [Workflows](docs/workflows.md)
- [Contacts](docs/contacts.md)

## Release
1.  Switch to `main` branch.
2.  Update the `CHANGELOG.md` & bump the version in `package.json`
3.  Commit and Tag the release & push to Github
4.  Create a release on GitHub with changelog
5.  Publish to npm with `npm publish` command

## Licence
MIT Licensed. See [LICENSE.txt](LICENSE.txt) for more details
