import ChatCard from "../../features/Header/ChatCard"
import UserCard from "../../features/Header/UserCard"

const Header: React.FC = () => {
  return (
    <div className="header-layout flex gap-3 justify-end items-center px-5">
      <ChatCard />
      <UserCard />
    </div>
  )
}

export default Header
