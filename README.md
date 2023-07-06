# Next.js TypeScript JWT Mongoose Template

This project is a template for building a web application using Next.js, TypeScript, JSON Web Tokens (JWT), and MongoDB with Mongoose.

## Features

-   User authentication using JWT
-   User registration and login
-   Protected routes
-   MongoDB integration with Mongoose
-   Example API endpoints
-   Frontend built with Next.js and React
-   Backend server using Next.js API routes

## Installation

1. Clone the repository: `git clone https://github.com/Shriansh2002/nextjs-ts-jwt-mongoose`
2. Navigate to the project directory: `cd nextjs-ts-jwt-mongoose`
3. Install the dependencies: `yarn`

## Configuration

1. Rename `.env.example` file to `.env` and update the configuration variables:
    - `MONGO_URI`: MongoDB connection URL
    - `TOKEN_SECRET`: Secret key for JWT authentication

## Running the Application

1. Start the development server: `yarn dev`
2. Open the application in your browser: `http://localhost:3000`

## Technologies Used

-   Next.js
-   TypeScript
-   Tailwind CSS
-   Axios
-   Bcrypt
-   JSON Web Token
-   React Hot Toast
-   Mongoose

## Folder Structure

    ├── public/                 # Static files
    ├── src/                    # All Source Files
    │    ├── app/               # Next.js app
    │    │     ├── api/         # Next.js API routes
    │    │     ├── login/       # Login page
    │    │     ├── signup/      # Signup page
    │    ├── favicon.ico        # Favicon
    │    ├── globals.css        # CSS
    │    ├── layout.tsx         # Layout component
    │    ├── page.tsx           # Home Page
    │    ├── pages/             # Next.js pages
    │    ├── components/        # Reusable components
    │    ├── dbConfig/          # MongoDB connection
    │    ├── helpers/           # Helper functions
    │    ├── models/            # Mongoose models
    │    ├── middleware.ts      # Middleware functions
    ├── .env.example            # Environment variables
    └── ...

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
