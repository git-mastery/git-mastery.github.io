import { ArrowRight, GitBranch } from "lucide-react";

export function AvailableTours() {
  return (
    <div className="py-16 px-8 bg-neutral-50" id="tours">
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

  )
}
