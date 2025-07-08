function showContact() {
    const contact = document.getElementById("contact-info");
    contact.style.display = contact.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("open");
  });

  // Close dropdown if clicking elsewhere
  document.addEventListener("click", function (e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("open");
    }
  });
});
