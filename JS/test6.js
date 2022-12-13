//JS
const submit = document.querySelector(".btn_answer");
const txt = document.querySelector(".txt");
const myLink = document.querySelector(".change_web");

// // //監聽事件
submit.addEventListener("click", function() {
    if(txt.value=="MELODY" || txt.value=="melody"||txt.value=="Melody"){
        myLink.setAttribute("href","/Puzzle_fourth_result.html");
    }else{
        alert("答錯了，再想想看吧！")
    }
   });