//JS
const submit = document.querySelector(".btn_answer");
const txt_1 = document.querySelector(".txt_1");
const txt_2 = document.querySelector(".txt_2");
const txt_3 = document.querySelector(".txt_3");
const myLink = document.querySelector(".change_web");

// // //監聽事件
submit.addEventListener("click", function () {
  if (txt_1.value == "那些年"||txt_1.value == "等一個人"||txt_1.value == "讓我為你唱情歌") {
    if(txt_1.value == "那些年"){
      if(txt_2.value == "等一個人"){
        if(txt_3.value == "讓我為你唱情歌"){
            myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_third_result.html");
        }else{ alert("答錯了，再想想看吧！"); }
      }else if(txt_2.value == "讓我為你唱情歌"){
        if(txt_3.value == "等一個人"){
            myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_third_result.html");}
        else{ alert("答錯了，再想想看吧！"); }
      }else{ alert("答錯了，再想想看吧！"); }
     
    }
    if(txt_1.value == "等一個人"){
      if(txt_2.value == "那些年"){
        if(txt_3.value == "讓我為你唱情歌"){
            myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_third_result.html");
        }else{ alert("答錯了，再想想看吧！"); }
      }else if(txt_2.value == "讓我為你唱情歌"){
        if(txt_3.value == "那些年"){
            myLink.setAttribute("href","/https://albert7747.github.io/puzzle_game.github.ioPuzzle_third_result.html");}else{ alert("答錯了，再想想看吧！"); }
      }else{ alert("答錯了，再想想看吧！"); }
     
    }
    if(txt_1.value == "讓我為你唱情歌"){
      if(txt_2.value == "等一個人"){
        if(txt_3.value == "那些年"){
            myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_third_result.html");
        }else{ alert("答錯了，再想想看吧！"); }
      }else if(txt_2.value == "那些年"){
        if(txt_3.value == "等一個人"){
            myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_third_result.html");}else{ alert("答錯了，再想想看吧！"); }
      }else{ alert("答錯了，再想想看吧！"); }
     
    }
    
    // alert("嗨嗨");
  } else {
    alert("答錯了，再想想看吧！");
  }
});
