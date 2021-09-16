import { useState } from 'react';
import type { FC } from 'react';
import type { MenuInfo } from 'rc-menu/lib/interface'
import { Menu } from 'antd';
import { history } from 'umi'

const { SubMenu } = Menu;

const Layout: FC<{}> = ({ children }) => {
  const [activeKey, setActiveKey] = useState('/dashboard')
  const onMenuClick = (e: MenuInfo) => {
    setActiveKey(e.key)
    history.push(e.key)
  }
  return (
    <div>
      <Menu onClick={onMenuClick} mode="horizontal" selectedKeys={[activeKey]}>
        <Menu.Item key="/dashboard">
          master-micro
        </Menu.Item>
        <Menu.Item key="/account-micro">
          account-micro
        </Menu.Item>
        {/* <Menu.Item key="vue-v2-micro">
          vue-v2-micro
        </Menu.Item> */}
        {/* <Menu.Item key="umi-app1-micro">
          umi-app1-micro
        </Menu.Item> */}

        {/* <SubMenu key="SubMenu" title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
      </Menu>
      { children }
      <div id="micro-container"></div>
    </div>
  );
}

export default Layout
