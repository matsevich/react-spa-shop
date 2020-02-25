import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as articleActions from "../actions/article";
import App from "../components/App";
import orderBy from "lodash/orderBy";
import filter from "lodash/filter";

const sortBy = (article, filterBy) => {
  switch (filterBy) {
    case 'all':
      return article;
    case 'higherPrice':
      return orderBy(article, 'price', 'desc');
    case 'lowerPrice':
      return orderBy(article, 'price', 'asc');
    case 'Care':
      return filter(article, ['section', 'Care']);
    case 'Face':
      return filter(article, ['section', 'Face']);
    case 'Eyes':
      return filter(article, ['section', 'Eyes']);
    case 'Eyebrows':
      return filter(article, ['section', 'Eyebrows']);
    case 'Lips':
      return filter(article, ['section', 'Lips']);
    case "Accessories":
      return filter(article, ['section', 'Accessories']);
    default:
      return article;
  }
};
const filterArticle = (article, searchQuery) =>
  article.filter(
    o => 
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.section.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  ); 
const searchArticle = (article, filterBy, searchQuery) => {
    return sortBy(filterArticle(article, searchQuery), filterBy);
  };

const mapStateToProps = ({article, filter}) => (
  {
  article: article.items && searchArticle(article.items, filter.filterBy, filter.searchQuery),
  isReady: article.isReady,
  pageSize: article.pageSize,
  totalUsersCount: article.totalUsersCount
  }
);
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(articleActions, dispatch),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(App);
