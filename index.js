#!/usr/bin/env node

import prompts from 'prompts';
import figlet from 'figlet';
import chalk from 'chalk';

import boilerPlate from './utils/boilerPlate.js';

const projName = process.argv[2];

const main = async () => {

  const onCancel = () => process.exit(0);

  const dataQuery = {
    type: 'select',
    name: 'backup',
    message: 'Backup Type',
    choices: [
      {
        title: 'Backup',
        description: 'This pushes your database automatically to a github repo defined in env.',
        value: 'backup'
      },
      {
        title: 'No Backup',
        description: 'No automated backups.',
        value: 'nobackup'
      },
    ],
  }

  if (!projName) {
    const sus = await prompts([
      {
        type: 'text',
        name: 'file',
        message: 'What will you name the database ?'
      },
      dataQuery
    ], { onCancel });
    boilerPlate(sus.backup, sus.file)
    return;
  }

  const uwu = await prompts(dataQuery, { onCancel });
  boilerPlate(uwu.backup, projName);

}

figlet('Mango Starter', (err, data) => {
  if (err) {
    console.log(chalk.red(err));
    process.exit(0);
  }
  console.log(data + '\n');
  main();
});