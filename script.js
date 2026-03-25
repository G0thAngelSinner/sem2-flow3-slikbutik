// topnav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//kode fra undervisning med Christian ↓
// slideshow// Initialiserer hvert slideshow container for sig
const slideshowContainers = document.querySelectorAll(".slideshow-container");

slideshowContainers.forEach((container) => {
  const slides = container.querySelectorAll(".slide");
  const btnNext = container.querySelector(".next");
  const btnPrevious = container.querySelector(".previous");
  let currentIndex = 0;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
    currentIndex = index;
  }

  showSlide(0);

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  }

  if (btnPrevious) {
    btnPrevious.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  }
});
// slideshow end

// contact form

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "4x8ndTSlkD2ciy43B",
  });
})();

window.onload = function () {
  document
    .getElementById("template_m46zpfs")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_oxakk43", "template_m46zpfs", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
    });
};
