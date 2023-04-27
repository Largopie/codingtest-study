const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str = "";

rl.on('line', function (line) {
    str = line;
    rl.close();
}).on('close',function(){
    console.log(str);
    process.exit();
});