import Button from "../Button"

interface ActionButtonProps {
  children: React.ReactNode
  onClick(): void
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, onClick }) => (
  <Button
    additionalClasses="flex justify-center items-center transition-btn"
    width='w-8'
    height='h-8'
    onClick={onClick}
  >
    { children }
  </Button>
)

export default ActionButton
