# SCPI Simulator

This project is an SCPI investment simulator application, developed with Laravel, React, and Docker.

## Prerequisites

-   **Docker**: Make sure Docker is installed on your machine.
-   **Composer**: If you want to manually install PHP dependencies.
-   **Node.js**: If you want to manually install JavaScript dependencies.

## Installation and Launch

### 1. Clone the Project

Clone the GitHub repository and navigate to the project directory:

```bash
git clone https://github.com/Duchemin-tony/simulateur-scpi
cd simulateur-scpi
```

### 2. Launch the Project with Docker

For a quick setup and one-command launch, Docker is recommended.

Run the following command:

```bash
docker-compose up --build -d
```

This will:

1. Build the Docker image.
2. Install dependencies.
3. Generate the application key.
4. Run the migrations.

The application will be accessible at [http://localhost:8000](http://localhost:8000).

### 4. Access the Application

After starting the project with Docker, open your browser and go to the following URL:

[http://localhost:8000](http://localhost:8000)

## Main Dependencies

-   **Laravel**: PHP framework for the backend.
-   **Inertia.js**: Facilitates communication between Laravel and React.
-   **React**: Used for creating the user interface.
-   **Tailwind CSS**: CSS framework for styling.
-   **SQLite**: Database used for storage.

## Useful Commands

-   **Stop Containers**: `docker compose down`
-   **Rebuild**: `docker compose up --build -d`
