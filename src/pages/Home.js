import { Gallery } from 'components/GalleryList/GalleryList';
import { useEffect } from 'react';
import { useState } from 'react';

import * as API from '../services/api';

const Home = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.getTrendingFilms();
        setGallery(response);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      <h1>Films is trending today</h1>
      <Gallery gallery={gallery} />
    </main>
  );
};

export default Home;
