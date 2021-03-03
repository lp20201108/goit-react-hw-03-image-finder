import React, { Component } from 'react';
import styles from './Searchbar.module.css';


export default class SearchBar extends Component {

  state = {
    query: '',

}

  
  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state.query)
  }

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit}
          className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

      <input
      name="query"
      value={query}
      onChange={this.handleChange}
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }
}


