var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('jwt', { title: 'Express' });
});


router.post('/', function(req, res) {
  console.log("entro"+ req.body.texto);
   var payload = {somethingSecret: '' }
    var token = jwt.sign({Palabra: req.body.texto}, req.body.clave);
    res.json({success: true, cifrado: token });
    
  });
  
module.exports = router;

/* GET home page. */


// var secret = 'IDONTKNOW';
// var secretWord ="";
// secretWord = document.getElementById("txt1").value;
// var payload = JSON.stringify(secretWord);

// function Generate()
// {
//     alert("negro");
//     // sign with RSA SHA256
//     var cert = fs.readFileSync('private.key');  // get private key
//     alert("negro");
//     var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});
//     alert("negro");
//     // sign asynchronously
//     jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
//       console.log(token);
//     });
//     jwt.encode(secret, payload, 'sha256',function(err, token){
        
//         if(err){
//              alert("error");
//         }
//         else{
//             alert("entro");
//             document.getElementById("txtArea").value = payload;
//             document.getElementById("txtArea2").value = token;
//         }
//     });  
    
// }