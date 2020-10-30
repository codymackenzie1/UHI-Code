/* Cody Mackenzie, 19010208. Min Max Task, 30/10/20 */

//Declaring the variables
var numberList = [5, 6, 12, 45, 98];
var minimum = Math.min(5, 6, 12, 45, 98);
var maximum = Math.max(5, 6, 12, 45, 98);

//Starting a for loop to display each of the numbers in the array.
for (i = 0; i <numberList.length; i++) {
    
    //Displaying each number in the array
    document.write("Number " + (i+1) + " in the array is " + numberList[i] + "<br>");

}

//Displaying the minimum number.
document.write("The minimum number in the array is " + minimum + "<br>");

//Displaying the maximum number.
document.write("The maximum number in the array is " + maximum + "<br>");
