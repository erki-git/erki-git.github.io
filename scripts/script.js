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



let smokes_number = document.getElementById("smokes_sum")
let molotov_number = document.getElementById("molotovs_sum")




if (selectedTeam == "t"){

    t_button.classList.add("selected")
    any_button.classList.remove("selected")

    smokes_number.innerHTML = t_nades_smoke.length;
    molotov_number.innerHTML = t_nades_molotov.length;


    // Loops
    ct_nades_smoke.forEach((element) => {
        element.style.display = "none"
    });

    ct_nades_molotov.forEach((element) => {
        element.style.display = "none"
    });




} else if (selectedTeam == "ct"){

    ct_button.classList.add("selected")
    any_button.classList.remove("selected")


    smokes_number.innerHTML = ct_nades_smoke.length;
    molotov_number.innerHTML = ct_nades_molotov.length;

    // Loops
    t_nades_smoke.forEach((element) => {
        console.log(element)
        element.style.display = "none"
    });

    t_nades_molotov.forEach((element) => {
        console.log(element)
        element.style.display = "none"
    });

    

} else {

    smokes_number.innerHTML = t_nades_smoke.length + ct_nades_smoke.length;
    molotov_number.innerHTML = t_nades_molotov.length + ct_nades_molotov.length;

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


