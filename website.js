const fs = require('fs');
const http = require('http');
const console = require('console');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>This is CodewithHarry</h1><p>Hey, this is the way to rock the world</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About CodewithHarry</h1><p>Hey, this is about CodewithHarry</p>');
    } else if (req.url === '/hello') {
        try {
            const data = fs.readFileSync('index.html');
            res.statusCode = 200;
            res.end(data.toString());
        } catch (err) {
            res.statusCode = 500;
            res.end('<h1>Error loading index.html</h1>');
        }
    } else {
        res.statusCode = 404;
        res.end('<h1>This is CodewithHarry</h1><p>Hey, this is the way to rock the world</p>');
    }
});

// ✅ Now this is outside the callback
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});