const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })


// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
// ourReadStream.on('data', (data) => {
//     console.log(data);
// })

// console.log('Hello')

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end(); 
    }
    else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)

            res.write('thank you for submitting!');
            res.end();
        });
    }
    else {
        res.write('Not found')
        res.end();
    }
});

// server.on('connection', () => {
//     console.log('New connection...')
// });

server.listen(3000);

console.log(`listen on port 3000`)




