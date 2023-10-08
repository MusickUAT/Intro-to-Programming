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
