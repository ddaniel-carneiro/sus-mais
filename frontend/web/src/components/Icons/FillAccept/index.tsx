import type { SvgIcons } from "../../../utils/interfaces"

const FillAccept: React.FC<SvgIcons> = ({ width = '119', height = '115', additionalClasses }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 119 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={additionalClasses}
  >
    <g clip-path="url(#clip0_31_2937)">
      <path
        d="M59.5 115C92.3609 115 119 89.2564 119 57.5C119 25.7436 92.3609 0 59.5 0C26.6391 0 0 25.7436 0 57.5C0 89.2564 26.6391 115 59.5 115Z"
        fill="#4CB458"
      />
      <path
        d="M83.0533 41.3481L50.6693 73.6533L35.9492 58.9691"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_31_2937">
        <rect
          width="119"
          height="115"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
)

export default FillAccept
