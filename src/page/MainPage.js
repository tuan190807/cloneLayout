import React from 'react'
import Content from './content/Content'
import Header from './content/Header'
import Sidebar from './sidebar/Sidebar'

function MainPage() {
    return (
        <div className='grid grid-cols-8 min-h-screen'>
            <div className='col-span-1 bg-slate-800'>
                <Sidebar />
            </div>
            <div className='col-span-7' style={{ background: "#eaeff1" }}>
                <Header />
                <Content />
            </div>
        </div>
    )
}

export default MainPage