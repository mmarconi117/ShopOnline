// src/components/R&R/Ratings.jsx
import picDemo from './assets/picDemo.jpeg'
import picDemo2 from './assets/picDemo2.jpeg'
import picDemo3 from './assets/picDemo3.webp'



import React from 'react';
import { connect } from 'react-redux';
import { addReview, toggleLike } from '../../reducersAndActions/actions/reviews';

class RatingsAndReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedReviews: [],
        };

        // Bind the handleSubmit method
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    convertToStars(rating) {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    }

    calculateReviewStats(reviews) {
        const totalReviews = reviews.length;

        if (totalReviews > 0) {
            const sum = reviews.reduce((acc, review) => acc + parseInt(review.rating), 0);
            const averageRating = sum / totalReviews;
            return { totalReviews, averageRating };
        } else {
            return { totalReviews: 0, averageRating: 0 };
        }
    }

    handlePublicComment(review) {
        // Implement public comment logic here
        console.log('Public Comment:', review);
    }

    handleDirectMessage(review) {
        // Implement direct message logic here
        console.log('Direct Message:', review);
    }

    handleLike(id) {
        // Check if the review is already liked
        const review = this.props.reviews.find((review) => review.id === id);
        if (review && !review.liked) {
            // Dispatch the like action only if the review is not already liked
            this.props.toggleLike(id);
            console.log(`Liked review with ID: ${id}`);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const rating = e.target.elements.rating.value;
        const comment = e.target.elements.comment.value;
        const randomImage = this.getRandomImage()

        // Dispatch the action to add the review to Redux state
        this.props.addReview({
            id: this.props.reviews.length + 1,
            rating,
            comment,
            date: new Date().toISOString(),
            liked: false,
            image: randomImage,
        });

        // Update the local state with the submitted review
        this.setState((prevState) => ({
            submittedReviews: [...prevState.submittedReviews, { rating, comment, date: new Date().toISOString(), image: randomImage }],
        }));

        e.target.reset();
    }

    getRandomImage = () => {
        const images = [picDemo, picDemo2, picDemo3];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      };

    ReviewItem = ({ review }) => (
        <div key={review.id} style={{ marginBottom: '20px' }}>
            <img src={review.image} alt="Random" style={{ width: '100px', height: '100px' }} />
            <p>Rating: {this.convertToStars(review.rating)}</p>
            <p>{review.comment}</p>
            <p>{new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => this.handlePublicComment(review)} style={{ marginRight: '10px' }}>Public Comment</button>
                <button onClick={() => this.handleDirectMessage(review)} style={{ marginRight: '10px' }}>Direct Message</button>
                <button onClick={() => this.handleLike(review.id)} style={{ color: review.liked ? 'red' : 'black' }}>❤️</button>
            </div>
            <hr />
        </div>
    );



    render() {
        const { reviews } = this.props;
        const { submittedReviews } = this.state;
        const reviewStats = this.calculateReviewStats(reviews);

        return (
            <div>
                <h1 style={{ fontWeight: 'bold' }}>Ratings & Reviews</h1>

                <p>Customers provide Seller ratings and reviews. These ratings and reviews indicate whether you are creating a positive shopping experience for customers.</p>

                <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
                    <p>Total Reviews: {reviewStats.totalReviews}</p>
                    <p>Average Rating: {reviewStats.averageRating.toFixed(2)}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* <h2 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Customer Reviews</h2> */}
                        <label>
                            Sort By:
                            <select>
                                <option value="date">Most Recent</option>
                                <option value="rating">Rating</option>
                            </select>
                        </label>
                    </div>

                <div>
                    <h2>Submitted Reviews</h2>
                    {submittedReviews.map((review, index) => (
                        <this.ReviewItem key={index} review={review} />
                    ))}
                </div>

                <div>
                    <h2>Add Your Review</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Rating:
                            <input name="rating" type="number" min="1" max="5" />
                        </label>
                        <br />
                        <label>
                            Comment:
                            <textarea name="comment"></textarea>
                        </label>
                        <br />
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews ? state.reviews.reviews : [],
});

const mapDispatchToProps = (dispatch) => ({
    addReview,
    toggleLike: (reviewId) => dispatch(toggleLike(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
