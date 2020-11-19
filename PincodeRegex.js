//uc1 pincode validation for  6 digit number
//uc2 it wont allow special character at the beigining 
let pincodeRegex=RegExp("[0-9]{6}");
function PincodeValidation(pincode)
{
    if(pincodeRegex.test(pincode))
    {
        console.log(pincode +"  is in valid format");
    }
    else throw "Incorect Pincode Format";
}
try
{
//readline-sync waits for users response and make it synchronised
const prompt = require('readline-sync');
let pincode = prompt.question(" Please Enter the pincode for validation");
PincodeValidation(pincode);
}
catch(e)
{
    console.log(e);
}