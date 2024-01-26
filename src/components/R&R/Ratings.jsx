// src/components/R&R/Ratings.jsx
import React from 'react';
import { connect } from 'react-redux';
import { addReview, toggleLike, setSort, addComment, } from '../../reducersAndActions/actions/reviews'
import picDemo from './assets/picDemo.jpeg';
import picDemo2 from './assets/picDemo2.jpeg';
import picDemo3 from './assets/picDemo3.webp';

const RatingsAndReviews = ({ reviews, addReview, toggleLike, setSort, addComment, comments }) => {
    const convertToStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    const reviewStats = {
        totalReviews: reviews ? reviews.length : 0,
        averageRating: reviews && reviews.length > 0 ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length : 0,
        // highestRating: reviews && reviews.length > 0 ? Math.max(...reviews.map((review) => review.rating)) : 0,
        // lowestRating: reviews && reviews.length > 0 ? Math.min(...reviews.map((review) => review.rating)) : 0,
        // mostLiked: reviews ? reviews.reduce((mostLiked, review) => (review.liked ? mostLiked + 1 : mostLiked), 0) : 0,
    };

    const handlePublicComment = (review) => {
        addComment(review.id, { visible: true, text: '' });
        console.log('Public Comment:', review);
      };

    const handleDirectMessage = (review) => {
        console.log('Direct Message:', review);
    };
    const handleLike = (reviewId) => {
        toggleLike(reviewId);
        console.log('Toggled like for review:', reviewId);

    }



    const handleAddReview = (review) => {
        addReview(review);
        console.log('Added review:', review);
    }
    const ReviewItem = ({ review}) => {
        const isCommentBoxVisible = comments && comments[review.id] && comments[review.id].visible;
        const commentText = comments && comments[review.id] && comments[review.id].text ? comments[review.id].text : '';

        const toggleCommentBox = () => {
            console.log('Review ID:', review.id);
            console.log('Comments:', comments);

            if (isCommentBoxVisible) {
                // If the comment box is visible, hide it
                console.log('Hiding comment box');
                addComment(review.id, { visible: false, text: '' });
            } else {
                // If the comment box is hidden, show it
                console.log('Showing comment box');
                addComment(review.id, { visible: true, text: '' });
            }
        };

        const handleCommentChange = (event) => {
            const newCommentText = event.target.value;
            console.log('New Comment Text:', newCommentText);
            addComment(review.id, { visible: true, text: newCommentText });
          };

        const submitComment = () => {
            // Dispatch the comment with visibility set to false to hide the comment box after submission
            addComment(review.id, { visible: false, text: commentText });
          };

        return (
          <div className="review-item">
            <img src={review.image} alt="Random" style={{ width: '100px', height: '100px' }} />
            <h3>{review.name}</h3>
            <p>{convertToStars(review.rating)}</p>
            <p>{review.comment}</p>
            <div style={{ marginTop: '10px' }}>
              <button style={{ marginRight: '10px' }} onClick={() => toggleLike(review.id)}>
                {review.liked ? 'Dislike' : 'Like'}
              </button>
              <button onClick={toggleCommentBox} style={{ marginRight: '10px' }}>
                {isCommentBoxVisible ? 'Cancel' : 'Public Comment'}
              </button>
              <button onClick={() => handleDirectMessage(review)}>Direct Message</button>
            </div>
            {isCommentBoxVisible && (
              <div style={{ marginTop: '10px' }}>
                <textarea
                  rows="3"
                  cols="30"
                  placeholder="Enter your public comment..."
                  value={commentText}
                  onChange={handlePublicComment}
                />
                <button onClick={submitComment}>Submit Comment</button>
              </div>
            )}
          </div>
        );
      };





    const handleSubmit = (event) => {
        event.preventDefault();
        const getRandomImage = () => {
            const images = [picDemo, picDemo2, picDemo3];
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        };
        const review = {
            id: Date.now(),
            name: event.target.name.value,
            rating: parseInt(event.target.rating.value),
            comment: event.target.comment.value,
            liked: false,
            image: getRandomImage(),
        };
        handleAddReview(review);
        event.target.reset();
    }

    const handleSortByChange = (newSortBy) => {
        // Dispatch the setSort action to update the sorting option
        setSort(newSortBy);
    };

    return (
        <>
            <div className="ratings-and-reviews">
                <h1>Ratings and Reviews</h1>
            </div>
            <div className="review-stats">
                <p>Total Reviews: {reviewStats.totalReviews}</p>
                <p>Average Rating: {reviewStats.averageRating.toFixed(2)}</p>
                {/* <p>Highest Rating: {reviewStats.highestRating}</p>
                <p>Lowest Rating: {reviewStats.lowestRating}</p>
                <p>Most Liked: {reviewStats.mostLiked}</p> */}
            </div>
            <div className="sort-by-dropdown">
                <label>Sort by:</label>
                <select onChange={(e) => handleSortByChange(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="recent">Most Recent</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="review-form">
                <form onSubmit={handleSubmit}>
                    <div style={{ marginTop: '20px' }}>
                        <label>Name: </label>
                        <input type="text" name="name" required />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <label>Rating: </label>
                        <input type="number" name="rating" min="1" max="5" required />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <label>Comment: </label>
                        <textarea name="comment" required></textarea>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>



            <div className="review-list">
                {reviews.map((review) => <ReviewItem key={review.id} review={review} comments={comments} />)}
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    reviews: state.reviews?.reviews || [],
    sortBy: state.reviews?.sortBy || 'default',
    likes: state.reviews?.likes || [],
    likedReviews: state.reviews?.likedReviews || [],
    comments: state.reviews?.comments || {}, // Include comments in mapStateToProps
  });


const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch(addReview(review)),
    toggleLike: (id) => dispatch(toggleLike(id)),
    setSort: (sortRating) => dispatch(setSort(sortRating)),
    addComment: (reviewId, comment) => dispatch(addComment(reviewId, comment)),
    handlePublicComment: (review) => dispatch(addComment(review.id, { visible: true, text: '' })),

});


export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
