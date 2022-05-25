var user = {
    email: "user@gmail.com",
    firstName: "first",
    lastName: "last"
}
// to access to the email property, two ways:
console.log(user.email);
console.log(user["email"]);

/*----------------------------*/
var myObj = { 
    color: "orange",
    shape: "sphere",
    type: "food",
    eat: function() { 
        return "yummy" 
    }
  };
  
  myObj.eat(); // method
  myObj.color; // property

/*----------------------------*/
var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

/*----------------------------*/ (ACCOUNT BALANCE)
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function accountSummaryPrint(){
            return `Welcome!\nYour balance is currently $1000 and your interest rate is 1%.` 
    }
};
console.log(savingsAccount.printAccountSummary());

/*----------------------------*/ (FACEBOOK PROFILE)
var facebookProfile = {
    name: "Clémence",
    friends: 5,
    messages: [],
    postMessage: function(message){
        return facebookProfile.messages.push(message)
    },
    deleteMessage: function(index){
        return facebookProfile.messages.splice(index,1)
    },
    addFriend: function(){
        return facebookProfile.friends += 1
    },
    removeFriend: function(){
        return facebookProfile.friends -= 1
    }
}