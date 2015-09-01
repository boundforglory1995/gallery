window.addEventListener("load",function(){
var counter = 0;
if(counter == 0 ){
	document.getElementById("prev").style.visibility="hidden";
}

   var srcArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];

prev.onclick = function(){
        document.getElementById("img").src = srcArray[--counter];
        if(counter <1){
        	document.getElementById("prev").style.visibility="hidden";
        }
    }
next.onclick = function(){
        document.getElementById("img").src = srcArray[++counter];
        if(counter >0){

 document.getElementById('prev').style.visibility = 'visible';

        }else if(counter ==2){
             document.getElementById('next').style.visibility = 'hidden';
        }
    }


});