import { Outlet } from "react-router-dom"
import { Navbar } from '../ui/Navbar'

import '../../style/mainlayout.css'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}