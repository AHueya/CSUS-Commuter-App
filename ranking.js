var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function myFunction() {
    var a = document.getElementById("ranks")
    var b = document.getElementById("ranks2")
    var c = document.getElementById("ranks3")
    var value = a.options[a.selectedIndex].value;
    var valueb = b.options[b.selectedIndex].value;
    var valuec = c.options[c.selectedIndex].value;

    if (value == "default" && valueb == "default" && valuec == "default") {
        document.getElementById("ranks").options[1].disabled = false;;
        document.getElementById("ranks2").options[1].disabled = false;
        document.getElementById("ranks3").options[1].disabled = false;
        document.getElementById("ranks").options[2].disabled = false;
        document.getElementById("ranks2").options[2].disabled = false;
        document.getElementById("ranks3").options[2].disabled = false;
        document.getElementById("ranks").options[3].disabled = false;
        document.getElementById("ranks2").options[3].disabled = false;
        document.getElementById("ranks3").options[3].disabled = false;
    }

    //-----------------------For rank 1 and 2 reset---------------------------------------
    if (value == "default" && valueb == "default" && valuec == "money") {
        document.getElementById("ranks").options[2].disabled = false;
        document.getElementById("ranks").options[3].disabled = false;
        document.getElementById("ranks2").options[2].disabled = false;
        document.getElementById("ranks2").options[3].disabled = false;
    }

    if (value == "default" && valueb == "default" && valuec == "time") {
        document.getElementById("ranks").options[1].disabled = false;
        document.getElementById("ranks").options[3].disabled = false;
        document.getElementById("ranks2").options[1].disabled = false;
        document.getElementById("ranks2").options[3].disabled = false;
    }

    if (value == "default" && valueb == "default" && valuec == "sustainability") {
        document.getElementById("ranks").options[1].disabled = false;
        document.getElementById("ranks").options[2].disabled = false;
        document.getElementById("ranks2").options[1].disabled = false;
        document.getElementById("ranks2").options[2].disabled = false;
    }

    //-----------------------For rank 1 and 3 reset---------------------------------------
    if (value == "default" && valueb == "money" && valuec == "default") {
        document.getElementById("ranks").options[2].disabled = false;
        document.getElementById("ranks").options[3].disabled = false;
        document.getElementById("ranks3").options[2].disabled = false;
        document.getElementById("ranks3").options[3].disabled = false;
    }

    if (value == "default" && valueb == "time" && valuec == "default") {
        document.getElementById("ranks").options[1].disabled = false;
        document.getElementById("ranks").options[3].disabled = false;
        document.getElementById("ranks3").options[1].disabled = false;
        document.getElementById("ranks3").options[3].disabled = false;
    }

    if (value == "default" && valueb == "sustainability" && valuec == "default") {
        document.getElementById("ranks").options[1].disabled = false;
        document.getElementById("ranks").options[2].disabled = false;
        document.getElementById("ranks3").options[1].disabled = false;
        document.getElementById("ranks3").options[2].disabled = false;
    }

      //-----------------------For rank 2 and 3 reset---------------------------------------
      if (value == "money" && valueb == "default" && valuec == "default") {
        document.getElementById("ranks2").options[2].disabled = false;
        document.getElementById("ranks2").options[3].disabled = false;
        document.getElementById("ranks3").options[2].disabled = false;
        document.getElementById("ranks3").options[3].disabled = false;
    }

    if (value == "time" && valueb == "default" && valuec == "default") {
        document.getElementById("ranks2").options[1].disabled = false;
        document.getElementById("ranks2").options[3].disabled = false;
        document.getElementById("ranks3").options[1].disabled = false;
        document.getElementById("ranks3").options[3].disabled = false;
    }

    if (value == "sustainabiliity" && valueb == "default" && valuec == "default") {
        document.getElementById("ranks2").options[1].disabled = false;
        document.getElementById("ranks2").options[2].disabled = false;
        document.getElementById("ranks3").options[1].disabled = false;
        document.getElementById("ranks3").options[2].disabled = false;
    }

    if(value == "money") {
      document.getElementById("ranks2").options[1].disabled = true;
      document.getElementById("ranks3").options[1].disabled = true;
    }

    else if (value == "time") {
        document.getElementById("ranks2").options[2].disabled = true;
        document.getElementById("ranks3").options[2].disabled = true;
    }

    else if (value == "sustainability") {
        
        document.getElementById("ranks2").options[3].disabled = true;
        document.getElementById("ranks3").options[3].disabled = true;
      }

    if(valueb == "money") {
      document.getElementById("ranks").options[1].disabled = true;
      document.getElementById("ranks3").options[1].disabled = true;
    }

    else if (valueb == "time") {
        document.getElementById("ranks").options[2].disabled = true;
        document.getElementById("ranks3").options[2].disabled = true;
    }

    else if (valueb == "sustainability") {
        document.getElementById("ranks").options[3].disabled = true;
        document.getElementById("ranks3").options[3].disabled = true;
      }

    if (valuec == "money") {
      document.getElementById("ranks").options[1].disabled = true;
      document.getElementById("ranks2").options[1].disabled = true;
    }

    else if (valuec == "time") {
        document.getElementById("ranks").options[2].disabled = true;
        document.getElementById("ranks2").options[2].disabled = true;
    }

    else if (valuec == "sustainability") {
        document.getElementById("ranks").options[3].disabled = true;
        document.getElementById("ranks2").options[3].disabled = true;
    }
}

// -- Ranking Storage Function --------------------------------------------------------------
function rank_store() {
    var var_ranks = document.getElementById("ranks");
    sessionStorage.setItem("ranks", var_ranks.value);

    var var_ranks2 = document.getElementById("ranks2");
    sessionStorage.setItem("ranks2", var_ranks2.value);

    var var_ranks3 = document.getElementById("ranks3");
    sessionStorage.setItem("ranks3", var_ranks3.value);

// -- Stores the Address of the User ---------------------------------------------------------
    sessionStorage.setItem("home", document.getElementById("home").value);
    sessionStorage.setItem("city", document.getElementById("city").value);
    sessionStorage.setItem("zipCode", document.getElementById("zipCode").value);

}
// -- End Ranking Storage Function ----------------------------------------------------------

function errorChecking() {
    var a = document.getElementById("ranks")
    var b = document.getElementById("ranks2")
    var c = document.getElementById("ranks3")
    var value = a.options[a.selectedIndex].value;
    var valueb = b.options[b.selectedIndex].value;
    var valuec = c.options[c.selectedIndex].value;

    if (value == "default" || valueb == "default" || valuec == "default") {
        alert("All 3 ranks are not chosen");
    }
    else {
        rank_store();
        window.location.href='survey_page.html'
    }

}
