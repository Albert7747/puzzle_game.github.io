//JS
const submit = document.querySelector(".btn_answer");
const txt = document.querySelector(".txt");
const myLink = document.querySelector(".change_web");
const Easter_web = document.querySelector(".Easter_web");

// // //監聽事件
submit.addEventListener("click", function () {
  if (txt.value == "敍嘉生日快樂") {
    myLink.setAttribute("href","https://albert7747.github.io/puzzle_game.github.io/Puzzle_fifth_result.html");
  } else {
    alert("答錯了，再想想看吧！");
  }
});

//彩蛋的
const Easter_submit = document.querySelector(".btn_Easter");
const txt_Easter = document.querySelector(".txt_Easter");

// 彩蛋的監聽事件
Easter_submit.addEventListener("click", function (e) {
  if (txt_Easter.value == "永琮") {
    alert("恭喜你答對了，如果好奇為什麼的話，可以聯絡本作者");
  } else {
    alert("答錯了，再想想看吧！");
  }
});
