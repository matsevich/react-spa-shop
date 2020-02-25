import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import MenuComponent from "../components/MenuComponent";
import uniqBy from 'lodash/uniqBy';


const mapStateToProps = ({ cart }, { id }) => (
  {
  totalPrice: cart.items.reduce((total, subject) => total + subject.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
  addedCount: cart.items.reduce((count, subject) => count + (subject.id === id ? 1 : 0), 0),
  }
);
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuComponent);