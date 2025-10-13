const { ModuleClient, SessionClient } = require('../dist/index.cjs');

async function main() {
    const moduleClient = new ModuleClient();

    const sessionClient = new SessionClient(moduleClient);

    const response = await sessionClient.get('https://example.com');

    console.log(response);

    await sessionClient.destroySession();
    await moduleClient.terminate();
}

main().catch(console.error);
