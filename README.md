# Mini-LinkedIn Community Platform

## Project Overview
This project is a full-stack web application that mimics the core functionalities of a professional social media platform like LinkedIn. It serves as a showcase of modern web development skills, integrating a robust backend with a dynamic and responsive frontend.

## Key Features
* **User Authentication:** Secure user registration and login with email and password.
* **Public Post Feed:** A public feed where all users can view posts from others in chronological order.
* **Create Posts:** Authenticated users can create new text-only posts.
* **User Profiles:** Each user has a profile page that displays their personal information and all the posts they have created.

## Technology Stack
* **Frontend:** React, React Router, Axios
* **Backend:** Node.js, Express.js
* **Database:** MySQL with Sequelize ORM
* **Authentication:** JSON Web Tokens (JWT) and BCrypt.js

## Setup and Installation

### Prerequisites
* Node.js and npm installed
* A running MySQL server

### Backend Setup
1.  Navigate to the project root directory:
    ```bash
    cd mini-linkedin
    ```
2.  Install the backend dependencies:
    ```bash
    npm install
    ```
3.  Create a MySQL database named `mini_linkedin`. You can do this from the MySQL command line client:
    ```sql
    CREATE DATABASE mini_linkedin;
    ```
4.  Create a `.env` file in the root directory and add your database credentials:
    ```
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=mini_linkedin
    JWT_SECRET=your_jwt_secret
    ```
5.  Start the backend server:
    ```bash
    node server.js
    ```

### Frontend Setup
1.  Navigate into the `client` directory:
    ```bash
    cd client
    ```
2.  Install the frontend dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm start
    ```

## Usage
* Open your browser and navigate to `http://localhost:3000`.
* The application's backend runs on `http://localhost:5000`.

## Demo User
* **Email:** demo@example.com
* **Password:** password123

*(You may need to register this user first before using these credentials.)*

## Deployment
* The backend can be deployed to services like Render or Heroku.
* The frontend can be deployed to services like Vercel or Netlify.
* Remember to update the `axios` base URL in the frontend code after deployment.
