# EcoSphere - Turning Ripples Into Great Growth with Every Response

EcoSphere is an interactive educational web platform designed to cultivate environmental awareness and positive habits among youth, particularly children and teenagers, through **gamification**. It encourages users to perform simple, daily eco-friendly actions and tracks their progress, transforming environmental care into a fun and rewarding experience.

## 🌟 Key Features

EcoSphere utilizes gamification to motivate users and provide a measurable sense of achievement for their positive environmental actions.

- **User Authentication (Login/Register):** Personal accounts to manage user-specific data.
- **User Dashboard:** Displays profile information, **level, total points**, and action progress.
- **Action List & Categories:** A comprehensive list of tangible eco-actions categorized (e.g., Save Energy, Reduce Plastic Waste).
- **Action Logging:** Users can mark completed actions to track their green habits.
- **Level and Point System:** Rewards for completing actions, contributing to user level-up.
- **Badges and Achievements:** Special rewards granted upon reaching specific milestones or action targets (e.g., **"Plastic Hero"**).
- **Education & Guides:** Informative section with tips and simple guides for a green lifestyle.
- **Responsive Design:** Optimized for comfortable viewing and use across desktop, tablet, and mobile devices.
- **Sphero Mascot:** An interactive mascot that provides guidance and motivation, especially during level-ups and badge acquisition.

## 🛠️ Technology Stack (Tech Stack)

EcoSphere is built using modern web technologies focusing on speed, interactivity, and ease of access.

| Component    | Technology                         | Description                                                                       |
| :----------- | :--------------------------------- | :-------------------------------------------------------------------------------- |
| **Frontend** | **React.js**                       | Used for building the user interface.                                             |
| **Styling**  | **Tailwind CSS** and **ShadCn UI** | For minimal, bright, and responsive design.                                       |
| **Backend**  | **Node.js** with **Express.js**    | Provides a stable server for data processing and logic.                           |
| **Database** | **MySQL**                          | Stores all application data, including user profiles, points, levels, and badges. |

## 🚀 Getting Started (Local Installation)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (Version 18.x or higher - LTS recommended)
- **MySQL** (Can be run via XAMPP or Laragon)
- **npm** (Installed with Node.js)
- **Code Editor** (e.g., VSCode)

### Installation Steps

1.  **Extract Project:** Ensure your project files (`backend/`, `frontend/`, `ecosphere.sql`) are extracted into one root folder.
2.  **Database Setup:**
    - Start your MySQL service.
    - Create a new database named **`ecosphere`**.
    - Import the **`ecosphere.sql`** file into the newly created `ecosphere` database.
    - _Note: Verify the tables (e.g., `users`, `actions`, `badges`) exist._
3.  **Backend Configuration:**
    - Navigate to the backend directory: `cd backend`
    - Install dependencies: `npm install`
    - **Configure Database:** Edit the connection details (user, password, database name) in the file `backend/db.js` to match your local MySQL settings.
4.  **Frontend Configuration:**
    - Return to the root directory: `cd ..`
    - Navigate to the frontend directory: `cd frontend`
    - Install dependencies: `npm install`

### Running the Application

1.  **Start Backend Server:**
    - Open a new terminal, navigate to `cd backend`.
    - Run the server: `npm run dev` (Server runs on `http://localhost:3000`).
2.  **Start Frontend Server:**
    - Open a _separate_ terminal, navigate to `cd frontend`.
    - Run the client: `npm run dev` (Client runs on **`http://localhost:5173`**).
3.  **Access EcoSphere:** Open your web browser and go to `http://localhost:5173/`.

## 🧪 Test Credentials

You can test the application using the following account:

- **Email:** `test_user@gmail.com`
- **Password:** `123456`

---

## 👨‍💻 Team

This project was developed by **Tim Omelo** for the **SINERGI FEST WEB DEVELOPMENT COMPETITION 2025** at **Universitas Sriwijaya**.

| Name                        | Role                |
| :-------------------------- | :------------------ |
| M. Rabyndra Janitra Binello | Front-End Developer |
| Fitran Husein               | Back-End Developer  |
| Monica Amrina Rosyada       | UX Designer         |

## 💡 Future Development

- Development of a native **Mobile Application** for easier access.
- Creating a community feature for users to motivate each other and share progress.
- Continuous updates with new actions, categories, and challenges.

> _"Perubahan dimulai dari dirimu. Mulai hari ini, mulai dari hal kecil."_
