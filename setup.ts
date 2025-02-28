import fs from "node:fs"
import { request } from '@playwright/test';

async function setup() {

  // store cookies and session of a user
  const apiRequest = await request.newContext();
  const authFile = '.auth/user.json';
  
  const response = await apiRequest.post('https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES', {
    data: {
        "username":"aashi.agarwal@decimal.co.in",
        "password":"Decimal@1",
        "sessionExist":true
    }
  });

  if(!response.ok()){
    await apiRequest.post('https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES', {
    data: {
        "username":"aashi.agarwal@decimal.co.in",
        "password":"Decimal@1",
        "sessionExist":true
    }
  });
  }

  // await apiRequest.storageState({ path: authFile });

  // check allure folders
  if(fs.existsSync('allure-results')){
    fs.rmdirSync('allure-results', { recursive: true});
  }
  if(fs.existsSync('allure-report')){
      fs.rmdirSync('allure-report', { recursive: true});
  }

}

export default setup