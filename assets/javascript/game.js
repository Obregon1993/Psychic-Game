let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins=0;
let loses = 0;
let left=9;
let arrayg=[];
let count=0;
let emptyarray=[];
document.onkeyup=function(){

   let pcguess =letters[Math.floor(Math.random() * letters.length)];
   let userguess= String.fromCharCode(event.keyCode).toLowerCase();
   if(left==0){
loses++;
document.getElementById('loses').innerHTML=loses;
alert("u lost, the pc guess was: "+pcguess);
left=9;
document.getElementById('left').innerHTML=left;

   }else if(left!=0){
       if(pcguess!=userguess){
           left--;
           document.getElementById('left').innerHTML=left;
        arrayg[count]=userguess;
        document.getElementById('arrayg').innerHTML=arrayg;
        count++;
       }else if(pcguess==userguess){
           wins++;
           document.getElementById('wins').innerHTML=wins;
           alert("u won the pc guess was: "+pcguess);
           left=9;
           document.getElementById('left').innerHTML=left;
       }
   }

}



