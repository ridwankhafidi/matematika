
console.log("📘 Docsify dimuat!");



document.querySelectorAll(".badges img").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});
