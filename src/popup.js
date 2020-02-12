console.log("content.js is running");
$(document).ready(function() {
    $('.search-button').click(function() {
        let input = $("#iid").val();
        console.log(input);
        let param = {
            active: true,
            currentWindow: true
        };
        chrome.tabs.query(param, function(tabs) {
            console.log(tabs);
            let msg = {
                txt: input
            };
            chrome.tabs.sendMessage(tabs[0].id, msg.txt);
        });
    });
    $('.logout-button').click(function() {
        chrome.storage.local.remove(('accessToken'), function() {;
            window.location.replace("../loginauth/login.html");

        });
    });

});