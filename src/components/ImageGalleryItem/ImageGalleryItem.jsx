import styles from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';
import React from 'react';

const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags = '',
    setLargeImg,
}) => {

    return (
        <li className={styles.ImageGalleryItem}>
            <img src={webformatURL}
                alt={tags}
                className={styles.ImageGalleryItemImage}
                data-largeimageurl={largeImageURL}
                data-tags={tags}
                onClick={setLargeImg} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onSetImgInfo: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;