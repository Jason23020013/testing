const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // For making API calls to Gemini AI

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Replace with your actual Gemini API key
const apiKey = 'YOUR_GEMINI_API_KEY';

app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const question = req.body.question;

  try {
    const response = await fetch('https://ai.google/api/...', { // Replace with Gemini AI endpoint
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: question,
        // Adjust additional parameters as needed based on Gemini AI documentation
      })
    });

    const data = await response.json();
    const answer = data.results[0].content; // Assuming response contains answer in results[0].content
    res.json({ answer });
  } catch (error) {
    console.error('Error fetching response from Gemini AI:', error);
    res.status(500).json({ answer: 'An error occurred. Please try again later.' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
