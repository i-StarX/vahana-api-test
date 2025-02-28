import { test, expect } from '@playwright/test';
import * as APIGateway from '../../src/helper/apiGateway.min.cjs';

test.beforeEach(async({page})=> {

    // const scriptPath = `${process.cwd()}/src/helper/apiGateway.min.cjs`;
    // await page.addScriptTag({ path: scriptPath });

    await page.goto('https://accounts.vahanacloud.com/');

    await page.exposeFunction("doPostByUrl", APIGateway.doPostByUrl);

    const response = await page.evaluateHandle(async () => {

        const env = {
            "production": true,
            "envProps": {
                "orgId": "WORKSPACE3-SVGW1OPZ7D",
                "appId": "96477173442322192121037",
                "secureKey": "2eb45217-1dfe-47aa-9fe0-7769d2aa90bf",
                "baseUrl": "https://middleware.vahanacloud.xyz/backend/earth/router/engine/v1"
            },
        };

        const headers = {
            "authorization": "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
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
        window.global = window;
        return await window.global.doPostByUrl(env, headers, body, url);
    });
    
    await console.log("API Response:", response);
   
});

test('Vahana Login', { tag: ["@regression", "@login"] }, async ({ request }) => {

    
    await request.fetch(`https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES`, {
        method: "POST",
        headers: {
            origin: "https://accounts.vahanacloud.com",
            Authority: "console.vahanacloud.com",
            path: "/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES",
            requestid: "1739276038434null",
            Authorization: "Basic dmFoYW5hOkRlY2ltYWxAMTIz"
        },
        data: {"username":"aashi.agarwal@decimal.co.in",
            "password":"Decimal@1",
            "sessionExist":true
        },
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let parsedBody = JSON.parse(body.toString()); 
            expect(parsedBody.data.authorization).toBeTruthy();
            // let expected = '{"code":"success","message":"Authentication Done","module":"router","requestId":"1739276038434null","path":"/login","data":{"userId":"61YWV4MKDNDFEQ1IC6JX","status":"ACTIVE"}}';
            // delete parsedBody.data.authorization;
            // expect(JSON.stringify(parsedBody).toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
            // console.log(parsedBody)
        });
    });

});