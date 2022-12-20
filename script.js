//Onload Function
 let preloader= document.getElementById('preloader');
 window.addEventListener('load', function(){
     preloader.style.display= "none"
 })

 //Nav & H1 Animations Function
let sectionName= '';
function TitlesLiAnimation(){
      //Add Titles animation
      let titles= document.querySelectorAll("h1");
   for(i=0; i< titles.length; i++){
      let top= titles[i].getBoundingClientRect().top,
            height= window.innerHeight,
            elementVisible= 550;
            if(top < height - elementVisible){
               titles[i].classList.add("active");
               sectionName= titles[i].parentNode.getAttribute('id');
            }
            else{
               titles[i].classList.remove("active")
            }
   }
   //Add Border top to each li if its section showed 
   let navLi=document.querySelectorAll('li');
   for(i=0;i< navLi.length; i++){
      let liLabel= navLi[i].getAttribute('id');
         if(liLabel=== `${sectionName}li`){
            navLi[i].classList.add('selected')
         }
         else{
            navLi[i].classList.remove('selected')
         }
   }
}
window.addEventListener("scroll", TitlesLiAnimation);
