import { useNavigate } from 'react-router-dom'

function StreamingDevicesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const StreamingDevicesview = () => {
    // function that navigates to activewear page
    navigate('/streamingdevicesview')
  }

  return (
    <div>
      <button href="#" onClick={StreamingDevicesview}>
        Streaming Devices
      </button>
    </div>
  )
}

export default StreamingDevicesview
