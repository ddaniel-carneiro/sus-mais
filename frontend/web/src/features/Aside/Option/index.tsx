import { Link } from "react-router-dom"

interface OptionProps {
  children: React.ReactNode,
  to: string
}

const Option: React.FC<OptionProps> = ({ children, to }) => (
  <Link
    className="side-bar-option flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer"
    to={to}
  >
    { children }
  </Link>
)

export default Option
