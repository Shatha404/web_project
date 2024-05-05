const express = require('express')
const { request } = require('http')


const app = express()

app.get('/',(request,response)=>{
    response.send('hello')
})


app.listen(3000, ()=> console.log('Server started to work on port 3000'))