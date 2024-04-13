npm install @google/generative-ai

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(AIzaSyDL_dJzWHhT3pKT8E17N8Kb1JfaBm_IU5c);

// ...

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// ...
