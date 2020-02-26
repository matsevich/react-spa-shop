import React from 'react';
import { Menu, Popup, List, Button, Image, Icon } from 'semantic-ui-react';

const Cart = subj => {
  const { title, id, image, price, removeFromCart, addedCount } = subj;
  return (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="white">
          <Button.Content visible>
          <Icon.Group size='medium'>
            <Icon name='trash alternate' />
            <Icon corner name='addedCount' />
          </Icon.Group>
          </Button.Content>
        </Button>
      </List.Content>
      <Image circular src={image} size="mini" />
      <List.Content>
        {title}
      </List.Content>
      <List.Content>
      
        <i>₴ &nbsp;{price}&nbsp; {'x' + addedCount > 0 && `(${addedCount})`}</i>
      </List.Content>
    </List.Item>
  </List>
  );
  };
const MenuComponent = compon => {
  const { totalPrice, count, items } = compon;
  return (
  <Menu fixed="top">
        <Menu.Item name='browse' centred id="logo">
          TRUCCO.UA
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
            Всього: &nbsp; <b>{totalPrice}</b> &nbsp; грн.
          </Menu.Item>

          <Popup
            trigger={
            <Menu.Item name='help'>
              Корзина (<b>{count}</b>)
            </Menu.Item>
            }
            on="click"
            pinned
            position='bottom right'
            wide="very"
            className="popCart"
          >
          {items.map(subject => (
              <Cart {...subject} />
            ))
            }
            <hr />
            <div className="cart-botom">
              <span>Разом: &nbsp; <b>{totalPrice}</b> &nbsp; грн.</span>
            <Button  onClick floated='right' compact size='large' animated='fade'>
              <Button.Content visible>Оформити</Button.Content>
              <Button.Content className='check-cart-icon'  hidden>₴ &nbsp;<b>{totalPrice}</b>&nbsp;<Icon name="chevron circle down" /></Button.Content>
            </Button>
            </div>
          </Popup>
        </Menu.Menu>
  </Menu>
  );
};
export default MenuComponent;