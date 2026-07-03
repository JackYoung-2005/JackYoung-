const express = require('express');
const app = express();
const fs = require('fs');
const {main} = require('./get_mtgsig');
lig_log = console.log;


// 支持json请求体解析
app.use(express.json());


// get接口
app.get('/api/mtgsig/hello',function(req,res){
    res.json({message:'Hello from jxkj Node.js backend'});
});

// POST接口
app.post('/api/x_mtgsigs/get_mtgsig', async function(req, res) {
    // 从 req.body 中解构出 Python 发送的两个参数[cite: 2]
    const { data, url, method} = req.body;
    lig_log('接收数据:', { data, url });
    // 调用异步的 main 函数并等待结果[cite: 1]
    const result = await main(data, url,method);

    res.json({
        status: 'success',
        result: result.mtgsig
    });
});


const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`✅  Server is running at http://localhost:${PORT}`)
});

