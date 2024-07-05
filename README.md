## Description
This project was developed using NestJS. Here we have a user login module with follow description:
-The user has specific endpoint to do login with email and password. After login, the user receives a valid token for 24hrs.
-For each endpint, except the login, the user shoud be send the valid access token.

## Endpoints
### method-description / endpoint  
-GET Status: /status  
-POST Create user: /user/create  
-POST Login: /auth  
-GET All users: /user  
-GET User by id: /user/:id  
-DEL Delete User: /user/:id  
-PUT Update User: /user/:id  


## Installation
```terminal
$ npm install
```

## Building migration
- After run initial migration, executing in your database that following comand for create a index:
    - CREATE INDEX access_token ON "auth" (access_token) 

## Running the app
```terminal
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
