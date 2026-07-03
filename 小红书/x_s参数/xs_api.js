const express = require('express');
const app = express();
const fs = require('fs');
const {main} = require('./JScode');
lig_log = console.log;


// 支持json请求体解析
app.use(express.json());


// get接口
app.get('/api/x_s/hello',function(req,res){
    res.json({message:'Hello from jxkj Node.js backend'});
});

// POST接口
app.post('/api/x_s/get_xs',function(req,res){
    lig_log('接收数据:::',req.body);
    res.json({status:'success',result:main(req.body)});
});


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`✅  Server is running at http://localhost:${PORT}`)
});