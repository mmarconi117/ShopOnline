import {
  ADD_REVIEW,
  TOGGLE_LIKE,
  SET_SORT,
  ADD_COMMENT,
  ADD_MESSAGE,
  SUBMIT_PUBLIC_COMMENT,
  SUBMIT_DIRECT_MESSAGE,
} from '../actions'







const initialState = {
  reviews: [],
  comments: {},
  sortBy: 'default',
  messages: {},
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case TOGGLE_LIKE:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload ? { ...review, liked: !review.liked } : review
        ),
      };
      case SET_SORT:
    let sortedReviews;

    switch (action.payload.sortRating) {
    case 'recent':
      sortedReviews = [...state.reviews].sort((a, b) => b.id - a.id);
      break;
    case 'rating':
      sortedReviews = [...state.reviews].sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedReviews = [...state.reviews];
  }

  return {
    ...state,
    sortBy: action.payload.sortRating,
    reviews: sortedReviews,
};
    case ADD_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.reviewId]: action.payload.comment, // Assuming action.payload.comment is already an object with visible and text properties
        },
      };
      case ADD_MESSAGE:
        return {
          ...state,
          messages: {
            ...state.messages,
            [action.payload.reviewId]: action.payload.message,
          },
        };
    case SUBMIT_PUBLIC_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.reviewId]: action.payload.comment,
        },
      };
    case SUBMIT_DIRECT_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.reviewId]: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default reviewsReducer;
