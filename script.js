function scrollDaySection(direction) {
  const container = document.querySelector(".days-scroll");
  const dayWidth = container.querySelector(".day").offsetWidth + 20;
  container.scrollBy({
    left: direction * dayWidth,
    behavior: "smooth",
  });
}

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.closest(".day");
    day.classList.toggle("expanded");

    if (day.classList.contains("expanded")) {
      button.textContent = "Read Less";
    } else {
      button.textContent = "Read More";
    }
  });
});
