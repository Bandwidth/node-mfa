/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiError } from './apiError';

/**
 * Creates an instance of ErrorWithRequest
 */
interface ErrorWithRequest {
  /** An error message pertaining to what the issue could be */
  error?: string;
  /** The associated requestId from AWS */
  requestId?: string;
}

export class ErrorWithRequestError extends ApiError<ErrorWithRequest> {}
