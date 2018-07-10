// @flow
import React from 'react';
import { AlbumGridItem } from 'components';
import type { AlbumGridItemProps } from './../AlbumGridItem';
import styles from './AlbumGrid.scss';

type Props = {
  images: AlbumGridItemProps[],
  observer: IntersectionObserver
};

const AlbumGrid = ({ images, observer }: Props) => (
  <ul className={styles.container}>
    {images.map(image => (
      <AlbumGridItem
        img={image.img}
        url={image.url}
        title={image.title}
        observer={observer}
        key={image.url}
      />
    ))}
  </ul>
);

export default AlbumGrid;
