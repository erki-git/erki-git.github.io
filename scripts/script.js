let params = new URLSearchParams(document.location.search);
let selectedTeam = params.get("team");
console.log(selectedTeam)

let t_button = document.getElementById("t_button");
let ct_button = document.getElementById("ct_button")
let any_button = document.getElementById("any_button")



if (selectedTeam == "t"){
    t_button.classList.add("selected")
    any_button.classList.remove("selected")
} else if (selectedTeam == "ct"){
    ct_button.classList.add("selected")
    any_button.classList.remove("selected")
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