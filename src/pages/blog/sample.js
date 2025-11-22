import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'news'}
              title={'New Single Out Now: Making Music That Matters'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Hunny usnk's latest single drops today, marking a new chapter
                  in the artist's journey. This track combines innovative beats
                  with heartfelt lyrics, creating a sound that's both fresh and
                  authentic. Available now on all streaming platforms.
                </p>
                <p className={styles.blogParagraph}>
                  The creative process behind this track was intense and
                  rewarding. Drawing from personal experiences and collaborating
                  with talented producers, Hunny usnk crafted something truly
                  special. The track explores themes of growth, resilience, and
                  staying true to yourself in a world that's constantly changing.
                </p>
                <p className={styles.blogParagraph}>
                  Working in the studio has always been where the magic happens.
                  Every beat, every lyric, every melody choice comes from a place
                  of genuine emotion and artistic vision. This release represents
                  countless hours of dedication and passion poured into creating
                  something meaningful.
                </p>
                <p className={styles.blogParagraph}>
                  The response from fans has been incredible. Seeing how the
                  music connects with people and becomes part of their lives is
                  what drives Hunny usnk to keep creating. This is just the
                  beginning - more music is on the way, and the journey continues.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'hunny usnk in studio'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'performing live'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>What's Next</h2>
                <p className={styles.blogParagraph}>
                  The future is bright and full of new music. Hunny usnk is
                  already working on the next release, experimenting with new
                  sounds and pushing creative boundaries. Stay tuned to social
                  media and streaming platforms for announcements about upcoming
                  singles, albums, and live performances.
                </p>
                <p className={styles.blogParagraph}>
                  For fans wanting to dive deeper into the music, exclusive
                  behind-the-scenes content is available through various
                  platforms. From studio sessions to the creative process,
                  there's always something new to discover about how the music
                  comes to life.
                </p>
                <p className={styles.blogParagraph}>
                  Thank you to everyone who has supported this journey. Your
                  energy and enthusiasm fuel the creative fire and inspire new
                  music. Let's continue this journey together, one track at a
                  time.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
