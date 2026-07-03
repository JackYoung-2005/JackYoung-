const express = require('express');
const app = express();
const fs = require('fs');
const { main } = require('./Js_code');  // main 是 async 函数
const lig_log = console.log;

// 支持json请求体解析
app.use(express.json());

// get接口
app.get('/api/user_dun/hello', function(req, res) {
    res.json({ message: 'Hello from jxkj Node.js backend' });
});

// POST接口
app.post('/api/user_dun/main', async function(req, res) {
    try {
        lig_log('接收数据:::', req.body);

        // 从请求体中提取参数
        const { t, params } = req.body;

        // 验证参数
        if (!t || !params) {
            return res.status(400).json({
                status: 'error',
                message: '缺少必要参数: t 或 params'
            });
        }

        // 调用异步 main 函数
        const result = await main(t, params);

        res.json({
            status: 'success',
            result: result
        });

    } catch (error) {
        lig_log('错误:::', error);
        res.status(500).json({
            status: 'error',
            message: error.message,
            stack: error.stack
        });
    }
});

const PORT = 8888;
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});