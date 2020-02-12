$(document).ready(function() {
    console.log("Its loading");
    chrome.storage.local.get(['accessToken'], function(res) {
        if (res.accessToken) {
            window.location.replace('../popup.html');
        } else {
            $("#login").click(function() {
                console.log("Its clicking");
                let email = $("#email").val();
                console.log("Email ", email);
                var accessToken = '';
                $.ajax({
                    type: "POST",
                    url: "http://app.fbdomination.io/users/login",
                    data: { email: email },
                    success: function(res) {
                        console.log("Message");
                        if (res.http_code == 200) {
                            if (res.accessToken) {
                                chrome.storage.local.set({ 'accessToken': res.accessToken }, function() {
                                    window.location.replace('../popup.html');

                                });
                            }

                        }
                    },
                    error: function(xhr, status, error) {
                        var errorMessage = 'Enter Valid Email Address';
                        $('.err_msg').html(errorMessage);
                    }


                });


            });


        }
    });
});