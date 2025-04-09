//створити початковий клас Abonent,
//де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні
class Abonent {
  #name = " ";
  number = " ";

  constructor(props) {
    this.#name = props.name;
    this.number = props.number;
  }

  set fname(str) {
    if (Number(str)) {
      console.log("ERRor");
    } else {
      this.#name = str;
    }
  }
  set fnumber(num) {
    if (Number(num)) {
      this.number = num;
    } else {
      alert("НЕ вірни формат телефону");
    }
  }
  set fabon(abc) {
    if (Number(abc.name)) {
      console.log("ERRor");
    } else {
      this.#name = abc.name;
    }
    if (Number(abc.number)) {
      this.number = abc.number;
    } else {
      alert("НЕ вірни формат телефону");
    }
  }
  //    get Fname() {
  //      return (`Name : ${this.name} Number : `);
  //    }
}

const Kris = new Abonent({
  name: "Kristina",
  number: "0954535282",
});
console.log(Kris);

Kris.fname = "NewName";

console.log(Kris);

Kris.fname = "456";
console.log(Kris);

Kris.fabon = {
  name: "Ksenia",
  number: "fgcnbcbv",
};
console.log(Kris);

//Kris.#name = "456";
//console.log(Kris);

//  class MyClass{
//     constructor(s){
//         this.name=s;
//     }
//     set text(s){  //сеттер
//       this.name=s;
//     }
//     get text(){  //гетер
//       return this.name;
//     }
//  }

//  var ob = new MyClass("js");
//  alert( ob.text ); //"js"
//  ob.text = "Javascript";
