document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  const exploreBtn = document.getElementById("exploreBtn");
  exploreBtn.addEventListener("click", () => {
    alert("Bem-vindo ao Universo do Spider-Man! Explore as seções abaixo.");
  });

  const galleryImages = document.querySelectorAll(".gallery-images img");
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-btn");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      modal.classList.add("active");
      modalImage.src = image.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});
