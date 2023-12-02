# Shop Online New York

_Supporting Our New York Neighborhoods Year-Round - SONNY_

## Deployed Project

## App Details

### Stack

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### User Types

## Setup Requirements

### Frontend

TBA

### Backend

TBA

## QA Test Cases

The following section provides a comprehensive list of tests that should be performed to ensure that all functions of the application are working as intended. It is split apart into the different app user types and the aspects of the apps that they use.

**QA prerequisites:**

- TBA (The authentication and environment variables of the application have not yet been implemented)

- _Notes_
  - The app was built for use on a desktop and responsive design for mobile/tablet.

---

### Super Administrator

A super admin user is for SONNY administrators to perform all CRUD functions within the app.

- Login to the app with a super admin account.
  - Verify that app is forwarded to the Home page.
  - Verify that "Shop Online New York Admin" appears in the header.

#### Products admin - Sellers

- Verify that the products table is empty and the page section loaded without issue.
- Click on the plus button to create a new product.
  - Verify that the new product was added to the list.
- Create two more products (to be used for later testing).

#### User admin - Buyers

- Click on the Register page link.
- Fill out form and click on the create account button to create a new buyer account.
- Verify that the new buyer is added to the table on the buyers page.
- Verify that the new buyer is directed to the home page.

#### User admin - Sellers

- Click on the Register page link.
- Fill out form and click on the create account button to create a new seller account.
- Verify that the new seller is added to the table on the sellers page.
- Verify that the new seller is directed to the seller dashboard.

#### User profile

- Click on the profile link.
- Update the user name.
  - Verify that the new name appears in the app.
- Logout from the app.

---

#### Products - Buyer

- Login to the app with a chapter admin account.
  - Verify that app is forwarded to the Courses page.
  - Verify that the member chapter name appears in the header.
  - Verify that the assigned chapter course (as created above) is visible for the user.
- Click on the course link.
  - Verify that the course materials appear on the table.
- Click on both of the course material links.
  - Verify that the links open in a new tab/window in the browser.

#### Products - Seller

- Login to the app with a chapter admin account.
  - Verify that app is forwarded to the Courses page.
  - Verify that the member chapter name appears in the header.
  - Verify that the assigned chapter course (as created above) is visible for the user.
- Click on the course link.
  - Verify that the course materials appear on the table.
- Click on both of the course material links.
  - Verify that the links open in a new tab/window in the browser.

#### User profile

- Click on the profile link.
- Update the user email address.
- Logout from the app.

---

### Buyer User Flow

- Login to the app with a buyer account.
  - Verify that app is forwarded to the home page.
  - Verify that the buyer name appears in the header.
  - Verify that the featured products are visible for the user.
- Click on a product link.
  - Verify that app is forwarded to the products details page.
  - Verify that the product details are available.
- Click on reviews.
  - Verify that the reviews show in an abbreviated manner.
  - Verify that the links open in a new tab/window in the browser to see full reviews.
- Click on the add to cart button.
  - Verify that the cart shows a "1" on the cart icon.
  - Verify that the cart table shows the product object.
- Click on the cart icon.
  - Verify that app is forwarded to the cart page.
  - Verify that the cart shows the product added.
- Click on the checkout button.
  - Verify that app is forwarded to the checkout page.
  - Verify that payment details and shipping address details can be filled out and saved.
- Click on the place order button with incorrect payment details.
  - Verify that app shows the error alert saying "payment failed".
  - Verify that payment details shows errors where needed.
- Click on the place order button with correct payment details.
  - Verify that app is forwarded to the order details page.
  - Verify that app shows the confirmation alert saying "payment successful".
  - Verify that app shows tracking information.
- Logout of the app with a buyer account.
  - Verify that app is forwarded to the login page.

  ### Seller User Flow



#### User profile

- Click on the profile link.
- Update the user email address.
  - Verify that the new email address appears on screen in the app.
- Logout from the app.
---

### Testing Cleanup

-Login to the App with a super admin account.

#### Buyers

- Remove all Buyers created for testing.
  - Verify that all created Buyers, Carts, and Reviews does not show up on their respective tables.

#### Analytics

- Remove all analytics and feedback created for testing.
  - Verify that all created Reviews, Competitors, and other Analytic data does not show up on their respective tables.

#### Products

- Remove all Products created for testing.
  - Verify that all created Products do not show up on the product table.

#### Sellers

- Remove all Sellers created for testing.
  - Verify that all new Sellers do not show up on the user table.

#### Admin

- Click on the Admin link.
- Delete all admins created for testing (do NOT delete the account being used for cleanup).
  - Verify that the user is no longer on the super admin table and not in Authentication.
- Delete all product types created for testing.
- Click on the profile page.
- Logout from the app.
- _(Optional)_
  - If the super admin account is no longer needed, go to Authentication and delete the super admin account used for testing.