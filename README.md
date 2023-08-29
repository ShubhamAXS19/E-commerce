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

### 4. Setting up environment variables:

For the server, inside the server directory, create a .env file with the following:

```
DATABASE_URI=mongodb://localhost:27017/yourdbname <br/>
JWT_SECRET=your_jwt_secret <br/>
STRIPE_SECRET_KEY=your_stripe_secret_key <br/>
```

### 5. Running the project:

Server:
From the server directory:

```
npm run start
```
Visit <br/>
```
http://localhost:8080
```

### 6. For Documentation
Visit <br/>

```
http://localhost:8080/docs
```

### 7. Features
1. User authentication using JWT & Passport. <br/>
2. Browse products, add to cart, and make purchases using Stripe. <br/>
3. Admin panel to manage products.<br/>
4. Responsive UI using TailwindCSS components.<br/>
5. Powerful state management using Redux.<br/>


### 8. Project Structure
Server <br/>
| --> controllers <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp; &nbsp;  | --> Auth.js <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> brand.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> cart.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> category.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> order.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> product.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> user.js <br/>
| --> models<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp; &nbsp;  | --> Auth.js <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> brand.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> cart.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> category.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> order.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> product.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> user.js <br/>
| --> routes <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp; &nbsp;  | --> Auth.js <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> brand.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> cart.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> category.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> order.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp;  | --> product.js<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; | --> user.js <br/>
| --> package.json<br/>
| --> package-lock.json<br/>

Client <br/>
| --> public  <br/>
| --> src <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; --> app <br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; --> pages<br/>
|&nbsp;   &nbsp;   &nbsp;  &nbsp;  &nbsp; --> features<br/>
| --> package.json<br/> <br/>
| --> package-lock.json<br/>


### 9.Images of App

1. Login <br/> 
<img width="1440" alt="Screenshot 2023-08-25 at 10 51 25 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/2ac43847-ad50-4859-a01c-08025b35be8b">
2. SignUp <br/> 
<img width="1440" alt="Screenshot 2023-08-25 at 10 51 43 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/a94c87e4-4500-4bf8-9532-2d15fbaf12bb">
3. All Products <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 52 09 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/55de6c0c-34fe-4433-b7b0-dae8415477ef">
4. Category Filter <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 52 21 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/422291d6-7433-4b95-9d7a-ad97f3eec14c">
5. Brand Filter <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 52 45 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/149fae66-9e0b-476a-bbd9-f1a0347d3386">
6. Cart <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 52 57 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/ed62d9d2-fc72-4181-9044-a15849295f31">
7. Checkout <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 53 06 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/f1b7188c-3f9b-4572-bb77-f51a78273a83">
8. Sort <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 54 00 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/d948827e-ee0f-4ebb-90a0-ba07379980c1">
9. Pagination <br/>
<img width="1440" alt="Screenshot 2023-08-25 at 10 55 15 PM" src="https://github.com/ShubhamAXS19/E-commerce/assets/80101565/ad9601bb-17a0-4198-9177-e26ca4f416a2">



