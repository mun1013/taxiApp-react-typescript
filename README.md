# Taxi Application

A simple taxi application that allows you to look for a taxi nearby your place. :D

The following libraries and tools are used to build this application.

```
Node
Express
React
React-Leaflet
Typescript
```

## Installation 

Install [Node](https://nodejs.org/en/) and make sure the Node version is 14 and above.

Clone the project folder and the following steps are required to install dependencies for both client and server:

1. Install the dependencies for the server.

```bash
# navigate to the project folder and run the command below
npm install
```

2. Install the dependencies for the client.

```bash
# navigate to the client folder and install the dependencies
cd ./client
npm install
```

## How to use

Run the Taxi Application.

```bash
# the react app runs on port 3000 while the node server runs on port 5000
# navigate back to the project folder with cd .. and run the command below
npm run dev
```

It will redirect you to http://localhost:3000/.

1. Use the radio button to choose the location on the map.
2. Use the slider to change the number of taxis displayed on the map.

## Testing

A script is configured named **test** for running Jest.

1. Run the following command to test the API:

```bash
npm run test
```

1. Navigate to the client folder and carry out the unit test.

```bash
# navigate to the client folder and install the dependencies
cd ./client
npm run test
```