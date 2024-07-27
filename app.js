// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.querySelector("#toggle-btn");
//   const body = document.querySelector("body");

//   if (localStorage.getItem("dark-mode") === "yoniq") {
//     body.classList.add("dark-mode");
//     toggleBtn.classList.add("active");
//   }

//   toggleBtn.addEventListener("click", () => {
//     toggleBtn.classList.toggle("active");
//     body.classList.toggle("dark-mode");

//     let darkMode = body.classList.contains("dark-mode");

//     if (darkMode) {
//       localStorage.setItem("dark-mode", "yoniq");
//     } else {
//       localStorage.setItem("dark-mode", "ochiq");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const input = document.querySelector(".input");
  const text = document.querySelector(".text");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
      localStorage.setItem("input", input.value);
    } else if (input.value == "") {
      alert("Siz malumot kiritmadingiz iltimos molumot kiriting");
    }
    input.value = "";
    newNam();
  });
  function newNam() {
    const getInput = localStorage.getItem("input");

    text.textContent = getInput;
  }
  newNam();
});
