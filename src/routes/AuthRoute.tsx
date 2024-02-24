import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"


/*Pages*/
const LoginPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage: React.LazyExoticComponent<() => JSX.Element> = React.lazy(() => import('../pages/auth/RegisterPage'));


const AuthRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            {/* En caso de que escriba cualquier direccion seguida del localhost */}
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}

export default AuthRoute