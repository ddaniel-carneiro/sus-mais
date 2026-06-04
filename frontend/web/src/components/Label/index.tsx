import type { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  additionalClasses?: string
}

const Label: React.FC<LabelProps> = ({ children, additionalClasses, ...rest }) => (
  <label
    className={`font-bold text-[#485558] ${additionalClasses}`}
    {...rest}
  >
    { children }
  </label>
)

export default Label
