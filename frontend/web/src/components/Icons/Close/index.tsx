import type { SvgIcons } from "../../../utils/interfaces"

const Close: React.FC<SvgIcons> = ({ width = '123', height = '123', additionalClasses }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 123 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={additionalClasses}
  >
    <path
      d="M61.5 112.75C89.8047 112.75 112.75 89.8047 112.75 61.5C112.75 33.1953 89.8047 10.25 61.5 10.25C33.1953 10.25 10.25 33.1953 10.25 61.5C10.25 89.8047 33.1953 112.75 61.5 112.75Z"
      stroke="#F44771"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.875 46.125L46.125 76.875"
      stroke="#F44771"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.125 46.125L76.875 76.875"
      stroke="#F44771"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Close
