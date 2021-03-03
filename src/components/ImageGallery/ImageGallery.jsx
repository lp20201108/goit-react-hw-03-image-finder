import styles from './ImageGallery.module.css';
import axios from 'axios';
import React from 'react'
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = ({images}) => {
  return (
     <ul className={styles.ImageGallery}>
            {images.map(({ webformatURL, largeImageURL, tags, id }) => (
              <ImageGalleryItem
                  key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
              />
            ))}
        </ul>
  )
}

export default ImageGallery



