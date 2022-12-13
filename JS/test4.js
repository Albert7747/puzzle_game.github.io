//JS
const submit = document.querySelector(".btn_answer");
const txt = document.querySelector(".txt");
const myLink = document.querySelector(".change_web");

// // //監聽事件
submit.addEventListener("click", function() {
    //  alert("嗨嗨");
    if(txt.value=="16460701"){
        myLink.setAttribute("href","/Puzzle_second_result.html");
    }else{
        alert("答錯了，再想想看吧！")
    }
   });