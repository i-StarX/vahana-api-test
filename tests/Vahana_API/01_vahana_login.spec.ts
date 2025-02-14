import { test, expect, } from '@playwright/test';

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
            let expected = '{"code":"success","message":"Authentication Done","module":"router","requestId":"1739276038434null","path":"/login","data":{"userId":"61YWV4MKDNDFEQ1IC6JX","status":"ACTIVE"}}';
            delete parsedBody.data.authorization;
            expect(JSON.stringify(parsedBody).toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});