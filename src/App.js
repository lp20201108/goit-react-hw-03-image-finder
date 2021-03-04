import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import imagesApi from "./services/imagesApi";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: "",
    imgTags: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fecthImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fecthImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    const options = {
      searchQuery,
      currentPage,
    };

    imagesApi(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setLargeImg = ({ target }) => {
    const { largeimageurl, tags } = target.dataset;
    this.setState({ largeImageURL: largeimageurl, imgTags: tags });
    this.toggleModal();
  };

  render() {
    const {
      images,
      isLoading,
      error,
      largeImageURL,
      imgTags,
      showModal,
    } = this.state;

    return (
      <div className={styles.App}>
        {error && (
          <h1>We are sorry! Something went wrong.Please, try again!</h1>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <Loader
          className={styles.loader}
          visible={isLoading}
          secondaryColor="#ff6d00"
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />

        <ImageGallery images={images} setLargeImg={this.setLargeImg} />

        {!!images.length && <Button onLoadMore={this.fecthImages} />}

        {/* <button type="button" onClick={this.toggleModal}>
          show modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imgTags} />
          </Modal>
        )}
      </div>
    );
  }
}
