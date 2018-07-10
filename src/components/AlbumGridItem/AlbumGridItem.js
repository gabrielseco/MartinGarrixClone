// @flow
import React from 'react';
import styles from './AlbumGridItem.scss';

export type AlbumGridItemProps = {
  img: string,
  url: string,
  title: string
};

const AlbumGridItem = ({ img, url, title }: AlbumGridItemProps) => (
  <li className={styles.item}>
    <a href={url} target="_blank">
      <img src={img} alt={title} />
    </a>
  </li>
);

export default AlbumGridItem;
