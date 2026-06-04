import type React from "react"

interface ModalProps {
  children: React.ReactNode,
  onClose(): void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="bg-black/70 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full">
      <div className="bg-white relative w-full max-w-xl max-h-full rounded-lg">
        <div className="relative bg-neutral-primary-soft p-5">
          <button
            onClick={onClose}
            className="absolute top-3 end-2.5 text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
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

          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal
