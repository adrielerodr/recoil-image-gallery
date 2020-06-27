import fetch from 'node-fetch';
global.fetch = fetch;

const headers = {
  'Accept-Version': 'v1',
  'Authorization': 'SGvRc95YDxsXxIBBx8laFrJJPU119I8RzvwHpn6uUN0',
};

const url = 'https://api.unsplash.com/photos/random?client_id=SGvRc95YDxsXxIBBx8laFrJJPU119I8RzvwHpn6uUN0&count=30&orientation=landscape';

export const getPhotos = () => {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET', headers })
    .then((res) => { 
      resolve(res.json());
    })
    .catch((error) => reject(error));
  });
}