let count=0
function myFunction() {
   count++
   var x = document.getElementById("myDIV");
   if(count%2==1){
      x.style.display="block"
   }else{
      x.style.display="none"
   }
 }
let count1=0
 const darkmode=()=>{
    count++
    var x = document.querySelector("body");
   if(count%2==1){
    x.style.backgroundColor="white"
   }else{
    x.style.background="rgb(71, 71, 71)"
   }
 }


// document.querySelector("#logo").addEventListener("click", function () {
//     window.location.href = "./";
//   });
  
  let login = JSON.parse(localStorage.getItem("logIn"));
  let username = JSON.parse(localStorage.getItem("username"));
  
  if (login) {
    let user = document.getElementById("user");
    user.innerText = username;
    let log_out=document.getElementById('log-out')
    log_out.style.height="30px"
    log_out.style.marginTop="5px"

  }
  document.getElementById("log-out").addEventListener("click", function () {
    localStorage.setItem("logIn", JSON.stringify(false));
    window.location.href = "./";
  });



  const logindf=()=>{
    window.location.href='./signin.html'
}

const livetv=()=>{
  window.location.href='./livetv.html'
}
  
  const home=()=>{
    window.location.href='./index.html'
}


const MyFeed=()=>{
  window.location.href='./My_Feed.html'
}

const Business=()=>{
  window.location.href='./Business.html'
}

const world=()=>{
  window.location.href='./world.html'
}

const app=()=>{
  window.location.href='./App.html'
}

const indi=()=>{
  window.location.href='./india.html'
}



