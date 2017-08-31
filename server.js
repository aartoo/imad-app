var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'article-one': 
	{
    title: 'Article One | Raghul',
    heading: 'Article One',
    content: `<p>
				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
					<br/>
				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
			</p>`
	},
'article-two': 
	{
	title: 'Article Two | Raghul',
    heading: 'Article Two',
    content: `<p>
  				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
					<br/>
				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
			</p>`
	},
'article-three':
	{
	title: 'Article Three | Raghul',
    heading: 'Article Three',
    content: `<p>
 				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
					<br/>
				This is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my paraThis is my para
			</p>`
	}
};

function createTemplate(data) {
		var title = data.title;
		var heading = data.heading;
		var content = data.content;
		var htmlTemplate =
				`<!DOCTYPE html>
				<html>
					<head>
				      <title>${title}</title>
				      <meta name="viewport" content="width=device-width, intial-scale=1/">
				      <link href="/ui/style.css" rel="stylesheet" />
				  	</head>
				<body>
					<div class="container">
						<div>
							<a href="/">Home</a>
						<h2>
							${heading}
						</h2>
						</div>
						<div>
						    ${content}
						</div>
					</div>
				<br/>
				<hr/>
				<div class = "comment">
                <input type = "text" id = "comment_text" placeholder = "comment"></input>
                <input type = "submit" value = "submit" id = "comment_button"></input>
                <br/>
                <hr/>
                <p id = "comment_content"></p>
                <br/>
                <hr/>
                </div>
				</body>
				</html>`
		;
		return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

var names = []; 
app.get('/submit-name', function (req, res) {
  var name = req.query.name;
  names.push(name);
  
  res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/raghul', function (req, res) {
  res.sendFile("hi there!");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`hey raghul you did it ${port}!`);
});
