# Description
This project was developed using NestJS. Here we have a user login module with follow description:

- To access the endpoints the module, the users shold be perform a login `(Except to route status)`.
- The user has specific endpoint to perform login with email and password. After login, the user receives a valid token for `24hrs`.
- For each endpoint, except the login, the user shoud be send the valid access token.
- Only user with role `administrator` can create, delete, update and list users.

# Endpoints
- `GET`   /status 
- `POST`  /auth  
- `GET`   /user  
- `GET`   /user/:id  
- `POST`  /user/create  
- `DEL`   /user/:id  
- `PUT`   /user/:id 

## Requisition examples
`POST` /auth
```
curl --location 'http://localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user01@example.com",
    "password": "0000000"
}'
```

`POST` /user/create  
```
curl --location 'http://localhost:3000/user/create' \
--header 'tokenAuthorization: xxxxxxxxxxxxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user01",
    "email": "user01@example.com",
    "password": "0000000",
    "role":"administrator"
}'
```

`PUT` /user/:id 
```
curl --location --request PUT 'http://localhost:3000/user/null' \
--header 'tokenAuthorization: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user01",
    "email": "user01@example.com",
    "password": "0000000",
    "role":"administrator"
}'
```

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