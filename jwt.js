var jwt = require('jwt-simple');
var secret = 'xxx';
var secretWord ="";
secretWord = document.getElementById("txt1").value;
var payload = JSON.stringify(secretWord);


function Generate()
{

    alert(payload);
    // HS256 secrets are typically 128-bit random strings, for example hex-encoded:
    // var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex)
    
    // encode
    var token = jwt.encode(payload, secret);
    document.getElementById('txtArea').value = token;
    // decode
    var decoded = jwt.decode(token, secret);
    document.getElementById('txtArea2').value = decoded;
    console.log(decoded); //=> { foo: 'bar' }
}