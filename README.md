# voxtelesys-node

The Voxtelesys Node library provides the ability for Node.js applications to directly access Voxtelesys API services.

## Documentation

| API   | Documentation                    |
| ----- | -------------------------------- |
| Voice | https://voiceapi.voxtelesys.com/ |

## Supported Node.js Versions

This project will work with the following Node.js versions:

- Node.js 18
- Node.js 20

## Installation

To install this project in your application, run:

```sh
npm i voxtelesys-node
```

## Usage

In order to use the API client provided in this project, you must use an API token from the [API Keys page](https://portal.voxtelesys.net/api-keys) in our Customer Portal. For example:

```js
const client = require('voxtelesys-node')('[API_TOKEN]')
// make calls to any API using client
```

### Example: Create an Outbound Call

```js
const VoxClient = require('voxtelesys-node').VoxClient

const client = new VoxClient('[API_TOKEN]')

const call = await client.calls.create({
  to: '1234567890',
  from: '1234567890',
  voice_trunk_group_id: 90000,
  voxxml: '<Response><Say>Hello from Voxtelesys!</Say><Hangup/></Response>'
})

console.log(call)
// output: { status: "queued" }
```

### Example: Build VoxXML

```js
const VoiceResponse = require('voxtelesys-node').VoiceResponse

const response = new VoiceResponse()

response.say('Hello from Voxtelesys!')
response.hangup()

console.log(response.toString())
// output: "<Response><Say>Hello from Voxtelesys!</Say><Hangup/></Response>"
```



