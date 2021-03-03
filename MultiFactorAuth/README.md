# Getting Started with MultiFactorAuth

## Getting Started

### Introduction

Bandwidth's Two-Factor Authentication service

### Installation

The following section explains how to use the bandwidthLib library in a new project.

### Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

#### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| custom | - |

### Initialize the API Client

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
})
```

### Authorization

This API uses `Basic Authentication`.

## Client Class Documentation

### MultiFactorAuth Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| mFA | Provides access to MFAController |

## API Reference

### List of APIs

* [MFA](#mfa)

### MFA

#### Voice Two Factor

Allows a user to send a MFA code through a phone call

```ts
async voiceTwoFactor(
  accountId: string,
  body: TwoFactorCodeRequestSchema,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorVoiceResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Bandwidth Account ID with Voice service enabled |
| `body` | [`TwoFactorCodeRequestSchema`](#two-factor-code-request-schema) | Body, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`TwoFactorVoiceResponse`](#two-factor-voice-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const body: TwoFactorCodeRequestSchema = {
  to: 'to0',
  from: 'from6',
  applicationId: 'applicationId6',
  message: 'message6',
  digits: 45.32,
};

try {
  const { result, ...httpResponse } = await mFAController.voiceTwoFactor(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | If there is any issue with values passed in by the user | [`ErrorWithRequestError`](#error-with-request-error) |
| 401 | Authentication is either incorrect or not present | [`UnauthorizedRequestError`](#unauthorized-request-error) |
| 403 | The user is not authorized to access this resource | [`ForbiddenRequestError`](#forbidden-request-error) |
| 500 | An internal server error occurred | [`ErrorWithRequestError`](#error-with-request-error) |

#### Messaging Two Factor

Allows a user to send a MFA code through a text message (SMS)

```ts
async messagingTwoFactor(
  accountId: string,
  body: TwoFactorCodeRequestSchema,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorMessagingResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Bandwidth Account ID with Messaging service enabled |
| `body` | [`TwoFactorCodeRequestSchema`](#two-factor-code-request-schema) | Body, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`TwoFactorMessagingResponse`](#two-factor-messaging-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const body: TwoFactorCodeRequestSchema = {
  to: 'to0',
  from: 'from6',
  applicationId: 'applicationId6',
  message: 'message6',
  digits: 45.32,
};

try {
  const { result, ...httpResponse } = await mFAController.messagingTwoFactor(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | If there is any issue with values passed in by the user | [`ErrorWithRequestError`](#error-with-request-error) |
| 401 | Authentication is either incorrect or not present | [`UnauthorizedRequestError`](#unauthorized-request-error) |
| 403 | The user is not authorized to access this resource | [`ForbiddenRequestError`](#forbidden-request-error) |
| 500 | An internal server error occurred | [`ErrorWithRequestError`](#error-with-request-error) |

#### Verify Two Factor

Allows a user to verify an MFA code

```ts
async verifyTwoFactor(
  accountId: string,
  body: TwoFactorVerifyRequestSchema,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorVerifyCodeResponse>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountId` | `string` | Template, Required | Bandwidth Account ID with Two-Factor enabled |
| `body` | [`TwoFactorVerifyRequestSchema`](#two-factor-verify-request-schema) | Body, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`TwoFactorVerifyCodeResponse`](#two-factor-verify-code-response)

##### Example Usage

```ts
const accountId = 'accountId0';
const body: TwoFactorVerifyRequestSchema = {
  to: 'to0',
  applicationId: 'applicationId6',
  expirationTimeInMinutes: 166.8,
  code: 'code4',
};

try {
  const { result, ...httpResponse } = await mFAController.verifyTwoFactor(accountId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | If there is any issue with values passed in by the user | [`ErrorWithRequestError`](#error-with-request-error) |
| 401 | Authentication is either incorrect or not present | [`UnauthorizedRequestError`](#unauthorized-request-error) |
| 403 | The user is not authorized to access this resource | [`ForbiddenRequestError`](#forbidden-request-error) |
| 429 | The user has made too many bad requests and is temporarily locked out | [`ErrorWithRequestError`](#error-with-request-error) |
| 500 | An internal server error occurred | [`ErrorWithRequestError`](#error-with-request-error) |

## Model Reference

### Structures

* [Two Factor Code Request Schema](#two-factor-code-request-schema)
* [Two Factor Voice Response](#two-factor-voice-response)
* [Two Factor Messaging Response](#two-factor-messaging-response)
* [Two Factor Verify Request Schema](#two-factor-verify-request-schema)
* [Two Factor Verify Code Response](#two-factor-verify-code-response)

#### Two Factor Code Request Schema

##### Class Name

`TwoFactorCodeRequestSchema`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `to` | `string` | Required | The phone number to send the 2fa code to. |
| `from` | `string` | Required | The application phone number, the sender of the 2fa code. |
| `applicationId` | `string` | Required | The application unique ID, obtained from Bandwidth. |
| `scope` | `string` | Optional | An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to "2FA". |
| `message` | `string` | Required | The message format of the 2fa code.  There are three values that the system will replace "{CODE}", "{NAME}", "{SCOPE}".  The "{SCOPE}" and "{NAME} value template are optional, while "{CODE}" must be supplied.  As the name would suggest, code will be replace with the actual 2fa code.  Name is replaced with the application name, configured during provisioning of 2fa.  The scope value is the same value sent during the call and partitioned by the server. |
| `digits` | `number` | Required | The number of digits for your 2fa code.  The valid number ranges from 2 to 8, inclusively. |

##### Example (as JSON)

```json
{
  "to": "to6",
  "from": "from2",
  "applicationId": "applicationId0",
  "scope": null,
  "message": "message0",
  "digits": 181.08
}
```

#### Two Factor Voice Response

##### Class Name

`TwoFactorVoiceResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callId` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "callId": null
}
```

#### Two Factor Messaging Response

##### Class Name

`TwoFactorMessagingResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageId` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "messageId": null
}
```

#### Two Factor Verify Request Schema

##### Class Name

`TwoFactorVerifyRequestSchema`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `to` | `string` | Required | The phone number to send the 2fa code to. |
| `applicationId` | `string` | Required | The application unique ID, obtained from Bandwidth. |
| `scope` | `string` | Optional | An optional field to denote what scope or action the 2fa code is addressing.  If not supplied, defaults to "2FA". |
| `expirationTimeInMinutes` | `number` | Required | The time period, in minutes, to validate the 2fa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively. |
| `code` | `string` | Required | The generated 2fa code to check if valid |

##### Example (as JSON)

```json
{
  "to": "to6",
  "applicationId": "applicationId0",
  "scope": null,
  "expirationTimeInMinutes": 31.04,
  "code": "code8"
}
```

#### Two Factor Verify Code Response

##### Class Name

`TwoFactorVerifyCodeResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Optional | - |

##### Example (as JSON)

```json
{
  "valid": null
}
```

### Exceptions

* [Error With Request Error](#error-with-request-error)
* [Forbidden Request Error](#forbidden-request-error)
* [Unauthorized Request Error](#unauthorized-request-error)

#### Error With Request Error

##### Class Name

`ErrorWithRequestError`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string` | Optional | An error message pertaining to what the issue could be |
| `requestId` | `string` | Optional | The associated requestId from AWS |

##### Example (as JSON)

```json
{
  "error": null,
  "requestId": null
}
```

#### Forbidden Request Error

##### Class Name

`ForbiddenRequestError`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Optional | The message containing the reason behind the request being forbidden |

##### Example (as JSON)

```json
{
  "Message": null
}
```

#### Unauthorized Request Error

##### Class Name

`UnauthorizedRequestError`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Optional | The message containing the reason behind the request being unauthorized |

##### Example (as JSON)

```json
{
  "message": null
}
```

## Common Code Documentation

### ApiResponse

An interface for the result of an API call.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string | Blob | NodeJS.ReadableStream | Original body from the response. |

### ApiError

Thrown when the HTTP status code is not okay.

The ApiError extends the ApiResponse interface, so all ApiResponse properties are available.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string | Blob | NodeJS.ReadableStream | Original body from the response. |

