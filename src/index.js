//import { url } from "./fetchFunction";
import { templateString } from "./templateString";
import Notiflix from "notiflix";
import { fetchPhotoFunc } from './fetchFunction';

const button = document.querySelector('button');
const form = document.querySelector('#search-form');
const input = document.querySelector('input');

const array = [];

input.addEventListener('submit', event => {
    event.preventDefault;
    const inputText = input.value;
    fetchPhotoFunc(inputText)
        .then((request) => {
            if (request.status === 404) Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            templateString(request);
    })
})
