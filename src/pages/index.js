import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Hunny usnk'}
        subtitle={'New Music Out Now'}
        ctaText={'listen now'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Welcome to the official website of{' '}
          <span className={styles.gold}>Hunny usnk</span>
        </p>
        <p>
          Discover new music, exclusive merchandise, and{' '}
          <span className={styles.gold}>upcoming shows</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Featured Releases'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Latest Tracks'} link={'/shop'} textLink={'view all music'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Exclusive Merchandise'}
            description={`Get your hands on exclusive Hunny usnk merchandise - limited edition items available now`}
            textLink={'shop merch'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`New Album \n Out Now`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>STREAM</Link>
          <Link to={'/shop'}>BUY</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Hunny usnk'}
        quote={
          '"Music is my way of connecting with the world. Every track tells a story, every beat carries emotion."'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Latest News'} subtitle={'Updates from Hunny usnk'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Join the Journey'}
          subtitle={
            'Follow along as Hunny usnk creates new sounds and shares the creative process. Be part of the music journey.'
          }
          ctaText={'learn more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Follow Hunny usnk'}
          subtitle={'Tag @hunnyusnk to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
