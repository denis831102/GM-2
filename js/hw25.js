///1
const student = {
    name: "Ksenia",
    spec: "dizajn",
    srball: 9,
   // lessonnull: 5,
    logInfo: function (lessonnull) {
        console.group(`${name} info №1:`);
        console.log(`Name is : ${this.name}`);
        console.log(`Spec is : ${this.spec}`);
        console.log(`Ball is : ${this.srball}`);
        console.log(`LessonNull is : ${lessonnull}`);
        console.groupEnd();
    },
};
student.logInfo(10);
const user = {
    name :"Oly",
    spec :"developer",
    srball: 8.5,
   // lessonnull: 2,
};
student.logInfo.bind(user,2)();
const user2 = {
    name :"Nata",
    spec :"doctor",
    srball: 9.5,
   // lessonnull: 4,
};
student.logInfo.call(user2,4);
const user3 = {
    name :"Anna",
    spec :"lauwer",
    srball: 8,
   // lessonnull: 4,
};
student.logInfo.apply(user3,[6]);
///2
document.querySelector("#but1").addEventListener("click", function (){
    alert('HTML-стандартизована мова розмітки документів для перегляду вебсторінок у браузері.')   
});
document.querySelector("#but2").addEventListener("click", function (){
    alert('css-спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.')
});
///3
 const buyer ={
    name: "banan",
    price: 30,
    cost : function (weight){
        console.group("exersis 2:");
        console.log(this.name);
        console.log("cost is : " + Number(weight) * Number(this.price));
        console.groupEnd();
    }
 };
 buyer.cost(4.5);
 const buyer2 ={
    name: "cherry",
    price: 58,
 };
 buyer.cost.bind(buyer2, 1.3)();
 const buyer3 ={
    name: "orange",
    price: 89,
 };
 buyer.cost.bind(buyer3, 3.4)();


 



