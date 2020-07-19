import { selector } from 'recoil';
import { getPhotos } from '../../api';

export const fetchGalleryState = selector({
  key: 'fetchGalleryState',
  get: async ({ get }) => {
    const response = await getPhotos();
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});