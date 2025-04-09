  //lesson 23
   /* let a=5;
  while (a<8) {
    a++;
    console.log("a=",a)
  }
  let b=3;
  while (b) console.log("b=",b--);
   
  for (let c=0;c<3;c++) {
    console.log("c=",c);
  }
let sum=0;
while (true) {
    let value= +prompt("Введіть число");
    if (!value) break
    sum += value
}
console.log("Sum=",sum);

for (let i=0;i<10;i++) {
    if (i%2===0) continue
    console.log(i);
}
let arr=["AP","Or","Pl"];
console.log(arr[2]);
arr[2]="Lem";
console.log(arr[2]);
arr[3]="chery";
  console.log(arr.length);
arr.push("tomato");//добавление в конец массива элемента
  console.log(arr);
arr.pop(); //удаление последнего лемента в массиве
  console.log(arr);
arr.unshift("potato");//добавление в наало массива элемента
  console.log(arr);
arr.shift();//удаление первого лемента в массиве//
//метод перебора массива  
for (let i=0; i < arr.length; i++ ){
    console.log(arr[i]);
  }
for ( let Marr of arr){
    console.log(Marr);
  }
for (let key in arr) {
     console.log(arr[key]);
    }
  */
 //Homework23
 // #1
 const fruts=[
  {id:0, name:"Apple"},
  {id:1, name:"Tomat"},
  {id:2, name:"Chery"},
  {id:3, name:"Orange"},
 ];
console.log(fruts.find((item) => item.id === 2));
console.log(fruts.filter((item) => item.id < 2 ));
 let frutsN=[];
 for (let j=0; j<fruts.length; j++ ){
      frutsN.push(fruts[j].name);
 }
console.log(frutsN);

let frutsN2=fruts.slice(1,3);
console.log(frutsN2);
/*
 // # 2
 for ( let i=2; i<=10; i++)  {
    if (i%2!==0) continue
    console.log(i);
 }
 //# 3
 for (let c=0; c<5; c++) {
    console.log(`цифра ${c}`);
}
let b=0;
while (b<5) {
    console.log("b=", b++);
}
//# 4
let val = 0 ;
while (true) {
  val = prompt("введіть число > 100");
  if (!val || Number(val) > 100) break;
    //numb = val;
}
 console.log(val);
 */

// #5
const girls=[
  {age:23, name:"Оля"},
  {age:29, name:"Аня"},
  {age:10, name:"Юля"},
  {age:20, name:"Катя"},
 ];

  
 let sumag2 = girls.reduce((sum, item) => sum + item.age,0d)/girls.length;
 console.log(sumag2);
 let sumag=0;
for (let g=0; g<girls.length; g++){
  sumag +=girls[g].age;
 }
console.log(sumag/girls.length);


