let a= document.getElementById("audio")
let img=document.querySelector(".img-box img")
let title=document.querySelector(".outer marquee")
let progress=document.getElementById("progress")
let current=document.getElementById("current")
let total=document.getElementById("total")
//range

arr=[
    {
        title:"Afgan jalebi",
        song:"./song/song1.mp3",
        img:"./images/afgaan.jpg"


    },
    {
 title:"Karke Sola Singar",
        song:"./song/song2.mp3",
        img:"./images/talwinder.jpg"

    },
    {
 title:"Pal Ek Pal",
        song:"./song/song3.mp3",
        img:"./images/pal pal.jpg"

    },
    {
 title:"Bairan Bairan",
        song:"./song/bairan.mp3",
        img:"./images/bairan.jpg"

    },
    {
         title:"Aam Jahe Munde | Punjabi Vibes",
        song:"./song/aamjahe.mp3",
        img:"./images/aamjahe.jpg"

    },
    {

        title:"Azul (Randhawa) | Punjabi Vibes",
        song:"./song/Azul.mp3",
        img:"./images/azul.jpg"

    },

{
      title:"Dharandhar - Official Track",
        song:"./song/Dhurandhar.mp3",
      img:"./images/dhurandhar.jpg"

},
{
      title:"Filhall - B Praak ",
        song:"./song/filhal.mp3",
      img:"./images/filhal.jpg"

},
{
      title:"Made In India",
        song:"./song/madein.mp3",
      img:"./images/madein.jpg"

},
{
      title:"Parindey",
        song:"./song/parinde.mp3",
      img:"./images/parinde.jpg"

},
{
      title:"Gehra HUa",
        song:"./song/gehrahua.mp3",
      img:"./images/gehra.jpg"

},

]
function aplay(){

    //alert("heyy")
    a.play();
    document.querySelector(".btn-action .fa-play").style.display="none"
     document.querySelector(".btn-action .fa-pause").style.display="block"
}
function apause(){
    a.pause();
     document.querySelector(".btn-action .fa-play").style.display="block"
     document.querySelector(".btn-action .fa-pause").style.display="none"

}
 let i=0;
function nxt(){
 i=i+1;
if(i==arr.length){
 i=0;   
}
a.src= arr[i].song//a upar wala  variable se audio select ,aur src song ka attitribute yani property hai access ke liye us song ko src ,.song mtlb jo i par song hai bo
aplay();
title.innerHTML=arr[i].title
img.src=arr[i].img
}

function pre(){
   i=i-1;
   if(i<0){
    i=arr.length-1// last song
   }
   a.src=arr[i].song
    title.innerHTML=arr[i].title;
   img.src=arr[i].img;

   aplay();
   

}





///music range
a.onloadedmetadata=function(){
    total.innerHTML=
    Math.floor(a.duration/60)+":"+
    Math.floor(a.duration%60)
}

a.ontimeupdate=function(){

    current.innerHTML=
    Math.floor(a.currentTime/60)+":"+
    Math.floor(a.currentTime%60)

    progress.value=
    (a.currentTime/a.duration)*100
}

progress.oninput=function(){
    a.currentTime=
    (progress.value/100)*a.duration
}