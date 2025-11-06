let params = new URLSearchParams(document.location.search);
let selectedTeam = params.get("team");
console.log(selectedTeam)

let t_button = document.getElementById("t_button");
let ct_button = document.getElementById("ct_button")
let any_button = document.getElementById("any_button")

// Smokes
let ct_nades_smoke = document.querySelectorAll(".counter_terrorist_smoke")
let t_nades_smoke = document.querySelectorAll(".terrorist_smoke")

// Molotovs
let ct_nades_molotov = document.querySelectorAll(".counter_terrorist_molotov")
let t_nades_molotov = document.querySelectorAll(".terrorist_molotov")

// Flashes
let ct_nades_flash = document.querySelectorAll(".counter_terrorist_flash")
let t_nades_flash = document.querySelectorAll(".terrorist_flash")

// HE
let ct_nades_he = document.querySelectorAll(".counter_terrorist_he")
let t_nades_he = document.querySelectorAll(".terrorist_he")




let smokes_number = document.getElementById("smokes_sum")
let molotov_number = document.getElementById("molotovs_sum")
let flash_number = document.getElementById("flash_sum")
let he_number = document.getElementById("HE_sum")




if (selectedTeam == "t"){

    t_button.classList.add("selected")
    any_button.classList.remove("selected")

    smokes_number.innerHTML = t_nades_smoke.length;
    molotov_number.innerHTML = t_nades_molotov.length;
    flash_number.innerHTML = t_nades_flash.length;
    he_number.innerHTML = t_nades_he.length;



    // Smoke loop
    ct_nades_smoke.forEach((element) => {
        element.style.display = "none"
    });


    // Molotov loop
    ct_nades_molotov.forEach((element) => {
        element.style.display = "none"
    });

    // Flash loop
    ct_nades_flash.forEach((element) => {
        element.style.display = "none"
    });


    // HE loop
    ct_nades_he.forEach((element) => {
        element.style.display = "none"
    });    




} else if (selectedTeam == "ct"){

    ct_button.classList.add("selected")
    any_button.classList.remove("selected")


    smokes_number.innerHTML = ct_nades_smoke.length;
    molotov_number.innerHTML = ct_nades_molotov.length;
    flash_number.innerHTML = ct_nades_flash.length;
    he_number.innerHTML = ct_nades_he.length;



    // Smoke loop
    t_nades_smoke.forEach((element) => {
        element.style.display = "none"
    });


    // Molotov loop
    t_nades_molotov.forEach((element) => {
        element.style.display = "none"
    });

    // Flash loop
    t_nades_flash.forEach((element) => {
        element.style.display = "none"
    });


    // HE loop
    t_nades_he.forEach((element) => {
        element.style.display = "none"
    });    
    

} else {

    smokes_number.innerHTML = t_nades_smoke.length + ct_nades_smoke.length;
    molotov_number.innerHTML = t_nades_molotov.length + ct_nades_molotov.length;
    flash_number.innerHTML = t_nades_flash.length + ct_nades_flash.length;
    he_number.innerHTML = t_nades_he.length + ct_nades_he.length;


}

    document.addEventListener("DOMContentLoaded", function (event) {
        var scrollpos = sessionStorage.getItem('scrollpos');
        if (scrollpos) {
            window.scrollTo({["top"]: scrollpos, ["left"]: 0, ["behavior"] : "instant"})
            sessionStorage.removeItem('scrollpos');
        }
    });

    window.addEventListener("beforeunload", function (e) {
        sessionStorage.setItem('scrollpos', window.scrollY);
    });


