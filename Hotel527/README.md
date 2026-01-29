# Hotel527 Project

Hotel527 is a hotel management system built using Angular for the frontend and Spring Boot for the backend, with a Supabase database for data storage. This project is designed to be deployed serverlessly on Vercel.

## Project Structure

```
Hotel527
├── client                # Angular frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components # Angular components for UI
│   │   │   ├── services   # Angular services for business logic
│   │   │   └── app.module.ts # Root module of the Angular application
│   │   └── environments
│   │       ├── environment.ts     # Development environment settings
│   │       └── environment.prod.ts # Production environment settings
│   ├── angular.json      # Angular CLI configuration
│   ├── package.json      # npm configuration
│   └── tsconfig.json     # TypeScript configuration
├── server                # Spring Boot backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── hotel527
│   │   │   │           ├── Hotel527Application.java # Entry point of the Spring Boot application
│   │   │   │           ├── controller              # Controllers for handling requests
│   │   │   │           ├── model                   # Model classes for data structures
│   │   │   │           └── service                 # Service classes for business logic
│   │   │   └── resources
│   │   │       └── application.properties # Configuration properties for Spring Boot
│   ├── pom.xml          # Maven configuration
│   └── README.md        # Server-side documentation
├── supabase             # Supabase database setup
│   ├── schema.sql       # SQL schema for the database
│   └── README.md        # Supabase documentation
├── vercel.json          # Vercel deployment configuration
└── README.md            # General project documentation
```

## Features

- User-friendly interface for managing hotel bookings and room listings.
- RESTful API for handling backend operations.
- Integration with Supabase for database management.
- Serverless deployment capabilities on Vercel.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd Hotel527
   ```

2. **Frontend Setup:**
   - Navigate to the `client` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Run the Angular application:
     ```
     ng serve
     ```

3. **Backend Setup:**
   - Navigate to the `server` directory.
   - Build the Spring Boot application:
     ```
     mvn clean install
     ```
   - Run the application:
     ```
     mvn spring-boot:run
     ```

4. **Database Setup:**
   - Use the `schema.sql` file in the `supabase` directory to initialize your Supabase database.

5. **Deployment:**
   - Configure the `vercel.json` file for deployment settings.
   - Deploy the application on Vercel.

## Usage

- Access the frontend application through the specified port (default: `http://localhost:4200`).
- Use the API endpoints provided by the Spring Boot backend for data operations.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.