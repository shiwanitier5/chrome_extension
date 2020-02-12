console.log("Chrome Extension is going?");
$(document).ready(function() {
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        console.log("check");
        console.log(message);
        searchText(message);
        console.log("Received");
    });
});


function searchText(search) {
    if (search) {
        console.log("going");
        let content = $("p").text();
        let searchExp = new RegExp(search, "ig");
        let matches = content.match(searchExp);
        console.log(matches);


        if (matches) {
            $("p").html(content.replace(searchExp, function(match) {
                return "<span class='highlight'>" + match + "</span>";




            }));



        }
    }
}