const fs = require('fs');
fs.writeFile('a.txt', 'Hello World!', function(err){
    console.log('File written');
});
fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data);
});