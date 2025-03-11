import { test } from '@playwright/test';
import { doPostByUrl, config, doAuth } from '../../src/helper/apiGateway.min.cjs';

test('Test API Gateway', { tag: ["@apiGateway"] }, async ({page}) => {

    const path = `${process.cwd()}/src/helper/apiGateway.min.cjs`;

    await page.exposeFunction("config", config);
    await page.exposeFunction("doPostByUrl", doPostByUrl);
    await page.exposeFunction("doAuth", doAuth);

    await page.addInitScript({ path: path });
    
    await page.goto('https://accounts.vahanacloud.com/', { waitUntil: "domcontentloaded" });

    const response = await page.evaluate(async () => {

        const env = {
            "env": "prod",
            "production": true,
            "envProps": {
                "orgId": "WORKSPACE3-SVGW1OPZ7D",
                "appId": "96477173442322192121037",
                "secureKey": "2eb45217-1dfe-47aa-9fe0-7769d2aa90bf",
                "baseUrl": "https://middleware.vahanacloud.xyz/backend/earth/router/engine/v1",
                "lat": "",
                "lon": "",
                "securityVersion": "2",
                "appVersion": "1.0",
                "platform": "WEB"
            },
        };

        const headers = {
            "Authorization": "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
            "requestid": "1740651213717",
            "Content-Type": "application/json",
            "orgid": "VAHANA",
            "appid": "PORTAL",
            "loginid": "praddumn.singh@decimal.co.in",
            "clientsecret": "3f76d1bb-8bf8-4aef-b79b-1e5d9b0bd007",
            "apiname": "TEST-27FEB_SEFVICE",
            "secureKey": "e7eb557b-ac7e-4co5-abd1-b75v4a4e3e6f1"
        };

        const body = { "a1": "b1" };

        const url = '/esb/esb/service-executor/execute-plain';

        // const configValue = {
        //     logging: false,
        //     serviceWorker: false,
        //     activeSWOnLocalHost: false,
        //     enableStorageEncryption: true, // enable encryption
        //     storageEncryptionKey: 'decimalSecretkey', // key to be used for aes encryption
        //     storage: 'sessionStorage',
        //     networkDriver: 'FETCH',
        // };

        // await (window as any).config(configValue);

        // await (window as any).doAuth(headers);
        
        return await (window as any).doPostByUrl(env, headers, body, url);
    });

    
    await console.log("API Response:", response);

});