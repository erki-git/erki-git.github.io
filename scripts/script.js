let params = new URLSearchParams(document.location.search);
let selectedTeam = params.get("team");
console.log(selectedTeam)

let t_button = document.getElementById("t_button");
let ct_button = document.getElementById("ct_button")
let any_button = document.getElementById("any_button")

let ct_nades = document.querySelectorAll(".counter_terrorist_smoke")
let t_nades = document.querySelectorAll(".terrorist_smoke")



if (selectedTeam == "t"){

    t_button.classList.add("selected")
    any_button.classList.remove("selected")

    ct_nades.forEach((element) => {
        console.log(element)
        element.style.display = "none"
    });

    console.log(ct_nades)

} else if (selectedTeam == "ct"){

    ct_button.classList.add("selected")
    any_button.classList.remove("selected")

    t_nades.forEach((element) => {
        console.log(element)
        element.style.display = "none"
    });

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


