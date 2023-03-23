// -------------------amimation-----------------//
var typed = new Typed(".typing", {
  strings: ["", "Lập trình viên Front End", "Sinh viên mới tốt nghiệp"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// --------------------Aside--------------------////
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavlist = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // removeBackSection();
    for (let j = 0; j < totalNavlist; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // addBackSection();
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
// function removeBackSection() {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("back-section");
//   }
// }

// function addBackSection(num) {
//   allSection[num].classList.add("back-section");
// }

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNew(element) {
  for (let i = 0; i < totalNavlist; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);

  showSection(this);
  updateNew(this);
  //   removeBackSection();
  //   addBackSection(sectionIndex);
});
const navTogglerTbn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerTbn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerTbn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const btnOpen = document.querySelector(".portfolio-item-inner");
const model = document.querySelector(".model");
const iconClose = document.querySelector(".model-header i");
const btnClose = document.querySelector(".footer button");

btnOpen.addEventListener("click", function () {
  model.classList.toggle("hidden");
});
