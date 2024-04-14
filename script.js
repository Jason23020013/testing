document.getElementById('questionForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission
  const question = document.getElementById('question').value;
   
  try {
    const response = await fetch('/ask', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    document.
