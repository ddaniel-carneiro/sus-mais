import type { SvgIcons } from "../../../utils/interfaces"

const Calendar: React.FC<SvgIcons> = ({ width = '33', height = '33', stroke = 'white', strokeWidth = '2' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.6667 6.66666H8.33333C6.49238 6.66666 5 8.15904 5 9.99999V33.3333C5 35.1743 6.49238 36.6667 8.33333 36.6667H31.6667C33.5077 36.6667 35 35.1743 35 33.3333V9.99999C35 8.15904 33.5077 6.66666 31.6667 6.66666Z"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6667 3.33334V10"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3333 3.33334V10"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 16.6667H35"
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Calendar
