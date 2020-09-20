const mainMenu = {
    "Chicken tacos": 5,
    "Chicken parmesean": 11,
    "Shrimp and fries": 12,
    "Chicken and waffles": 9
}
const entrees = {
    "Onion Rings": 3,
    "Breadsticks": 2,
    "Shrimp Cocktail": 5
}


const commentVault = ["Sure! Anything else?", "Would you like to add anything else?"];
let randResponse = Math.floor(Math.random() * commentVault.length);
console.log(randResponse[commentVault]);


// Print main menu if True, don't if customerSeeMainMenu is false
let customerSeeMainMenu = 'False';
if (customerSeeMainMenu === 'True'){
    console.log(mainMenu)
}
//Greet customer and make a response based on the order (chosen randomly)
let customerOrder = prompt("Hi what can I get you?")
console.log(customerOrder);
if (customerOrder){
    let response = confirm(commentVault[randResponse]);
    console.log(response)
} 

//Create an empty list to store the value for each order:
let customerTotal = [];
//Push each customer order to the list, based on the result. 
//Start with adding order from main menu to list
if (customerOrder){
    customerTotal.push(mainMenu[customerOrder]);
}

 //Customer chooses 2 entrees
 //Create an array of entrees based on entrees object
 const entreeOrderList = Object.keys(entrees);
 console.log(entreeOrderList);

 //Use for loop to select random two orders, if the list is longer than three, set i to list.length - 2(to determine what index to begin counting from)
for (let i=1; i<entreeOrderList.length; i++){
  let twoOrders = Math.floor(Math.random() * entreeOrderList.length);
  console.log(confirm(entreeOrderList[twoOrders])); 
//Add both side order options to customerTotal
if (twoOrders){
customerTotal.push(entrees[entreeOrderList[twoOrders]])
customerTotal.push(entrees[entreeOrderList[twoOrders]])
}
}

let reducer = (accumulator, currentValue) => accumulator + currentValue
let finalTotal = customerTotal.reduce(reducer);
let finalResponse = confirm(`Great! Your total is ${finalTotal}`)



