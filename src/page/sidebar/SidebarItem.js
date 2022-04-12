import React from 'react'

function SidebarItem({ icon, text, customClass, customClassItem }) {
    return (
        <div className={`${customClassItem} flex pl-6 py-2 cursor-pointer hover:bg-slate-600`}>
            <div className='mr-2'>{icon}</div>
            <div className={`${customClass} text-sm font-medium text-gray-300`}>{text}</div>
        </div>
    )
}

export default SidebarItem