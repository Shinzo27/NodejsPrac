const fs = require('fs');

// fs.writeFileSync('./test.txt' ,"Helloo World");

//sync
// const result = fs.readFileSync('./test.txt', 'utf-8');
// console.log(result)

//async : need a callback function to return a value

fs.readFile('./test.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error", err)
    }
    else {
        console.log(result)
    }
})


fs.appendFileSync('./test.txt', new Date().getDate().toString());