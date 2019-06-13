import parseArgs from 'minimist'
import CONFIG  from './config'
import CMD from './command';

function getcmd(argv) {
    let res;
    const cmds = argv._;

    Object.keys(argv).some(function (key) {
        if (CONFIG.CLI_PARAMS[key]) {
            res = CONFIG.CLI_PARAMS[key];
            return true;
        }
        return false;
    });
    if (!res) {
        cmds.some((key) => {
            if (CONFIG.CLI_PARAMS[key]) {
                res = CONFIG.CLI_PARAMS[key];
                return true;
            }
            return false;
        });
    }

    return res;
}

// exec


const argv = parseArgs(process.argv.slice(2));
// console.log(argv);

let cmd = getcmd(argv);

// console.log(cmd);

if(!CMD[cmd]) {
    cmd = CONFIG.DEFAULT_CLI;
}

CMD[cmd](argv);

