
export const addReview = (review) => ({
  type: 'ADD_REVIEW',
  payload: { ...review, liked: false },
});




export const toggleLike = (reviewId) => ({
  type: 'TOGGLE_LIKE',
  payload: reviewId,
});
