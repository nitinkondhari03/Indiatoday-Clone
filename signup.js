const backbutton=()=>{
    window.location.href='./navbar.html'
    }

const signinf=()=>{
    window.location.href='./signin.html'
}



// document.getElementById("body > img").addEventListener("click", function () {
//     window.location.href = "./signin.html";
//   });
  
  localStorage.setItem("logIn", JSON.stringify(false));
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  
  function signUp(){
    event.preventDefault();
    let obj = {
      userEmail: document.querySelector("#email").value,
      userFirstName: document.querySelector("#fname").value,
      userPassword: document.querySelector("#password").value,
    };
  
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Sign up successful. Please sign in to continue");
    window.location.href = "./signin.html";
  }