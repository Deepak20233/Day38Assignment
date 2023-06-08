//1)Functions
let temp1 = prompt("Enter Temprature");
let temp2 = prompt("Enter Temprature");
function degreetoFarenheit(temp){
    return (temp*(9/5))+32;
}
console.log(degreetoFarenheit(temp1));
function farenheittoDegree(temp){
    return (temp-32)*(5/9);
}
console.log(farenheittoDegree(temp2));

//2)
function Palindrome(){
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}
