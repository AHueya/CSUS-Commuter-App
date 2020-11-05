var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}
//}

function myFunction() {
var a = document.getElementById("ranks")
var b = document.getElementById("ranks2")
var c = document.getElementById("ranks3")
  var value = a.options[a.selectedIndex].value;
  var valueb = b.options[b.selectedIndex].value;
  var valuec = c.options[c.selectedIndex].value;
  
    if(value == "money") {
      document.getElementById("emptyrank1").innerHTML = "Rank 1: Money"
        document.getElementById("ranks2").options[0].disabled = true;
        document.getElementById("ranks3").options[0].disabled = true;
        
    }
    else if (value == "time") {
      document.getElementById("emptyrank1").innerHTML = "Rank 1: Time"
        document.getElementById("ranks2").options[1].disabled = true;
        document.getElementById("ranks3").options[1].disabled = true;
    }
    else {
        document.getElementById("emptyrank1").innerHTML = "Rank 1: Sustainability"
        document.getElementById("ranks2").options[2].disabled = true;
        document.getElementById("ranks3").options[2].disabled = true;
    }

    if(valueb == "money") {
      document.getElementById("emptyrank2").innerHTML = "Rank 2: Money"
        document.getElementById("ranks").options[0].disabled = true;
        document.getElementById("ranks3").options[0].disabled = true;
    }

    else if (valueb == "time") {
      document.getElementById("emptyrank2").innerHTML = "Rank 2: Time"
        document.getElementById("ranks").options[1].disabled = true;
        document.getElementById("ranks3").options[1].disabled = true;
    }

    else {
        document.getElementById("emptyrank2").innerHTML = "Rank 2: Sustainability"
        document.getElementById("ranks").options[2].disabled = true;
        document.getElementById("ranks3").options[2].disabled = true;
    }

    if(valuec == "money") {
      document.getElementById("emptyrank3").innerHTML = "Rank 3: Money"
        document.getElementById("ranks").options[0].disabled = true;
        document.getElementById("ranks2").options[0].disabled = true;
    }

    else if (valuec == "time") {
      document.getElementById("emptyrank3").innerHTML = "Rank 3: Time"
        document.getElementById("ranks").options[1].disabled = true;
        document.getElementById("ranks2").options[1].disabled = true;
    }

    else {
        document.getElementById("emptyrank3").innerHTML = "Rank 3: Sustainability"
        document.getElementById("ranks").options[2].disabled = true;
        document.getElementById("ranks2").options[2].disabled = true;
    }
}