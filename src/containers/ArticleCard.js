import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import ArticleCard from "../components/ArticleCard";


const mapStateToProps = ({cart}, { id }) => (
  {
  addedCount: cart.items.reduce(
    (count, subject) => count + (subject.id === id ? 1 : 0),
    0),
  }
);
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(ArticleCard);