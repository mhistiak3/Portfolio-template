let menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active-menu");
    });

    item.classList.add("active-menu");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll("[data-category]");

  const projects = document.querySelectorAll(".relative.group");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");

      categoryButtons.forEach((btn) =>
        btn.classList.remove("active_project_bar")
      );
      button.classList.add("active_project_bar");

      projects.forEach((project) => {
        if (
          category === "all" ||
          project.getAttribute("data-category") === category
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

