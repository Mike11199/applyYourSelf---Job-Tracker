import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug, FaPhoneSquareAlt, FaLaptopCode, FaTimesCircle, FaUserCheck, FaCheckCircle } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'coding assessments',
      count: stats.coding_assessment || 0,
      icon: <FaLaptopCode />,
      color: '#F28C28',
      bcg: '#ffeeee',
    },
    {
      title: 'phone interviews',
      count: stats.phone_interview || 0,
      icon: <FaPhoneSquareAlt />,
      color: '#449845',
      bcg: '#C9ECC9',
    },
    {
      title: 'behavioral interviews',
      count: stats.behavioral_interview || 0,
      icon: <FaUserCheck />,
      color: '#77C2D3',
      bcg: '#D8F4FA',
    },
    {
      title: 'technical interviews',
      count: stats.technical_interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
    {
      title: 'Rejected/Archived',
      count: stats.rejected_archived || 0,
      icon: <FaTimesCircle />,
      color: '#9D361B',
      bcg: '#DBACA0',
    },
    {
      title: 'Accepted',
      count: stats.accepted || 0,
      icon: <FaCheckCircle />,
      color: '#449845',
      bcg: '#C9ECC9',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
