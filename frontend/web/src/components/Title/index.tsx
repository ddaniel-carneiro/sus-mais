interface TitleProps {
  color?: 'white' | 'black',
  size?: string,
  additionalClasses?: string,
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ color = 'white', size = '3xl', additionalClasses, children }) => (
  <h1 className={`text-${color} text-${size} font-bold ${additionalClasses}`}>
    { children }
  </h1>
)

export default Title
