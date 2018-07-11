// @flow
import React from 'react';
import { AlbumGrid } from 'components';
import { lazyLoadImageCallback, config } from './../../lazy-load';
import type { AlbumGridItemProps } from './../AlbumGridItem';
import styles from './LatestReleases.scss';

type Props = {
  images: AlbumGridItemProps[]
};

const observer = new IntersectionObserver(lazyLoadImageCallback, config);

const LatestReleases = ({ images }: Props) => (
  <div className={styles.container} id="last-releases">
    <h2>Latest Releases</h2>
    <AlbumGrid images={images} observer={observer} />
  </div>
);

export default LatestReleases;
