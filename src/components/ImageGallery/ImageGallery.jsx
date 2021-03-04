import styles from './ImageGallery.module.css';
import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = ({ images, setLargeImg }) => {
  return (
     <ul className={styles.ImageGallery}>
            {images.map(({ webformatURL, tags,largeImageURL, id }) => (
              <ImageGalleryItem
                  key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                 setLargeImg={setLargeImg}
              />
            ))}
        </ul>
  )
}

export default ImageGallery



