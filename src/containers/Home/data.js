// @flow
import { GET_PUBLIC_PATH } from './../../utils';

export const heroProps = {
  images: {
    backgroundImage: `${GET_PUBLIC_PATH('ocean-bg.jpg')}`,
    artboard: {
      url: `${GET_PUBLIC_PATH('martingarrix-khalid-ocean.jpg')}`,
      alt: 'Martin Garrix feat. Khalid - Ocean'
    }
  },
  info: {
    date: 'Jun 15, 2018',
    title: 'Ocean <br/> is out now!',
    artist: 'Martin Garrix feat. Khalid',
    url: '#'
  }
};

export const images = {
  path: `${GET_PUBLIC_PATH('releases')}`,
  factory: () => {
    return [
      {
        img: `${images.path}/ocean.jpeg`,
        url: 'http://stmpd.co/MKOCWE',
        title: 'Ocean'
      },
      {
        img: `${images.path}/game-over.jpeg`,
        url: 'http://stmpd.co/MLGOWE',
        title: 'Game Over'
      },
      {
        img: `${images.path}/like-i-do.jpg`,
        url: 'http://stmpd.co/LIDWE',
        title: 'Like I Do'
      },
      {
        img: `${images.path}/so-far-away.jpg`,
        url: 'https://stmpdrcrds.lnk.to/dlThVWE',
        title: 'So Far Away'
      },
      {
        img: `${images.path}/pizza.jpg`,
        url: 'http://stmpd.co/ltoA2WE',
        title: 'Pizza'
      },
      {
        img: `${images.path}/there-for-you.jpg`,
        url: 'http://stmpd.co/Dj-kpWE',
        title: 'There for you'
      },
      {
        img: `${images.path}/byte.jpg`,
        url: 'http://stmpd.co/iQNlRWE',
        title: 'Byte'
      },
      {
        img: `${images.path}/scared-to-be-lonely.jpg`,
        url: 'http://stmpd.co/hIG_RWE',
        title: 'Scared to be lonely'
      },
      {
        img: `${images.path}/make-up-your-mind.jpg`,
        url: 'http://stmpd.co/sL7lBWE',
        title: 'Make Up Your Mind'
      }
    ];
  }
};
