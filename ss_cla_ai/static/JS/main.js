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