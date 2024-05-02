import React from 'react';
<<<<<<< HEAD:src/pages/Buyers/Aacount/PendingReviews.jsx
import {Link} from 'react-router-dom';
=======
import AccountNavigation from "../../components/AccountNavigation/AccountNavigation";
>>>>>>> bcc162946a4691bbd089cbaecc2b4120c61d4d95:src/pages/Buyers/ReviewPage.jsx

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
<<<<<<< HEAD:src/pages/Buyers/Aacount/PendingReviews.jsx
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
=======
      
        <div className="flex-grow flex bg-[#F5F5F9] min-h-screen items-start">
          <AccountNavigation />
          <main className="bg-white grow m-4 lg:m-10 p-2 lg:p-8 flex flex-col">
            <h2 className='text-2xl leading-10 font-semibold text-center pb-6'>Pending reviews</h2>
            {reviewsData.map((review) => (
              // Desktop Version
                <div key={review.id} className="hidden 2xl:self-stretch 2xl:mx-auto 2xl:max-w-[800px] lg:flex border-solid border-[#938F96] border rounded-md mt-6 justify-between gap-6 min-h-min max-h-[260px] p-3 items-stretch">
                  <div className='w-[271px]'>
                    <img src={review.imageUrl} alt={review.name} className="object-cover w-full max-h-full rounded-md" />
                  </div>
                  <div className='flex flex-col justify-between gap-4'>
                    <div className='flex flex-col justify-between gap-1'>
                      <div className='text-xl font-bold'>{review.name}</div>
                      <div className='text-base'>Delivered on {review.deliveredDate}</div>
                      <a href="/order-details" className='text-[#09618E] text-[13px] '>View Order Details</a>
                    </div>
                    <button className='max-w-min whitespace-nowrap bg-[#EEC643] rounded-md text-[#48464C] px-4 py-2'>Rate This Product</button>
                  </div>
                  <div className=''>
                    *****
                  </div>
              </div>
            ))}
            {reviewsData.map((review) => (
              <div className='flex lg:hidden flex-col border-sold border-[#E6E0E9] border rounded-md p-2 mb-4 gap-4'>
                <div className='flex gap-4'>
                  <div className='max-w-[100px]'>
                    <img src={review.imageUrl} alt={review.name} className="object-cover rounded-md min-h-[128px]" />
                  </div>
                  <div className='flex flex-col'>
                    <div>*****</div>
                    <div className='flex flex-col'>
                      <div className='text-xl font-bold'>{review.name}</div>
                      <div className='text-base'>Delivered on {review.deliveredDate}</div>
                      <a href="/order-details" className='text-[#09618E] text-[13px] '>View Order Details</a>
                    </div>
                  </div>
                </div>
                <button className='self-center max-w-min whitespace-nowrap bg-[#EEC643] rounded-md text-[#48464C] px-4 py-2'>Rate this button</button>
>>>>>>> bcc162946a4691bbd089cbaecc2b4120c61d4d95:src/pages/Buyers/ReviewPage.jsx
              </div>
            ))}
          </main>
        </div>
<<<<<<< HEAD:src/pages/Buyers/Aacount/PendingReviews.jsx
      </div>
=======
>>>>>>> bcc162946a4691bbd089cbaecc2b4120c61d4d95:src/pages/Buyers/ReviewPage.jsx
    );
};

export default PendingReviews;
