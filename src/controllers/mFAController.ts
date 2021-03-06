/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiResponse } from '../apiResponse';
import { ErrorWithRequestError } from '../errors/errorWithRequestError';
import { ForbiddenRequestError } from '../errors/forbiddenRequestError';
import { UnauthorizedRequestError } from '../errors/unauthorizedRequestError';
import { RequestOptions } from '../http/requestBuilder';
import {
  TwoFactorCodeRequestSchema,
  twoFactorCodeRequestSchemaSchema,
} from '../models/twoFactorCodeRequestSchema';
import {
  TwoFactorMessagingResponse,
  twoFactorMessagingResponseSchema,
} from '../models/twoFactorMessagingResponse';
import {
  TwoFactorVerifyCodeResponse,
  twoFactorVerifyCodeResponseSchema,
} from '../models/twoFactorVerifyCodeResponse';
import {
  TwoFactorVerifyRequestSchema,
  twoFactorVerifyRequestSchemaSchema,
} from '../models/twoFactorVerifyRequestSchema';
import {
  TwoFactorVoiceResponse,
  twoFactorVoiceResponseSchema,
} from '../models/twoFactorVoiceResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class MFAController extends BaseController {
  /**
   * Allows a user to send a MFA code through a phone call
   *
   * @param accountId Bandwidth Account ID with Voice service enabled
   * @param body
   * @return Response from the API call
   */
  async voiceTwoFactor(
    accountId: string,
    body: TwoFactorCodeRequestSchema,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TwoFactorVoiceResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, twoFactorCodeRequestSchemaSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/code/voice`;
    req.throwOn(400, ErrorWithRequestError, 'If there is any issue with values passed in by the user');
    req.throwOn(401, UnauthorizedRequestError, 'Authentication is either incorrect or not present');
    req.throwOn(403, ForbiddenRequestError, 'The user is not authorized to access this resource');
    req.throwOn(500, ErrorWithRequestError, 'An internal server error occurred');
    return req.callAsJson(twoFactorVoiceResponseSchema, requestOptions);
  }

  /**
   * Allows a user to send a MFA code through a text message (SMS)
   *
   * @param accountId Bandwidth Account ID with Messaging service enabled
   * @param body
   * @return Response from the API call
   */
  async messagingTwoFactor(
    accountId: string,
    body: TwoFactorCodeRequestSchema,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TwoFactorMessagingResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, twoFactorCodeRequestSchemaSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/code/messaging`;
    req.throwOn(400, ErrorWithRequestError, 'If there is any issue with values passed in by the user');
    req.throwOn(401, UnauthorizedRequestError, 'Authentication is either incorrect or not present');
    req.throwOn(403, ForbiddenRequestError, 'The user is not authorized to access this resource');
    req.throwOn(500, ErrorWithRequestError, 'An internal server error occurred');
    return req.callAsJson(twoFactorMessagingResponseSchema, requestOptions);
  }

  /**
   * Allows a user to verify an MFA code
   *
   * @param accountId Bandwidth Account ID with Two-Factor enabled
   * @param body
   * @return Response from the API call
   */
  async verifyTwoFactor(
    accountId: string,
    body: TwoFactorVerifyRequestSchema,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TwoFactorVerifyCodeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      accountId: [accountId, string()],
      body: [body, twoFactorVerifyRequestSchemaSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/accounts/${mapped.accountId}/code/verify`;
    req.throwOn(400, ErrorWithRequestError, 'If there is any issue with values passed in by the user');
    req.throwOn(401, UnauthorizedRequestError, 'Authentication is either incorrect or not present');
    req.throwOn(403, ForbiddenRequestError, 'The user is not authorized to access this resource');
    req.throwOn(429, ErrorWithRequestError, 'The user has made too many bad requests and is temporarily locked out');
    req.throwOn(500, ErrorWithRequestError, 'An internal server error occurred');
    return req.callAsJson(twoFactorVerifyCodeResponseSchema, requestOptions);
  }
}
