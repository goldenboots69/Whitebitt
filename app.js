document.addEventListener('DOMContentLoaded', () => {
  const errorPopup = document.getElementById('errorPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');


    errorPopup.style.display = "flex";

  closePopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'none';
  });
});
