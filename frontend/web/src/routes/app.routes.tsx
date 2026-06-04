import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import { useAuth } from "../hooks/auth"
import Home from "../pages/Home"
import Reports from "../pages/Reports"
import Schedulings from "../pages/Schedulings"
import CollectionOrders from "../pages/CollectionOrders"

const AppRoutes: React.FC = () => {

  const { user } = useAuth()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {(user?.ability === 'user' || user?.ability === 'admin') &&
          <Route path="/reports" element={<Reports />} />
        }

        <Route path="/schedulings" element={<Schedulings />} />

        {user?.ability === 'collector' &&
          <Route path="/collection-orders" element={<CollectionOrders />} />
        }

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
