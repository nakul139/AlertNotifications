import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notifications = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="icon" />
    </div>
  )
}

export default Notifications
