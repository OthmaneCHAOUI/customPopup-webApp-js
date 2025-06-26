function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('open-popup');
    button.addEventListener('click', showPopup);

    const closeButton = document.getElementById('close-popup');
    closeButton.addEventListener('click', closePopup);
});