import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;


function NavbarHooks() {
  const [data, setData] = useState({ currentPage: [] });

  const handleClick = (e) => {
    console.log('click', e);
    setData(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[data.currentPage]} mode="horizontal">
      <Menu.Item key="home">
        <Icon type="mail" />
        Home
      </Menu.Item>
      <Menu.Item key="app" disabled>
        <Icon type="appstore" />
        Navigation Two
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Navigation Three - Submenu
          </span>
        }
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default NavbarHooks;