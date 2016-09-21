# Skeleton for api node project in TypeScript

This is a Starter Kit project that implemented an api project in TypeScript separated in different layers (Business, Repository, Controllers, etc).
The api uses JWT to make a securely connection in each request.

## Getting Started

You need to install typings, typescript, mongodb, node and npm. Then clone the code in your machine.

### Installing

At main directory, you need to run next commands:

```
npm install
```

```
typings install
```

```
tsc
```
And finally to start the project

```
node .
```
Sure you have running mongodb on your machine.

## Notes

In config/middlewares/base/MiddlewaresBase.ts you can see some rules and the route exclude from login for the example model Admin.
You should create in your database an admin collection with one document with the next fields: name and password. After that, if you do login, you will receive a token that you have to include in the header of the all requests you make. Please, consult the documentation of JSON Web Token.

