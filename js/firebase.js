
  // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
 // apiKey: "AIzaSyB8LzvQPVKWRgHDRN6md9B5GqLJlhCtgdo",
 // authDomain: "fir-5e4d5.firebaseapp.com",
 // projectId: "fir-5e4d5",
  //storageBucket: "fir-5e4d5.appspot.com",
  //messagingSenderId: "573805974915",
 // appId: "1:573805974915:web:74339a1ae4588b8a88d2b6",
 // measurementId: "G-W76HWHDW08"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("mobileNumber");
  const count = firebase.database().ref("count");
  const info = firebase.database().ref("info");
  const infoColor = firebase.database().ref("infoColor");
  const payButtonText = firebase.database().ref("payButtonText");
  
  count.on("value", (snapshot) => {
    let countValue = snapshot.val();
    if (countValue < 1) {
      document.getElementById("paymentSubmitButton").disabled = true;
      document.getElementById("paymentSubmitButton").style.backgroundColor = "grey";
    }
    return;
  });
  
  info.on("value", (snapshot) => {
    let infoValue = snapshot.val();
    if (infoValue) {
      document.getElementById("infoText").innerText = infoValue;
    }
  });
  
  infoColor.on("value", (snapshot) => {
    let infoColorValue = snapshot.val();
    if (infoColorValue) {
      document.getElementById("infoText").style.color = infoColorValue;
    }
  });
  
  payButtonText.on("value", (snapshot) => {
    let payButtonValue = snapshot.val();
    if (payButtonValue) {
      document.getElementById("paymentSubmitButton").innerText = payButtonValue;
    }
  });
  
  function callBasicDetailsCount() {
    count.set(firebase.database.ServerValue.increment(-1));
  }
  
  
  function callHomePage() {
    window.location = "index.html"
  }
  
  function callPlanPage() {
    window.location = "spiaon.html";
  }
  
  var paymentLink = "https://www.instamojo.com/@Spiaon_/l21632e99ffc64ee18246657425f90a67/";
  
  checkboxColorChange("type2");
  
  function checkboxColorChange(classColor) {
    if (classColor == "type1") {
      document.getElementById("type1").style.backgroundColor = "#FFFFB4";
      document.getElementById("type2").style.backgroundColor = "#ffffff";
      document.getElementById("type3").style.backgroundColor = "#ffffff";
      document.getElementById("type1border").style.border = "2px solid #E5C26C";
      document.getElementById("type2border").style.border = "1px solid #959393";
      document.getElementById("type3border").style.border = "1px solid #959393";
      document.getElementById("type1").style.border= "0";
      document.getElementById("type2").style.borderBlockColor = "#959393";
      document.getElementById("type3").style.borderBlockColor = "#959393";
      document.getElementById("type1").style.width = "100%";
      document.getElementById("type2").style.width = "90%";
      document.getElementById("type3").style.width = "90%";
  
      // document.getElementById("planNoOfMonth").innerText = "2";
      // document.getElementById("planActualFee").innerText = "Rs. 8,906";
      // document.getElementById("planAdditionalSavingsPercentage").innerText = "Additional Savings (5%)";
      // document.getElementById("planAdditionalSavings").innerText = "Rs. -445";
      // document.getElementById("planGST").innerText = "Rs. 1,523";
      // document.getElementById("planTotal").innerText = "Rs. 9,984";
  
      paymentLink = "https://www.instamojo.com/@Spiaon_/l21632e99ffc64ee18246657425f90a67/";
    } else if (classColor == "type2") {
      document.getElementById("type2").style.backgroundColor = "#FFFFB4";
      document.getElementById("type1").style.backgroundColor = "#ffffff";
      document.getElementById("type3").style.backgroundColor = "#ffffff";
      document.getElementById("type2border").style.border = "2px solid #E5C26C";
      document.getElementById("type1border").style.border = "1px solid #959393";
      document.getElementById("type3border").style.border = "1px solid #959393";
      document.getElementById("type2").style.border= "0";
      document.getElementById("type1").style.borderBlockColor = "#959393";
      document.getElementById("type3").style.borderBlockColor = "#959393";
      document.getElementById("type2").style.width = "100%";
      document.getElementById("type1").style.width = "90%";
      document.getElementById("type3").style.width = "90%";
  
      // document.getElementById("planNoOfMonth").innerText = "3";
      // document.getElementById("planActualFee").innerText = "Rs. 13,359";
      // document.getElementById("planAdditionalSavingsPercentage").innerText = "Additional Savings (8%)";
      // document.getElementById("planAdditionalSavings").innerText = "Rs. -1,069";
      // document.getElementById("planGST").innerText = "Rs. 2,212";
      // document.getElementById("planTotal").innerText = "Rs. 14,503";
  
      paymentLink = "https://www.instamojo.com/@Spiaon_/l21632e99ffc64ee18246657425f90a67/";
    } else if (classColor == "type3") {
      document.getElementById("type3").style.backgroundColor = "#FFFFB4";
      document.getElementById("type1").style.backgroundColor = "#ffffff";
      document.getElementById("type2").style.backgroundColor = "#ffffff";
      document.getElementById("type3border").style.border = "2px solid #E5C26C";
      document.getElementById("type1border").style.border = "1px solid #959393";
      document.getElementById("type2border").style.border = "1px solid #959393";
      document.getElementById("type3").style.border= "0";
      document.getElementById("type1").style.borderBlockColor = "#959393";
      document.getElementById("type2").style.borderBlockColor = "#959393";
      document.getElementById("type3").style.width = "100%";
      document.getElementById("type1").style.width = "90%";
      document.getElementById("type2").style.width = "90%";
  
      // document.getElementById("planNoOfMonth").innerText = "5";
      // document.getElementById("planActualFee").innerText = "Rs. 22,265";
      // document.getElementById("planAdditionalSavingsPercentage").innerText = "Additional Savings (10%)";
      // document.getElementById("planAdditionalSavings").innerText = "Rs. -2,227";
      // document.getElementById("planGST").innerText = "Rs. 3,607";
      // document.getElementById("planTotal").innerText = "Rs. 23,645";
  
      paymentLink = "https://www.instamojo.com/@Spiaon_/l21632e99ffc64ee18246657425f90a67/";
    }
    return;
  }
  
  function callRazorypay() {
  
    if (!document.getElementById('basicDetailscheckbox').checked) {
      alert("please read and accept our terms and conditions");
      return;
    }
  
    if (!paymentLink) {
      alert("please select a plan");
      location.reload();
      return;
    }
    window.open(paymentLink, "_blank")
    //window.location = paymentLink;
    callBasicDetailsCount();
    return;
  }
  