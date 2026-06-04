import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  border?: boolean,
  additionalClasses?: string
}

const Input: React.FC<InputProps> = ({ border = true, additionalClasses, ...rest }) => (
  <input
    className={`w-full h-10 ${border && 'border border-[#E4E6EF]'} rounded-md outline-none i-padding ${additionalClasses}`}
    {...rest}
  />
)

export default Input
