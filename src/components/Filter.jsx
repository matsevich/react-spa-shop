import React from "react";
import { Input, Dropdown, Popup, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <>
  <Menu fixed="left" secondary>
      <Menu.Item className="toHide">
      <Popup
        trigger={<Input
          icon="sistrix"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          tabIndex={1}
          placeholder="Search..."
        />}
        content='Ви можете шукати за назвою і категорією'
        on='hover'
        position='right center'
      />
      </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      Усі
    </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "higherPrice"}
      onClick={setFilter.bind(this, "higherPrice")}
    >
      Від дорожчих
    </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "lowerPrice"}
      onClick={setFilter.bind(this, "lowerPrice")}
    >
      Від дешевших
    </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "Care"}
      onClick={setFilter.bind(this, "Care")}
    >
      Догляд
    </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "Face"}
      onClick={setFilter.bind(this, "Face")}
    >
      Обличчя
    </Menu.Item>
    <Menu.Item className="toHide"
      active={filterBy === "Eyes"}
      onClick={setFilter.bind(this, "Eyes")}
    >
      Очі
    </Menu.Item>
    <Menu.Item  className="toHide"
      active={filterBy === "Eyebrows"}
      onClick={setFilter.bind(this, "Eyebrows")}
    >
      Брови
    </Menu.Item>
    <Menu.Item className="toHide"
      active={filterBy === "Lips"}
      onClick={setFilter.bind(this, "Lips")}
    >
      Губи
    </Menu.Item>
    <Menu.Item className="toHide"
      active={filterBy === "Accessories"}
      onClick={setFilter.bind(this, "Accessories")}
    >
      Аксесуари
    </Menu.Item>
    <Dropdown tabIndex   closeOnBlur={false} text='TRUCCO.UA' icon="bars" floating labeled button className='icon drop'>
    <Dropdown.Menu>
    <Dropdown.Item>
    <Input
          icon="sistrix"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          tabIndex={1}
          placeholder="Search..."
        />
    </Dropdown.Item>
    <Dropdown.Divider />
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      Усі
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "higherPrice"}
      onClick={setFilter.bind(this, "higherPrice")}
    >
      Від дорожчих
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "lowerPrice"}
      onClick={setFilter.bind(this, "lowerPrice")}
    >
      Від дешевших
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Care"}
      onClick={setFilter.bind(this, "Care")}
    >
      Догляд
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Face"}
      onClick={setFilter.bind(this, "Face")}
    >
      Обличчя
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Eyes"}
      onClick={setFilter.bind(this, "Eyes")}
    >
      Очі
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Eyebrows"}
      onClick={setFilter.bind(this, "Eyebrows")}
    >
      Брови
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Lips"}
      onClick={setFilter.bind(this, "Lips")}
    >
      Губи
    </Menu.Item>
      </Dropdown.Item>
      <Dropdown.Item>
      <Menu.Item
      active={filterBy === "Accessories"}
      onClick={setFilter.bind(this, "Accessories")}
    >
      Аксесуари
    </Menu.Item>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </Menu>
  </>
);

export default Filter;
