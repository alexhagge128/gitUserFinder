//API Key
var apiKey = "3ef915debb8c42586ba3613b4029db48f18b57e9"

//User Logic
$(document).ready(function() {
  $('#userName').click(function() {
    var user = $('#userName').val();
    $('#userName').val("");
    $('.showUser').text("This is " + user + ".")
  })
})
