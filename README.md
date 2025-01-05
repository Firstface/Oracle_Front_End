### Frontend README.md

```markdown
# Frontend Application

## Project Overview

This is a frontend application for user interaction, implemented using React. Users can input the target amount and coin denominations to see the calculation results.

## Project Structure

. ├── Dockerfile ├── package.json ├── public │ └── index.html └── src └── index.js


## Build and Run

### Install Dependencies

1. Ensure you are in the project's root directory.
2. Run the following command to install project dependencies:

    ```sh
    npm install
    ```

### Local Development

1. Run the following command to start the development server:

    ```sh
    npm start
    ```

2. Your frontend application should now be accessible at `http://localhost:3000`.

## Using Docker

### Build Docker Image

1. Ensure you are in the project's root directory.
2. Run the following command to build the Docker image:

    ```sh
    docker build -t frontend-app .
    ```

### Run Docker Container

1. Run the following command to start the Docker container:

    ```sh
    docker run -p 80:80 frontend-app
    ```

2. Your frontend application should now be accessible at `http://localhost`.