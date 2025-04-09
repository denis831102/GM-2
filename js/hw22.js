//1
let x=-3;
if (x>0){
console.log(true)
}else {
console.log(false)
}
//2
let y="qwerty" 
if (y=="test"){


    console.log(true)
} else{
    console.log(false)
}
console.log(y=="test");
//3
let z=13;
if (z<10){
    console.log(z-5)
}else{
    console.log(z+5)
}
let v=1
v<10 ? console.log(v-5) : console.log(v+5);
//4.1
/*let month=(Math.floor(Math.random()*((12-1)+1)));
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break ; 
    case 3:
        console.log("March");
        break ;
    case 4:
        console.log("April");
        break ; 
    case 5:
        console.log("May");
        break ;
    case 6:
        console.log("June");
        break ;
    case 7:
        console.log("July");
        break ;
    case 8:
        console.log("Avgust");
        break ;
    case 9:
        console.log("Sptember");
        break ;
    case 10:
          console.log("Octber");
          break ;
    case 11:
        console.log("November");
        break ;
    case 12:
        console.log("Desember");
        break ;
    default : console.log("Year")
            
}
//4.2
let month2=prompt("Ведіть число від 1 до 12");
//console.log(typeof month2);
console.log(Number(month2));
switch (Number(month2)){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break ; 
    case 3:
        console.log("March");
        break ;
    case 4:
        console.log("April");
        break ; 
    case 5:
        console.log("May");
        break ;
    case 6:
        console.log("June");
        break ;
    case 7:
        console.log("July");
        break ;
    case 8:
        console.log("Avgust");
        break ;
    case 9:
        console.log("Sptember");
        break ;
    case 10:
          console.log("Octber");
          break ;
    case 11:
        console.log("November");
        break ;
    case 12:
        console.log("Desember");
        break ;
    default : console.log("Not Year")
}*/
//5
let sum=prompt("Введіть тризначне число");
console.log(sum);
if (sum == null || sum.length == 0 ){
    alert("Вам не цікаве це питання")
} 
else {
console.log(Number(sum[0])+Number(sum[1])+Number(sum[2]))
}
/*(sum[1])+Number(sum[2]));
//console.log(sum.substring(1,2));
//console.log(sum.substr(1,1));/
//console.log(sum[1]);
*/
