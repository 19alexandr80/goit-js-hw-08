// Add imports above this line
import sampleCards from './galleryCards.hbs';
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeEnd', sampleCards(galleryItems));
console.log(sampleCards(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
