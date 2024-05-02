import React from 'react';
import {Link} from 'react-router-dom';

const PendingReviews = () => {
    const reviewsData = [
      {
        id: 1,
        name: "Men's Sneaks-on Walkabout Sports Shoes - b102 - Grey",
        deliveredDate: "12th June 2022",
        imageUrl: '/path-to-sneakers-image.jpg',
      },
      {
        id: 2,
        name: "Mi color 2 In 1 Fit Me Primer + Pro. Setting Spray Fixer",
        deliveredDate: "12th June 2022",
        imageUrl: '/path-to-mi-color-primer-image.jpg', 
      },
    ];

    return (
      <div className="w-full lg:w-[70%] flex flex-col lg:gap-14">
        <div className="flex-grow flex">
          <aside className="w-64"> 
            {/* <AccountNavigation /> */}
          </aside>
          <main className="flex-grow">
            <h2>Pending reviews</h2>
            {reviewsData.map((review) => (
              <div key={review.id} className="mb-4">
                <img src={review.imageUrl} alt={review.name} className="w-20 h-auto" />
                <div>{review.name}</div>
                <div>Delivered on {review.deliveredDate}</div>
                <Link href="/order-details">View Order Details</Link>
                <button>Rate This Product</button>
                {/* add stars */}
              </div>
            ))}
          </main>
        </div>
      </div>
    );
};

export default PendingReviews;
