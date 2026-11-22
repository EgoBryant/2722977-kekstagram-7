const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
let previousFocus;

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  if (previousFocus) {
    previousFocus.focus();
  }
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const comment = commentTemplate.cloneNode(true);
    const image = comment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    comment.querySelector('.social__text').textContent = message;
    fragment.appendChild(comment);
  });
  commentsList.replaceChildren(fragment);
};

const openBigPicture = ({url, description, likes, comments}) => {
  previousFocus = document.activeElement;
  const image = bigPicture.querySelector('.big-picture__img img');
  image.src = url;
  image.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  renderComments(comments);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.focus();
};

closeButton.addEventListener('click', closeBigPicture);

export {openBigPicture};
