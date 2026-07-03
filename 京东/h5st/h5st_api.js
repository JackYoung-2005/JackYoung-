const express = require('express');
const app = express();
const fs = require('fs');
const {get_h5st} = require('./main.js');
lig_log = console.log;


// 支持json请求体解析
app.use(express.json());


// get接口
app.get('/api/h5st/hello',function(req,res){
    res.json({message:'Hello from jxkj Node.js backend'});
});

// POST接口
app.post('/api/h5st/get_h5st',function(req,res){
    lig_log('接收数据:::',req.body['paramsH5']);
    res.json({status:'success',result:get_h5st(req.body['paramsH5'])});
});


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`✅  Server is running at http://localhost:${PORT}`)
});