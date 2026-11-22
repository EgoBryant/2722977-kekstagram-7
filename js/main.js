import {createPhotos} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openBigPicture} from './big-picture.js';

renderThumbnails(createPhotos(), openBigPicture);
