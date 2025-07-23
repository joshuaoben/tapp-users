This is a simple User Management dashboard built with NextJS 15 by Joshua Olonade for the purpose of the Frontend Developer role at Tapp World.

Below is a guide on how to setup the project on your machine. 

##  Features

- Built with **Next.js 15 App Router**
- API integration with `jsonplaceholder.typicode.com`
- Client-side navigation with dynamic routes (`/users/[id]`)
- Form to simulate user creation
- Basic styling with TailwindCSS
- Clean separation of Server and Client Components with 2 different approaches (one shown with /users, and the other with /user/id)

## Getting Started

1. Clone the Repository

git clone https://github.com/joshuaoben/tapp-world

cd tapp-users

2. Install Dependencies

npm install

3. Run the Development Server

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Then open http://localhost:3000 with your browser to see the result.


Project Overview
    /users – Displays a list of users in a table
	/users/[id] – View user details
	/create-user – Simulate user creation (UI only, no persistence)

This project follows Next.js 15 best practices