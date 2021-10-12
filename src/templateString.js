import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export const templateStringFunc = (photo => {
    const markup = photo.hits.map(item => {
        return `<div class="photo-card">
                <a href="${item.largeImageURL}">
                    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" class="webformatURL-cl"/>
                </a>
                    <div class="info">
                        <p class="info-item">
                            <b class="info-item-value">Likes</b>${item.likes}
                        </p>
                        <p class="info-item">
                            <b class="info-item-value">Views</b>${item.views}
                        </p>
                        <p class="info-item">
                            <b class="info-item-value">Comments</b>${item.comments}
                        </p>
                        <p class="info-item">
                            <b class="info-item-value">Downloads</b>${item.downloads}
                        </p>
                    </div>
                </div>`;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    
    lightbox.refresh();

    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();
    
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
});

        