# Bandwidth Node Multi-Factor Authentication SDK

Note: As of version 3.0.0, this package has been upgraded to TypeScript

[![Test](https://github.com/Bandwidth/node-mfa/actions/workflows/test.yml/badge.svg)](https://github.com/Bandwidth/node-mfa/actions/workflows/test.yml)

| **OS** | **Node** |
|:---:|:---:|
| Windows 2016 | 12, 14, 16 |
| Windows 2019 | 12, 14, 16 |
| Ubuntu 20.04 | 12, 14, 16 |
| Ubuntu 22.04 | 12, 14, 16 |

## Getting Started

### Installation

```
npm install @bandwidth/mfa
```

### Initialize

```
import { Client, MFAController } from '@bandwidth/mfa';

const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password"
});

const controller = new MFAController(client);
const accountId = "12345";
```

### Create A MFA Request

```
var from = "+15554443333";
var to = "+15553334444";
var applicationId = "3-a-b-c";
var scope = "scope";
var digits = 6;
var message = "Your temporary {NAME} {SCOPE} code is {CODE}";

var requestBody = {
    from: from,
    to: to,
    applicationId: applicationId,
    scope: scope,
    digits: digits,
    message: message
};

await controller.voiceTwoFactor(accountId, requestBody);

//request verification
const code = '123456'; //this is the user input to validate
const expirationTimeInMinutes = 3

var verifyBody = {
    to: to,
    applicationId: applicationId,
    scope: scope,
    code: code,
    expirationTimeInMinutes: expirationTimeInMinutes
}

var verifyMfaResponse = await controller.verifyTwoFactor(accountId, verifyBody);

console.log(verifyMfaResponse.result.valid);
```

## Supported Node Versions

This package can be used with Node >= 10

## Documentation

Documentation for this package can be found at https://dev.bandwidth.com/sdks/node.html

## Credentials

Information for credentials for this package can be found at https://dev.bandwidth.com/guides/accountCredentials.html
