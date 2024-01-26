const initialState = {
  reviews: [],
  comments: {}, // Add this line to initialize comments
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
    case 'SET_SORT':
      return {
        ...state,
        sortBy: action.payload,
        reviews: sortRating(state.reviews, action.payload),
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.reviewId]: {
            visible: action.payload.comment.visible,
            text: action.payload.comment.text,
          },
        }
      };
    default:
      return state;
  }
};

export default reviewsReducer;
