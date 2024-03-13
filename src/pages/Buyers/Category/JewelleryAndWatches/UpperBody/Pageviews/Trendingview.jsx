import { useNavigate } from 'react-router-dom'

function Trendingview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Trendingview = () => {
    // function that navigates to activewear page
    navigate('/trendingview')
  }

  return (
    <div>
      <button href="#" onClick={Trendingview}>
        Trending
      </button>
    </div>
  )
}

export default Trendingview
