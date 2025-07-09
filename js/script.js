document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  document.getElementById("formStatus").innerText =
    "⏳ Đang gửi yêu cầu đặt lịch...";
  setTimeout(() => {
    document.getElementById("formStatus").innerText =
      "✅ Đặt lịch thành công! Chúng tôi sẽ gọi bạn sớm.";
    this.reset();
  }, 1500);
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

// Auto slide every 4 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 4000);

showSlide(slideIndex);
