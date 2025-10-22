// ================================
// Slider الذكريات
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".ms-track");
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".ms-prev");
  const nextButton = document.querySelector(".ms-next");
  const dotsNav = document.querySelector(".ms-dots");

  let currentIndex = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;

  // وضع كل شريحة بجانب بعض
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  // إنشاء النقاط
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("ms-dot");
    if(index === 0) dot.classList.add("active");
    dotsNav.appendChild(dot);

    dot.addEventListener("click", () => {
      moveToSlide(index);
    });
  });

  const dots = Array.from(dotsNav.children);

  function moveToSlide(index) {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  // الأسهم
  prevButton.addEventListener("click", () => {
    let newIndex = currentIndex - 1;
    if(newIndex < 0) newIndex = slides.length - 1;
    moveToSlide(newIndex);
  });

  nextButton.addEventListener("click", () => {
    let newIndex = currentIndex + 1;
    if(newIndex >= slides.length) newIndex = 0;
    moveToSlide(newIndex);
  });
});
