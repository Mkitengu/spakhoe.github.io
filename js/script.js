const slides = document.querySelectorAll('.slide');
let currentSlide = 0;



// Hàm hiển thị slide theo chỉ số
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}


// Auto slide every 4 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 10000);

showSlide(currentSlide);
// Swipe Detection
let startX = 0;
let endX = 0;

function handleSwipe() {
  if (endX - startX > 50) {
    // Vuốt phải → Slide trước
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  } else if (startX - endX > 50) {
    // Vuốt trái → Slide sau
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
}

// Lắng nghe sự kiện cảm ứng (touch)
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Lắng nghe sự kiện chuột (PC)
document.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});

document.addEventListener('mouseup', (e) => {
  endX = e.clientX;
  handleSwipe();
});
