//counter code
var button = document.getElementById('counter');
button.onclick = function () {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://contacttothis21.imad.hasura-app.io/counter',true); 
    request.send(null);
};
var submit = document.getElementById('submit_button');
submit.onclick = function () {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
         var names = request.responseText;
         names = JSON.parse(names);
         var list = ' ';
         for (var i=0 ; i<names.length; i++) {
             list += '<li>' + names[i] + '</li>';
         }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
          
            }
        }
    };
    var inputName = document.getElementById('name');
    var name = inputName.value;
    request.open('GET','http://contacttothis21.imad.hasura-app.io/submit-name?name=' +name,true); 
    request.send(null);
 
};

var comment_value = document.getElementById('comment_text');
var comment_bttn = document.getElementById('comment_button');
comment_bttn.onclick = function () {
    var vl = document.getElementById = ('comment_content');
    vl.innerHTML = comment_value;
};