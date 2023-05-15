const express = require('express');
const app = new express();
app.get('/',(req,res)=>{
    res.send('test')
})
app.listen(8011,()=>{
    console.log('服务器在http://localhost:8011/ 开启')
})