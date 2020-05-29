/**
  * @module TwoFactorAuthLib
  *
  * Bandwidth's Two-Factor Authentication service
  */

'use strict';

const Configuration = require('./configuration');
const APIController = require('./Controllers/APIController');
const TwoFactorCodeRequestSchema = require('./Models/TwoFactorCodeRequestSchema');
const TwoFactorVoiceResponse = require('./Models/TwoFactorVoiceResponse');
const TwoFactorMessagingResponse = require('./Models/TwoFactorMessagingResponse');
const TwoFactorVerifyRequestSchema = require('./Models/TwoFactorVerifyRequestSchema');
const TwoFactorVerifyCodeResponse = require('./Models/TwoFactorVerifyCodeResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TwoFactorAuthLib
    Configuration,
    // controllers of TwoFactorAuthLib
    APIController,
    // models of TwoFactorAuthLib
    TwoFactorCodeRequestSchema,
    TwoFactorVoiceResponse,
    TwoFactorMessagingResponse,
    TwoFactorVerifyRequestSchema,
    TwoFactorVerifyCodeResponse,
    // exceptions of TwoFactorAuthLib
    APIException,
};

module.exports = initializer;
