import { useNavigate } from 'react-router-dom'

function ToolsAndEquipmentview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ToolsAndEquipmentview = () => {
    // function that navigates to activewear page
    navigate('/toolsandequipmentview')
  }

  return (
    <div>
      <button href="#" onClick={ToolsAndEquipmentview}>
        Tools And Equipment
      </button>
    </div>
  )
}

export default ToolsAndEquipmentview
