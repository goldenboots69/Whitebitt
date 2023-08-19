document.addEventListener('DOMContentLoaded', () => {
  const errorPopup = document.getElementById('errorPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  

  // Initially hide the popup
  errorPopup.style.display = 'block';

  closePopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'none';
  });
});
