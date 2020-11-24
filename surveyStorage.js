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
    var var_transportationTypes = document.getElementById("transportationTypes");
    sessionStorage.setItem("transportationTypes", var_transportationTypes.value);

        // --- Type of Transportation (Bike) ----------------------------------------------------
        var var_bsafeRoute = document.getElementById("bsafeRoute");
        sessionStorage.setItem("bsafeRoute", var_bsafeRoute.value);

        var var_bnotSafeRoute = document.getElementById("bnotSafeRoute");
        sessionStorage.setItem("bnotSafeRoute", var_bnotSafeRoute.value);

        // --- Type of Transportation (Bus) -----------------------------------------------------
        var var_bHavePlannedRoute = document.getElementsById("bHavePlannedRoute");
        sessionStorage.setItem("bHavePlannedRoute", var_bHavePlannedRoute.value);

        var var_bNoPlannedRoute = document.getElementById("bNoPlannedRoute");
        sessionStorage.setItem("bNoPlannedRoute", var_bNoPlannedRoute.value);

        var var_bHaveCommuterSleeve = document.getElementById("bHaveCommuterSleeve");
        sessionStorage.setItem("bHaveCommuterSleeve", var_bHaveCommuterSleeve.value);

        var var_bNoCommuterSleeve = document.getElementById("bNoCommuterSleeve");
        sessionStorage.setItem("bNoCommuterSleeve", var_bNoCommuterSleeve.value);

        // --- Type of Transportation (Car) -----------------------------------------------------
        var var_year = document.getElementById("year");
        sessionStorage.setItem("year", var_year.value);

        var var_cars = document.getElementById("cars");
        sessionStorage.setItem("cars", var_cars.value);

        var var_mpg = document.getElementById("mpg");
        sessionStorage.setItem("mpg", var_mpg.value);

        // --- Type of Transportation (Carpool) -------------------------------------------------
        var var_cpNumPeople = document.getElementById("cpNumPeople");
        sessionStorage.setItem("cpNumPeople", var_cpNumPeople.value);

        var var_cpYear = document.getElementById("cpYear");
        sessionStorage.setItem("var_cpYear", var_cpYear.value);

        var var_cpTypeOfCar = document.getElementById("cpTypeOfCar");
        sessionStorage.setItem("cpTypeOfCar", var_cpTypeOfCar.value);

        var var_cpMpg = document.getElementById("cpMpg");
        sessionStorage.setItem("cpMpg", var_cpMpg.value);

        // --- Type of Transportation (Light Rail) ----------------------------------------------
        var var_lHavePlannedRoute = document.getElementById("lHavePlannedRoute");
        sessionStorage.setItem("lHavePlannedRoute", var_lHavePlannedRoute.value);

        var var_lNoPlannedRoute = document.getElementById("lNoPlannedRoute");
        sessionStorage.setItem("lNoPlannedRoute", var_lNoPlannedRoute.value);

        var var_lHaveCommuterSleeve = document.getElementById("lHaveCommuterSleeve");
        sessionStorage.setItem("lHaveCommuterSleeve", var_bNoCommuterSleeve.value);

        var var_lNoCommuterSleeve = document.getElementById("lNoCommuterSleeve");
        sessionStorage.setItem("lNoCommuterSleeve", var_lNoCommuterSleeve.value);

        // --- Type of Transportation (Motorcycle) ----------------------------------------------
        var var_myear = document.getElementById("myear");
        sessionStorage.setItem("myear", val_myear.value);

        var var_motorcycles = document.getElementById("motorcycles");
        sessionStorage.setItem("motorcycles", val_motorcycles.value);

        var var_mmpg = document.getElementById("mmpg");
        sessionStorage.setItem("mmpg", val_mmpg.value);

        // --- Type of Transportation (Rideshare) -----------------------------------------------
        var var_rNumPeople2 = document.getElementById("rNumPeople2");
        sessionStorage.setItem("rNumPeople2", val_rNumPeople2.value);

        var var_yesTakeAgain1 = document.getElementById("yesTakeAgain1");
        sessionStorage.setItem("yesTakeAgain1", val_yesTakeAgain1.value);

        var var_noTakeAgain1 = document.getElementById("noTakeAgain1");
        sessionStorage.setItem("noTakeAgain1", val_noTakeAgain1.value);

        // --- Type of Transportation (Walking) -------------------------------------------------
        var var_wsafeRoute = document.getElementById("wsafeRoute");
        sessionStorage.setItem("wsafeRoute", val_wsafeRoute.value);

        var var_wnotSafeRoute = document.getElementById("wnotSafeRoute");
        sessionStorage.setItem("wnotSafeRoute", val_wnotSafeRoute.value);

    // --- Distance From Campus -----------------------------------------------------------------
    var var_mi = document.getElementById("mi");
    sessionStorage.setItem("mi", var_mi.value);

    // --- Number of Commutes to Campus -----------------------------------------------------------------
    var var_numOfDays = document.getElementById("numOfDays");
    sessionStorage.setItem("numOfDays", val_numOfDays.value);

    // --- Planned Departure Time ---------------------------------------------------------------
    var var_plannedTime = document.getElementById("plannedTime");
    sessionStorage.setItem("plannedTime", var_plannedTime.value);

}
