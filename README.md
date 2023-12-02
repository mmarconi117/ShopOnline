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

- TBA

### Buyer

- TBA

### Seller

- TBA

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