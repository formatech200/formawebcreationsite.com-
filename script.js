// Gestion formulaire
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = "Message envoyé !";
      button.classList.remove("bg-purple-600", "hover:bg-purple-700");
      button.classList.add("bg-green-600");

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("bg-green-600");
        button.classList.add("bg-purple-600", "hover:bg-purple-700");
        this.reset();
      }, 3000);
    });
  }

  // Défilement fluide
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});