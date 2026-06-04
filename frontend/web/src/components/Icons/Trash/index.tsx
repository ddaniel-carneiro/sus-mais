import type { SvgIcons } from "../../../utils/interfaces"

const Trash: React.FC<SvgIcons> = ({ width = '21', height = '21' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.625 5.25H4.375H18.375"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.00049 5.24976V3.49976C7.00049 3.03564 7.18487 2.59051 7.51305 2.26233C7.84124 1.93414 8.28637 1.74976 8.75049 1.74976H12.2505C12.7146 1.74976 13.1598 1.93414 13.4879 2.26233C13.8161 2.59051 14.0005 3.03564 14.0005 3.49976V5.24976M16.6255 5.24976V17.4998C16.6255 17.9639 16.4411 18.4091 16.1129 18.7371C15.7848 19.0654 15.3396 19.2498 14.8755 19.2498H6.12549C5.66137 19.2498 5.21624 19.0654 4.88805 18.7371C4.55987 18.4091 4.37549 17.9639 4.37549 17.4998V5.24976H16.6255Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.74951 9.62476V14.8748"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2505 9.62476V14.8748"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Trash
