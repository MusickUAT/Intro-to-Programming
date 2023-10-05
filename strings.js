function strings()
{

    var splitString = str1.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");

if (str1 == joinString)
{
    document.getElementById("updated string").innerHTML = "This is a palindrome"

}
else
{
    document.getElementById("updated string").innerHTML = "This is NOT a palindrome"
}

}

function CheckInput()
{
    //<!--These two lines of code are to create the values of first and last name-->
    var FirstName = document.getElementById("fname").value;
    var LastName = document.getElementById("lname").value;
    //<!--This line of code is to add first and last name together while spacing them-->
    var allName = FirstName + "" + LastName;
    //<!--This line of code adds the first name, last name, and space and gives it a value-->
    var lenName = allName.length;
    //<!--This line of code gives the zip code value in how many numbers it has-->
    var zip = document.getElementById("zipCode").value;

    //<!--These lines of code will tell the user if their name and zip code input are valid-->
    if (lenName >20)
    {
        document.getElementById("loginStatus").innerHTML = "Name too long";
    }
    else if (zip.length !=5)
    {
        document.getElementById("loginStatus").innerHTML = "Zip code invalid";
    }
    else
    {
        document.getElementById("loginStatus").innerHTML = "The secret message is: secret message";
    }
}
