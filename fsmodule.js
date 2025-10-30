const fs = require('fs');

// const { unlink } = require('node:fs/promises');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('/tmp/hello');


fs.readFile('file.txt', 'utf8', (err, data)=>
    {console.log(err, data)

    } )

console.log("Finishing reading file")

// https://nodejs.org/api/fs.html