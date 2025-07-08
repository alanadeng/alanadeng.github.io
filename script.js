function showContact() {
    const contact = document.getElementById("contact-info");
    contact.style.display = contact.style.display === "none" ? "block" : "none";
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}


document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("dropdownMenu");
    const moreBtn = event.target.closest('a');

    if (!event.target.closest('.dropdown') && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});
