// Function to show/hide contact info
function showContact() {
    const contact = document.getElementById("contact-info");
    // Use classList.toggle for smoother transitions (if defined in CSS)
    contact.classList.toggle("visible"); 
}

// Function to toggle the navigation dropdown menu
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  // Use classList.toggle for the dropdown visibility
  dropdown.classList.toggle("open");
}

// Click listener to close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("dropdownMenu");
    const dropdownContainer = event.target.closest('.dropdown');
    
    // Check if the click is outside the dropdown container AND the dropdown is open
    if (dropdown && !dropdownContainer && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
    }
});