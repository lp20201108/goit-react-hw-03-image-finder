import React, { Component } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import styles from "./App.css";
import imagesApi from "./services/imagesApi";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

// const KEY = "20207250-3e42ced94c2caff6bd60b0b02";
// axios.defaults.baseURL = "https://pixabay.com/api";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
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
      largeImageUrl: "",
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
      // axios
      //   .get(
      //     `/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      //   )
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

  setImgInfo = ({ target }) => {
    const { largeimageurl, tags } = target.dataset;
    this.setState({ largeImageURL: largeimageurl, imgTags: tags });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, error, largeImageURL, imgTags } = this.state;

    return (
      <div className={styles.appContainer}>
        {error && (
          <h1>We are sorry! Something went wrong.Please, try again!</h1>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />
        <Loader
          className={styles.loader}
          visible={isLoading}
          secondaryColor="#ff6d00"
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />

        <ImageGallery images={images} />

        {images.length ? (
          <button type="button" onClick={this.fecthImages}>
            Load more
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
