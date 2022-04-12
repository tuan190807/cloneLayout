import { Button, TextInput } from '@mantine/core'
import React from 'react'
import { RotateClockwise, Search } from 'tabler-icons-react'
import './styleUser.css'

function UserHeader() {
    return (
        <div className='flex justify-between p-4 border-b-2 bg-gray-100 rounded-t-lg'>
            <div className='flex justify-end w-1/12'>
                <Search />
            </div>
            <div className='w-9/12'>
                <TextInput placeholder='Search by email address, phone number, or user UID' style={{ border: 'none' }} />
            </div>
            <div>
                <Button style={{ background: 'blue' }}>Add user</Button>
            </div>
            <div className='flex flex-col justify-center cursor-pointer'>
                <RotateClockwise />
            </div>
        </div>
    )
}

export default UserHeader