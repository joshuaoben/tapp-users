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

git clone https://github.com/joshuaoben/tapp-users

cd tapp-users

2. Install Dependencies

npm install

3. Run the Development Server

npm run dev
# or
yarn dev
# or
npm dev
# or
bun dev

Then open http://localhost:3000 with your browser to see the result.


Project Overview
- /users – Displays a list of users in a table
- /users/[id] – View user details
- /create-user – Simulate user creation (UI only, no persistence)

This project follows Next.js 15 best practices
<img width="1254" height="1017" alt="Screenshot 2025-07-23 at 07 57 17" src="https://github.com/user-attachments/assets/8517fdfa-f75f-4530-9cc8-8cb78d1f59c8" />

<img width="1173" height="755" alt="Screenshot 2025-07-23 at 07 57 58" src="https://github.com/user-attachments/assets/225b7343-b7bd-4967-a2f9-c2f2f7d0d1a1" />

<img width="650" height="641" alt="Screenshot 2025-07-23 at 07 58 16" src="https://github.com/user-attachments/assets/c59dd6fe-95ca-4e60-83d5-e5a9c4cbceb3" />
