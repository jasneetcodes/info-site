
const http = require('http');
const fs = require('fs');
const url = require('url');

    const port = process.env.PORT || 8080;
    const data =fs.readFileSync("index.html")
    

    const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`${url} AND ${method}`)
    })
    
server.listen(port, () =>{
    console.log('Server running')
})

