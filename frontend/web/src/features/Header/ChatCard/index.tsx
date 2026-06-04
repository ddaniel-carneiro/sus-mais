import Message from "../../../components/Icons/Message"

const ChatCard: React.FC = () => {
  return (
    <div
      className="bg-white flex justify-center items-center h-14 w-14 rounded shadow-lg"
    >
      <Message />
    </div>
  )
}

export default ChatCard
