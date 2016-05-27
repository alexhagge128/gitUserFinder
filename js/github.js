var apiKey = require('./../.env').apiKey;

exports.Repos = function() {

}

exports.Repos.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $("userHere").text("<h2>" + user + "</h2>");

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.Repos.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){

    response.forEach(function(repo) {
      $("repoHere").append("<h4>" + repo.name + "</h4>");
      $("repoHere").append("<h4>" + repo.description + "</h4>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
