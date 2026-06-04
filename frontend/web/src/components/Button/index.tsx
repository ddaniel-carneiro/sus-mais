import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  background?: string
  shadow?: boolean
  additionalClasses?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  width = 'w-full',
  height = 'h-10',
  background = 'bg-primary',
  additionalClasses,
  shadow,
  ...rest
}) => (
  <button
    className={`${width} ${height} text-white ${background} font-bold ${additionalClasses} rounded-md transition duration-300 cursor-pointer ${shadow && 'shadow-lg'}`}
    {...rest}
  >
    { children }
  </button>
)

export default Button
