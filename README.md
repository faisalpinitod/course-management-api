# Course Management API for LMS

## Project Description

This project is a RESTful API for a Course Management System within a Learning Management System (LMS). The API supports functionalities for user authentication, course management (CRUD operations), and progress tracking.

## Features

- User Authentication (Register, Login)
- Role-based Access Control (Students and Teachers)
- Course Management (Create, Read, Update, Delete)
- Lesson Management (Create, Read, Update, Delete)
- Enrollment Management (Enroll in courses)
- Progress Tracking (Update and View Progress)

## Technology Stack

- **Backend Framework**: Node.js with Express
- **Database**: MySQL
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

1. **Node.js**: Install from [Node.js official site](https://nodejs.org/).
2. **MySQL**: Install from [MySQL official site](https://www.mysql.com/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/course-management-api.git
   cd course-management-api

2. Install dependencies:
   ```sh
   npm install
   
3. Create a .env file in the root directory :
    ```sh
    PORT=3000
   
## API Endpoints

### Authentication

    Register: POST /auth/register
    Login: POST /auth/login

### Course Management

    Get All Courses: GET /courses
    Get Course by ID: GET /courses/:id
    Create Course: POST /courses (Teachers only)
    Update Course: PUT /courses/:id (Teachers only)
    Delete Course: DELETE /courses/:id (Teachers only)

### Lesson Management

    Get All Lessons: GET /lessons
    Get Lesson by ID: GET /lessons/:id
    Create Lesson: POST /lessons (Teachers only)
    Update Lesson: PUT /lessons/:id (Teachers only)
    Delete Lesson: DELETE /lessons/:id (Teachers only)

### Enrollment Management

    Enroll in a Course: POST /enrollments

### Progress Tracking

    Update Progress: POST /progress
    Get Progress by User: GET /progress/:userId
    Get Progress by Course: GET /progress/course/:courseId


    
This basic `README.md` provides an overview of the project, its features, the technology stack, prerequisites, installation instructions, and a summary of the available API endpoints. 
