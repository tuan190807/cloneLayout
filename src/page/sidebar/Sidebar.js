import React from 'react'
import { AdjustmentsAlt, Blur, CodeMinus, Compass, DeviceMobile, LayoutList, Polaroid, Settings, Users } from 'tabler-icons-react'
import SidebarTop from './SidebarTop'
import SideContent from './SideContent'

const listSidebar = [
    {
        title: 'Build',
        child: [
            { icon: <Users size="20px" color="#4fc3f7" />, text: "Authentication" },
            { icon: <LayoutList size="20px" color="#ffffffb3" />, text: "Database" },
            { icon: <Polaroid size="20px" color="#ffffffb3" />, text: "Storage" },
            { icon: <Blur size="20px" color="#ffffffb3" />, text: "Hosting" },
            { icon: <CodeMinus size="20px" color="#ffffffb3" />, text: "Functions" },
            { icon: <AdjustmentsAlt size="20px" color="#ffffffb3" />, text: "Machine learning" },
        ]
    },
    {
        title: "Quality",
        child: [
            { icon: <Settings size="20px" color="#ffffffb3" />, text: "Analytics" },
            { icon: <Compass size="20px" color="#ffffffb3" />, text: "Performance" },
            { icon: <DeviceMobile size="20px" color="#ffffffb3" />, text: "Test Lab" },
        ]
    }
]

function Sidebar() {
    return (
        <div className=''>
            <SidebarTop />
            <div className='bg-slate-700'>
                {
                    listSidebar.map((item, index) =>
                        <SideContent key={index} title={item.title} listChildren={item.child} />
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar