import React from 'react'
import UserContent from './UserContent'
import UserHeader from './UserHeader'

function User() {
    return (
        <div className='drop-shadow-2xl rounded-lg w-7/12 border-2'>
            <UserHeader />
            <UserContent />
        </div>
    )
}

export default User