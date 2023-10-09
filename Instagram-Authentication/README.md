## INSTAGRAM AUTHENTICATION

It's authentication clone app of instagram app built with MERN Stack .

## Tech Stack

- **Client:** React JS , CSS

- **Server:** Node, Express , MongoDB .

- **Authentication :** JSON Web Tokens (JWT)

## API Endpoints

- `GET /getuser`: Checks if the user is authenticated.
- `POST /signup`: Handles user signup.
- `POST /login`: Handles user login.
- `GET /logout`: Handles user logout.

## Key Features:

- **User Authentication:** Users can signup, login, and logout from the application.

## Run Locally

Clone the project :

```bash
  git clone <repository-url>
```

Go to the project directory :

```bash
  cd instagram_authentication
```

## Running the App

1. Start the backend server:

```bash
  cd backend
```

Install the dependencies :

```bash
  npm install
```

To run this project, you will need to create an .env file and add the following environment variables to your .env file:

```
PORT=<server-port>
MONGODB_URI=<mongodb-connection-string>
CLIENT_URL=<client-side-url>
SECRET=<jwt-secret-key>

```

Launch the server :

```bash
  npm start
```

2. Start the frontend server:

```bash
   cd client
```

Install the dependencies :

```bash
  npm install
```

Launch the server :

```bash
  npm run start
```

3. Access the app in your web browser:

Open a web browser and access the application at `http://localhost:3000`
