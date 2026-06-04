import type { SvgIcons } from "../../../utils/interfaces"

const Power: React.FC<SvgIcons> = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    className="text-black group-hover:text-white transition-colors"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.6 11.0662C32.6974 13.1641 34.1255 15.8369 34.7039 18.7464C35.2822 21.6561 34.9849 24.6717 33.8494 27.4124C32.714 30.1531 30.7914 32.4954 28.3247 34.1434C25.858 35.7914 22.9582 36.6711 19.9917 36.6711C17.0252 36.6711 14.1253 35.7914 11.6587 34.1434C9.19202 32.4954 7.26944 30.1531 6.13397 27.4124C4.99852 24.6717 4.70119 21.6561 5.27957 18.7464C5.85795 15.8369 7.28607 13.1641 9.38337 11.0662"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 3.33325V19.9999"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default Power
