
//The jsonwebtoken library uses a secret key (as a string) to encode and decode tokens. 
//The secret key is a unique piece of information known only to the server that generates and signs the tokens.

//jsonwebtoken functions such as verify() or sign() use algorithm that needs a secret key (as String) to encode and decode token.
module.exports = {
    secret: "this is a secret key"
  };