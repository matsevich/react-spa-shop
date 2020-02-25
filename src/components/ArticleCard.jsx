import React from 'react';
import { Card, Image, Icon, Reveal, Popup, Button, Rating } from 'semantic-ui-react';

/* const modalRoot = document.getElementById('modal-root'); */
const ArticleCard = subject => {
  const { title, section, description, price, rating, image, image2, image3, addToCart, addedCount } = subject;
    
  
  return (
    <Card>
      <div className="card-image">
      <Reveal animated='slow rotate'>
        <Reveal.Content visible>
          <Image src={image} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image  src={image2} />
          <Image src={image3} className="third-card-avatar" bordered avatar size='medium' />
          <Image src={image3} className="third-card-img" size='large' />
        </Reveal.Content>
      </Reveal>
      </div>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{section}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
      <br />
      <Card.Description>
      <Popup trigger={<Rating icon='star' disabled defaultRating={rating} maxRating={5} />} >
        <span className="span-text"> Проголосувало {Math.floor(Math.random() * (1800 - 450)) + 450} людей за цей товар на сайті https://www.kikocosmetics.com</span>
      </Popup>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="#logo">
        <Icon name='grn' />
        ₴ &nbsp; {price} 
      </a>
    </Card.Content>
    <Button onClick={addToCart.bind(this, subject)} animated='vertical'>
      <Button.Content hidden>Купити {addedCount > 0 && `(${addedCount})`}</Button.Content>
      <Button.Content visible>
      <Icon.Group size='large'>
        <Icon name='shop' />
        <Icon corner name='addedCount' />
      </Icon.Group>
      {addedCount > 0 && `(${addedCount})`}
      </Button.Content>
    </Button>
  </Card>
  );
  };


export default ArticleCard;
 