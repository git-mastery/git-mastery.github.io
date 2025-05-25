import { useState } from "react";

export function Faq() {
  const [expandedFaq, setExpandedFaq] = useState<number>();

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? undefined : index);
  };

  const faqs = [
    {
      question: "Do I need to sign up to use git-mastery?",
      answer: "No registration or sign-up is required. You only need a GitHub account to track your submissions and receive feedback on your problem sets."
    },
    {
      question: "Is git-mastery free to use?",
      answer: "Yes, git-mastery is completely free and will remain free forever. Our platform is built with free tools and open-source software."
    },
    {
      question: "How do I get started with git-mastery?",
      answer: "Start by following our setup guide, then choose a Tour that interests you. Each Tour will guide you through a series of Lessons with practical applications of Git concepts."
    },
    {
      question: "How is my progress tracked?",
      answer: "Your progress is tracked through GitHub. Each problem set submission creates a pull request where you'll receive feedback, and you can view your overall progress on our dashboard."
    }
  ];

  return (
    <div className="py-16 px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-lg text-neutral-600 mb-12">
          Have other questions?
          <a href="https://github.com/orgs/git-mastery/discussions/new?category=q-a" className="text-blue-800 hover:underline ml-1">
            Start a discussion
          </a>
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className={`transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              {expandedFaq === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
