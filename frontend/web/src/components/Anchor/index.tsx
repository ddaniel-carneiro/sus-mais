import { Link } from "react-router-dom"

interface AnchorProps {
  width?: string
  height?: string
  background?: string
  shadow?: boolean
  additionalClasses?: string,
  children: React.ReactNode,
  to: string
}

const Anchor: React.FC<AnchorProps> = ({
  children,
  width = 'w-full',
  height = 'h-10',
  background = 'bg-primary',
  additionalClasses,
  shadow,
  to
}) => (
  <Link
    className={`${width} ${height} flex justify-center items-center text-white ${background} font-bold ${additionalClasses} rounded-md transition duration-300 cursor-pointer ${shadow && 'shadow-lg'}`}
    to={to}
  >
    { children }
  </Link>
)

export default Anchor
