// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { input_text } = req.body;
  const apiKey = "AIzaSyDL_dJzWHhT3pKT8E17N8Kb1JfaBm_IU5c"; // 替换为你的 Gemini API 密钥

  try {
    const response = await fetch('https://api.geminiopenplatform.com/v1/ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ input_text })
    });

    const data = await response.json();
    res.json({ response: data.response });
  } catch (error) {
    console.error('请求Gemini时出错:', error);
    res.status(500).json({ error: '请求Gemini时出错' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
