document.querySelectorAll(".like-card, .strength-row").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const detail = button.querySelector(".like-detail, .strength-detail");
    button.setAttribute("aria-expanded", String(!expanded));
    if (detail) detail.textContent = expanded ? "" : button.dataset.detail;
  });
});
