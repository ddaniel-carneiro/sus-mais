import CountUp from "react-countup"
import Calendar from "../../../components/Icons/Calendar"
import Document from "../../../components/Icons/Document"
import Title from "../../../components/Title"

interface DataCardProps {
  title: string,
  count: string,
  icon: 'document' | 'calendar'
}

const DataCard: React.FC<DataCardProps> = ({ title, count, icon }) => (
  <div className="bg-white flex flex-row gap-1 px-4 py-3 w-1/4 h-24 rounded shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1">
    <div className="flex h-auto">
      {icon === 'document' &&
        <Document
          width=''
          height=''
          stroke='black'
          strokeWidth=''
        />
      }
      {icon === 'calendar' &&
        <Calendar
          width=''
          height=''
          stroke='black'
          strokeWidth=''
        />
      }
    </div>

    <div className="flex flex-col h-auto pt-1">
      <Title color="black" size="">{title}</Title>
      <Title color="black" size="3xl">
        <CountUp
          start={0}
          end={Number(count)}
          duration={2.5}
        />
      </Title>
    </div>
  </div>
)

export default DataCard
