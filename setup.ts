// setup.ts
const { exec } = require("child_process");
const util = require("util");

const execAsync = util.promisify(exec);

async function updateDependencies() {
  console.log("Updating dependencies to their latest versions...");

  try {
    // Install npm-check-updates package globally
    await execAsync("npm install -g npm-check-updates");

    // Run npm-check-updates with -u to update package.json
    await execAsync("ncu -u");

    // Install updated dependencies
    await execAsync("npm install");

    console.log("Dependencies successfully updated.");
  } catch (error) {
    console.error("Failed to update dependencies:", error);
  }
}

updateDependencies();
