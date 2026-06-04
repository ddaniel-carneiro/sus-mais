import type { SvgIcons } from "../../../utils/interfaces";

const User: React.FC<SvgIcons> = ({ width = '33', height = '33' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    className="text-black group-hover:text-white transition-colors"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.778 35V31.6667C32.778 29.8985 32.1342 28.2028 30.988 26.9527C29.842 25.7023 28.2877 25 26.6668 25H14.4446C12.8238 25 11.2695 25.7023 10.1234 26.9527C8.97735 28.2028 8.3335 29.8985 8.3335 31.6667V35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5545 18.3333C23.9295 18.3333 26.6655 15.3486 26.6655 11.6667C26.6655 7.98477 23.9295 5 20.5545 5C17.1793 5 14.4434 7.98477 14.4434 11.6667C14.4434 15.3486 17.1793 18.3333 20.5545 18.3333Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default User
