/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiResponse } from '../apiResponse';
import { InvalidRequestError } from '../errors/invalidRequestError';
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

export class ApiController extends BaseController {
  /**
   * Two-Factor authentication with Bandwidth Voice services
   *
   * @param accountId Bandwidth Account ID with Voice service enabled
   * @param body
   * @return Response from the API call
   */
  async createVoiceTwoFactor(
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
    req.throwOn(400, InvalidRequestError, 'client request error');
    return req.callAsJson(twoFactorVoiceResponseSchema, requestOptions);
  }

  /**
   * Two-Factor authentication with Bandwidth messaging services
   *
   * @param accountId Bandwidth Account ID with Messaging service enabled
   * @param body
   * @return Response from the API call
   */
  async createMessagingTwoFactor(
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
    req.throwOn(400, InvalidRequestError, 'client request error');
    return req.callAsJson(twoFactorMessagingResponseSchema, requestOptions);
  }

  /**
   * Verify a previously sent two-factor authentication code
   *
   * @param accountId Bandwidth Account ID with Two-Factor enabled
   * @param body
   * @return Response from the API call
   */
  async createVerifyTwoFactor(
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
    req.throwOn(400, InvalidRequestError, 'client request error');
    return req.callAsJson(twoFactorVerifyCodeResponseSchema, requestOptions);
  }
}
