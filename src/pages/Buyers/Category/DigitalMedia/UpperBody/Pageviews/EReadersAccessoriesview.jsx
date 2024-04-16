import { useNavigate } from 'react-router-dom'

function EReadersAccessoriesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const EReadersAccessoriesview = () => {
    // function that navigates to activewear page
    navigate('/ereadersaccessoriesview')
  }

  return (
    <div>
      <button href="#" onClick={EReadersAccessoriesview}>
        E-Readers Accessories
      </button>
    </div>
  )
}

export default EReadersAccessoriesview
