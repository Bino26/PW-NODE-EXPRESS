## Authentication with Express

## Tech Stack

**Client:** React JS, Tailwind CSS

**Server:** Node, Express , MongoDB .

## API Endpoints

`/signup` : Create a new user account by providing the required information (name, email, password)

`/signin` : Authenticate a user by providing the username and password

`/user` : Get Information about user 

`/logout` : Logout the currently authenticated user

## Key Features:

- User Signup: Allow users to create an account with their name, username, email, password, and bio.
- User Login: Authenticate users using their credentials. Upon successful login, redirect to the home page.
- User Logout: Allow users to log out of their account.
  Protected Home Page: Display user details on the home page. Access to the home page is protected, requiring authentication.
- Forgot Password : Help user to update his password when he forgot it .

## Run Locally

Clone the project :

```bash
  git clone <repository-url>
```

Go to the project directory :

```bash
  cd AUTH_WITH_EXPRESS
```

## Environment Variables

To run this project, you will need to create an .env file and add the following environment variables to your .env file:

```
PORT=<server-port>
MONGO_URL=<mongodb-connection-string>
CLIENT_URL=<client-side-url>
SECRET=<jwt-secret-key>

```

## Install dependencies

Open the server-side folder and install the dependencies :

```bash
  npm install
```

After this , do the same for client-side folder (use the same comand).

## Running the App

Now , running our app .

Start the server-side development server:

```bash
  npm run start
```

Start the client-side development server:

```bash
  npm run start
```

Open a web browser and access the application at `http://localhost:3000`

Feel free to customize and enhance the project according to your needs and send pull requests.

## Screenshoots

- `/signup`

  
    ![SignUp](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/5957350d-8fbe-4ce0-9343-bfc4cff214fb)
  


- `/signin`

  
     ![SignIn](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/866c2ee6-273d-45e2-93eb-9c9bed2475cd)
  

- `/user`

  

     ![GetUser](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/250b6a13-a160-453d-a5a1-5225240685d9)
  

- `/forgot_password`

  
     ![ForgotPassword](https://github.com/Bino26/PW-NODE-EXPRESS/assets/81714858/7209d6c5-788a-43f2-abca-9bdae53a0de3)

  
  
