document
  .querySelectorAll(".tip, .info, .warning, .caution")
  .forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "scale(1.05)";
      element.style.transition = "transform 0.3s ease";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)";
    });
  });

document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".math-formula, .question");
  elements.forEach((el) => {
    const position = el.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      el.classList.add("animate");
    }
  });
});

const sidebar = document.querySelector(".sidebar");
if (sidebar) {
  sidebar.addEventListener("mouseover", () => {
    sidebar.style.boxShadow = "4px 0 12px rgba(0, 0, 0, 0.1)";
  });

  sidebar.addEventListener("mouseleave", () => {
    sidebar.style.boxShadow = "none";
  });
}
