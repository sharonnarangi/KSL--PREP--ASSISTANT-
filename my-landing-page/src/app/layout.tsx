export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        KSL Prep Assistant
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Your companion for excelling in the Kenya School of Law and Undergraduate LLB journey.
        Practice questions, study guides, and smart tools — all in one place.
      </p>
      <div className="flex gap-4">
        <a
          href="#features"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Explore Features
        </a>
        <a
          href="#get-started"
          className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
        >
          Get Started
        </a>
      </div>
    </main>
  )
}
