import React from 'react'

import './MasterMenu.scss';
import MenuComponent from './MenuComponent';

const MasterMenu = ({ menuJson }) => {

    return (
        <div className='master-menu'>
            {menuJson.map((item, index) => {
                return (
                    <MenuComponent key={index} item={item} />
                )
            })}
        </div>
    )
}

export default MasterMenu