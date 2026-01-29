# Hotel527 Server Documentation

## Overview
Hotel527 is a hotel management system built using Angular for the frontend and Spring Boot for the backend. This document provides instructions for setting up and running the server-side application.

## Prerequisites
- Java 11 or higher
- Maven 3.6 or higher
- An IDE (e.g., IntelliJ IDEA, Eclipse) for Java development

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Hotel527/server
   ```

2. **Build the Project**
   Use Maven to build the project:
   ```bash
   mvn clean install
   ```

3. **Configure Application Properties**
   Update the `src/main/resources/application.properties` file with your database connection settings and any other necessary configurations.

4. **Run the Application**
   You can run the application using the following command:
   ```bash
   mvn spring-boot:run
   ```

5. **Access the API**
   Once the application is running, you can access the API at `http://localhost:8080`.

## API Documentation
Refer to the controller classes in the `src/main/java/com/hotel527/controller` directory for details on available endpoints and their usage.

## Deployment
This application is prepared for serverless deployment on Vercel. Ensure that your configuration in `vercel.json` is set up correctly for deployment.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.