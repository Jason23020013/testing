// index.js

npm install @google/generative-ai
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyC2kBnw20EYMqeCi6dI6xzX2qOzFegwYyo");

// ...

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// ...
// 导入所需的库和模块
const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

// 创建Express应用程序
const app = express();

// 设置JSON解析
app.use(bodyParser.json());

// Gemini AI API密钥
const API_KEY = 'AIzaSyC2kBnw20EYMqeCi6dI6xzX2qOzFegwYyo';

// 处理POST请求的路由
app.post('/chat', async (req, res) => {
    try {
        // 从请求体中获取用户输入的消息
        const userMessage = req.body.message;

        // 向Gemini AI发送请求
        const response = await fetch('https://api.gemini-ai.com/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({ message: userMessage })
        });

        // 解析Gemini AI的响应
        const data = await response.json();

        // 提取Gemini AI的回复
        const aiResponse = data.reply;

        // 将Gemini AI的回复发送给客户端
        res.json({ reply: aiResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 启动Express服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
