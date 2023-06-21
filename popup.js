const images = document.querySelectorAll('.inner-image-container img');

images.forEach(image => {
  image.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    const popupImage = document.createElement('img');
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupContent.appendChild(popupImage);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    popup.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  });
});
