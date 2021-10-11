import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const templateString = (photo => {
    const gallery = document.querySelector('.gallery');
    const markup = photo.map(item => {
        return `<div class="photo-card">
                <a href="${item.largeImageURL}">
                <img src="${item.webformatURL}" alt="${item.name}" loading="lazy" />
                </a>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes${item.likes}</b>
                        </p>
                        <p class="info-item">
                            <b>Views${item.views}</b>
                        </p>
                        <p class="info-item">
                            <b>Comments${item.comments}</b>
                        </p>
                        <p class="info-item">
                            <b>Downloads${item.downloads}</b>
                        </p>
                    </div>
                </div>`
    }).join('');
    gallery.innerHTML = markup;
});     
        
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});