import Logo from "../Icons/Logo";
import Dashboard from "../Icons/Dashboard";
import Bell from "../Icons/Bell";
import Calendar from "../Icons/Calendar";
import Document from "../Icons/Document";
import Option from "../../features/Aside/Option";
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {

  const { user } = useAuth()

  return (
    <div className="aside-layout flex flex-col py-1 px-5 justify-between bg-secondary">
      <div className="flex flex-col gap-10">
        <div className="h-40 w-40 mx-auto">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 font-bold text-white">
          <Option to="/home">
            <Dashboard />
            Inicio
          </Option>

          {(user?.ability === 'user' || user?.ability === 'admin') &&
            <Option to="/reports">
              <Document />
              Reportes
            </Option>
          }

          <Option to="/schedulings">
            <Calendar />
            Agend. de Coleta
          </Option>

          {user?.ability === 'collector' &&
            <Option to="/collection-orders">
              <Bell />
              Meus Pedidos de Coleta
            </Option>
          }
        </div>
      </div>

      <div className="flex w-full h-auto justify-center">
        <p className="font-bold text-white">Versão 1.5</p>
      </div>
    </div>
  )
}

export default Aside
