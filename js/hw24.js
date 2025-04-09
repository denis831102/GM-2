//Функції
 /* function  shoWMessage(name,sity) {
    console.log("Helo, my name is " + name + " I am from " + sity);
 }

 shoWMessage("Nata", "Kuiv");
 shoWMessage("Oly", "Lviv");*/

// 1.1
/* function checkAge(age) {
   if (age > 18) {
      return true;
   }  else {
      return confirm('Батьки дозволили ?');
   }
}
checkAge();
 
let age2 = prompt("Скільки вам років ?", 18);

let welcome = ( age2 >= 18) ?
   function() {alert ("Вітаю");}:
   function() {alert ("Батьки дозволили ?");};
welcome();
*/


 //2
 let min = function( a, b ) {
   if ( a < b ) {
     console.log(a);
   } else {
     console.log(b);
   }
 }
min(4,6);

function min2(c, d) {
   return c < d ? c : d;
 }
 min2(6,8);
//3
function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
 }
ask(
   "Ви згодні?",
   function() { alert("Ви погодились."); },
   function() { alert("Ви скасували виконання."); }
 );
 


 