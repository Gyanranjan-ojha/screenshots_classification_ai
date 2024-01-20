function getCookieData(name) {
    var pairs = document.cookie.split("; "),
        count = pairs.length, parts;
    while (count--) {
        parts = pairs[count].split("=");
        if (parts[0] === name)
            return parts[1];
    }
    return false;
}

function sendScreenshots() {
    var game_id = $('#game_id').val();
    var realese_id = $('#realese_id').val();
    var platform_id = $('#platform').val();
}

async function getInput() {
    var text_field = $("test_feild").val();
    var token = getCookieData("csrftoken");
    await $.ajax({
        type: 'GET',
        url: `/getGPTPromt/?text_field=${text_field}`,
        headers: { "X-CSRFToken": token },

        error: function (request, error) {
            let data1 = JSON.parse(error);
            console.log(error);
        }, success: function (data) {
            arr = $.parseJSON(data);
            console.log(arr);
        }


    })
}
function toggleChatPopup() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
}

function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");
    console.log(chatInput.value);
    var userMessage = chatInput.value;
    var token = getCookieData("csrftoken");
    $.ajax({
        type: 'POST',
        url: "/getGPTPromt",
        headers: { "X-CSRFToken": token },
        data: {
            'text_field': userMessage
        },
        error: function (request, error) {
            let data1 = JSON.parse(error);
            console.log(error);
        },
        success: function (data) {
            arr = $.parseJSON(data);
            var botResponse = arr.m
            
            chatInput.value = "";
            chatBody.innerHTML += "<p>User: " + userMessage + "</p>";
            chatBody.innerHTML += "<p>Chatbot: " + botResponse + "</p>";
        }
    });
}

// Add event listener for Enter key on the chat input
document.getElementById("chatInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default behavior of the Enter key (form submission)
        sendMessage(); // Call the sendMessage function
    }
});

