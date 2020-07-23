# API

### Overview
All calls and events are send through websocket. Protocol is JSON based.

Websocket addr is **http://localhost:8080/ws**

### Events

##### Intercom button pressed
	{
		cmd: 0x81
	}

##### Face verified
	{
		cmd		: 0x82,
		datetime	: [string],
		image	: [string] - base64-encoded image
	}

##### Face unverified
	{
		cmd		: 0x83,
		datetime	: [string],
		image	: [string] - base64-encoded image
	}

### Commands

##### Open door controller
Request:

	{
		cmd: 0x01
	}
	
Response:

	{
		cmd: 0x11
	}
