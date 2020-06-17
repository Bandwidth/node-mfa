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
| body.to |  ``` Required ```  | The user's phone number to contact |
| body.from |  ``` Required ```  | The Bandwidth phone number used to contact the user |
| body.applicationId |  ``` Required ```  | The voice application ID associated with the _from_ phone number |
| body.scope | | A optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\". |
| body.message | ``` Required ``` | The message format of the 2fa code.  There are three values that the system will replace \"{CODE}\", \"{NAME}\", \"{SCOPE}\".  The \"{SCOPE}\" value is optional, while \"{CODE}\" and \"{NAME}\" must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server. |
| body.digits | ``` Required ``` | The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively. |


#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorCodeRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization",
        digits: 5,
        message: "Your temporary {NAME} {SCOPE} code is {CODE}"
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
| body.to |  ``` Required ```  | The user's phone number to contact |
| body.from |  ``` Required ```  | The Bandwidth phone number used to contact the user |
| body.applicationId |  ``` Required ```  | The messaging application ID associated with the _from_ phone number |
| body.scope | | A optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\". |
| body.message | ``` Required ``` | The message format of the 2fa code.  There are three values that the system will replace \"{CODE}\", \"{NAME}\", \"{SCOPE}\".  The \"{SCOPE}\" value is optional, while \"{CODE}\" and \"{NAME}\" must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server. |
| body.digits | ``` Required ``` | The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively. |


#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorCodeRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization",
        digits: 5,
        message: "Your temporary {NAME} {SCOPE} code is {CODE}"
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
| body.to |  ``` Required ```  | The user's phone number to contact |
| body.from |  ``` Required ```  | The Bandwidth phone number used to contact the user |
| body.applicationId |  ``` Required ```  | The voice _or_ application ID associated with the _from_ phone number. This value must match the application ID used for the initial request |
| body.scope | | A optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to \"2FA\". |
| body.code |  ``` Required ```  | The user code used for validation of the user |
| body.digits | ``` Required ``` | The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively. |
| body.delay | ``` Required ``` | The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for delay is between 0 and 15 minutes, exclusively and inclusively, respectively.

#### Response

| Field | Type | Description |
|--|--|--|
| valid | boolean | `true` if the auth request was successful, `false` otherwise |

```

```



#### Example Usage

```javascript

    var accountId = 'accountId';
    var body = new TwoFactorVerifyRequestSchema({
        from: "+19999999999",
        to: "+18888888888",
        applicationId: "1-2-3",
        scope: "authorization",
        code: "123456",
        digits: 5,
        delay: 2
    });

    controller.createVerifyTwoFactor(accountId, body, function(error, response, context) {
        // Resolution logic
        console.log(response);
    });
```



[Back to List of Controllers](#list_of_controllers)



