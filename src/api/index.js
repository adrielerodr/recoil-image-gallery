import fetch from 'node-fetch';
global.fetch = fetch;

const headers = {
  'Accept-Version': 'v1',
  'Authorization': 'SGvRc95YDxsXxIBBx8laFrJJPU119I8RzvwHpn6uUN0',
};

const api = 'https://api.unsplash.com/photos';
const clientId = 'SGvRc95YDxsXxIBBx8laFrJJPU119I8RzvwHpn6uUN0';
const count = 10;
const orientation = 'landscape';

const url = `${api}/random?client_id=${clientId}&count=${count}&orientation=${orientation}`;

export const getPhotos = () => {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET', headers })
    .then((res) => { 
      resolve(res.json());
    })
    .catch((error) => reject(error));
  });
}