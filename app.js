"use strict";
var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));

//forces certain URLs to load specific pages so everything can be accessed via localhost
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

//create default 'Delia Derbyshire' user for test purposes
var people = [{"username":"doctorwhocomposer", "forename":"Delia", "surname":"Derbyshire"}];
var battleships = [{"class":"Dreadnought", "description":"WW1-era capital ship. So valuable they were rarely actually used.", "tonnage":"18000"}]

app.get('/people', function(req, resp){
    resp.send(people);
});

app.get('/people/:username', function(req, resp){
	var username = req.params.username;
	var response = {};
	for (let i = 0; i < people.length; i++) {
		if (people[i]["username"] === username) {
			response = people[i];
		};
	};
	if (Object.keys(response) != 0 || username != "") { //checks for an empty object
		resp.send(response);
	} else {
		resp.sendStatus(404);
	}
});

app.post('/people', function(req, resp){
	var isDuplicate = false;
	var username = req.body.username;
	for (let i = 0; i < people.length; i++) {
		if (people[i]["username"] === req.body.username) {
			isDuplicate = true;
		}
	}
	if (req.body.access_token != "concertina") {
		resp.sendStatus(403);
	} else if (isDuplicate === true) {
		resp.sendStatus(400);
	} else	{
		people.push({
			username:req.body.username,
			forename:req.body.forename,
			surname:req.body.surname
		});
		resp.send("New user " + username + " successfully created.")
	}
});

app.get('/battleships', function(req, resp){
	resp.send(battleships);
});

app.get('/battleships/:name', function(req, resp){
	var name = req.params.name;
	var response = {};
		for (let i = 0; i < battleships.length; i++) {
		if (battleships[i]["class"] === name) {
			response = battleships[i];
		};
	};
	if (Object.keys(response) != 0 || name != "") {
		resp.send(response);
	} else {
		resp.sendStatus(404);
	}
});

app.post('/battleships', function(req, resp){
	var isDuplicate = false;
	var name = req.body.class
	for (let i = 0; i < battleships.length; i++) {
		console.log(battleships[i]["class"]);
		console.log(req.body.class)
		if (battleships[i]["class"] === req.body.class) {
			isDuplicate = true;;
		}
	}
	if (req.body.access_token != "concertina") {
		resp.sendStatus(403);
	} else if (isDuplicate === true) {
		resp.sendStatus(400);
	} else	{
		battleships.push({
			class:req.body.class,
			description:req.body.description,
			tonnage:req.body.tonnage,
		});
		resp.send()
	}
});

module.exports = app;