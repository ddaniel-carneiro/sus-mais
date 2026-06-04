import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
)

export default AuthRoutes
