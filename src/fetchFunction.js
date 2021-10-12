import axios from "axios";
// export const searchParams = new URLSearchParams({
//   image_type: photo,
//   orientation: horizontal,
//   safesearch: true,
// });

// export const url = `https://pixabay.com/api/?key=23801243-e85441bee56b02cd6046c9902&${searchParams}`;

// export const fetchPhotoFunc = (name) => new Promise((res, rej) => {
//   return fetch(`https://pixabay.com/api/?key=23801243-e85441bee56b02cd6046c9902&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`)
//     .then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       }
//       rej('error request');
//     })
//     .then(data => res(data));
// });

export const fetchPhotoFunc = async (name, page) => {
  const response = await axios.get(`https://pixabay.com/api/?key=23779410-abe809331958b49ace969e642&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      else return Promise.reject('error request');
        //throw new Error(Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))
};
