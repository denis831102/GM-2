// class CircleBox{
//     constructor(selector) {
//         this.$el=document.querySelector(selector);
//     }
//     hide () {
//         this.$el.display = 'none';
//     }
    
//     show () {
//         this.$el.display = 'block';
//     }
// }

// class CircleItems extends CircleBox {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size +"px";
//         this.$el.style.borderRadius = "50%";
//         this.$el.style.background = options.color;
//     }
// }
// const  CircleRed = new CircleItems ({
//     selector :"#circleRed",
//     color : " red",
//     size : 50,
// }) ;  
// const  CircleGreen = new CircleItems ({
//     selector :"#circleGreen",
//     color : "green",
//     size : 80,
// }) ; 
// const  CircleBlack = new CircleItems ({
//     selector :"#circleBlack",
//     color : "black",
//     size : 30,
// }) ;


 let Car = function(name, color) {
    this.name = name;
    this.color = color;
}

 Car.prototype.message = function () {
     console.log(`${this.name} is ${this.color} color`);
 };

 const BMW =  new Car ("bmw", "red");
 const opel = new Car ("opel", "white");

 opel.message();
