import type { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  border?: boolean,
  additionalClasses?: string
}

const TextArea: React.FC<TextAreaProps> = ({ border = true, additionalClasses, ...rest }) => (
  <textarea
    className={`w-full h-24 ${border && 'border border-[#E4E6EF]'} rounded-md outline-none resize-none i-padding ${additionalClasses}`}
    {...rest}
  ></textarea>
)

export default TextArea
