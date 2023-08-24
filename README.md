# E-commerce

This platform is designed to provide a seamless shopping experience. The client side is powered by React with a beautiful UI crafted using TailwindCSS and its associated components. Routing is managed by react-router, and global state management by redux and react-redux.

The server side is built using Express and is connected to a MongoDB database through Mongoose. Authentication is managed using JWT and Passport.js, and payments are facilitated via Stripe.

## Prerequisites
Ensure you have the following installed on your machine:

Node.js (v14.x or newer)
MongoDB (v4.x or newer)
## Getting Started
### 1. Clone the repository:

```
git clone https://github.com/your-github-handle/e-commerce-project.git
```
### 2. Navigate to the project directory:
```
cd e-commerce-project
```

### 3. Install dependencies:

#### For the client:

```
cd client
npm install
```
#### For the server:
```
cd server
npm install
```

### Setting up environment variables:

For the server, inside the server directory, create a .env file with the following:

```
DATABASE_URI=mongodb://localhost:27017/yourdbname <br/>
JWT_SECRET=your_jwt_secret <br/>
STRIPE_SECRET_KEY=your_stripe_secret_key <br/>
```

### Running the project:

Server:
From the server directory:

```
npm run start
```

Client:
From the client directory:

```
npm start
```

### Features
1. User authentication using JWT & Passport. <br/>
2. Browse products, add to cart, and make purchases using Stripe. <br/>
3. Admin panel to manage products.<br/>
4. Responsive UI using TailwindCSS components.<br/>
5. Powerful state management using Redux.<br/>


### Project Structure





