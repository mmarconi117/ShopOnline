import { useNavigate } from 'react-router-dom'

function Phonecasesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Phonecasesview = () => {
    // function that navigates to tops page
    navigate('/phonecaseview')
  }

  return (
    <div>
      <button href="#" onClick={Phonecasesview}>
        Phone Cases
      </button>
    </div>
  )
}

export default Phonecasesview