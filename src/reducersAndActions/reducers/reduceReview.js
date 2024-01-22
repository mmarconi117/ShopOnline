const initialState = {
  reviews: [
    { id: 1, rating: 4, comment: 'Great product!', date: new Date().toISOString() },
    { id: 2, rating: 5, comment: 'Excellent quality.', date: new Date().toISOString() },
    // Add more reviews as needed
  ],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload ? { ...review, liked: !review.liked } : review
        ),
      };
    default:
      return state;
  }
};

export default reviewsReducer;
