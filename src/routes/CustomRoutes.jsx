import React, {lazy, Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

// Lazy load pages.
const HomePage = lazy(() => import("../views/HomePage/HomePage"))

// Manage all routes.
const CustomRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={ <Loading />}> 
                    <HomePage />
                </Suspense>
            } />
            <Route path="*" element={
                <Navigate to="/" replace />
            } />
        </Routes>
    )
}


export default CustomRoutes