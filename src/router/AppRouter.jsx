import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { PanelRoutes } from "../panel/routes/PanelRoutes"
import { CheckingAuth } from "../ui/CheckingAuth"
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (

  
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <PanelRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/' />  } />

    </Routes>
  )
}
