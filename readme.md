# NASA APOD Time-Capsule

[NASA APOD API](https://api.nasa.gov/index.html)

## RESTful Architecture + DB Schema

![](design/whiteboard.jpg)
![](design/db-schema.jpg)

## Try Me

After cloning the repo from Github:

```bash
npm i && npm run latest && npm run seed && npm start
```

### Endpoints

## Guidelines

- use API linked above
- **ALL** input + output data must be in JSON format
- use Express.js framework

## Functionality

- fetch **AND** save photo to the database
- create and delete users (e-mail field only)
- save a 1-5 star rating of a picture for a user
- allow user to update rating
- allow user to delete a rating
- get all of a user's ratings

## Steps

1. Choose database
    1. I am choosing a Sqlite3 database for sake of simplicity
2. Create github repo with a README
    1. I will be making this repo private just to ensure e-mails are not exposed in the future for any reason
3. Make @bryanlanders a collaborator on repo
4. Whiteboard a RESTful architecture (export JPG and include on README page)
5. Code your endpoints
6. Have your pair partner test your API locally
7. Build unit tests for API