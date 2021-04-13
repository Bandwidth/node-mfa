/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiError } from './apiError';

/**
 * Creates an instance of ForbiddenRequest
 */
interface ForbiddenRequest {
  /** The message containing the reason behind the request being forbidden */
  Message?: string;
}

export class ForbiddenRequestError extends ApiError<ForbiddenRequest> {}
