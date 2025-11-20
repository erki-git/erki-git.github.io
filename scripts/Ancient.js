
let position_buttons = document.querySelectorAll(".position_buttons")
let ct_nade_smoke = document.querySelectorAll(".counter_terrorist_smoke")
let t_nade_smoke = document.querySelectorAll(".terrorist_smoke")


let ct_nade_molotov = document.querySelectorAll(".counter_terrorist_molotov")
let t_nade_molotov = document.querySelectorAll(".terrorist_molotov")




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



    // T Molotovs
    t_molotov_1: ["t_molotov_1_pos_1"],






    // CT Smokes

    ct_smoke_1: ["ct_smoke_1_pos_1","ct_smoke_1_pos_2","ct_smoke_1_pos_3","ct_smoke_1_pos_4","ct_smoke_1_pos_5","ct_smoke_1_pos_6"],
    ct_smoke_2: ["ct_smoke_2_pos_1"],
    ct_smoke_3: ["ct_smoke_3_pos_1","ct_smoke_3_pos_2","ct_smoke_3_pos_3","ct_smoke_3_pos_4","ct_smoke_3_pos_5","ct_smoke_3_pos_6"],




    // CT Molotovs
    ct_molotov_1: ["ct_molotov_1_pos_1"]




}

let closed = true;







// function getOffset( el ) {
//     var rect = el.getBoundingClientRect();
//     return {
//         left: rect.left + window.pageXOffset,
//         top: rect.top + window.pageYOffset,
//         width: rect.width || el.offsetWidth,
//         height: rect.height || el.offsetHeight
//     };
// }




// function connect(div1, div2, color, thickness) { // draw a line connecting elements

    
//     var off1 = getOffset(div1);
//     var off2 = getOffset(div2);
//     // bottom right
//     var x1 = off1.left + off1.width;
//     var y1 = off1.top + off1.height;
//     // top right
//     var x2 = off2.left + off2.width;
//     var y2 = off2.top;
//     // distance
//     var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
//     // center
//     var cx = ((x1 + x2) / 2) - (length / 2);
//     var cy = ((y1 + y2) / 2) - (thickness / 2);
//     // angle
//     var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
//     // make hr
//     var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
//     //
//     // alert(htmlLine);
//     document.body.innerHTML += htmlLine;
// }










function clicked(nade_id) {

    if (closed == true){

        console.log("hello")


        closed = false;
        
        let positions = position_list[nade_id]


        // Smokes
        t_nade_smoke.forEach((element) => {
            element.style.display = "none"
        });

        ct_nade_smoke.forEach((element) => {
            element.style.display = "none"
        });


        // Molotovs
        t_nade_molotov.forEach((element) => {
            element.style.display = "none"
        });

        ct_nade_molotov.forEach((element) => {
            element.style.display = "none"
        });








        document.getElementById(nade_id).style.display = "block"


        for (let i = 0; i < positions.length; i++) {
            
            let position_id = positions[i];
            document.getElementById(position_id).style.display = "block"


            // connect(document.getElementById(position_id),document.getElementById(nade_id), "red", 2)
        }


    
    } else {

        closed = true;
        


        position_buttons.forEach((element) => {
            element.style.display = "none"
        });



        if (selectedTeam == "t"){

            // T Smoke
            t_nade_smoke.forEach((element) => {
                element.style.display = "block"
            });


            // T Molotov
            t_nade_molotov.forEach((element) => {
                element.style.display = "block"
            });




        } else if (selectedTeam == "ct"){


            // CT Smoke
            ct_nade_smoke.forEach((element) => {
                element.style.display = "block"
            });


            // CT Molotov
            ct_nade_molotov.forEach((element) => {
                element.style.display = "block"
            });



            
        } else {


            // Smokes
            ct_nade_smoke.forEach((element) => {
                element.style.display = "block"
            });

            t_nade_smoke.forEach((element) => {
                element.style.display = "block"
            });




            // Molotovs
            t_nade_molotov.forEach((element) => {
                element.style.display = "block"
            });

            ct_nade_molotov.forEach((element) => {
                element.style.display = "block"
            });




        }


    }


}

