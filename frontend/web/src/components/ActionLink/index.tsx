import { Link } from "react-router-dom"

interface ActionLinkProps {
  children: React.ReactNode
  to: string
}

const ActionLink: React.FC<ActionLinkProps> = ({ children, to }) => (
  <Link
    className="bg-primary flex justify-center items-center w-8 h-8 rounded transition duration-300 transition-btn pointer"
    to={to}
  >
    { children }
  </Link>
)

export default ActionLink
