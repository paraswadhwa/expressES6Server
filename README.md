Boilerplate project for creating a sample express server build using ES6 (babel), and using 

+ express
+ mongoose
+ babel-cli
+ morgan for logging
+ Async/Await

## Installation

```
Clone the repository and run `npm install`
```

## Starting the server

```
npm start
```

The server will run on port 3000.

## Readme

```
The code serves as a boilerplate and can be cloned and extended further as per the needs.
A sample controller, service , route and model is present for the reference.
A sample middleware named 'logger' is present in the middleware file which is a router level middleware and can be included on any route as required.
'Morgan' library is used to create all API logs and all logs are stored in logs file present in logger folder.

```

## API logs parameters

Following is the info. which is stored for every API hit : 

```

'remote-addr', 
'remote-user' ,
'user-agent' ,
'date',
'method',
'url',
'http-version ',
'status', 
'content-length',
'response-time'

```


