import { test, expect } from '@playwright/test';

declare global {
    interface Window {
        doPostByUrl: (env, body, headers, urlPath) => Promise<any>;
    }
}

test('VALID_REQUEST', { tag: ["@get_job_list"] }, async ({ page }) => {

    await page.goto('http://127.0.0.1:8080/');

    await page.waitForFunction(() => window.doPostByUrl !== undefined);

    const r = await page.evaluate(() => {

        const body = { "orgId": "WORKSPACE3-SVGW1OPZ7D", "appId": "96477173442322192121037", "clientId": "WORKSPACE3-SVGW1OPZ7D", "projectId": "96477173442322192121037", "loginId": "praddumn.singh@decimal.co.in", "jobId": "", "apiData": "" };

        const headers = {
                "apiname": "GET_JOB_LIST",
                "secureKey": "e7eb557b-ac7e-4co5-abd1-b75v4a4e3e6f8"
            };

        const urlPath = '/VSCHEDULER-EXE/vscheduler-exe/api/getAllJobsStatus';

        const env = {
                "production": true,
                "envProps": {
                    "orgId": "WORKSPACE3-SVGW1OPZ7D",
                    "appId": "96477173442322192121037",
                    "secureKey": "2eb45217-1dfe-47aa-9fe0-7769d2aa90bf",
                    "baseUrl": "https://middleware.vahanacloud.xyz/backend/earth/router/engine/v1"
                },
            };

        return window.doPostByUrl(env, body, headers, urlPath);
    });

    console.log(r.data.response.status == 'SUCCESS' ? 'STATUS CHECK PASSED ✅' : `STATUS CHECK FAILED ❌ \nEXPECTED STATUS: SUCCESS \nACTUAL STATUS: ${JSON.stringify(r.data.response.status)}`);
    expect(r.data.response.status).toEqual('SUCCESS')
    
    console.log(r.data.response.response.length > 0 ? 'RESPONSE BODY IS NOT EMPTY ARRAY ✅ ' : 'RESPONSE BODY IS EMPTY ARRAY ❌')
    expect(r.data.response.response).not.toEqual([]);
    console.log(Object.keys(r.data.response.response).length > 0 ? 'RESPONSE BODY IS NOT EMPTY ✅ ' : 'RESPONSE BODY IS EMPTY ❌')
    expect(Object.keys(r.data.response.response).length).toBeGreaterThan(0);
    console.log(r.data.response.response !== null ? 'RESPONSE BODY IS NOT NULL ✅ ' : 'RESPONSE BODY IS NULL ❌')
    expect(r.data.response.response).not.toBeNull();

});

