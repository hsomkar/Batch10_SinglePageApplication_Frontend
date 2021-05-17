const uname = [
  "omkar@gmail.com",
  "vedith@gmail.com",
  "sachin@gmail.com",
  "naresh@gmail.com",
  "mahesh@gmail.com",
];
const pass = [
  "omkar@123",
  "vedith@123",
  "sachin@123",
  "naresh@123",
  "mahesh@123",
];
function LoginValidate() {
  const userName = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (userName == "") {
    document.getElementById("loginEmail").className = "form-control is-invalid";
    return false;
  } else if (password == "") {
    document.getElementById("loginPassword").className =
      "form-control is-invalid";
    return false;
  } else {
    for (let index = 0; index < uname.length; index++) {
      if (userName == uname[index] && password == pass[index]) {
        return true;
      }
    }
    document.getElementById("loginEmail").className = "form-control is-invalid";
    document.getElementById("loginPassword").className =
      "form-control is-invalid";
    return false;
  }
}

function regValidate() {
  const empDetails = {
    eName: document.getElementById("inputName").value.trim(),
    empId: document.getElementById("inputId").value.trim(),
    email: document.getElementById("inputEmail").value.trim(),
    gender: (function () {
      var ele = document.getElementsByName("btnradio");
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          if (ele[i].checked) return ele[i].value;
        }
      }
      return "";
    })(),
    password: document.getElementById("inputPassword").value.trim(),
    cofirmPassword: document.getElementById("confirmPassword").value.trim(),
  };
  for (const prop in empDetails) {
    if (`${empDetails[prop]}` == "") {
      return false;
    }
  }
  // empid
  {
    var regex = /ty-[1-999]/;
    if (!regex.test(empDetails.empId)) {
      document.getElementById("inputId").className = "form-control is-invalid";
      return false;
    }
  }
  // email
  {
    regex =
      /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (!regex.test(empDetails.email)) {
      document.getElementById("inputEmail").className =
        "form-control is-invalid";
      return false;
    }
  }
  // password
  {
    regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    if (!regex.test(empDetails.password)) {
      document.getElementById("inputPassword").className =
        "form-control is-invalid";
      return false;
    }
  }
  // confirm password
  {
    if (empDetails.password != empDetails.cofirmPassword) {
      document.getElementById("confirmPassword").className =
        "form-control is-invalid";
      return false;
    }
  }
  // store in locale storage
  localStorage.setItem("empDetails", JSON.stringify(empDetails));
  // Retrieve the object from storage
  let retrievedObject = localStorage.getItem("empDetails");
  console.log("empDetails: ", JSON.parse(empDetails));
  return true;
}
// Toast
$(document).ready(function () {
    $(".toast").toast("show");
  });
