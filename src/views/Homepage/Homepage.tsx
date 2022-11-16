import React, { useState } from 'react'
import SidebarComponent from '../../components/Sidebar/vertical-menu'
import navigation from '../../navigation'


const Homepage = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    const [menuVisibility, setMenuVisibility] = useState(false)
    return (
        <div>
            <SidebarComponent
                skin={"dark"}
                // menu={menu}
                menuData={navigation}
                menuCollapsed={menuCollapsed}
                menuVisibility={menuVisibility}
                setMenuCollapsed={setMenuCollapsed}
                setMenuVisibility={setMenuVisibility}
            />
            <div>shalom</div>
        </div>


    )
}

export default Homepage