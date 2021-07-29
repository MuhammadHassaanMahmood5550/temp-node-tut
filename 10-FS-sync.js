////---Built-in Modules
//1. os module
//2. path module
//3. FS = file system module
//4. HTTP module

//--FS sync
const {readFileSync, writeFileSync} = require('fs');
console.log(`started sync(line by line)`);
//--OR
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8');
// utf8 default encoding
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/result-sync.txt', `if the file is tere node will write this, if not node will create new one with this name `);

//to append to the file
writeFileSync('./content/result-sync.txt', `    this is the text to append`, {flag: 'a'});
console.log(`finished`);


