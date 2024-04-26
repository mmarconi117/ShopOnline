import { useNavigate } from 'react-router-dom'

function DigitalCameraview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const DigitalCameraview = () => {
    // function that navigates to swimwear page
    navigate('/digitalcameraview')
  }

  return (
    <div>
      <button href="#" onClick={DigitalCameraview}>
        Digital Camera
      </button>
    </div>
  )
}

export default DigitalCameraview
