
import React from 'react';
import { connect } from 'react-redux';
import {
    addReview,
    toggleLike,
    setSort,
    addComment,
    addMessage,
    submitPublicComment,
    submitDirectMessage,
} from '../../reducersAndActions/actions/reviews';
import picDemo from './assets/picDemo.jpeg';
import picDemo2 from './assets/picDemo2.jpeg';
import picDemo3 from './assets/picDemo3.webp';

const RatingsAndReviews = ({
    reviews,
    addReview,
    toggleLike,
    setSort,
    addComment,
    addMessage,
    comments,
    messages,
    submitPublicComment,
    submitDirectMessage,
}) => {
    const convertToStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };
    const getCurrentMonthAndYear = () => {
        const currentDate = new Date();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        return `${month} ${year}`;
    };

    const reviewStats = {
        totalReviews: reviews ? reviews.length : 0,
        averageRating:
            reviews && reviews.length > 0
                ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
                : 0,
    };


    const handleAddReview = (review) => {
        addReview(review);
    };

    const ReviewItem = ({ review }) => {
        const isCommentBoxVisible = comments?.[review.id]?.visible || false;
        const commentText = comments?.[review.id]?.text || '';
        const isMessageBoxVisible = messages && messages[review.id] && messages[review.id].messageVisible;
        const messageText = messages && messages[review.id] && messages[review.id].messageText;




        const toggleCommentBox = () => {
            addComment(review.id, { visible: !isCommentBoxVisible, text: '' });
        };

        const toggleMessageBox = () => {
            addMessage(review.id, { messageVisible: !isMessageBoxVisible, messageText: '' });
          };

        const handleCommentChange = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const newCommentText = event.target.value;
                addComment(review.id, { visible: isCommentBoxVisible, text: newCommentText });
            }
        };

        const handleMessageChange = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const newMessageText = event.target.value;
                addMessage(review.id, { messageVisible: isMessageBoxVisible, messageText: newMessageText });
            }
        };

        const submitComment = () => {
            submitPublicComment(review.id, commentText);
        };

        const submitMessage = () => {
            submitDirectMessage(review.id, messageText);
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
                    <button onClick={toggleMessageBox} style={{ marginRight: '10px' }}>
                        {isMessageBoxVisible ? 'Cancel' : 'Direct Message'}
                    </button>
                </div>
                {isCommentBoxVisible && (
                    <div style={{ marginTop: '10px' }}>
                        <textarea
                            rows="3"
                            cols="30"
                            placeholder="Enter your public comment..."
                            onChange={handleCommentChange}
                        />
                        <button onClick={submitComment}>Submit Comment</button>
                    </div>
                )}
                {isMessageBoxVisible && (
                    <div style={{ marginTop: '10px' }}>
                        <textarea
                            rows="3"
                            cols="30"
                            placeholder="Enter your direct message..."
                            onChange={handleMessageChange}
                        />
                        <button onClick={submitMessage}>Submit Direct Message</button>
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
    };

    const handleSortByChange = (newSortBy) => {
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
            </div>
            <div className="sort-by-dropdown">
                <label>Sort by:</label>
                <select onChange={(e) => handleSortByChange(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="recent">Most Recent</option>
                    <option value="rating">Rating</option>
                </select>
                <div>{getCurrentMonthAndYear()}</div>
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
                {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    reviews: state.reviews?.reviews || [],
    sortBy: state.reviews?.sortBy || 'default',
    likes: state.reviews?.likes || [],
    likedReviews: state.reviews?.likedReviews || [],
    comments: state.reviews?.comments || {},
    messages: state.reviews?.messages || {},
    publicComments: state.reviews?.publicComments || {},
});

const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch(addReview(review)),
    toggleLike: (id) => dispatch(toggleLike(id)),
    setSort: (sortRating) => dispatch(setSort(sortRating)),
    addComment: (reviewId, comment) => dispatch(addComment(reviewId, comment)),
    addMessage: (reviewId, message) => dispatch(addMessage(reviewId, message)),
    handleCommentChange: (review) => dispatch(addComment(review.id, { visible: true, text: '' })),
    submitPublicComment: (reviewId, commentText, visible) => dispatch(submitPublicComment(reviewId, commentText, visible)),
    submitDirectMessage: (reviewId, directMessage, visible) =>dispatch(submitDirectMessage(reviewId, directMessage, visible)),
    handleMessageChange: (review) => dispatch(addMessage(review.id, { messageVisible: true, messageText: '' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
