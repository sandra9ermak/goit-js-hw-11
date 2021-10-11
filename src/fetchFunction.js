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

export const fetchPhotoFunc = async (name) => {
  const response = await fetch(`https://pixabay.com/api/?key=23801243-e85441bee56b02cd6046c9902&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`)
      if (response.status >= 200 && response.status < 300) {
        const users = await response.json();
        return users;
      }
      else return Promise.reject('Requst error');
};
