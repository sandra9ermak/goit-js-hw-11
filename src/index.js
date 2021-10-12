import { templateStringFunc, gallery } from './templateString';
import Notiflix from 'notiflix';
import { fetchPhotoFunc, url } from './fetchFunction';

const buttonLoadMore = document.querySelector('.load-more');
buttonLoadMore.classList.add('button-hiden', 'styleOfButton');
export const form = document.querySelector('#search-form');
const input = document.querySelector('input');
let page = 1;
let limit = 40;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const inputText = input.value;
  gallery.innerHTML = '';
  page = 1;
  if (!inputText.trim()) {
    return false;
  }

  const photo = await fetchPhotoFunc(inputText, page);
  if (photo.hits.length === 0) {
    buttonLoadMore.classList.add('button-hiden');
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${photo.totalHits} images.`);
    buttonLoadMore.classList.remove('button-hiden');
    templateStringFunc(photo);
  }
});

buttonLoadMore.addEventListener('click', async event => {
  page++;
  const photo = await fetchPhotoFunc(input.value, page);
  templateStringFunc(photo);
  if (page >= parseInt(photo.totalHits / limit)) {
    buttonLoadMore.classList.add('button-hiden');
    Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
  } else {
    templateStringFunc(photo);
  }
});
