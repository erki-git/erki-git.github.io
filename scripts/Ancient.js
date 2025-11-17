
let position_buttons = document.querySelectorAll(".position_buttons")
let ct_nade_smoke = document.querySelectorAll(".counter_terrorist_smoke")
let t_nade_smoke = document.querySelectorAll(".terrorist_smoke")

let position_list = {


    // T Smokes
    t_smoke_1: ["t_smoke_1_pos_1"],
    t_smoke_2: ["t_smoke_2_pos_1"],  
    t_smoke_3: ["t_smoke_3_pos_1"],   
    t_smoke_4: ["t_smoke_4_pos_1"],  
    t_smoke_5: ["t_smoke_5_pos_1"],
    t_smoke_6: ["t_smoke_6_pos_1","t_smoke_6_pos_2","t_smoke_6_pos_3","t_smoke_6_pos_4","t_smoke_6_pos_5"],
    t_smoke_7: ["t_smoke_7_pos_1"],
    t_smoke_8: ["t_smoke_8_pos_1"],
    t_smoke_9: ["t_smoke_9_pos_1"],
    t_smoke_10: ["t_smoke_10_pos_1"],



    // CT Smokes

    ct_smoke_1: ["ct_smoke_1_pos_1","ct_smoke_1_pos_2","ct_smoke_1_pos_3","ct_smoke_1_pos_4","ct_smoke_1_pos_5","ct_smoke_1_pos_6"],
    ct_smoke_2: ["ct_smoke_2_pos_1"],
    ct_smoke_3: ["ct_smoke_3_pos_1","ct_smoke_3_pos_2","ct_smoke_3_pos_3","ct_smoke_3_pos_4","ct_smoke_3_pos_5","ct_smoke_3_pos_6"]
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



        if (selectedTeam == "t"){

            t_nades_smoke.forEach((element) => {
                element.style.display = "block"
            });

        } else if (selectedTeam == "ct"){

            ct_nades_smoke.forEach((element) => {
                element.style.display = "block"
            });
            
        } else {

            ct_nades_smoke.forEach((element) => {
                element.style.display = "block"
            });

            t_nades_smoke.forEach((element) => {
                element.style.display = "block"
            });


        }


    }


}

