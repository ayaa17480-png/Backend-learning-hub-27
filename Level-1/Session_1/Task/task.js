/*
hers's the 
multi-line comment, i made the output all clear for whoever correcting it,
 so u better give me extra MOHSENS🫵🏻 
*/
/*
 * The Great Pizza Disaster of 2026 🍕
 *
 * Ahmed is starving at 2 AM, and Khaled the delivery guy
 * has lost his way because his GPS stopped working.
 * Help Khaled deliver the pizza before it turns into a frisbee!
 */

// ==========================================
// 1️⃣ Values & Variables
// ==========================================

let studentName = 'Ahmed';
const pizzaFlavor = 'peppereoni';


// ==========================================
// 2️⃣ Data Types
// ==========================================

console.log('-------------------Task 2 (Data Types) -------------------')
let hungerLevel = 10;
let isPizzaHot = true;
let deliveryAddress = 'heliopolis';
console.log(typeof hungerLevel)
console.log(typeof isPizzaHot)
console.log(typeof deliveryAddress)

// ==========================================
// 3️⃣ Type Conversion & Coercion
// ==========================================

let orderTotal = '85';
orderTotal = Number(orderTotal) + 15;
let extraMoney = true;
extraMoney += 15;


// ==========================================
// 4️⃣ Basic Operators
// ==========================================

console.log('-------------------Task 4 (Basic Operators) -------------------')
let totalBill = orderTotal + extraMoney;
let minutesWaiting = 45 + 15;
let positivityCheck = false;
if (minutesWaiting > 0) positivityCheck = true;
if (!positivityCheck) console.log('minutes waited are invalid number');
else {
if (minutesWaiting % 2 == 0) console.log('minutes waited are EVEN');
else if (minutesWaiting % 2 == 1) console.log('minutes waited are ODD');
else console.log('minutes waited are ZERO');
}

// ==========================================
// 5️⃣ Operator Precedence
// ==========================================

console.log('-------------------Task 5 (Operator Precendence) -------------------')
let num1 = 2 + 3 * 4 - 1;
// my guess: 2 + 12 - 1 -> 14 - 1 -> 13 
let num2 = (2 + 3) * (4 - 1);
// my guess: (5) * (3) -> 15 
console.log(`number 1 = ${num1}, (with no parens)`)
console.log(`number 2 = ${num2}, (with parens)`)

// ==========================================
// 6️⃣ If / Else Statements
// ==========================================

console.log('-------------------Task 6 (If / Else Statements) -------------------')
if (isPizzaHot && hungerLevel > 7) console.log ('OPEN THE DOOR AND SPRINT');
else if (hungerLevel >= 5 && hungerLevel <= 7) console.log('Walk, you have dignity');
else console.log('Order sushi next time'); 

// ==========================================
// 7️⃣ Statements & Expressions
// ==========================================

console.log('-------------------Task 7 (Statements & Expressions) -------------------')
let x = 5; // statement
if (x == 5) console.log(`x = ${x}`); // the expression itselt is (x == 5)
/* statement's a piece of code that doesn't actually operate stuff, but
an expression does checking like conditions in if-statements or when making calculations
*/
// ==========================================
// 8️⃣ Strings
// ==========================================

console.log('-------------------Task 8 (strings) -------------------')
console.log(pizzaFlavor.toUpperCase())
console.log(`length = ${pizzaFlavor.length}`)
if (pizzaFlavor.includes('pepper')) console.log('you ordered a pepperoni pizza');

// ==========================================
// 9️⃣ Template Literals
// ==========================================

console.log('-------------------Task 9 (Template Literals) -------------------')
console.log('order summary')
console.log(`Stident Name: ${studentName}`)
console.log(`Pizza  Flavor: ${pizzaFlavor}`)
console.log(`Total Cost: ${orderTotal}`)
console.log(`Minutes Waited: ${minutesWaiting}`)
console.log('--------------------------------------')

// ==========================================
// 🔟 Intro to Arrays & Objects
// ==========================================

let toppings = ['mushrooms', 'olives', 'basel'];
let order = {
    custemor: 'Ayah',
    flavor: 'peppreoni',
    isDelivered: false,
}


// ==========================================
// 1️⃣1️⃣ Functions & Arrow Functions
// ==========================================

console.log('-------------------Task 1.1 (Functions & Arrow Functions) -------------------')
// hi yall, it's the single line comment
function calculateTotal(price, tip) {
    return price + tip;
}
let calculateTotalArrow = (price, tip) => {
     return price + tip;
}
console.log(`total bill = ${calculateTotal(orderTotal, extraMoney)}`);
console.log(`total bill = ${calculateTotalArrow(orderTotal, extraMoney)}`);
console.log('--------------------------------------')

// ==========================================
// 1️⃣2️⃣ Loops
// ==========================================

console.log('-------------------Task 1.2 (Loops) -------------------')
let stops = ["Ahmed", "Sara", "Mona", "Tarek"]
for(let i in stops) {
    if (stops[i] == 'Ahmed') {
        console.log(`Delivering to ${stops[i]}...`)
        break
    }
}

// ==========================================
// 1️⃣3️⃣ Comments
// ==========================================




// 🍕 GOOD LUCK! HELP KHALED DELIVER AHMED'S PIZZA! 🍕
