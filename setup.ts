import fs from "node:fs"

async function setup() {

  // check allure folders
  if (fs.existsSync('allure-results')) {
    fs.rmdirSync('allure-results', { recursive: true });
  }
  if (fs.existsSync('allure-report')) {
    fs.rmdirSync('allure-report', { recursive: true });
  }

}

export default setup