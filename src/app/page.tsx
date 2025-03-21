"use client";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState<string>("");

  const fetchJoke = async () => {
    const jokes = [
      "Adamın biri lavaboya gitmiş, geri dönerken kaybolmuş!",
      "İki balık kavga ediyormuş, biri diğerine: 'Sen çok daldın!' demiş.",
      "Bir matematik kitabı neden üzgündü? Çünkü çok problemi vardı!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">Fıkra Anlatan LLM 🤖</h1>
      <button
        onClick={fetchJoke}
        className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg hover:bg-yellow-500 transition text-lg"
      >
        Fıkra Anlat!
      </button>
      {joke && (
        <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-md max-w-lg text-center">
          {joke}
        </div>
      )}
    </div>
  );
}
