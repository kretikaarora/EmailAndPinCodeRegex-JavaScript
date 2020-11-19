//uc1 validating first part of the email 
let emailRegex=RegExp("^[A-Za-z]{3,}$")
function EmailValidation(email)
{
    if(emailRegex.test(email))
    {
        console.log(email +"  is in valid format");
        return true;
    }
    else throw "Incorect Email Format";
}
try
{
//readline-sync waits for users response and make it synchronised
const prompt = require('readline-sync');
let email = prompt.question(" Please Enter the email for validation");
EmailValidation(email);
}
catch(e)
{
    console.log(e);
}
