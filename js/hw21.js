//1
let nam="Ivan";
let city=`${nam}`;
console.log(city);
//2
let name="Olga";
console.log(`Привіт ${1}`);//Привіт 1
console.log(`Привіт ${name}`);// Привіт Olga
console.log(`Привіт ${"name"}`); // Привіт name
//3
let a="5";
let b="13cvb";
let c="12.sdfgghh";
console.log(typeof a);//string
console.log(typeof b);//string
console.log(typeof c);//string
//4
console.log((0.1*10+0.2*10)/10);// 0.3
//5
console.log(Math.max(20,10,50,40));//50
//6
console.log(Math.random()*((4-2)+2));
// 7
const message="Welcome to Bahamast";
console.log(message.length);//19
//8
console.log(message.toLowerCase());//welcome to bahamast
console.log(message.toUpperCase());//WELCOME TO BAHAMAST
console.log(message.indexOf("t"));//8
console.log(message.includes("mast"));//true
console.log(message.includes("Mast"));//false--усі методі строк уствительні к регистру
console.log(message.includes("hello"));//false
//9 об*єкти
let girl = {};
girl.name="Jenia";
girl.city="Kuiv";
girl.age= 41;
console.log(girl);//{name: 'Jenia', age: 41, city: 'Kuiv'}
delete girl.city;
console.log(girl);//{name: 'Jenia', age: 41}
girl["like flowers"]=true;
console.log(girl); //{name: 'Jenia', age: 41, like flowers: true}
// цикл For....in для перебору всіх властивостей
for (key in girl){
   console.log(key);//name,age,like flowers
   console.log(girl[key]);
}


