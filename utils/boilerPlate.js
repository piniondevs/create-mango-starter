import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';

const boilerPlate = (type, fileName) => {
  try {

    let command = 'git clone -b starter-with-backup https://github.com/webdevsint/mango.git';

    if (type === 'backup') {
      command = `git clone -b starter-with-backup https://github.com/webdevsint/mango.git`;
    } else {
      command = `git clone -b starter-without-backup https://github.com/webdevsint/mango.git`;
    }
    
    const projectSpinner = ora(`\nCloning Boilerplate: ${fileName} \n`);
    projectSpinner.start();
    execSync(`${command} ${fileName}`);
    projectSpinner.succeed(`Boilerplate cloned: ${fileName} \n`);

    const installSpinner = ora(`Installing node_modules: ${fileName} \n`);
    installSpinner.start();
    execSync(`cd ${fileName} && npm install`);
    installSpinner.succeed(`Modules Installed: ${fileName}`);
    
    console.log(chalk.green.bold(`\n✔ Project boilerplated: ${fileName}\n`));
    
    console.log(chalk.blue(`cd ${fileName}`));
    console.log(chalk.blue(`npm start\n`));

    console.log(chalk.cyan('Read the docs at https://github.com/webdevsint/mango\n'));

    console.log(chalk.blue.bold('Happy Hacking!\n'));

  } catch (err) {
    console.log(chalk.red(err));
    process.exit(0);
  }
}

export default boilerPlate;