// // NAVBAR 
// import { navbar } from "../components/navbar.js";

// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = navbar();

// // FOOTER 
// import { footer } from "../components/footer.js";
// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();

// ---------------------------------------------------------------


let flag=false;

let main = document.getElementById("checkbox").querySelectorAll(".category");
for (let i=0; i<main.length; i++){
        
    
        main[i].onclick=function(){
            let image = document.getElementsByClassName("img")[i];
            // flag = true;
        
            if(flag === false){
        
                image.style.visibility="visible"
                flag = true;
                document.getElementById("btn").innerHTML = "SAVE";
                alert("Got Selected");
            
                
            }
            else{
                image.style.visibility="hidden"
                flag = false;
                 document.getElementById("btn").addEventListener("click", () => {
                   
                    // alert("Unselected")

                })
              
            }
        }
}

    let b =document.getElementById("btn").addEventListener("click", () =>{
            alert("Recommendation Choosed successfully");
    });
        


