# Description
This project was developed using NestJS. Here we have a user login module with follow description:

- To access the endpoints the module, the users shold be perform a login `(Except to route status)`.
- The user has specific endpoint to perform login with email and password. After login, the user receives a valid token for `24hrs`.
- For each endpoint, except the login, the user shoud be send the valid access token.
- Only user with role `administrator` can create, delete, update and list users.

# Endpoints
- `GET`   /status 
- `POST`  /user/create  
- `POST`  /auth  
- `GET`   /user  
- `GET`   /user/:id  
- `DEL`   /user/:id  
- `PUT`   /user/:id  

# Installation
```
npm install
```
> After installation, configure your `.env file` as shown in the example `.env.EXAMPLE`

# Running the app
`development`
```
npm run start
```

`watch mode`
```
npm run start:dev
```