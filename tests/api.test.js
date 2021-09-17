import {
  ApiError,
  Client,
  MFAController,
  TwoFactorCodeRequestSchema,
} from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new MFAController(client);
});

describe('api', () => {
    it('should create a voice MFA request, and subsequent verify request', async () => {
        //create voice mfa request
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = process.env.USER_NUMBER;
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const scope = "scope";
        const digits = 6;
        const message = "Your temporary {NAME} {SCOPE} code is {CODE}";

        const requestBody = {
            from: from,
            to: to,
            applicationId: applicationId,
            scope: scope,
            digits: digits,
            message: message
        };

        const createVoiceMfaResponse = await controller.voiceTwoFactor(accountId, requestBody);
        //This is the only value in the response, and since callIds are always different
        //we can only validate that it exists.
        expect(createVoiceMfaResponse.result.callId).toBeDefined();

        //request verification
        const code = '123456';
        const expirationTimeInMinutes = 3

        const verifyBody = {
            to: to,
            applicationId: applicationId,
            scope: scope,
            code: code,
            expirationTimeInMinutes: expirationTimeInMinutes
        }

        const verifyMfaResponse = await controller.verifyTwoFactor(accountId, verifyBody);
        //Similar to the callId above, this is the only field we can validate
        expect(verifyMfaResponse.result.valid).toBeDefined();
    });
    
    it('should create a messaging MFA request', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = process.env.USER_NUMBER;
        const applicationId = process.env.BW_MESSAGING_APPLICATION_ID;
        const scope = "scope";
        const digits = 6;
        const message = "Your temporary {NAME} {SCOPE} code is {CODE}";

        const requestBody = {
            from: from,
            to: to,
            applicationId: applicationId,
            scope: scope,
            digits: digits,
            message: message
        };

        const createMessagingMfaResponse = await controller.messagingTwoFactor(accountId, requestBody);
        expect(createMessagingMfaResponse.result.messageId).toBeDefined();
    });

    it('should throw an error on an invalid TN for messaging', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = "+1invalid";
        const applicationId = process.env.BW_MESSAGING_APPLICATION_ID;
        const scope = "scope";
        const digits = 6;
        const message = "Your temporary {NAME} {SCOPE} code is {CODE}";

        const requestBody = {
            from: from,
            to: to,
            applicationId: applicationId,
            scope: scope,
            digits: digits,
            message: message
        };

        const t = async () => {
            await controller.messagingTwoFactor(accountId, requestBody);
        };

        expect(t).rejects.toThrow(ApiError);
    });

    it('should throw an error on an invalid TN for voice', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const from = process.env.BW_NUMBER;
        const to = "+1invalid";
        const applicationId = process.env.BW_VOICE_APPLICATION_ID;
        const scope = "scope";
        const digits = 6;
        const message = "Your temporary {NAME} {SCOPE} code is {CODE}";

        const requestBody = {
            from: from,
            to: to,
            applicationId: applicationId,
            scope: scope,
            digits: digits,
            message: message
        };

        const t = async () => {
            await controller.voiceTwoFactor(accountId, requestBody);
        };

        expect(t).rejects.toThrow(ApiError);
    });
});
