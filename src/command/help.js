import msee from 'msee'
import path from 'path'
import fs from 'fs'

export default function help (args) {
  let cmd = 'help';

  const file = path.join(__dirname, '../doc', `${cmd}.md`);
  let doc;

  if (fs.existsSync(file)) {
    doc = msee.parseFile(file);
    console.log(doc);
  } else {
    console.log('oh! I can\'t help you');
  }
}