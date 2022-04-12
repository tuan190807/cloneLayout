import React from 'react'
import { Bell, Help } from 'tabler-icons-react';
import profileImg from '../../assets/image/image1.jpg';
import './styleHeader.css'

function Header() {
    return (
        <div className=' bg-blue-400 flex flex-col justify-between'>
            <div className='flex py-2 justify-end mr-4'>
                <div className='cursor-pointer text-gray-200 hover:text-white'>
                    Go to docs
                </div>
                <div className='mx-4 cursor-pointer'>
                    <Bell color='#fff' />
                </div>
                <div className='rounded-full cursor-pointer'>
                    <img alt='profile' src={profileImg} width="30px" />
                </div>
            </div>
            <div className='flex justify-between p-4'>
                <div className='text-3xl font-bold text-white'>Authentication</div>
                <div className='flex'>
                    <div className='p-1 border-2 rounded-lg text-sm font-semibold text-white cursor-pointer mr-4'>Web setup</div>
                    <div className='cursor-pointer flex flex-col justify-center'><Help size="30px" color='#fff' /></div>
                </div>
            </div>
            <div>
                <ul className='flex'>
                    <li className='text-white border-b-4 border-white'>Users</li>
                    <li>Sign-in method</li>
                    <li>Templates</li>
                    <li>Usage</li>
                </ul>
            </div>
        </div>
    )
}

export default Header