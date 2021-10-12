//import { url } from "./fetchFunction";
import { templateStringFunc, gallery } from "./templateString";
import Notiflix from "notiflix";
import { fetchPhotoFunc } from './fetchFunction';

const buttonLoadMore = document.querySelector('.load-more');
buttonLoadMore.classList.add('button-hiden', 'styleOfButton');
const form = document.querySelector('#search-form');
const input = document.querySelector('input');
let page = 1;
let limit = 20;
const totalPages = 500 / limit;

//const array = [];

form.addEventListener('submit', event => {
    event.preventDefault();
    const inputText = input.value;
    gallery.innerHTML = '';
    page = 1;
    if (!inputText.trim()) {
        return false;
    }

    fetchPhotoFunc(inputText)
        .then((photo) => {
            if (photo.data.hits.length === 0) {
                buttonLoadMore.classList.add('button-hiden');
                return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            } else {
                //console.log(photo.data.totalHits);
                Notiflix.Notify.success(`Hooray! We found ${photo.data.totalHits} images.`);
                buttonLoadMore.classList.remove('button-hiden');
                return templateStringFunc(photo);
            }
        })
    
})

buttonLoadMore.addEventListener('click', event => {
    if (page > 1) {
        return Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
    } else {
        page = page + 1;
    }
})
