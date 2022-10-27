import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './ModalStyled';


const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
}


componentWillUnmount(){
    window.removeEventListener('keydown', this.handleClose);
 
}

handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
     
     <Overlay onClick={this.handleClose}>
        <StyledModal>{this.props.children}</StyledModal>
     </Overlay>,
      modalRoot
     
    );
  }
}


