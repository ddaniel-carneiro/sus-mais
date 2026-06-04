import type { SvgIcons } from "../../../utils/interfaces"

const Eye: React.FC<SvgIcons> = ({ width = '21', height = '21' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_31_486)">
      <mask
        id="mask0_31_486"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="21"
        height="21"
      >
        <path
          d="M21 0H0V21H21V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_31_486)">
        <path
          d="M0.875488 10.4998C0.875488 10.4998 4.37549 3.49976 10.5005 3.49976C16.6255 3.49976 20.1255 10.4998 20.1255 10.4998C20.1255 10.4998 16.6255 17.4998 10.5005 17.4998C4.37549 17.4998 0.875488 10.4998 0.875488 10.4998Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_31_486">
        <rect
          width="21"
          height="21"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
)

export default Eye
