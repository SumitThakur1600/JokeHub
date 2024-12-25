# JokeHub

**JokeHub** is a fun and interactive web application designed to bring a smile to your face. It fetches and displays jokes from a third-party jokes API and allows users to cycle through jokes, with an option to have the jokes read aloud using the browser's text-to-speech functionality. The app is built using modern web development tools and technologies.

---

## Features

- **Daily Dose of Humor**: Display a new joke on each load and easily navigate through a list of jokes.
- **Text-to-Speech Integration**: Enjoy jokes in a voice of your choice, including support for Hindi text-to-speech.
- **Responsive Design**: Optimized for use across devices with a clean and user-friendly interface.
- **API Integration**: Fetch jokes dynamically from the [Hindi Jokes API](https://hindi-jokes-api.onrender.com).
- **Backend Service**: A Node.js server with Express for managing API requests and enabling cross-origin access.

---

## Technologies Used

### Frontend:

- **React.js**: For building the dynamic user interface.
- **Axios**: For handling API requests.
- **Tailwind CSS**: (Optional, based on your usage) For responsive and modern styling.

### Backend:

- **Node.js**: Backend runtime environment.
- **Express.js**: Lightweight server framework.
- **Axios**: For fetching jokes from the third-party API.
- **Cors**: To enable cross-origin requests.

### APIs:

- [Hindi Jokes API](https://hindi-jokes-api.onrender.com): Provides jokes in Hindi.

---

### Setup

#### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   API_KEY=your-api-key-here
   PORT=3000
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

#### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## API Integration

The backend fetches jokes from the Hindi Jokes API:

- Endpoint: `https://hindi-jokes-api.onrender.com/jokes/50`
- Requires an API key passed via the `api_key` query parameter.
- The backend acts as a proxy to manage CORS and simplify frontend integration.

---

## Deployment

### Frontend

1. Build the frontend for production:
   ```bash
   npm run build
   ```
2. Deploy the `build` directory to platforms like **Vercel**, **Netlify**, or **Render**.

### Backend

Deploy the backend to platforms like **Render** or **Heroku**. Ensure the `.env` file is configured in the environment settings.

---

## Future Enhancements

- Add user authentication for personalized joke lists.
- Enable users to like or bookmark jokes.
- Support additional languages for jokes and text-to-speech.
- Implement a dark mode toggle for improved UX.

---

## Thanks

Thank you for checking out JokeHub! Your support and feedback mean a lot. If you enjoyed using the app or have suggestions for improvement, feel free to reach out or contribute to the project.

Happy coding and keep laughing! 😄
