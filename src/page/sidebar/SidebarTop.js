import React from 'react'
import { Home } from 'tabler-icons-react'
import SidebarItem from './SidebarItem'

function SidebarTop() {
    return (
        <div className=''>
            <div className='text-3xl text-white pl-6 py-4 border-b'>Paperbase</div>
            <div className='py-4 border-b'>
                <SidebarItem icon={<Home size='20px' color='#ffffffb3' />} text="Project Overview" />
            </div>
        </div>
    )
}

export default SidebarTop