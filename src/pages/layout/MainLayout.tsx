import { Outlet } from 'react-router-dom'
import NavBar from '../../components/Navbar'

const MainLayout = () => {
    return (
        <>
            <main className=''>
                <Outlet />
            </main>
            <NavBar />
        </>
    )
}

export default MainLayout