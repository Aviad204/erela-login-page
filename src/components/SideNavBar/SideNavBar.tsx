import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import "./side-bar.css"
import 'antd/dist/antd.css';
import TopLogo from '../TopLogo/TopLogo';


const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    }
}

const items: MenuItem[] = [
    getItem('Tableau de bord', '1', <img src={require('./images/home.svg')} alt='Tableau de bord' />),
    getItem('Agents', '2', <img src={require('./images/agents.svg')} alt='Agents' />),
    getItem('Clients', '3', <img src={require('./images/clients.svg')} alt='Clients' />),
    getItem('Devis', '4', <img src={require('./images/devis.svg')} alt='Devis' />),
    getItem('Fournisseurs', '5', <img src={require('./images/fournisseurs.svg')} alt='Fournisseurs' />),

];


function SideNavBar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh', flex: "inherit" }}>
            <Sider width={"260px"} collapsedWidth={"80px"} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className='logo-container-navbar ps-4'>
                    {collapsed ? <div className='only-e-logo'>E</div> : <TopLogo isCollapseNav={true} />}
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </Layout>
    )
}


export default SideNavBar