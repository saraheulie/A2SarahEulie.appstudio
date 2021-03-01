
//set variables
let name = ""
name = prompt("Enter your name.")

let message = ["Wear a warm coat, hat, scarf and gloves.", 
  "Wear a warm coat but you won't need a hat, scarf or gloves.", 
  "Wear your warmest coat, a warm hat, a scarf, and warm gloves.", 
  "Wear a warm coat, hat and gloves. Maybe a scarf too."];
  
// Switch statement
state = prompt("Enter the capitalized abbreviation of your state.")
temp = prompt("Enter the current temperature.")
switch (true) {
case (state == "NE" && temp < 32):
  console.log(`${name}, ${message[0]}`)
  break
case (state == "NE" && (temp >= 32 && temp <= 50)):
  console.log(`${name}, ${message[1]}`)
  break
case (state == "FL" && (temp >= 32 && temp <= 50)):
  console.log(`${name}, ${message[2]}`)
  break
case (state == "FL" && (temp >= 50 && temp <= 70)):
  console.log(`${name}, ${message[3]}`)
  break
default:
  console.log(`${name}, I have no recommendation for you!`)
  break
}
*/  
  
  
  