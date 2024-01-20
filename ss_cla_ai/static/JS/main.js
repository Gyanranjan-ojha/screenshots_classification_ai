function toggleChatPopup() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
  }
  
  function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");
  
    var userMessage = chatInput.value;
    chatInput.value = "";
  
    chatBody.innerHTML += "<p>User: " + userMessage + "</p>";
  
    var botResponse = "I'm just a demo chatbot. Ask me anything!";
    chatBody.innerHTML += "<p>Chatbot: " + botResponse + "</p>";
  }
  
  // Add event listener for Enter key on the chat input
  document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default behavior of the Enter key (form submission)
      sendMessage(); // Call the sendMessage function
    }
  });
  