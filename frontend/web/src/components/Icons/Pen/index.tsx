import type { SvgIcons } from "../../../utils/interfaces"

const Pen: React.FC<SvgIcons> = ({ width = '21', height = '21' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1665 2.62503C14.3854 2.39521 14.6452 2.21292 14.9312 2.08854C15.2172 1.96417 15.5237 1.90015 15.8332 1.90015C16.1426 1.90015 16.4492 1.96417 16.7352 2.08854C17.0212 2.21292 17.2809 2.39521 17.4998 2.62503C17.7188 2.85483 17.8924 3.12766 18.0108 3.42794C18.1292 3.7282 18.1902 4.05002 18.1902 4.37502C18.1902 4.70004 18.1292 5.02185 18.0108 5.32212C17.8924 5.62238 17.7188 5.89521 17.4998 6.12503L6.24984 17.9375L1.6665 19.25L2.9165 14.4375L14.1665 2.62503Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Pen
