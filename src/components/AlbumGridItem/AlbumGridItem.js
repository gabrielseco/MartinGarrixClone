// @flow
import React from 'react';
import styles from './AlbumGridItem.scss';

export type AlbumGridItemProps = {
  img: string,
  url: string,
  title: string
};

class AlbumGridItem extends React.Component<AlbumGridItemProps, {}> {
  imageRef: any;
  constructor(props: AlbumGridItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { url, img, title } = this.props;
    return (
      <li className={styles.item}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={title} />
        </a>
      </li>
    );
  }
}

export default AlbumGridItem;
