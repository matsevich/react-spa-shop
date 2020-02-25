import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu fixed="left" secondary>
    <Menu.Menu position="left">
      <Menu.Item>
        <Input
          icon="sistrix"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          tabIndex
          placeholder="Search..."
        />
      </Menu.Item>
    </Menu.Menu>
    <Menu.Item
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      Усі
    </Menu.Item>
    <Menu.Item
      active={filterBy === "higherPrice"}
      onClick={setFilter.bind(this, "higherPrice")}
    >
      Від дорожчих
    </Menu.Item>
    <Menu.Item
      active={filterBy === "lowerPrice"}
      onClick={setFilter.bind(this, "lowerPrice")}
    >
      Від дешевших
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Care"}
      onClick={setFilter.bind(this, "Care")}
    >
      Догляд
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Face"}
      onClick={setFilter.bind(this, "Face")}
    >
      Обличчя
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Eyes"}
      onClick={setFilter.bind(this, "Eyes")}
    >
      Очі
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Eyebrows"}
      onClick={setFilter.bind(this, "Eyebrows")}
    >
      Брови
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Lips"}
      onClick={setFilter.bind(this, "Lips")}
    >
      Губи
    </Menu.Item>
    <Menu.Item
      active={filterBy === "Accessories"}
      onClick={setFilter.bind(this, "Accessories")}
    >
      Аксесуари
    </Menu.Item>
  </Menu>
);

export default Filter;
