//Using setInterval:
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  console.log(5, 10);
   //====================================================================================================
  //Using nested setTimeout:
  function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  console.log(5,10);
//=======================================================================================================================
  let i = 0;
setTimeout(() => console.log(i), 100);
for(let j = 0; j < 100000000; j++) {
  i++;
}
//============================Bank transaction Question=============================================================
function makeAcount() {
 
    const bank = { transactionsDB: [], };
    return function() {
    return bank
        }
}
    let banks = makeAcount()()
    banks.transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
     
    banks.getCustomer = function (id) {
    let cust = this.transactionsDB.find((customer) => customer.customerId === id)
    return cust
    }
    banks.debit = function (id, amount) {
    let cust = this.getCustomer(id)
    let balance = this.getBalance(id)
    if (amount < 0)
    return"please give valid input"
    if (balance < amount)
    return"balance is insuffecent to procced"
    else {
    this.savTransaction(cust, -1 * amount)
    return"The save transaction processed and completed sucessfully"
        }
    }
    banks.getBalance = function (id) {
    let cust = this.getCustomer(id)
    let custBalance = cust.customerTransactions.reduce((sum, item) => sum + item, 0)
    return custBalance;
    }
    banks.credit = function (id, amount) {
    let cust = this.getCustomer(id)
    this.savTransaction(cust, amount)
    return "The save transaction processed and completed sucessfully"
    }
    banks.savTransaction = function (cust, amount) {
        cust.customerTransactions.push(amount)
     
    }
     
    banks.overAllBalance = function () {
    let totalBalance = 0;
    for (let cust of this.transactionsDB) {
            totalBalance += this.getBalance(cust.customerId)
        }
    return totalBalance;
    }
    console.log(banks.debit(2, 10))
    console.log(banks.credit(2, 100))
    console.log(banks.debit(2, 1000))
    console.log(banks.getBalance(2))
    console.log(banks.getBalance(1))
 

 

