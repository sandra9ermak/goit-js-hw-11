import axios from 'axios';

export const fetchPhotoFunc = async (name, currentPage) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=23779410-abe809331958b49ace969e642&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`,
  );
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else return Promise.reject('error request');
  //throw new Error(Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))
};
