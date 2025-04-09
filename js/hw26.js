
//класи

 class Bank {
   static type = "Privat";
   constructor(options) {
     this.summ = options.summ;
     this.month = options.month;
     this.p = options.p;
   }
credit() {
     return console.log("I am Privat");
     }
}

const userBank = new Bank({
    summ: 30000,
    month: 5,
    p: 500,
});
// userBank.credit();
console.log(Bank.type);

 class NewBank extends Bank {
   constructor(options) {
     super(options);
     this.card = options.card;
   }
   credit() {
     super.credit();
     return console.log("I am Aval");
   }
}

const aval = new NewBank({
   summ: 30000,
   month: 5,
   p: 500,
   card: true,
});
console.log(aval.credit());

// get & set

class User {
    constructor(props) {
     this.name = props.name;
   }

   firstName = "";
   lastName = "";
   age = "";
   city = "";

   set name(newName) {
     const nameRow = newName.split(" ");
     this.firstName = nameRow[0];
     this.lastName = nameRow[1];
  }

   get name() {
     return ` First name : ${this.firstName} last name : ${this.lastName}`;
   }
 }

 const Kris = new User({
   name: "Kristina Malitowska",
 });

//  const Dasha = new User({
//    name: "Dasha Happy",
//  });

//  console.log(Dasha); 

// const a = [1, 2, 3];
// console.log(a);

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);

// console.log(b);

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// console.dir(Manager);

// class CoffeMachine {
//   _water = 0;
//   #waterLimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._water = value;
//   }
// }

// let coffeeMachine = new CoffeMachine(100);

// coffeeMachine.waterAmount = -20