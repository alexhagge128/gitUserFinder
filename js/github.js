// var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=' + Math.floor((Math.random() * 100) + 1)).then(function(response) {
//   return dinoAnswer = response;
// });

var apiKey = "3ef915debb8c42586ba3613b4029db48f18b57e9"

exports.getRepos = function(){
  $.get('https://api.github.com/users/VARIABLEOFUSERINPUT?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
