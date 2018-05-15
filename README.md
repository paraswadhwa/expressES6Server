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

The code serves as a boilerplate and can be cloned and extended further as per the needs.<br />
A sample controller, service , route and model is present for the reference.<br />
A sample middleware named 'logger' is present in the middleware file which is a router level middleware and can be included on any route as required.<br />
'Morgan' library is used to create all API logs and all logs are stored in logs file present in logger folder.<br />

Following are the logs which are stored for every route : <br />

'remote-addr', <br />
'remote-user' ,<br />
'user-agent' ,<br />
'date',<br />
'method',<br />
'url',<br />
'http-version ',<br />
'status', <br />
'content-length',<br /> 
'response-time'


