// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link js-target" href="${original}">
            <img
            class="gallery__image js-target"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
        </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsDelay: 250,
  captionsData: 'alt',
});
