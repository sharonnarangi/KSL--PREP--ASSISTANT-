import Flashcard from "./components/Flashcard";  // ✅ import moved to top

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to KSL Prep Assistant
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Your AI-powered study companion for KSL preparation.  
        Practice questions, flashcards, and curriculum support all in one place.
      </p>

      <Flashcard
        question="What case defined preliminary objection in Kenya?"
        answer="Mukisa Biscuit Manufacturing Co. v West End Distributors [1969] EA 696"
      />
    </main>
  );
}

