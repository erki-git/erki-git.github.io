let position_buttons = document.querySelectorAll(".position_buttons")
let ct_nade_smoke = document.querySelectorAll(".counter_terrorist_smoke")
let t_nade_smoke = document.querySelectorAll(".terrorist_smoke")

let position_list = {


    // T Smokes
    t_smoke_1: ["t_smoke_1_pos_1"],
    t_smoke_2: ["t_smoke_2_pos_1"],  
    t_smoke_3: ["t_smoke_3_pos_1"],   
    t_smoke_4: ["t_smoke_4_pos_1"],  


    

}

let closed = true;


function clicked(nade_id) {

    if (closed == true){

        closed = false;
        
        let positions = position_list[nade_id]

        t_nades_smoke.forEach((element) => {
            element.style.display = "none"
        });

        ct_nades_smoke.forEach((element) => {
            element.style.display = "none"
        });

        document.getElementById(nade_id).style.display = "block"


        for (let i = 0; i < positions.length; i++) {
            let position_id = positions[i];
            document.getElementById(position_id).style.display = "block"
            
        }


    
    } else {

        closed = true;

        position_buttons.forEach((element) => {
            console.log(element)
            element.style.display = "none"
        });


        t_nades_smoke.forEach((element) => {
            element.style.display = "block"
        });

        ct_nades_smoke.forEach((element) => {
            element.style.display = "block"
        });


    }


}

