/* a function that returns the sum of two numbers

Given two numbers
Add number 1 & number 2 together and returns the result


START
Given two numbers
READ the two numbers
  number 1 + number 2
PRINT result
END */

/*
a function that takes an array of strings, and returns a string that is all those strings concatenated together


Given an array
declare empty array variable to contain the concatenated strings
Use join to join the strings in the array together into a string
return the variable created earlier


START
Given array
SET new variable to contain the data I want
  Use join to join the strings in the array together and pass to the new variable
PRINT the new variable
END */

/* a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

Given an array of integers
Declare a new variable that is an empty array
Iterate through the array
Pass every other element in the array to the new empty array
Return the previously empty array 


START
Given array of integers
SET newArray = []
WHILE index < array.length
  GET every other element in array
  element pushed to newArray
PRINT newArray
END */

/* a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

Given a string and specific character
Declare variable to store index
Find the 3rd iteration of the character in the string and return its index
If the character doesn't appear 3 times, return null


START
Given string and specified character to search
SET new variable that is an empty string; this will store the index
IF 3rd character is found in string, return its index
  ELSE return null
END */

/* a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.

Given 2 arrays of numbers
Declare new variables: empty array
1st array elements will be assigned as even indexes
2nd array elements will be assigned as odd indexes
Return previously empty array

START
Given 2 arrays
SET new empty array
IF index is even, get element from 1st array
  ELSE IF index is odd, get element from 2nd array
PRINT previously empty array
END */