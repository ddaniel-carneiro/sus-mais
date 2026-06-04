interface ImageProps {
  src: string,
  onRemove: () => void
}

const Image: React.FC<ImageProps> = ({ src, onRemove }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-32 h-32 border border-[#E4E6EF] rounded">
      <button
        onClick={onRemove}
        className="bg-[#E4E6EF] absolute top-1 right-1 end-2.5 text-body hover:bg-neutral-tertiary hover:text-heading text-sm w-6 h-6 ms-auto inline-flex justify-center items-center rounded-full cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>

      <img
        src={src}
        className="w-26 h-26"
        alt=""
      />
    </div>
  )
}

export default Image
