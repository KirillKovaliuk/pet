const { execSync } = require('child_process');

function getCurrentBranch() {
  try {
    const command = 'git symbolic-ref --short HEAD';
    const result = execSync(command).toString().trim();

    return result;
  } catch (error) {
    console.error('Error getting current branch:', error.message);

    process.exit(1);
  }
}

const branchPattern = /^(feature|bugfix|hotfix|release|tech|docs)\/CP-(?!0+$)\d{1,}$/;

const currentBranch = getCurrentBranch();

if (!branchPattern.test(currentBranch)) {
  console.error(`\n  Error: Invalid branch '${currentBranch}'. \n`);

  process.exit(1);
}
