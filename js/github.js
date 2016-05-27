//API Key
var apiKey = require('./../.env').apiKey;

//Constructor
exports.Repos = function() {
}

//Call for User Name
exports.Repos.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){

    //$("#userHere").append("<h1>" + user + "</h1>");

    response.forEach(function(user) {
      $('#imageHere').html("<img src=" + user.owner.avatar_url + " style=width:200px;height:200px>");
      $("#userHere").html("<h2>" + user.owner.login + "</h2>");
    })

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

//Call for Repo Name/Descriptions
exports.Repos.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){

    response.forEach(function(repo) {
      $("#repoHere").append("<tr><td>" + repo.name + "</td><td>" + repo.description + "</td><td>" + repo.created_at + "</td></tr>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
