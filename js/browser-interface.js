var Repos = require('./../js/github.js').Repos;

$(document).ready(function() {
  var newUserRepo = new Repos();

  $('#findUser').click(function() {
    var user = $('#userName').val();
    $('#userName').val("");
    newUserRepo.getRepos(user);
    //$('#repoHere').text();

  });
});
