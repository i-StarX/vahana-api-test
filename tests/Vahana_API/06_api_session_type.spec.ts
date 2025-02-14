import { test, expect, } from '@playwright/test';

test('API Session Type', { tag: ["@regression", "@api_session_type"] }, async ({ request }) => {

    
    await request.fetch(`https://middleware.vahanacloud.com/backend/router/engine/v1/gateway`, {
        method: "POST",
        headers: {
origin: "https://middleware.vahanacloud.com",
Authority: "middleware.vahanacloud.com",
path: "/backend/router/engine/v1/gateway",
requestid: "VAHANAPORTAL495c868f-f743-341a-b200-02376fc3f67f--13022025111949318",
Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjZTVjZDE0ZC0xMWE1LTQxY2QtODMxNi1jNjgxMzA0MDA5M2UiLCJzdWIiOiJMdlFCYkx3N2JtempaZHhoaHg3WkpIS1NLRTkvUTNEN2xCWExLa3lJWGF6REJ6dysyWWJnZlJOcy8zNG9TalRvQVltYkg5ZVBSOVovVUlLb3lzdzhLQT09IiwiaWF0IjoxNzM5NDIzNTkwLCJleHAiOjE3Mzk1MDk5OTB9.XPHGnCKjODBCFUrBkIp8krGhzzJYsgcoaurDTd9HtwJpEmUxRv2VmVanoOqKczVB1bc9Jz7nSHZQMcc_YihArg",
clientid: "VAHANA~PORTAL",
cookie: "WORKSPACE_NAME=PROD_RegressionAPPs; WORKSPACE_ID=35301172829474008194501; ISLOGGEDIN=false; SSID=6394203999627022; ILG=7138dd95-e97b-4240-a15d-c4cec4f2f356; USER_ID=61YWV4MKDNDFEQ1IC6JX; USERNAME=aashi.agarwal@decimal.co.in; DEFAULT_ACCOUNT_ID=25620168075932682798270; DEFAULT_ACCOUNT_NAME=Demo QA Account; DEFAULT_ACCOUNT_HIERARCHY=arn:25620168075932682798270_AC; ACCESS_LEVEL=arn:35301172829474008194501_WS; DEFAULT_ACCOUNT_USER_ROLE=DEVELOPER",
deviceid: "495c868f-f743-341a-b200-02376fc3f67f",
hash: "625175FAFD4A3DCD726DD7CFF7C3D10A30755EF7D5522D173EFF9EE743F9CF517EF2B2244A034113B1A4E3F013D8614365365BED792B8398D4BE8AF93C3FD151",
referer: "https://middleware.vahanacloud.com/vConnect_new/",
servicename: "GET_API_LIST",
txnkey: "84fefa1e1911bcc0f53c01f471ebc9651860a6de82b6c72321a79c7a06dce5bc408f2a62052767a3fc9ac4a91d352e785782bf79750efb676d7137214cf500c2b288fcb0e8565d4c9ef717c59e6f8afafe381afa8b79197815f6d645decd655a3d9667bc38e1eebec9c31403ad0c48d7500f4933807332020f9187e38d74c3ae16c49f275e91ede568edafd63bd0d24b248f006da24b9914096711cbb780d71a6acbc44fa4b7492f3e904573b39c3adbaf37b93905bddd3f558c1680c195962b4d552047e34d83f7b7e92e496d5f062b4e359cc7be1d629ab1c5e735b529b58d52c835c7fdf548cb0e2143570ed14e4ba0f0a699496905234490521752025075",
"security-version": "2",
requesttype: "ER_ER",
priority: "u=1, i",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "Windows",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin"
},
        data: {"request":"flHOeMg9lkHUs+LJ+LoRCk9c4ETlkaF6/MldQ2Jlz+D/FATFMjwBVB3NYAqZo27UPeu/ADI5c2rxbx7imYDV0N9+3gpHaGc9aregaL7k+JSw3lRvXbc8rJXeog9b3rsgxFflfBfxm4sQ0V9vkAzyFPl/90dmNSRHuerfdy7VLz6Yr7hvr/IZQnZ9VrbiHufw7t0cMSs2oR66eOWIQuuzWF7I53kWf+nFfSYFjI5TN3AzmflXflOjn/PaxcLzpvxsJuZKbfMlMM2TbT4w2kJUj15/isJ+V09yJwO9DLuIu8FmlzfcetZnk/uupzG71v8HY753vzcGYEico1fJbYhgvYQPGrmVAiesrv1RwKuJd199f55OzDYER6hS7UaYwi0CXyXzgMUbsE1JpCKLfzZFNvBcOoHAeELcR/3CnyuYY8nr/ri2bAtgpNyREDcoX67ynjOSjSja3NDUBHpu6cTElq9QOMvDJ8grWIY3snBceleZVg3fntpdNpntF+S3H51GzQyGATqpY3CmsdkNpP4xmw63+PE5Q6IY7tMp/sQ7RrtBhlba2A6TLeRH2QW4HqnWWPldh9/EkSGxDAmwJtfRSqnpFG9vickpJvv+IW2dXWC/j+0joLqzcLWJ2wkzsD20hji7gSjNT7INrjnLD2LJqdXOx3dow+9TAd9hzavf0dqT+5kqqIEiEMa7zfpA3QruxgO4PGo0MV7aFGO5EnDz2MGHM+3kMsEgOEMASW7FWX639jvSICYCNA5/ksbxemP4zoEtcV9xLUpPaTj9e7q6cqpXnlYXpjtEY5l5YgXAYiP08FCgaDo4aCbOcaMVbtww"},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{"response":"OCLUQ1CilJnAKQS0pyGcdeUXXDuG3oyHhI0uctjCpQOx7gbcSgXOqMURvqJ+/W7S1BuVUtSr43/fvd+tV4JWqvOZ8FJmT1lst5WlmRCmPaQdlaubrgGz4rn1aCecQJaIkGOu+IF8c31zCr31B5Q9X9FgFKY6ztbtuIMs0UjNGccWyCqorgjIrzNZMZ9wBJsL"}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});