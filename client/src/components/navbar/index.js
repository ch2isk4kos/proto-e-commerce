import React from "react";
// import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  AuditOutlined,
  BookOutlined,
  BuildOutlined,
  FireOutlined,
  LoginOutlined,
  SearchOutlined,
  SelectOutlined,
  SettingOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  TagsTwoTone,
  TagsOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const { SubMenu, Item, ItemGroup } = Menu;

const Navbar = () => {
  return (
    <Menu className="sticky-top" mode="horizontal">
      {/* Brand */}
      <Item key="thunderbolt" icon={<FireOutlined />}>
        {/* <Link to={"/home"}>Yard Sale</Link> */}
      </Item>
    </Menu>
  );
};

export default Navbar;
