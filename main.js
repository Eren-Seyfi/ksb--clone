window.onload = (event) => {
  var yukariButton = document.getElementById("scroll-up");
  yukariButton.style.display = "none";

  function scrollUp() {
    // Sayfanın en üstüne kaydırma işlemi
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // "yukari" butonuna tıklama olayını ekle
  yukariButton.addEventListener("click", scrollUp);

  // Scroll olayını dinle
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 350) {
      // Sayfa 350 piksel kaydırıldığında "yukari" elementini görünür yap
      yukariButton.style.display = "block";
    } else {
      // Sayfa 350 pikselin altına kaydırıldığında "yukari" elementini gizle
      yukariButton.style.display = "none";
    }
  });
};
