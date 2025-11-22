import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Hunny usnk \n Music Artist & Creator`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Story
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Music
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Vision
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Hunny usnk is a music artist with a unique sound that blends
              contemporary rhythms with authentic storytelling. Based on a
              passion for creating music that resonates with the soul.
            </p>
            <br />
            <br />
            <p>
              From the early days of experimenting with beats and melodies to
              performing on stages around the world, Hunny usnk has crafted a
              musical journey that connects deeply with listeners. Every track
              is a piece of art, designed to evoke emotion and inspire.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'hunny usnk performing'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>The Music</h3>
            <div ref={valuesRef}>
              <p>
                Hunny usnk's music journey began with a deep love for rhythm
                and melody. Drawing inspiration from life experiences, cultural
                influences, and the desire to create something meaningful, each
                track represents a chapter in an ongoing story. The sound is
                authentic, raw, and always evolving.
              </p>
              <ol>
                <li>Authentic expression through music</li>
                <li>Connecting with listeners worldwide</li>
                <li>Pushing creative boundaries</li>
              </ol>
              <img alt={'hunny usnk in studio'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>The Vision</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Music is more than just sound - it's a movement, a feeling, a
                connection between artist and audience. Hunny usnk believes in
                creating music that transcends boundaries and speaks to the
                universal human experience.
              </p>
              <p>
                Every performance, every recording session, and every interaction
                with fans is an opportunity to share this vision. The goal is to
                build a community of listeners who not only enjoy the music but
                feel part of the journey.
              </p>
              <p>
                With an ever-growing catalog of original tracks and
                collaborations, Hunny usnk continues to evolve as an artist,
                always staying true to the core values of authenticity and
                passion.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'hunny usnk live'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
