import fs from 'fs-extra'
import Configstore from 'configstore'
import chalk from 'chalk'

const CONFIG = new Configstore('WORKTERRCLI');

export default function config () {
  console.log(chalk.blue('path: ' + CONFIG.path));

  console.log(JSON.stringify(fs.readJSONSync(CONFIG.path), null, 2));

}