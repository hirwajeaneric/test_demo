function validateFirstName(){ //test input for 2-15 allowed characters
  var fName = document.getElementById("firstname").value;
  var rel = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (rel.test(fName)){ //if input is valid, update page to show successful entry.
    document.getElementById("firstNamePrompt").style.color = "green";
    document.getElementById("firstNamePrompt").innerHTML = "<strong>Valid</strong>";
    return true;
  }
  else { //if input is invalid, update page to prompt for new input
    document.getElementById("firstNamePrompt").style.color = "red";
    document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2 - 15 characters.</strong>";
    return false;
  }
}

function validateLastName(){ //test input for 2-25 allowed characters
  var lName = document.getElementById("lastname").value;
  var rel = /^[a-zA-Z\s\'\-]{2,25}$/;

  if (rel.test(lName)){ //if input is valid, update page to show successful entry.
    document.getElementById("lastNamePrompt").style.color = "green";
    document.getElementById("lastNamePrompt").innerHTML = "<strong>Valid</strong>";
    return true;
  }
  else { //if input is invalid, update page to prompt for new input
    document.getElementById("lastNamePrompt").style.color = "red";
    document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2 - 15 characters.</strong>";
    return false;
  }
}

  function validatePhone() {
    var phone = document.getElementById("phonenumber").value;
    var rel = /^\d{3}-\d{3}-\d{4}$/;

    if (rel.text(phone)) {
      document.getElementById("phoneNumberPrompt").style.color = "red";
      document.getElementById("phoneNumberPrompt").innerHTML = "<strong>Valid</strong>";
      return true;
    }
    else {
      document.getElementById("phoneNumberPrompt").style.color = "Green";
      document.getElementById("phoneNumberPrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format.</strong>";
      return false;
    }
  }

  /* Let's now get the summary of what we have ordered */
  function calcorder(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = firstname +" "+ lastname;
    var phonenumber = document.getElementById("phonenumber").value;
    var quantity = document.getElementById("orderquantity").value;
    var price = document.getElementById("itemprice").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>Order summary:</h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + username.toUpperCase() + "</br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML += "<p>Order total: $" + price * quantity + "</p>";

  }
