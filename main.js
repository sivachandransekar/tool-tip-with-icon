var but=document.querySelector("a");
var icon=document.querySelector("i");
console.log(icon);
console.log(but);


    //console.log(ques);
    but.addEventListener("click",function(){
        if(but.nextElementSibling.classList.contains("para")){
            but.nextElementSibling.classList.remove("para");              
        }


        else{
            but.nextElementSibling.classList.add("para");
        }

    })

    
    icon.addEventListener("click",function(e){
       
            e.target.parentNode.classList.add("para");
        
    })