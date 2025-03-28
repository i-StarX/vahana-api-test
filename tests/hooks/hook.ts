export default class Hooks {

    static async isAthenticated() {
        return false;
    }

    static async authenticate(page, body, headers, env) {
        const r = await page.evaluate(() => {
            return window.doAuthentication();
        });

        console.log(r)
    }

}