import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { FC, useState } from 'react';
import "./SideNavBar.css"
import 'antd/dist/antd.css';
import TopLogo from '../TopLogo/TopLogo';

// Images import
import HomeImg from './images/home.svg'
import AgentsImg from './images/agents.svg'
import ClientsImg from './images/clients.svg'
import DevisImg from './images/devis.svg'
import FournisseursImg from './images/fournisseurs.svg'

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
    getItem('Tableau de bord', '1', <img src={HomeImg} alt='Tableau de bord' />),
    getItem('Agents', '2', <img src={AgentsImg} alt='Agents' />),
    getItem('Clients', '3', <img src={ClientsImg} alt='Clients' />),
    getItem('Devis', '4', <img src={DevisImg} alt='Devis' />),
    getItem('Fournisseurs', '5', <img src={FournisseursImg} alt='Fournisseurs' />),

];


const SideNavBar: FC = () => {
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