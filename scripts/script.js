// Function to toggle the dropdown content visibility and fade in list items
function toggleDropdown(button, fade=true) {
    var dropdown = button.parentNode;
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');

    // Toggle border radius class based on dropdown visibility
    button.classList.toggle('rounded-top');

    // Check if the dropdown content is being shown
    if (fade && dropdownContent.classList.contains('show')) {
        // If shown, fade in the list items
        fadeInListItems(dropdownContent);
    } else {
        // If hidden, remove the fade-in class from list items
        removeFadeInClass(dropdownContent);
    }
}

// Function to add fade-in class to list items with delay when clicked
function fadeInListItems(content) {
    var listItems = content.querySelectorAll('li');
    listItems.forEach(function(item, index) {
        setTimeout(function() {
        item.classList.add('fade-in');
        }, index * 200); // Adjust the delay time here (in milliseconds)
    });
}

// Function to remove the fade-in class from list items
function removeFadeInClass(content) {
    var listItems = content.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.classList.remove('fade-in');
    });
}