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

    // If car option is selected
    var var_cars = document.getElementById("cars");
    sessionStorage.setItem("cars", var_cars.value);

    var var_mpg = document.getElementById("mpg");
    sessionStorage.setItem("mpg", var_mpg.value);


    // --- Time Taken to Get to Campus ----------------------------------------------------------
    var var_hrs = document.getElementById("hrs");
    sessionStorage.setItem("hrs", var_hrs.value);

    var var_mins = document.getElementById("mins");
    sessionStorage.setItem("mins", var_mins.value);


    // --- Distance From Campus -----------------------------------------------------------------
    var var_mi = document.getElementById("mi");
    sessionStorage.setItem("mi", var_mi.value);


    // --- Planned Departure Time ---------------------------------------------------------------
    var var_plannedTime = document.getElementById("plannedTime");
    sessionStorage.setItem("plannedTime", var_plannedTime.value);

}
