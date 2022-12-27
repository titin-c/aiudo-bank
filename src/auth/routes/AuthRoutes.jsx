import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, OnboardingPage } from '../pages';


export const AuthRoutes = () => {
  return (
    <Routes>

        <Route path="login" element={ <LoginPage />} />
        <Route path="register" element={ <RegisterPage />} />

        <Route path="/*" element={ <OnboardingPage />} />

    </Routes>
  )
}
