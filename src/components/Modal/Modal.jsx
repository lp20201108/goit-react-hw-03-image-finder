import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');



export default class Modal extends Component {
  
  componentDidMount() {

    window.addEventListener("keydown", this.handleCloseEscape);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEscape )
  }

handleCloseEscape = event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    }

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
  }
}

  render() {
      
   return createPortal(
     <div className={styles.Overlay} onClick = {this.handleBackdropClick}>
     <div className={styles.Modal}>{this.props.children}</div>
       </div>,
       modalRoot,
        );
    
}
}


Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
   