import { test, expect, } from '@playwright/test';

test('IAM User Invite', { tag: ["@regression", "@iam_user_invite"] }, async ({ request }) => {

    
    await request.fetch(`https://console.vahanacloud.com/backend/iam-user-manager/api/v2/user/invite`, {
        method: "POST",
        headers: {
origin: "https://iam.vahanacloud.com",
Authority: "console.vahanacloud.com",
path: "/backend/iam-user-manager/api/v2/user/invite",
requestid: "1739276038434undefined",
Authorization: "Basic dmFoYW5hOkRlY2ltYWxAMTIz"
},
        data: {
    "workspaceId": "35301172829474008194501",
    "inviteUsers": [
        {
            "userName": "aashi.agarwal@decimal.co.in",
            "name": "Aashi Agarwal",
            "rolesMapping": [
                {
                    "role": "arn:roles/iam.workspaceadmin",
                    "access": [
                        {
                            "resourceGroup": "ALL",
                            "resources": [
                                {
                                    "resourceType": "ALL",
                                    "resourceAccessLevel": "arn:vahana:35301172829474008194501",
                                    "action": "Allow"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{"code":"success","message":"User invite api has been executed successfully","module":"iam-user-manager","requestId":"1739334757001undefined","path":"/iam-user-manager/api/v2/user/invite","data":{"code":"user-invited","message":"User has been invited successfully","module":"iam-user-manager","requestId":"1739334757001undefined","path":"/iam-user-manager/api/v2/user/invite","data":[{"userName":"aashi.agarwal@decimal.co.in","action":"INVITE","status":"FAILURE","remarks":"[\"must be a well-formed email address\"]"}]}}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});