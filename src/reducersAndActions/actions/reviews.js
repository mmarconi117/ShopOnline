// reviews.js

export const addReview = (review) => ({
  type: 'ADD_REVIEW',
  payload: { ...review, liked: false, comments: [] }, // Include comments array
});

export const toggleLike = (reviewId) => ({
  type: 'TOGGLE_LIKE',
  payload: reviewId,
});

export const setSort = (sortRating) => ({
  type: 'SET_SORT',
  payload: sortRating,
});


export const addComment = (reviewId, comment) => ({
  type: 'ADD_COMMENT',
  payload: { reviewId, comment },
});
