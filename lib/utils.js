const figlet = require('figlet');
const chalk = require('chalk');

/**
 * 打印Logo
 *
 */
export function printLogo () {
  const data = figlet.textSync(`work Tree CLI`, {
    kerning: "full"
  });
  console.log(chalk.blue(data))
}

export function getHost (argv) {
  if (argv.h || argv.host) {
    return argv.h || argv.host
  }

  const argvs = argv._
  const len = argvs.length
  
  for(let i = 0; i < len; i++) {
    if (/^https?:\/\/[\w\.\/-]+/.test(argvs[i])) {
      return argvs[i]
    }
  }
  return ''
  
}