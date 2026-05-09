# SportSee

This repo contains all the source code to run the front end for the sports analytics dashboard SportSee.

## 1. Launching the project

- Fork the repository
- Clone it on your computer.
- Run :  
  - nmp install" in the project directory
  - npm run dev

## 2. Authentication

The API uses JWT (JSON Web Token) authentication. To access the endpoints:
Look in the service/mock.json to get a valid username and password.

### 3. Available Users

Currently, the API has three demo users:

- username: `sophiemartin`, password: `password123`
- username: `emmaleroy`, password: `password789`
- username: `marcdubois`, password: `password456`

#### Notes
- All dates should be in ISO format (YYYY-MM-DD)
- All distances are in kilometers
- All durations are in minutes
