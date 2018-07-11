// @flow
import { GET_PUBLIC_PATH } from './../utils';

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

export const latestReleases = {
  path: `${GET_PUBLIC_PATH('releases')}`,
  factory: () => {
    return [
      {
        img: `${latestReleases.path}/ocean.jpeg`,
        url: 'http://stmpd.co/MKOCWE',
        title: 'Ocean'
      },
      {
        img: `${latestReleases.path}/game-over.jpeg`,
        url: 'http://stmpd.co/MLGOWE',
        title: 'Game Over'
      },
      {
        img: `${latestReleases.path}/like-i-do.jpg`,
        url: 'http://stmpd.co/LIDWE',
        title: 'Like I Do'
      },
      {
        img: `${latestReleases.path}/so-far-away.jpg`,
        url: 'https://stmpdrcrds.lnk.to/dlThVWE',
        title: 'So Far Away'
      },
      {
        img: `${latestReleases.path}/pizza.jpg`,
        url: 'http://stmpd.co/ltoA2WE',
        title: 'Pizza'
      },
      {
        img: `${latestReleases.path}/there-for-you.jpg`,
        url: 'http://stmpd.co/Dj-kpWE',
        title: 'There for you'
      },
      {
        img: `${latestReleases.path}/byte.jpg`,
        url: 'http://stmpd.co/iQNlRWE',
        title: 'Byte'
      },
      {
        img: `${latestReleases.path}/scared-to-be-lonely.jpg`,
        url: 'http://stmpd.co/hIG_RWE',
        title: 'Scared to be lonely'
      },
      {
        img: `${latestReleases.path}/make-up-your-mind.jpg`,
        url: 'http://stmpd.co/sL7lBWE',
        title: 'Make Up Your Mind'
      }
    ];
  }
};

export const releases = {
  path: `${GET_PUBLIC_PATH('releases')}`,
  factory: () => {
    return [
      {
        img: `${releases.path}/ocean.jpeg`,
        url: 'http://stmpd.co/MKOCWE',
        title: 'Ocean'
      },
      {
        img: `${releases.path}/game-over.jpeg`,
        url: 'http://stmpd.co/MLGOWE',
        title: 'Game Over'
      },
      {
        img: `${releases.path}/like-i-do.jpg`,
        url: 'http://stmpd.co/LIDWE',
        title: 'Like I Do'
      },
      {
        img: `${releases.path}/so-far-away.jpg`,
        url: 'https://stmpdrcrds.lnk.to/dlThVWE',
        title: 'So Far Away'
      },
      {
        img: `${releases.path}/pizza.jpg`,
        url: 'http://stmpd.co/ltoA2WE',
        title: 'Pizza'
      },
      {
        img: `${releases.path}/there-for-you.jpg`,
        url: 'http://stmpd.co/Dj-kpWE',
        title: 'There for you'
      },
      {
        img: `${releases.path}/byte.jpg`,
        url: 'http://stmpd.co/iQNlRWE',
        title: 'Byte'
      },
      {
        img: `${releases.path}/scared-to-be-lonely.jpg`,
        url: 'http://stmpd.co/hIG_RWE',
        title: 'Scared to be lonely'
      },
      {
        img: `${releases.path}/make-up-your-mind.jpg`,
        url: 'http://stmpd.co/sL7lBWE',
        title: 'Make Up Your Mind'
      }
    ];
  }
};
