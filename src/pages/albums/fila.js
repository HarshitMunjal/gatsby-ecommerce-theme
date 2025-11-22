import React from 'react';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';
import albumsData from '../../helpers/albums.json';

import * as styles from './fila.module.css';

const FilaAlbumPage = () => {
  const album = albumsData[0]; // F.I.L.A. album

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'800px'}
          image={toOptimizedImage(album.coverImage)}
          title={album.title}
          subtitle={`${album.artist} • ${album.releaseYear}`}
        />

        {/* Album Description */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.albumDescription}>
            <h2>About the Album</h2>
            <p>{album.description}</p>
            <br />
            <p className={styles.theme}>
              <strong>Overall Theme:</strong> {album.theme}
            </p>
          </div>
        </Container>

        {/* Tracklist */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.tracklistContainer}>
            <h2>Track List</h2>
            {album.tracks.map((track, index) => (
              <div key={track.trackNumber} className={styles.trackCard}>
                <div className={styles.trackImageContainer}>
                  <img
                    src={toOptimizedImage(track.coverImage)}
                    alt={track.title}
                    className={styles.trackImage}
                  />
                </div>
                <div className={styles.trackInfo}>
                  <div className={styles.trackHeader}>
                    <h3>
                      {track.trackNumber}. {track.title}
                      {track.bonus && <span className={styles.bonusTag}> [Bonus Track]</span>}
                    </h3>
                    {track.featuring && (
                      <p className={styles.featuring}>ft. {track.featuring}</p>
                    )}
                  </div>
                  <p className={styles.mood}>
                    <strong>Mood:</strong> {track.mood}
                  </p>
                  <p className={styles.description}>{track.description}</p>
                  {track.duration && (
                    <p className={styles.duration}>Duration: {track.duration}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Streaming Links */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.streamingSection}>
            <h2>Listen Now</h2>
            <div className={styles.streamingLinks}>
              <a
                href={album.streamingLinks.spotify}
                className={styles.streamingButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
              <a
                href={album.streamingLinks.appleMusic}
                className={styles.streamingButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Music
              </a>
              <a
                href={album.streamingLinks.youtube}
                className={styles.streamingButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href={album.streamingLinks.soundcloud}
                className={styles.streamingButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FilaAlbumPage;
