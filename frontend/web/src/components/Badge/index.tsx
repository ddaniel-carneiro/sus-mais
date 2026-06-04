interface BadgeProps {
  children: React.ReactNode,
  color: 'green' | 'red' | 'yellow'
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'green' }) => (
  <div className={`w-25 p-1 text-center text-white badge-${color} rounded-md`}>
    {children}
  </div>
)

export default Badge
