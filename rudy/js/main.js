document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
    const select = dropdown.querySelector(".custom-select");
    const menu = dropdown.querySelector(".dropdown-menu");
    const selected = dropdown.querySelector(".selected-text");
    const options = dropdown.querySelectorAll(".dropdown-options li");

    if (!select || !menu) return;

    select.addEventListener("click", (e) => {
      e.stopPropagation();

      const isOpen = menu.classList.contains("opacity-100");

      // بستن همه
      document.querySelectorAll(".dropdown-menu").forEach((m) => {
        m.classList.add("opacity-0", "scale-95", "pointer-events-none");
        m.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
        m.closest(".custom-dropdown")
          ?.querySelector("svg")
          ?.classList.remove("rotate-180");
      });

      if (!isOpen) {
        menu.classList.remove("opacity-0", "scale-95", "pointer-events-none");
        menu.classList.add("opacity-100", "scale-100", "pointer-events-auto");
        select.querySelector("svg").classList.add("rotate-180");
      }
    });

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        selected.textContent = opt.textContent;
        close();
      });
    });

    document.addEventListener("click", close);

    function close() {
      menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
      menu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
      select.querySelector("svg").classList.remove("rotate-180");
    }
  });
});


