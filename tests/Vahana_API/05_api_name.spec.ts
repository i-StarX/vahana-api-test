import { test, expect, } from '@playwright/test';

test('API Name', { tag: ["@regression", "@add_new_service"] }, async ({ request }) => {

    
    await request.fetch(`https://middleware.vahanacloud.com/backend/router/engine/v1/gateway`, {
        method: "POST",
        headers: {
origin: "https://middleware.vahanacloud.com",
Authority: "middleware.vahanacloud.com",
path: "/backend/router/engine/v1/gateway",
requestid: "VAHANAPORTAL495c868f-f743-341a-b200-02376fc3f67f--13022025110510199",
Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjZTVjZDE0ZC0xMWE1LTQxY2QtODMxNi1jNjgxMzA0MDA5M2UiLCJzdWIiOiJMdlFCYkx3N2JtempaZHhoaHg3WkpIS1NLRTkvUTNEN2xCWExLa3lJWGF6REJ6dysyWWJnZlJOcy8zNG9TalRvQVltYkg5ZVBSOVovVUlLb3lzdzhLQT09IiwiaWF0IjoxNzM5NDIzNTkwLCJleHAiOjE3Mzk1MDk5OTB9.XPHGnCKjODBCFUrBkIp8krGhzzJYsgcoaurDTd9HtwJpEmUxRv2VmVanoOqKczVB1bc9Jz7nSHZQMcc_YihArg",
clientid: "VAHANA~PORTAL",
cookie: "WORKSPACE_NAME=PROD_RegressionAPPs; WORKSPACE_ID=35301172829474008194501; ISLOGGEDIN=false; SSID=6394203999627022; ILG=7138dd95-e97b-4240-a15d-c4cec4f2f356; USER_ID=61YWV4MKDNDFEQ1IC6JX; USERNAME=aashi.agarwal@decimal.co.in; DEFAULT_ACCOUNT_ID=25620168075932682798270; DEFAULT_ACCOUNT_NAME=Demo QA Account; DEFAULT_ACCOUNT_HIERARCHY=arn:25620168075932682798270_AC; ACCESS_LEVEL=arn:35301172829474008194501_WS; DEFAULT_ACCOUNT_USER_ROLE=DEVELOPER",
deviceid: "495c868f-f743-341a-b200-02376fc3f67f",
hash: "E1FAF7D7A83482342CF77206D7A3F748488E3C6DB1931AF2A59E77CD040F3728CE4876DCDBEA461B4676679CC4BF92D44A57CD8B0EEDE4D970C6ADD050F6292A",
referer: "https://middleware.vahanacloud.com/vConnect_new/",
servicename: "GET_API_LIST",
txnkey: "7391051a244bc6a971aeec00b734b0787fb8ee9c79d59167cf9709902b78df9d82426a7fe990f55eef2ebedf02796169b2b41e184796bebeb9053da83263eafc96954dab38862adb74c0a02c8408fdec9b295e0ba34d876c0326fa85c7b462164454a01601223b2209b281312ed25aa89cbedba211fdceeb445a5dfae26e8d7cee1162fcbbb70613e85722c9a501e35bb259f5eb21462c5d272ab83940e797552376bf5efe263a52f8f530b232dc9934d3d5ea79ee12da534d1644e7d7fa8bb7ac936753b07fd182620f062e6db2ebac56fa5df16e890a1f750ffc72207a601a06fcea47720e3bdfdcf64eebaf0e1e9c0c52b37343563790bf9f0e3bf6883c39",
"security-version": "2",
requesttype: "ER_ER",
priority: "u=1, i",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "Windows",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin"
},
        data: {"request":"RGbyQn8673IlY41oQxaj2Jln0Qb3f2HihSW/wRhnMvgzPrlVVOnfWygMAXs1pKztj0C+y1gDbZR2z4lsUCYXpuGcwA4H+g42Mzg+ww1NU/o9AtXXxJDdIONsnVeGrJfxsv44YWXgDB0AtDWGv12c8l2tG2O8ARiPPKO34oes49Ljm7yI99lep25zixC7a3HEXQPAka5b8TcgtcXHLYis5lE0DcvHyDpgja3du9x9ssDK83wyW+AefA13q8FOBEr15tz1cQavPwwqCF2gIIq5o/vAyxOEzIqaeOwiEdf9MP6zv5zo0/pJ/vWagUCzFOo3WJF7Ejf3z2CW1juXPIfPGi1C+5Sah3zplyeEfg3zHglGBjg7vcQXmwedW6G18Ai9UASLQn8loAiOD8xFaeKP3OacwowanecWpkfjnT/0SWbBFchlBqnDj8gJIACGZVwepQrkYyobR8TUVTUmOPCyCwQiitzcFDjnU3FHvAn17/l+f6AtN0w1XKmJivW65byYIiOfP59VapWCo/T2c0wW291zGYnJsD3Z98u5i9vgvJ0Bf0DcZm14dgPz9cRD4sioeIknke507UV6YZAw+RnT9CS6wD+Yej2Yq8OVGNbpvceK17IFM/U6rce5bj9SOwJB5nxpAgwSFAmLP7lF1qWZBwawC5TS2qn81zgI0xUS0EkYRutcc+0o1dC/O+tvgjB7T40Fs0QADc8FoTvNj17Tesx9K5NLN9WoDmFht8jnlFo4QYbfFmob3akNWhQxmbg3SJJD1iDVPOfZHWLGgJhtNAl/G+cnh3RgusE7TlLppOqeWbGJGEFCTvmkbVySCxLr"},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{"response":"JQd6ahBo1iWY5BiCh70vy6DzdTjDgeSsh7Fn0YASxbTuQiPWiYulpBIlgu14Jp0vrDySMXcez7B1F+nMTat/JdU77R5y9RmiSWRHcmremur4Xp6O0vYz0AJ/pmWAZp6jHgnQkht95hxaifiC7ryrE0Xh4SN7rNAWXC3ErhTLtMrsIMwkZgPZH+bqapKgPRqm"}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});