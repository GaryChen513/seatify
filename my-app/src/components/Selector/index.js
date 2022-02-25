import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';

const Selector = (props) => {
  const { itemList, setSelectedItem } = props;
  const [item, setItem] = useState(itemList[0]);

  function getNumber(num_str) {
    return parseInt(num_str);
  }

  const menu = (
  <Menu>
    {itemList.map((ele) => {
      return (
        <Menu.Item 
          key = {ele}
          onClick={() => {
          setItem(ele);
          setSelectedItem(getNumber(ele))
        }}>
          {ele}
        </Menu.Item>
      )
    })}
  </Menu>
);

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button>{item}</Button>
    </Dropdown>
  );
};

export default Selector;
