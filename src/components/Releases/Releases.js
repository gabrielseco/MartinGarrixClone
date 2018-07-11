// @flow
import React from 'react';
import type { AlbumGridItemProps } from './../AlbumGridItem';
import styles from './Releases.scss';

const Releases = ({ releases }: { releases: AlbumGridItemProps }) => (
  <ul className={styles.container}>
    {releases.map(release => {
      return (
        <li className={styles.listItem} key={release.url}>
          <img src={release.img} alt={release.title} />
          <a href={release.url} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-play" />
            &nbsp; Listen Now
          </a>
        </li>
      );
    })}
  </ul>
);

export default Releases;
