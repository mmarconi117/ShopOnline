import React from 'react';
import Footer from "../../components/Footer/Footer";
import AccountNavigation from "../../components/AccountNavigation/AccountNavigation";

const ReviewPage = () => {
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
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex">
          <aside className="w-64"> 
            <AccountNavigation />
          </aside>
          <main className="flex-grow">
            <h2>Pending reviews</h2>
            {reviewsData.map((review) => (
              <div key={review.id} className="mb-4">
                <img src={review.imageUrl} alt={review.name} className="w-20 h-auto" />
                <div>{review.name}</div>
                <div>Delivered on {review.deliveredDate}</div>
                <a href="/order-details">View Order Details</a>
                <button>Rate This Product</button>
                {/* add stars */}
              </div>
            ))}
          </main>
        </div>
        <Footer />
      </div>
    );
};

export default ReviewPage;
