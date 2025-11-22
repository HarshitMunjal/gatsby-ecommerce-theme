import React from 'react';
import { Link } from 'gatsby';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';
import albumsData from '../../helpers/albums.json';

import * as styles from './index.module.css';

const AlbumsIndexPage = () => {
  return (
    <Layout>
      <Hero
        maxWidth={'800px'}
        image={'/banner1.png'}
        title={'Albums & EPs'}
        subtitle={'Discover the musical journey of Hunny Usnk'}
      />

      <Container size={'large'}>
        <div className={styles.albumsGrid}>
          {albumsData.map((album) => (
            <Link
              key={album.albumId}
              to={`/albums/${album.albumId.replace('-2024', '')}`}
              className={styles.albumCard}
            >
              <div className={styles.albumImageContainer}>
                <img
                  src={toOptimizedImage(album.coverImage)}
                  alt={album.title}
                  className={styles.albumImage}
                />
              </div>
              <div className={styles.albumInfo}>
                <h2>{album.title}</h2>
                <p className={styles.artist}>{album.artist}</p>
                <p className={styles.year}>{album.releaseYear}</p>
                <p className={styles.genre}>{album.genre}</p>
                <p className={styles.trackCount}>
                  {album.tracks.length} Track{album.tracks.length > 1 ? 's' : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default AlbumsIndexPage;
