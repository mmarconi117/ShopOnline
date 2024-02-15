
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
} from '../../../../reducersAndActions/actions/reviewsAction';
import picDemo from './assets/picDemo.jpeg';
import picDemo2 from './assets/picDemo2.jpeg';
import picDemo3 from './assets/picDemo3.webp';
import Union_Stroke from './assets/Union_Stroke.jpg';

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
        <div className="m-5">
            <div className="ratings-and-reviews">
                <h1 style={{ fontWeight: 'bold' }}>Ratings and Reviews</h1>
                <p>Customers provide Seller ratings and reviews. These ratings and reviews indicate whether you are creating a positive shopping experience for customers.</p>
            </div>
            <div className="review-stats flex justify-around m-5 p-5 bg-white">
                <p>Total Reviews: {reviewStats.totalReviews}</p>
                <div className="h-8 w-1 bg-slate-300"></div>
                <p>Average Rating: {reviewStats.averageRating.toFixed(2)}</p>
            </div>
            <div className="sort-by-dropdown flex justify-between">
                <div className="">
                    <label className="mr-5">Sort by:</label>
                    <select onChange={(e) => handleSortByChange(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="recent">Most Recent</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div>{getCurrentMonthAndYear()}</div>
            </div>

            <div className="hidden review-form flex m-5 bg-white">
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
                {/* {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))} */}
                <div className="review-item h-100 flex justify-between m-5 p-5 bg-white">
                    <div className="w-full flex">
                        <img className="mr-3" src={picDemo} alt="Random" style={{ width: '100px', height: '100px' }} />
                        <div className="flex flex-col">
                            <h3>Random Name</h3>
                            <p>{convertToStars(4)}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap text-ellipsis">
                        <p>I’m super happy with these!  I’ve never bought dress online before and I didn’t think they’d even fit, but it turns out they fit pretty perfectly. I got a size S Patite - I’m 5’6” and weigh about 127 lbs. They are tight but not suffocating ...I’m super happy with these!  I’ve never bought dress online before and I didn’t think they’d even fit, but it turns out they fit pretty perfectly. I got a size S Patite - I’m 5’6” and weigh about 127 lbs. They are tight but not suffocating ...</p>
                        <div className="flex justify-center" style={{ marginTop: '10px' }}>
                            <button className="text-gray-800 bg-white border-2 border-yellow-400 font-medium rounded-lg text-sm px-5 py-3" style={{ marginRight: '10px' }}>
                                {false ? 'Cancel' : 'Public Comment'}
                            </button>
                            <button className="text-gray-800 bg-yellow-400 font-medium rounded-lg text-sm px-5 py-3" style={{ marginRight: '10px' }}>
                                {false ? 'Cancel' : 'Direct Message'}
                            </button>
                            <button className="w-12 h-12 p-3 border-2 border-yellow-400 rounded-lg" style={{ marginRight: '10px' }} onClick={() => toggleLike(1)}>
                                <svg className="flex justify-center fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6.45 2C4.257 2 2.5 3.753 2.5 5.889c0 1.04.414 1.985 1.093 2.686l6.907 7L17.28 8.7A3.845 3.845 0 0 0 18.5 5.89C18.5 3.753 16.743 2 14.55 2c-.476 0-1.034.267-1.654.816-.604.536-1.146 1.23-1.582 1.842a1 1 0 0 1-1.628 0c-.436-.612-.978-1.306-1.582-1.842C7.484 2.266 6.926 2 6.45 2ZM.5 5.889C.5 2.625 3.176 0 6.45 0c1.198 0 2.218.644 2.98 1.319.392.348.752.735 1.07 1.116.319-.381.678-.768 1.07-1.116C12.332.644 13.352 0 14.55 0c3.274 0 5.95 2.625 5.95 5.889a5.845 5.845 0 0 1-1.805 4.224l-7.483 7.59a1 1 0 0 1-1.424 0L2.162 9.97A5.841 5.841 0 0 1 .5 5.89Z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                            {/* {false ? 
                                'Dislike' 
                                : 
                                
                            } */}
                            
                        </div>
                        {false && (
                            <div style={{ marginTop: '10px' }}>
                                <textarea
                                    rows="3"
                                    cols="30"
                                    placeholder="Enter your public comment..."
                                    
                                />
                                <button >Submit Comment</button>
                            </div>
                        )}
                        {false && (
                            <div style={{ marginTop: '10px' }}>
                                <textarea
                                    rows="3"
                                    cols="30"
                                    placeholder="Enter your direct message..."
                                    
                                />
                                <button>Submit Direct Message</button>
                            </div>
                        )}
                    </div>
                </div>
                {/* <div className="review-item">
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
                </div> */}
            </div>
        </div>
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
