/* Password code taken from https://www.tutorialspoint.com/how-to-password-protect-a-page-using-only-html-css-and-javascript */

function protectpasscode1() {
    const result = document.getElementById("tutorial").value;
    let passcode = 12345;
    let space = '';
    if (result == space) {
       alert("Type passcode")
    } else {
       if (result == passcode) {
          window.location.replace("testfile.html");
       } else {
          alert("Incorrect Passcode");
          location.reload();
       }
    }
 }

 function protectpasscode2() {
    const result = document.getElementById("tutorial").value;
    let passcode = "testy";
    let space = '';
    if (result == space) {
       alert("Type passcode")
    } else {
       if (result == passcode) {
          window.location.replace("testfile.html");
       } else {
          alert("Incorrect Passcode");
          location.reload();
       }
    }
 }