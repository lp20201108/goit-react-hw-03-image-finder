import axios from "axios";

// "https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12";

const KEY = "20207250-3e42ced94c2caff6bd60b0b02";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchImages;

//     .then(({ data }) => data.hits);
