const backbutton=()=>{
window.location.href='./navbar.html'
}

const signupchange=()=>{
    window.location.href='./signup.html'
}



let logIn = JSON.parse(localStorage.getItem("logIn")) || false;

// if (logIn === true) {
//   alert("Log In Successful");
//   window.location.href = "./navbar.html";
// } else {
  document.getElementById("login_button").addEventListener("submit", signIn);

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  function signIn() {
    event.preventDefault();
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    let flag1 = false;
    let flag2 = false;
    let j;
    let username;
    for (let i = 0; i < userData.length; i++) {
      if (userEmail === userData[i].userEmail) {
        flag1 = true;
        username = userData[i].userFirstName;
        j = i;
        break;
      }
    }

    if (flag1 === false) {
      alert("User not found. Please sign up first.");
      window.location.href = "./signup.html";
    }

    if (userPassword === userData[j].userPassword) {
      flag2 = true;
    }

    if (flag1 && flag2) {
      alert("Log In Successful");
      localStorage.setItem("logIn", JSON.stringify(true));
      localStorage.setItem("username", JSON.stringify(username));
      window.location.href = "./navbar.html";
    } else if (flag1 && flag2 === false) {
      alert("Wrong Password Entered");
      document.getElementById("password").value = "";
    }
  }


// document.querySelector("body > img").addEventListener("click", function () {
//   window.location.href = "./";
// });
