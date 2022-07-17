import React from 'react'

import './MenuComponent.scss';

const MenuComponent = ({ item }) => {
    console.log('item: ', item);

    const [itemHovered, setItemHovered] = React.useState(false);

    return (
        <div
            className="menu-item"
            onMouseEnter={() => { setItemHovered(true) }}
            onMouseLeave={() => { setItemHovered(false) }}
        >
            <span className={`menu-title`}>
                {item.title}
            </span>
            <div className={`sub-menu`}>
                {itemHovered && item.sub ? item.sub.map((subItem, subIndex) => {
                    return (
                        <MenuComponent key={subIndex} item={subItem} />
                    )
                }) : null}
            </div>
        </div >
    )
}

export default MenuComponent