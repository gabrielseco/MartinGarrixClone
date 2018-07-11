// @flow
import React from 'react';
import { AlbumGrid } from 'components';
import type { AlbumGridItemProps } from './../AlbumGridItem';
import styles from './LatestReleases.scss';

type Props = {
  images: AlbumGridItemProps[]
};

const LatestReleases = ({ images }: Props) => (
  <div className={styles.container} id="last-releases">
    <h2>Latest Releases</h2>
    <AlbumGrid images={images} />
  </div>
);

export default LatestReleases;
