## INSTAGRAM AUTHENTICATION

It's authentication clone app of instagram app built with MERN Stack .

## Screenshoots

- `/signup`
  
![:signup](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/9d69b57b-6ce3-4e92-beb2-3ee0050e88b0)

- `/login`
  
  ![:login](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/58678035-e32c-42b9-950c-4e26010d4ea1)

- `/getuser`
  
![:getuser](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/76d868ed-8507-4769-a8a7-351e9e985d6a)
  

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
