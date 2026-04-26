const accountId=12344
let accountEmail="shree@gmail.com"
var accountPassword=1234
accountCity="jaipur"
let accountState;


// accountId = 2 // not allowed

accountEmail="shre@gmail.com"
accountPassword=1234
accountPassword="bengaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId,accountEmail,accountPassword,accountPassword])

