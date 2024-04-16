import { useNavigate } from 'react-router-dom'

function EReadersview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const EReadersview = () => {
    // function that navigates to tops page
    navigate('/ereadersview')
  }

  return (
    <div>
      <button href="#" onClick={EReadersview}>
        E-Readers
      </button>
    </div>
  )
}

export default EReadersview
