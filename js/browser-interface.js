var Repos = require('./../js/github.js').Repos;
userCount = 0;

$(document).ready(function() {
  var newUserRepo = new Repos();

  $('#clearField').click(function() {
    $('#repoHere').empty();
    $('#imageHere').empty();
    $('#userHere').empty();
  })

  $('#findUser').click(function() {
    var user = $('#userName').val();
    $('#userName').val("");

    newUserRepo.getUser(user);
    newUserRepo.getRepos(user);

    userCount = userCount + 1;

  });
});
