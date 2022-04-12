import React from 'react'
import SidebarItem from './SidebarItem'

function SideContent({ title, listChildren }) {
    return (
        <div className='py-4 border-b'>
            <div className='pl-6 pb-4 text-white font-medium'>{title}</div>
            <div>
                {
                    listChildren.map((item, index) =>
                        <SidebarItem key={index} icon={item.icon} text={item.text} customClassItem={item.text === "Authentication" ? 'bg-gray-600' : ''} customClass={item.text === "Authentication" ? 'text-blue-400' : ''} />
                    )
                }
            </div>
        </div>
    )
}

export default SideContent