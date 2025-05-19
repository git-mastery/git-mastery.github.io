import { useState } from 'react';

import { ArrowRight, BookOpen, CheckCircle, Code, GitBranch } from 'lucide-react';

export default function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white flex justify-between items-center py-6 px-8 border-b border-neutral-200 z-10">
        <p className="font-bold text-2xl">git-mastery</p>
        <nav className="hidden md:flex flex-row gap-8">
          <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#tours">Tours</a>
          <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#structure">How It Works</a>
          <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#problems">Problem Sets</a>
          <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#faq">FAQ</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col gap-6 mx-auto justify-center items-center lg:w-3/4 w-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-white p-4 rounded-full shadow-md">
                <GitBranch size={48} className="text-blue-800" />
              </div>
              <h1 className="font-bold text-5xl md:text-6xl text-center">git-mastery</h1>
            </div>
            <p className="text-xl text-neutral-700 text-center">
              Master Git through hands-on, guided Tours with real-world scenarios.
              Learn, practice, and receive feedback on your journey to Git proficiency.
            </p>
            <div className="flex md:flex-row flex-col gap-4 mt-4">
              <a className="px-8 py-3 font-bold bg-blue-800 text-white text-lg rounded-full border-2 border-blue-800 hover:bg-blue-900 transition duration-300 flex items-center gap-2 justify-center"
                href="https://git-mastery.github.io/learning-lab">
                Start Learning <ArrowRight size={18} />
              </a>
              <a className="px-8 py-3 font-bold bg-transparent text-blue-800 text-lg rounded-full border-2 border-blue-800 hover:bg-blue-50 transition duration-300 flex items-center gap-2 justify-center"
                href="#structure">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How Git-Mastery Works */}
      <div className="py-16 px-8" id="structure">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">How Git-Mastery Works</h2>
          <p className="text-center text-lg text-neutral-600 mb-12">Our unique learning structure helps you build real-world Git skills</p>

          {/* Structure Visualization */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Tours */}
            <div className="flex-1 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-800 rounded-full p-2">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Tours</h3>
              </div>
              <p className="mb-4">Collections of lessons working toward practical goals like "creating project snapshots" or "collaborating with a team."</p>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Fundamentals of Git</li>
                  <li>Collaborative Workflows</li>
                  <li>Advanced Branching Strategies</li>
                </ul>
              </div>
            </div>

            {/* Lessons */}
            <div className="flex-1 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-600 rounded-full p-2">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Lessons</h3>
              </div>
              <p className="mb-4">Modular content within each Tour that teaches specific Git concepts and builds toward the Tour's goal.</p>
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <p className="font-semibold">Examples:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Understanding Commit History</li>
                  <li>Working with Remote Repositories</li>
                  <li>Resolving Merge Conflicts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Components */}
          <h3 className="text-2xl font-bold text-center mb-6">Each Lesson Contains:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
              <h4 className="font-bold text-lg mb-2 text-blue-800">Hands-On Practice</h4>
              <p>Interactive exercises where you can immediately apply the concepts you've learned in the lesson.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
              <h4 className="font-bold text-lg mb-2 text-emerald-600">Problem Sets</h4>
              <p>Realistic scenarios to solve on your local machine, with remote feedback to improve your skills.</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
              <h4 className="font-bold text-lg mb-2 text-purple-700">Detours</h4>
              <p>Optional content that explores related topics to enhance your understanding of Git concepts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Flow Chart */}
      <div className="py-16 px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">Your Learning Journey</h2>
          <p className="text-center text-lg text-neutral-600 mb-12">Follow this path to Git mastery</p>

          <div className="relative">
            {/* Flow Chart */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-blue-300 -translate-x-1/2 z-0"></div>

            <div className="relative z-10 space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">1. Setup git-mastery</h3>
                    <p>Follow our simple setup guide to prepare your local environment for git-mastery.</p>
                    <a href="https://git-mastery.github.io/learning-lab/setup" className="text-blue-800 font-semibold flex items-center gap-1 mt-3 hover:underline">
                      Setup Guide <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-end order-2 md:order-1">
                  <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start order-1 md:order-2">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">2. Choose a Tour</h3>
                    <p>Select a Tour based on your learning goals and current Git knowledge level.</p>
                    <a href="https://git-mastery.github.io/learning-lab" className="text-blue-800 font-semibold flex items-center gap-1 mt-3 hover:underline">
                      Browse Tours <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">3. Complete Lessons</h3>
                    <p>Work through each lesson in the Tour, applying concepts through hands-on practice.</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-end order-2 md:order-1">
                  <div className="bg-blue-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-start order-1 md:order-2">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">4. Solve Problem Sets</h3>
                    <p>Apply your knowledge to real-world scenarios and submit solutions for feedback.</p>
                    <a href="https://git-mastery.github.io/problems-directory" className="text-blue-800 font-semibold flex items-center gap-1 mt-3 hover:underline">
                      Problem Directory <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-end">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 md:max-w-md">
                    <h3 className="text-xl font-bold mb-2">5. Track Your Progress</h3>
                    <p>Monitor your learning journey and see which concepts you've mastered.</p>
                    <a href="https://git-mastery.github.io/progress-dashboard" className="text-blue-800 font-semibold flex items-center gap-1 mt-3 hover:underline">
                      Progress Dashboard <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="bg-emerald-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    <CheckCircle size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Tours Section */}
      <div className="py-16 px-8" id="tours">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">Available Tours</h2>
          <p className="text-center text-lg text-neutral-600 mb-12">Choose your learning path</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition duration-300">
              <div className="h-3 bg-blue-800"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch size={20} className="text-blue-800" />
                  <p className="text-sm font-medium text-blue-800">Fundamentals</p>
                </div>
                <h3 className="text-xl font-bold mb-2">Git Basics</h3>
                <p className="text-neutral-600 mb-4">Learn the core concepts of Git and how to create snapshots of your projects.</p>
                <div className="flex items-center gap-1 text-sm text-neutral-500 mb-4">
                  <span>5 Lessons</span>
                  <span>•</span>
                  <span>10 Problem Sets</span>
                </div>
                <a href="#" className="text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                  Start Tour <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition duration-300">
              <div className="h-3 bg-emerald-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch size={20} className="text-emerald-600" />
                  <p className="text-sm font-medium text-emerald-600">Collaboration</p>
                </div>
                <h3 className="text-xl font-bold mb-2">Team Workflows</h3>
                <p className="text-neutral-600 mb-4">Master collaborative Git workflows for seamless team development.</p>
                <div className="flex items-center gap-1 text-sm text-neutral-500 mb-4">
                  <span>4 Lessons</span>
                  <span>•</span>
                  <span>8 Problem Sets</span>
                </div>
                <a href="#" className="text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                  Start Tour <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition duration-300">
              <div className="h-3 bg-purple-700"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch size={20} className="text-purple-700" />
                  <p className="text-sm font-medium text-purple-700">Advanced</p>
                </div>
                <h3 className="text-xl font-bold mb-2">Git Power Tools</h3>
                <p className="text-neutral-600 mb-4">Explore advanced Git features and techniques for complex projects.</p>
                <div className="flex items-center gap-1 text-sm text-neutral-500 mb-4">
                  <span>6 Lessons</span>
                  <span>•</span>
                  <span>12 Problem Sets</span>
                </div>
                <a href="#" className="text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                  Start Tour <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a href="https://git-mastery.github.io/learning-lab" className="px-6 py-3 font-semibold bg-neutral-100 text-neutral-800 rounded-full hover:bg-neutral-200 transition duration-300">
              View All Tours
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-8 bg-neutral-50" id="faq">
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

      {/* Call to Action */}
      <div className="py-16 px-8 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to master Git?</h2>
          <p className="text-lg text-blue-100 mb-8">Start your guided journey to Git proficiency today with our free, hands-on learning platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="px-8 py-3 font-bold bg-white text-blue-800 text-lg rounded-full hover:bg-blue-50 transition duration-300"
              href="https://git-mastery.github.io/learning-lab/setup">
              Setup git-mastery
            </a>
            <a className="px-8 py-3 font-bold bg-transparent text-white text-lg rounded-full border-2 border-white hover:bg-blue-900 transition duration-300"
              href="https://github.com/git-mastery">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-t-neutral-200 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>git-mastery was made with ❤️ by Jiahao and Dr Damith</p>
          <div className="flex gap-6">
            <a className="text-blue-800 hover:underline" href="https://github.com/git-mastery">GitHub</a>
            <a className="text-blue-800 hover:underline" href="https://github.com/orgs/git-mastery/discussions">Discussions</a>
            <a className="text-blue-800 hover:underline" href="https://github.com/git-mastery/contribution-guide/blob/main/CONTRIBUTING.md">Contribute</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
