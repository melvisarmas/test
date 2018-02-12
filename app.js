var express = require('express'); 
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function (req, res) {
    var noms = ['Robert', 'Jacques', 'Mario'];
    var nom = noms[Math.round(Math.random() * (noms.length - 1))];
    res.render('compter.ejs', {compteur: req.params.nombre, nom: nom});
})

app.use(function (requ, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.send(404, 'Page introuvable')
});

app.listen(8080);