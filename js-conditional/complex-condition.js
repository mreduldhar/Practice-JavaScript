// Task 1: Smart Login System
const username = "admin";
const password = 1234;
const isBlocked = true;

if(isBlocked === false){
    console.log("Account Blocked")
}
else if(username === "admin" && password === 1234){
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}


// Task 2: E-commerce Free Delivery
const orderAmount = 400;
const isPrimeMember = true;

if(orderAmount >= 1000 || (orderAmount >= 500 && isPrimeMember)){
    console.log("You got Free Delivery")
}else{
    console.log("Delivery charge applied")
}

// Task 3: Traffic Rule (Advanced)
const signal = "red"
const hasEmergencyPass = false

if(signal === "red"){
    if(hasEmergencyPass){
        console.log("GO")
    }else{
        console.log("Stop")
    }
}else if(signal === "yellow"){
    console.log("Slow")
}else if(signal === "green"){
    console.log("GO")
}else{
    console.log("Invalid Signal")
}

// Task 6 (Tricky): Electricity Bill + Tax
/**Input:
unit
isCommercial (true/false)
Rules:
commercial হলে total bill এর উপর 15% extra tax
*/


const unit = 102;
const isCommercial = true;

if(unit <= 50){
    if(isCommercial){
        bill = unit * 5;
        totalBill = bill + (bill * 15/100);
    }else{
        totalBill = unit * 5;
    }
}
else if(unit <= 100){
    if(isCommercial){
        bill = (50 * 5) + ((unit - 50) * 7);
        totalBill = bill + (bill * 15/100);
    }else{
        totalBill = (50 * 5) + ((unit - 50) * 7);
    }
}else{
    if(isCommercial){
        bill = (50 * 5) + (50 * 7) + ((unit - 100) * 10);
        totalBill = bill + (bill * 15/100);
    }else{
        totalBill = (50 * 5) + (50 * 7) + ((unit - 100) * 10);
    }
}
console.log("Total Bill: ", totalBill)


// Task 7: discount at shop
let price = 3000;

if(price >= 5000){
    // 20% discount
    discount = price * 20/100;
    payAmount = price - discount;
    console.log("You have to pay " + payAmount + " Taka")
}
else if(price >= 2500){
    // 10% discount
    discount = price * 10/100;
    payAmount = price - discount;
    console.log("You have to pay " + payAmount + " Taka")
}else{
    console.log("You have to pay ", price + " Taka")
}