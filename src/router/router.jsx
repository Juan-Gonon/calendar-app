/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";


export function AppRouter() {
    // const authStatus = 'not-authenticated' // not-authenticated
    const { status ,checkAuthToken } = useAuthStore()

    useEffect(() => {
      checkAuthToken()
    }, [])
    

    if( status === 'checking'){
      return (
        <h3>Cargando...</h3>
      )
    }


  return (
    <BrowserRouter>
       <Routes>
        {
            (status === 'not-authenticated')
            ? (
              <>
                <Route path="/auth/*" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to='/auth/login' />} />
              </>
            )
            :(
              <>
               <Route path="/" element={<CalendarPage />} />
               <Route path="/*" element={<Navigate to='/' />} />
              </>
            )
        }
        
       </Routes>
    </BrowserRouter>
  )
}
