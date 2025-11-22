import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';
import albumsData from '../../helpers/albums.json';

const ProductCollectionGrid = (props) => {
  const album = albumsData[0]; // F.I.L.A. album
  const tracks = album?.tracks || [];

  return (
    <div className={styles.root}>
      {tracks.map((track, index) => (
        <ProductCollection
          key={track.trackNumber}
          image={track.coverImage}
          title={track.title}
          text={track.featuring ? `ft. ${track.featuring}` : track.mood}
          link={'/shop'}
        />
      ))}
    </div>
  );
};

export default ProductCollectionGrid;
