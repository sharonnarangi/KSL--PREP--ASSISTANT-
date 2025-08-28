type FlashcardProps = {
  question: string;
  answer: string;
};

export default function Flashcard({ question, answer }: FlashcardProps) {
  return (
    <div className="border rounded-lg p-6 shadow bg-white max-w-sm">
      <h2 className="font-semibold text-lg text-gray-800 mb-4">{question}</h2>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
