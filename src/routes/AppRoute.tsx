import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*Pages*/
import Loader from '../components/Loader'

/*Components*/
import MainLayout from '../pages/layout/MainLayout'
import AuthRoute from './AuthRoute'

/*Pages*/
const LandingPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/LandingPage'))
const HomePage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/HomePage'))
const ProfilePage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/ProfilePage'))
const SettingsPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/SettingsPage'))
const FinancesPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/FinancesPage'))
const BenefitsPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/BenefitsPage'))
const DescountPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/DescountPage'))
const RefoundPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/RefoundPage'))
const ActividadesPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/ActividadesPage'))


const AppRoute = () => {
    return (
        <Suspense fallback={<Loader />} >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='auth/*' element={<AuthRoute />} />
                    <Route path='/' element={<MainLayout />}>
                        {/* <Route index element={<HomePage />} />git */}
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/perfil' element={<ProfilePage />} />
                        <Route path='/settings' element={<SettingsPage />} />
                        <Route path="/beneficios" element={<BenefitsPage />} />
                        <Route path="/descuento/:id" element={<DescountPage />} />
                        <Route path="/reintegros/:id" element={<RefoundPage />} />
                        <Route path="/actividades" element={<ActividadesPage />} />
                    </Route>


                    <Route path="/finanzas" element={<FinancesPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default AppRoute