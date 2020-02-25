// These two containers are siblings in the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM. 
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
    modalRoot.style.display = 'none';
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child({image}) {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <div className="divka">
        <p>Some text</p>
        <div className="divulka">
          <Image src={image} />
        </div>        
        <button>Цок!</button>
      </div> 
      
    </div>
  );
}
export default Parent;
