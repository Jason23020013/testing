function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.className = "chat-user";
    userMessage.innerHTML = "<p>" + userInput + "</p>";
    chatBox.appendChild(userMessage);

    // Send user input to GPT API for response
    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "sk-TaNogOVTyxveAlR1qrYqBMQmNMRpLuzQ08HxRJ2gKja2YBw0" // Replace YOUR_API_KEY with your actual API key
        },
        body: JSON.stringify({
            "prompt": userInput,
            "max_tokens": 50
        })
    })
    .then(response => response.json())
    .then(data => {
        var botMessage = document.createElement("div");
        botMessage.className = "chat-bot";
        botMessage.innerHTML = "<p>" + data.choices[0].text.trim() + "</p>";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error("Error:", error));
}
