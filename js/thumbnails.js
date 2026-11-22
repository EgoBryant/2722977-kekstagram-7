const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos, onPictureClick) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const {url, description, likes, comments} = photo;
    const picture = pictureTemplate.cloneNode(true);
    const image = picture.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      onPictureClick(photo);
    });
    fragment.appendChild(picture);
  });
  pictures.appendChild(fragment);
};

export {renderThumbnails};
