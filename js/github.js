//API Key
var apiKey = require('./../.env').apiKey;

//Constructor
exports.Repos = function() {
}

//Call for User Name
exports.Repos.prototype.getUser = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){

    //console.log(response);
    reponse.forEach(function(account) {
      $("#userHere").append("<h2>" + user + "</h2>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

//Call for Repo Name/Descriptions
exports.Repos.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){

    response.forEach(function(repo) {

      if(repo.description.length>1){
        $("#repoHere").append("<tr><td>" + repo.name + "</td><td>" + repo.description + "</td></tr>");
      } else {
        $("#repoHere").append("<tr><td>" + repo.name + "</td><td></td></tr>");
      }
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
