var apiKey = require('./../.env').apiKey;

exports.Repos = function() {

}

exports.Repos.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
