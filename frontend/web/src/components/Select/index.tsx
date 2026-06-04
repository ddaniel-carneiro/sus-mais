import type { SelectHTMLAttributes } from "react";
import type { SelectOptions } from "../../utils/interfaces";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  additionalClasses?: string,
  defaultOption?: boolean,
  options: SelectOptions[]
}

const Select: React.FC<SelectProps> = ({ additionalClasses, defaultOption = true, options, ...rest }) => (
  <select
    className={`w-full h-10 border border-[#E4E6EF] rounded-md outline-none i-padding ${additionalClasses}`}
    {...rest}
  >
    {defaultOption && <option>Selecione uma opção</option>}
    {options.map(option =>
      <option
        value={option.value}
        key={option.value}
      >
        {option.name}
      </option>
    )}
  </select>
)

export default Select
