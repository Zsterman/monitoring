const express = require('express')

const path = require('path')

const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: '0207c3f8c68e4b0aa1948458f691dd02',
    captureUncaught: true,
    captureUnhandledRejections: true
})



const app = express()

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})



const port = process.env.PORT || 4545

app.listen(port, () => console.log(`take us to warp 4545 ${port}!`))