var imgList = Array.from(document.getElementsByClassName("img-item"));
var lightboxContainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("previos");
var closeButton = document.getElementById("close");
var currentIndex = 0;
for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    currentIndex = imgList.indexOf(e.target);
    lightboxContainer.classList.replace("d-none", "d-flex");
    var imgSrc = e.target.getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex == imgList.length) {
    currentIndex = 0;
  }
  var imgSrc = imgList[currentIndex].getAttribute("src");

  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }
  var imgSrc = imgList[currentIndex].getAttribute("src");

  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextButton.addEventListener("click", function () {
  nextSlide();
});

prevButton.addEventListener("click", function () {
  previousSlide();
});

function closeSlide() {
  lightboxContainer.classList.replace("d-flex", "d-none");
}

closeButton.addEventListener("click", function () {
  closeSlide();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    nextSlide();
  } else if (e.key == "ArrowLeft") {
    previousSlide();
  } else if ((e.key = "Escape")) {
    closeSlide();
  }
});
