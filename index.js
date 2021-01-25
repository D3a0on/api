//-------------------------
console.clear()
const express = require('express')
const deamon = express()
const fetch = require('node-fetch')
const Bluebird = require('bluebird')
fetch.Promise = Bluebird
const cors = require('cors')
//---------- > set list user



infinity_key = "$6$bsKmq7b7VPvXmx0a$HwQME3f9hB5OhZ8uuXwL7w3.DqGWy2PXVOVkqRj0t1k5igpw4DZlXL2a4F0eIbLfv.cJI71hZ2ePyYGxXL3Sm."

var corsOptions = {
    origin: 'https://deamon.vercel.app/',
    optionsSuccessStatus: 200 // For legacy browser support
}

deamon.get('/:key', cors(corsOptions), (req, res)=>{
    key = req.params.key

    if(key == infinity_key){
         res.send('{"login":true, "status":"0"}')
     }else {
         res.send('{"login":false, "status":"1"}')
     }
})

deamon.listen(1337)