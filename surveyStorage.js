// **********************************************************************************************
//
// Stores survey values locally in browser
//
// **********************************************************************************************
//
// localStorage: data persits indefinitely
// sessionStorage: data persists until the tab is closed
//
// Syntax: sessionStorage.setItem("Name of variable in storage", JSvariable.value);

function store() {

    // --- Method of Transportation -------------------------------------------------------------
    sessionStorage.setItem("transportationTypes", document.getElementById("transportationTypes").value);

        // --- Type of Transportation (Bike) ----------------------------------------------------
        if(document.querySelector('input[name="bike"]:checked')) {
            sessionStorage.setItem("bsaferoute", document.querySelector('input[name="bike"]:checked').value);
        }

        // --- Type of Transportation (Bus) -----------------------------------------------------
        if(document.querySelector('input[name="bRoute"]:checked')) {
            sessionStorage.setItem("bHavePlannedRoute", document.querySelector('input[name="bRoute"]:checked').value);
        }
        if(document.querySelector('input[name="bCommuterSleeve"]:checked')) {
            sessionStorage.setItem("bHaveCommuterSleeve", document.querySelector('input[name="bCommuterSleeve"]:checked').value);
        }

        // --- Type of Transportation (Car) -----------------------------------------------------
        sessionStorage.setItem("year", document.getElementById("year").value);

        sessionStorage.setItem("cars", document.getElementById("cars").value);

        sessionStorage.setItem("mpg", document.getElementById("mpg").value);

        // --- Type of Transportation (Carpool) -------------------------------------------------
        sessionStorage.setItem("cpNumPeople", document.getElementById("cpNumPeople1").value);

        sessionStorage.setItem("cpYear", document.getElementById("cpYear").value);

        sessionStorage.setItem("cpTypeOfCar", document.getElementById("cpCars").value);

        sessionStorage.setItem("cpMpg", document.getElementById("cpMpg").value);

        // --- Type of Transportation (Light Rail) ----------------------------------------------
        if(document.querySelector('input[name="lRoute"]:checked')) {
            sessionStorage.setItem("lHavePlannedRoute", document.querySelector('input[name="lRoute"]:checked').value);
        }

        if(document.querySelector('input[name="lCommuterSleeve"]:checked')) {
            sessionStorage.setItem("lHaveCommuterSleeve", document.querySelector('input[name="lCommuterSleeve"]:checked').value);
        }

        // --- Type of Transportation (Motorcycle) ----------------------------------------------
        sessionStorage.setItem("myear", document.getElementById("myear").value);

        sessionStorage.setItem("motorcycles", document.getElementById("motorcycles").value);

        sessionStorage.setItem("mmpg", document.getElementById("mmpg").value);

        // --- Type of Transportation (Rideshare) -----------------------------------------------
        sessionStorage.setItem("rNumPeople2", document.getElementById("rNumPeople2").value);

        if(document.querySelector('input[name="takeAgain1"]:checked')) {
            sessionStorage.setItem("yesTakeAgain1", document.querySelector('input[name="takeAgain1"]:checked').value);
        }

        // --- Type of Transportation (Walking) -------------------------------------------------
        if(document.querySelector('input[name="wSafeR"]:checked')) {
            sessionStorage.setItem("wsafeRoute", document.querySelector('input[name="wSafeR"]:checked').value);
        }

    // --- Distance From Campus -----------------------------------------------------------------
    sessionStorage.setItem("mi", document.getElementById("mi").value);

    // --- Number of Commutes to Campus -----------------------------------------------------------------
    sessionStorage.setItem("numOfDays", document.getElementById("numOfDays").value);

    // --- Planned Departure Time ---------------------------------------------------------------
    sessionStorage.setItem("plannedTime", document.getElementById("plannedTime").value);

}
