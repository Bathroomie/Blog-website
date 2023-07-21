function showPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}

// Event listener for the open popup button
document.getElementById('openPopupButton').addEventListener('click', showPopup);

// Event listener for the close button inside the popup
document.getElementById('closePopupButton').addEventListener('click', hidePopup);

// Event listener for form submission to hide the popup after submission (you can customize this part further)
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    hidePopup(); // Hide the popup after form submission
});