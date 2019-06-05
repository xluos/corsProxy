const figlet = require('figlet');
const chalk = require('chalk');

/**
 * 打印Logo
 *
 */
function printLogo () {
  const data = figlet.textSync(`work Tree CLI`, {
    kerning: "full"
  });
  console.log(chalk.blue(data))
}



module.exports = {
  printLogo
}