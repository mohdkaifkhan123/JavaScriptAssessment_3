// Question 5
/* Rewrite the code below to use array destructuring instead of assigning each value to a variable.
let item = ["Egg", 0.25, 12]; 
let name = item[0]; 
let price = item[1]; 
let quantity = item[2]; 
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); console.log();*/

/* Explanation:By using array destructuring, we can directly extract the values from the item array and assign them to the variables name, price, and quantity. 
   This makes the code cleaner and eliminates the need for separate variable assignments. The output will remain the same as before.*/

   let item = ["Egg", 0.25, 12];
   let [name, price, quantity] = item;
   console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); //Output: Item: Egg, Quantity: 12, Price: 0.25



// Qustion 6
/* Using Array Destructuring get all of the names from this Nested Array
   const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
   // Write your code here 
   const [] = moreStudents; 
   console.log(student1, student2, student3, student4, student5);*/

/* Explanation:In this code, the first element 'Chris' is directly assigned to student1. The second element ['Ahmad', 'Antigoni'] is destructured, and its values 'Ahmad' and 'Antigoni' are assigned to student2 and student3, respectively. 
   The same applies to the third element ['Toby', 'Sam'], with 'Toby' assigned to student4 and 'Sam' assigned to student5.
   When we log student1, student2, student3, student4, and student5, you will see the output with all the names from the nested array.*/
   
   const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
   const [student1, [student2, student3], [student4, student5]] = moreStudents; 
   console.log(student1, student2, student3, student4, student5);//Output: Chris Ahmad Antigoni Toby Sam


   
// Question 7
/* Fix the code to make it work.
   let map = new Map(); 
   map.set("key", "value"); 
   let keys = map.keys();
   keys.push("more");*/

/* Explanation:Below given fixed code, we convert the iterator returned by map.keys() into an array using Array.from(), and then we can use the push() method on the keys array to add the "more" key. 
   Now, when we log the keys array, it will show ['key', 'more'].*/
  
   let map = new Map(); 
   map.set("key", "value"); 
   let keys = Array.from(map.keys()); // Convert the iterator to an array
   keys.push("more"); // Now we can use the push method on the array
   console.log(keys); // Output: ['key', 'more'] 
   


