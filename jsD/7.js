var flag = true;
function change_bm() {
    if (flag){
        document.querySelector("#foto").src="./image/2024.0.jpg";
        document.querySelector("#bot").style.background="red";
       //flag =false;
    } else {
        document.querySelector("#foto").src="./image/2014.0.jpg";
        document.querySelector("#bot").style.width="70%";
        //flag =true;
    }
    flag = !flag;
}
var el_input = document.querySelector("#bot2"),
    el_image = document.querySelector("#foto");
el_input.addEventListener("click", function() {
    var anime = el_image.animate([{transform : "scale(1)", color :"#000000"},
                                  {transform : "scale(4)", color :"#0000ff"}],
                                  4000);
    anime.play();                             
});
el_image.addEventListener("click",function(){
    var anime = this.animate([{transform : "rotate(0rad)"},
                              {transform : "rotate(6.3rad)"}],
                                4000);
    anime.play();                             
});


