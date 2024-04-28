import { useNavigate } from 'react-router-dom'

function ActionFiguresAndPlaySetsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ActionFiguresAndPlaySetsview = () => {
    // function that navigates to jumpsuits page
    navigate('/actionfiguresandplaysetsview')
  }

  return (
    <div>
      <button href="#" onClick={ActionFiguresAndPlaySetsview}>
        Action Figures And Play Sets
      </button>
    </div>
  )
}

export default ActionFiguresAndPlaySetsview
