import React, {Component} from 'react';
import { Card, Container, Dimmer, Loader, Image, Segment, Pagination } from "semantic-ui-react";
import axios from "axios"; 
import ArticleCard from "../containers/ArticleCard";
import Filter from "../containers/Filter";
import Menu from "../containers/MenuComponent";

class App extends Component {
  componentWillMount() {
    const { setArticle } = this.props;
    axios.get('/article.json').then(({data}) => {
      setArticle(data);
    });
  }

  render() {
    const { article, isReady } = this.props;
    const pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group doubling centered stackable itemsPerRow={4}>
          {!isReady ? 
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
          : article.map((subject, i) => 
              <ArticleCard key={i} {...subject} />)
          }
          </Card.Group>
          <Pagination
            boundaryRange={null}
            defaultActivePage={1}
            ellipsisItem={'...'}
            firstItem={null}
            lastItem={null}
            siblingRange={null}
            totalPages={pagesCount}
          />
      </Container>
    );
  }
}

export default App;
