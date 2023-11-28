// // creating portfolio tab component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelector(".p-btn");
const img_div = document.querySelectorAll(".img-overlay");

const arr=Array.from(p_btn)
const arr1=Array.from(img_div)

p_btns.addEventListener("click", (num) => {
  const p_btn_clicked = num.target;
  console.log(p_btn_clicked);

  p_btn_clicked.classList.contains("p-btn");
  // always remove the classList first then add the class

  console.log(p_btn)

    arr.forEach(
      (curElem) =>
       curElem.classList.remove("p-btn-active"));
//    img_div.forEach((curElem) =>
//   curElem.classList.remove("portfolio-image-active")
//   );
     p_btn_clicked.classList.add("p-btn-active");

  // to find the p-img class number of the images using the btn data attribute number

  const btn_num = p_btn_clicked.dataset.btnNum;
  //console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  // console.log(img_active);

  arr1.forEach((curElem) =>
  curElem.classList.add("p-image-not-active")
  );



  img_active.forEach((curElem) =>
    curElem.classList.remove(`p-image-not-active`)
  );
});


// scroll to top button (we can write in html also but we tried using in Javascript)
const mainSection = document.querySelector(".section-main");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    mainSection.scrollIntoView({behavior:"smooth"});
};



scrollElement.addEventListener("click" , scrollTop);


// responsive navbar 

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click',()=>{
  headerElem.classList.toggle("active");
});



