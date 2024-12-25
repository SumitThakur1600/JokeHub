import React, {useState, useEffect} from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentJoke, setCurrentJoke] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((res) => {
        console.log(res.data.data);
        setJokes(res.data.data);
        setCurrentJoke(res.data.data[0]); // Start with the first joke
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  const getNewJoke = () => {
    const nextIndex = (currentIndex + 1) % jokes.length; // Increment index and loop back to the start
    setCurrentIndex(nextIndex);
    setCurrentJoke(jokes[nextIndex]);
  };

  const speakJoke = (joke) => {
    const speech = new SpeechSynthesisUtterance(joke.jokeContent);
    speech.lang = "hi-IN";

    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");

    if (hindiVoice) {
      speech.voice = hindiVoice;
    }

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F4F7FB] text-black">
      <header className="bg-[#213555] text-white text-center py-6 shadow-xl">
        <h1 className="text-5xl font-bold">JokeHub</h1>
        <p className="text-lg text-[#A3B9C9] mt-2">Your daily dose of humor!</p>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-[#A3B9C9]">
          <h2 className="text-3xl font-semibold text-center text-black mb-6">
            Your Daily Joke
          </h2>

          {currentJoke ? (
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <p className="text-gray-700 mt-4">{currentJoke.jokeContent}</p>
              <p className="text-gray-600 text-sm mt-2">
                - {currentJoke.created_by}
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-600">No joke available!</p>
          )}

          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={getNewJoke}
              className="bg-[#213555] text-white p-3 rounded-lg shadow-md hover:bg-[#A3B9C9] transition duration-300"
            >
              Get Next Joke
            </button>

            <button
              onClick={() => currentJoke && speakJoke(currentJoke)}
              className="bg-white text-black p-3 rounded-lg shadow-md hover:bg-[#A3B9C9] transition duration-300"
              disabled={!currentJoke}
            >
              Speak Joke
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#213555] text-white text-center py-4">
        <p className="text-[#A3B9C9]">
          &copy; 2024 JokeHub - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
