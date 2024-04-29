import { useNavigate } from 'react-router-dom'

function PuzzleParadiseview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const PuzzleParadiseview = () => {
    // function that navigates to activewear page
    navigate('/puzzleparadiseview')
  }

  return (
    <div>
      <button href="#" onClick={PuzzleParadiseview}>
        Puzzle Paradise
      </button>
    </div>
  )
}

export default PuzzleParadiseview
