// @flow
import React from 'react';
import styles from './AlbumGridItem.scss';

export type AlbumGridItemProps = {
  img: string,
  url: string,
  title: string,
  observer: IntersectionObserver
};

class AlbumGridItem extends React.Component<AlbumGridItemProps, {}> {
  imageRef: any;
  constructor(props: AlbumGridItemProps) {
    super(props);
    this.state = {};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.props.observer.observe(this.imageRef.current);
  }

  render() {
    const { url, img, title } = this.props;
    return (
      <li className={styles.item}>
        <a href={url} target="_blank">
          <img ref={this.imageRef} data-src={img} alt={title} />
        </a>
      </li>
    );
  }
}

export default AlbumGridItem;
