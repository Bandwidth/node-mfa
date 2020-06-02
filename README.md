# Getting started

Bandwidth's Two-Factor Authentication service

## Other Node SDKs
* Numbers: https://github.com/Bandwidth/node-numbers
* Voice: https://github.com/Bandwidth/node-voice
* Messaging: https://gibhub.com/Bandwidth/node-messaging

## Example implementation

View an example implementation at https://github.com/Bandwidth/mfa-node-example-app

## Installation

```bash
npm install @bandwidth/mfa
```

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const BandwidthMfa = require('@bandwidth/mfa');

// Configuration parameters and credentials
BandwidthMfa.Configuration.basicAuthUserName = "username"; // The username to use with basic authentication
BandwidthMfa.Configuration.basicAuthPassword = "password"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = BandwidthMfa.APIController;
```

### <a name="create_voice_two_factor"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createVoiceTwoFactor") createVoiceTwoFactor

> Two-Factor authentication with Bandwidth Voice services


```javascript
function createVoiceTwoFactor(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Bandwidth Account ID with Voice service enabled |
| body |  ``` Required ```  | A MFA request body in the shape of `TwoFactorCodeRequestSchema`; requiring a `to`, `from`, `applicationId`, and `scope` |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorCodeRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization"
    });

    controller.createVoiceTwoFactor(accountId, body, function(error, response, context) {
        // Resolution logic    
    });
```



### <a name="create_messaging_two_factor"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createMessagingTwoFactor") createMessagingTwoFactor

> Two-Factor authentication with Bandwidth messaging services


```javascript
function createMessagingTwoFactor(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Bandwidth Account ID with Messaging service enabled |
| body |  ``` Required ```  | A MFA request body in the shape of `TwoFactorCodeRequestSchema`; requiring a `to`, `from`, `applicationId`, and `scope` |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorCodeRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization"
    });

    controller.createMessagingTwoFactor(accountId, body, function(error, response, context) {
        // Resolution logic
    });
```



### <a name="create_verify_two_factor"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createVerifyTwoFactor") createVerifyTwoFactor

> Verify a previously sent two-factor authentication code


```javascript
function createVerifyTwoFactor(accountId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountId |  ``` Required ```  | Bandwidth Account ID with Two-Factor enabled |
| body |  ``` Required ```  | A MFA request body in the shape of `TwoFactorVerifyRequestSchema`; requiring a `to`, `from`, `applicationId`, `scope`, and `code` |



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorVerifyRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization",
        code: "123456"
    });

    controller.createVerifyTwoFactor(accountId, body, function(error, response, context) {
        // Resolution logic
    });
```



[Back to List of Controllers](#list_of_controllers)



