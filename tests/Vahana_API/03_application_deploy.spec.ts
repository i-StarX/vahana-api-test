import { test, expect, } from '@playwright/test';

test('Application Deploy', { tag: ["@regression", "@application_deploy"] }, async ({ request }) => {

    
    await request.fetch(`https://application-management.vahanacloud.com/backend/vah-configuration-manager/vah-configuration-manager/env/sync/v2/triggerSync`, {
        method: "POST",
        headers: {
origin: "https://application-management.vahanacloud.com",
Authority: "application-management.vahanacloud.com",
path: "/backend/vah-configuration-manager/vah-configuration-manager/env/sync/v2/triggerSync",
requestid: "1739276038434undefined",
Authorization: "Basic dmFoYW5hOkRlY2ltYWxAMTIz"
},
        data: {
    "workspaceId": "35301172829474008194501",
    "appId": "66083173925231125854404",
    "moduleId": "04379173925231143546145",
    "loginId": "aashi.agarwal@decimal.co.in",
    "envId": "PROD_REGRESSIONAPPS-RALN3KXURK~90979173925231256346065~SAND_BOX",
    "instanceId": "PROD_REGRESSIONAPPS-RALN3KXURK~90979173925231256346065~SAND_BOX~DEFAULT~QDZ1JN",
    "branchId": "04379173925231143546145~FEATURE_1~WYJIJ",
    "syncType": "SYNC",
    "deploymentType": "sync",
    "componentsData": [],
    "envName": "SAND_BOX",
    "syncAppType": "MOBILE"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{"code":"SUCCESS","message":" Application deployed successfully ","data":{"MESSAGE_MASTER_V2 ADD ":{"message":"No Record Found","status":"SUCCESS"},"MESSAGE_MASTER_V2 DELETE ":{"message":"No Record Found","status":"SUCCESS"},"APPLICATION_DEF ADD ":{"message":"Synced SuccessFully","status":"SUCCESS"},"VFLOW_CONFIG_V2 DELETE ":{"message":"No Record Found","status":"SUCCESS"},"ASSET_CONFIG ADD ":{"message":"Synced SuccessFully","status":"SUCCESS"},"CONTENT_MASTER_CONFIG DELETE ":{"message":"No Record Found","status":"SUCCESS"},"APP_SESSION_CONFIG ADD ":{"message":"Synced SuccessFully","status":"SUCCESS"},"DESIGNER_BRM_CONFIG DELETE ":{"message":"No Record Found","status":"SUCCESS"},"STATICLOV ADD ":{"message":"No Record Found","status":"SUCCESS"},"STATICLOV DELETE ":{"message":"No Record Found","status":"SUCCESS"},"ASSET_CONFIG DELETE ":{"message":"No Record Found","status":"SUCCESS"},"VFLOW_CONFIG_V2 ADD ":{"message":"No Record Found","status":"SUCCESS"},"CONTENT_MASTER_CONFIG ADD ":{"message":"No Record Found","status":"SUCCESS"},"DESIGNER_BRM_CONFIG ADD ":{"message":"Synced SuccessFully","status":"SUCCESS"},"APP_SESSION_CONFIG DELETE ":{"message":"No Record Found","status":"SUCCESS"},"APPLICATION_DEF DELETE ":{"message":"No Record Found","status":"SUCCESS"}}}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});