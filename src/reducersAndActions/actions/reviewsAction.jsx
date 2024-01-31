import {
  ADD_REVIEW,
  TOGGLE_LIKE,
  SET_SORT,
  ADD_COMMENT,
  ADD_MESSAGE,
  SUBMIT_PUBLIC_COMMENT,
  SUBMIT_DIRECT_MESSAGE
} from '.';





export const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: { ...review, liked: false, comments: [] },
});

export const toggleLike = (reviewId) => ({
  type: TOGGLE_LIKE,
  payload: reviewId,
});

export const setSort = (sortRating) => ({
  type: SET_SORT,
  payload: { sortRating },
});


export const addComment = (reviewId, comment) => ({
  type: ADD_COMMENT,
  payload: { reviewId, comment },
});

export const addMessage = (reviewId, message) => ({
    type: ADD_MESSAGE,
    payload: { reviewId, message },
})

export const submitPublicComment = (reviewId, commentText) => ({
  type: SUBMIT_PUBLIC_COMMENT,
  payload: { reviewId, commentText, visible: true },
});

export const submitDirectMessage = (reviewId, messageText) => ({
  type: SUBMIT_DIRECT_MESSAGE,
  payload: { reviewId, messageText, messageVisible: true  },
});
