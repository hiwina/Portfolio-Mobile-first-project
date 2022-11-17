const humberger = document.querySelector(".icon");
const navMenu = document.querySelector(".hidden-menu");

humberger.addEventListener("click", ()=> {
     humberger.classList.toggle("active");
     navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    humberger.classList.remove("active");
    navMenu.classList.remove("active");

  }))
  

  // icon.addEventListener('click',function(){
  //   humberger.classList.toggle.remo('active');
  //   menu.classList.toggle('in-active');
  //   })

// //   let toggle = function() {
// //     let element = document.getElementById("hidden-menu");
// //     let hidden = element.getAttribute("hidden");

// //     if (hidden) {
// //        element.removeAttribute("hidden");
// //        button.innerText = "Hide div";
// //     } else {
// //        element.setAttribute("hidden", "hidden");
// //        button.innerText = "Show div";
// //     }
// //   }


