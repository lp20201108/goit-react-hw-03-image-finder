import styles from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags = '',
    onSetImgInfo,
}) => {

    return (
        <li className={styles.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} data-largeimageurl={largeImageURL} data-tags={tags} onClick={onSetImgInfo} />
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