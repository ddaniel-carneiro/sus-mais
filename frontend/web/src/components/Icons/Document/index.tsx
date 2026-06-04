import type { SvgIcons } from "../../../utils/interfaces"

const Document: React.FC<SvgIcons> = ({ width = '34', height = '34', stroke = 'white', strokeWidth = '2' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.3322 3.33365H9.99885C9.1148 3.33365 8.26695 3.68483 7.64184 4.30996C7.01671 4.93507 6.66553 5.78292 6.66553 6.66698V33.3337C6.66553 34.2177 7.01671 35.0655 7.64184 35.6907C8.26695 36.3158 9.1148 36.6669 9.99885 36.6669H29.9988C30.8829 36.6669 31.7308 36.3158 32.3559 35.6907C32.9809 35.0655 33.3322 34.2177 33.3322 33.3337V13.3336L23.3322 3.33365Z"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3345 3.33365V13.3336H33.3345"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6678 21.6664H13.3345"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6678 28.3336H13.3345"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.6678 15H15.0011H13.3345"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Document
