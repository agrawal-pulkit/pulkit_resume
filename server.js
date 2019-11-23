const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
//server.use('/public', express.static(__dirname + '/static-files-dir'))
server.use(express.static(__dirname + '/public'));

/* other routes defined before catch-all */
server.get('/pulkit', (req, res) => {
    res.sendFile(__dirname + '/public/pulkit.html');
})

server.get('/test', (req, res) => {
    res.sendFile(__dirname + '/public/test.html');
})
/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

const port = 8000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
})
