import type { SvgIcons } from "../../../utils/interfaces"

const Refuse: React.FC<SvgIcons> = ({ width = '25', height = '25' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5002 22.9166C18.2531 22.9166 22.9168 18.2529 22.9168 12.4999C22.9168 6.74694 18.2531 2.08325 12.5002 2.08325C6.74718 2.08325 2.0835 6.74694 2.0835 12.4999C2.0835 18.2529 6.74718 22.9166 12.5002 22.9166Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.625 9.375L9.375 15.625"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.375 9.375L15.625 15.625"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Refuse
