const { readFileSync , writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/subfolder/text.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')
writeFileSync(
    './content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag : 'a'}
)
console.log('Done with the task');
console.log('Starting with the next');