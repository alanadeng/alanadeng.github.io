function showContact() {
    const contact = document.getElementById("contact-info");
    contact.style.display = contact.style.display === "none" ? "block" : "none";
}


function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.classList.remove("open");
    }
  });
});
