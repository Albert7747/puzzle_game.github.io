//JS
  const submit = document.querySelector(".btn_answer");
  const txt = document.querySelector(".txt");
  const myLink = document.querySelector(".change_web");
  
  // // //監聽事件 JS
  submit.addEventListener("click", function(event) {
      //  alert("嗨嗨");
      if(txt.value=="2018"){
        myLink.setAttribute("href","/Puzzle_one_result.html");
        //   alert("嗨嗨");
      }else{
          alert("答錯了，你一定是漏掉什麼重要線索啦！")
      }
     });
  
  