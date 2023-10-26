const express = require('express');
const app = express();
const debug = require('debug')('App');
const morgans = require('morgan')
const port = 3000;

app.use(morgans('combined'));

app.get("/", (req,res)=>{
   res.send('Hello Welcome to NodeJS!')
   
})

app.listen(port, (req,res)=>{
   debug('')
})