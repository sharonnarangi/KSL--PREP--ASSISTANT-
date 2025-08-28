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
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
          Learn More
        </button>
      </div>
    </main>
  );
}
