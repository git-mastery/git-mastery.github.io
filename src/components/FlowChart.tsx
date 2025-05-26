import { ArrowRight, CheckCircle } from "lucide-react";

export function FlowChart() {
  return (
    <div className="py-16 px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Your Learning Journey</h2>
        <p className="text-center text-lg text-neutral-600 mb-12">Follow this path to Git mastery</p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-blue-300 -translate-x-1/2 z-0"></div>

          <div className="relative z-10 space-y-16">
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
  )
}
